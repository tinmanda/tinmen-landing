import { useReducedMotion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { asset } from "@/utils/asset";

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

export default function FoodMarquee() {
  const reduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (reduced) return null;

  const repeat = isMobile ? 3 : 4;
  const items = Array.from({ length: FOODS.length * repeat }, (_, i) => FOODS[i % FOODS.length]);
  const N = items.length;
  const baseSize = isMobile ? 52 : 64;
  const sizeRange = isMobile ? 8 : 12;
  const amplitude = isMobile ? 80 : 120;
  const gap = isMobile ? "2rem" : "2.75rem";

  const renderSet = (setKey: string) => (
    <div className="flex items-center shrink-0" style={{ gap }}>
      {items.map((src, i) => {
        const p = i / N;
        const y = Math.sin(p * Math.PI * 4) * amplitude;
        const size = baseSize + Math.cos(p * Math.PI * 6) * sizeRange;
        const opacity = 0.08 + Math.abs(Math.cos(p * Math.PI * 4)) * 0.12;
        const rotate = Math.cos(p * Math.PI * 4) * 5;

        return (
          <div
            key={`${setKey}-${i}`}
            className="shrink-0 rounded-full overflow-hidden ring-1 ring-white/[0.06]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              transform: `translateY(${y}px) rotate(${rotate}deg)`,
            }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              loading="eager"
              draggable={false}
            />
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Edge fades for smooth appearance/disappearance */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-primary to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-primary-dark to-transparent z-10" />

      {/* Scrolling track — two identical sets for seamless infinite loop */}
      <div className="absolute top-1/2 left-0 flex food-marquee-track will-change-transform">
        {renderSet("a")}
        {renderSet("b")}
      </div>
    </div>
  );
}
