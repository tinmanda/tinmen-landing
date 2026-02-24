import { useReducedMotion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { asset } from "@/utils/asset";
import { useRef, useEffect } from "react";

const FOODS = [
  "images/food/biryani.png",
  "images/food/dal.png",
  "images/food/samosa.png",
  "images/food/curry.png",
  "images/food/naan.png",
  "images/food/dosa.png",
  "images/food/idli.png",
  "images/food/chai.png",
  "images/food/thali.png",
].map(asset);

/*
 * Fixed curve in viewBox coordinates — the SVG path stays constant,
 * plates travel along it. Coordinates scale to the hero container via
 * a manual viewBox→screen mapping (like Wispr's GSAP MotionPathPlugin).
 *
 * Desktop only — hidden on mobile for a cleaner hero layout.
 *
 * Curve starts off-screen lower-left (below text), arcs up
 * through the center, and exits off-screen right.
 * The "virtual canvas" is 1440×900; anything outside 0–1440 in x
 * falls outside the container and is clipped by overflow:hidden.
 */
const PATH =
  "M -300,600 C -100,700 200,810 450,720 C 650,560 750,300 850,200 C 1000,130 1400,200 1800,550";
const VB_W = 1440;
const VB_H = 900;
const PLATE_COUNT = 24;
// Progress per millisecond — controls speed (lower = slower). ~40s per full cycle.
const SPEED = 0.000025;

export default function FoodMarquee() {
  const reduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const platesRef = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (reduced || isMobile) return;

    const pathEl = pathRef.current;
    const containerEl = containerRef.current;
    if (!pathEl || !containerEl) return;

    const totalLength = pathEl.getTotalLength();
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const rect = containerEl.getBoundingClientRect();
      const scaleX = rect.width / VB_W;
      const scaleY = rect.height / VB_H;

      for (let i = 0; i < PLATE_COUNT; i++) {
        const plate = platesRef.current[i];
        if (!plate) continue;

        // Evenly distribute plates along the path; advance over time
        const progress = ((elapsed * SPEED) + (i / PLATE_COUNT)) % 1;
        const point = pathEl.getPointAtLength(progress * totalLength);

        // Map viewBox coords → screen coords
        const x = point.x * scaleX;
        const y = point.y * scaleY;

        plate.style.transform = `translate(${x}px, ${y}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reduced, isMobile]);

  // Hidden on mobile and when reduced motion is preferred
  if (reduced || isMobile) return null;

  // Build plate array cycling through food images
  const plates = Array.from({ length: PLATE_COUNT }, (_, i) => FOODS[i % FOODS.length]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-primary-dark to-transparent z-10" />

      {/* Hidden SVG — only used for path.getPointAtLength() calculations */}
      <svg
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="absolute"
        style={{ width: 1, height: 1, overflow: "hidden", opacity: 0 }}
        aria-hidden="true"
      >
        <path ref={pathRef} d={PATH} fill="none" />
      </svg>

      {/* Food plates — positioned by the animation loop */}
      {plates.map((src, i) => {
        // Vary size and opacity for a sense of depth
        const size = 60 + ((i % 3) - 1) * 8;
        const opacity = 0.1 + (i % 4) * 0.03;

        return (
          <div
            key={i}
            ref={(el) => {
              platesRef.current[i] = el;
            }}
            className="absolute will-change-transform"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              // Center the plate on its path point
              marginLeft: `${-size / 2}px`,
              marginTop: `${-size / 2}px`,
            }}
          >
            <div
              className="w-full h-full rounded-full overflow-hidden ring-1 ring-white/[0.06]"
              style={{ opacity }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
                draggable={false}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
