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
 * Desktop: curve starts off-screen lower-left (below text), arcs up
 * through the center, and exits off-screen right.
 * The "virtual canvas" is 1440×900; anything outside 0–1440 in x
 * falls outside the container and is clipped by overflow:hidden.
 */
// y=0 is top, y=900 is bottom. The curve:
// starts at y≈810 (10% from bottom), dips to y=900 (bottom),
// rises to y=0 (top/peak near right edge of phone), then back to y≈180 (80% up).
const DESKTOP_PATH =
  "M -300,600 C -100,700 200,810 450,720 C 650,560 750,300 850,200 C 1000,130 1400,200 1800,550";
const DESKTOP_VB_W = 1440;
const DESKTOP_VB_H = 900;

const MOBILE_PATH =
  "M -80,410 C 0,440 100,450 220,410 C 350,340 480,120 630,30 C 700,10 780,40 900,100";
const MOBILE_VB_W = 750;
const MOBILE_VB_H = 500;

// Number of food plates on the curve — higher = denser, like Wispr's tight icon spacing
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

  const pathD = isMobile ? MOBILE_PATH : DESKTOP_PATH;
  const vbW = isMobile ? MOBILE_VB_W : DESKTOP_VB_W;
  const vbH = isMobile ? MOBILE_VB_H : DESKTOP_VB_H;
  const baseSize = isMobile ? 44 : 60;

  useEffect(() => {
    if (reduced) return;

    const pathEl = pathRef.current;
    const containerEl = containerRef.current;
    if (!pathEl || !containerEl) return;

    const totalLength = pathEl.getTotalLength();
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      const rect = containerEl.getBoundingClientRect();
      const scaleX = rect.width / vbW;
      const scaleY = rect.height / vbH;

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
  }, [reduced, isMobile, pathD, vbW, vbH]);

  if (reduced) return null;

  // Build plate array cycling through food images
  const plates = Array.from({ length: PLATE_COUNT }, (_, i) => FOODS[i % FOODS.length]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-primary-dark to-transparent z-10" />

      {/* Hidden SVG — only used for path.getPointAtLength() calculations */}
      <svg
        viewBox={`0 0 ${vbW} ${vbH}`}
        className="absolute"
        style={{ width: 1, height: 1, overflow: "hidden", opacity: 0 }}
        aria-hidden="true"
      >
        <path ref={pathRef} d={pathD} fill="none" />
      </svg>

      {/* Food plates — positioned by the animation loop */}
      {plates.map((src, i) => {
        // Vary size and opacity for a sense of depth
        const size = baseSize + ((i % 3) - 1) * 8;
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
