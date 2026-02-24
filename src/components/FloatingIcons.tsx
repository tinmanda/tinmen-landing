import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const ICONS = ["🍛", "🍚", "🥘", "🍲", "🧆", "🥗", "🍱", "🫓", "🍜", "🫕"];

export default function FloatingIcons() {
  const reduced = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  // Pause when out of viewport for battery
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  if (reduced) return null;

  const count = isMobile ? 6 : ICONS.length;
  const icons = ICONS.slice(0, count);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden
    >
      {icons.map((icon, i) => {
        const angle = (360 / count) * i;
        const duration = 20 + Math.random() * 5;

        return (
          <motion.div
            key={i}
            className="orbit-icon absolute top-1/2 left-1/2"
            style={
              {
                "--start-angle": `${angle}deg`,
                animationDuration: `${duration}s`,
                animationPlayState: visible ? "running" : "paused",
              } as React.CSSProperties
            }
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
          >
            <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-sm text-lg md:text-xl shadow-lg">
              {icon}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
