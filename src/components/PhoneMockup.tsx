import { motion, useReducedMotion } from "framer-motion";

export default function PhoneMockup({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {/* Phone frame */}
      <div className="relative mx-auto w-[240px] h-[480px] md:w-[280px] md:h-[560px] rounded-[2.5rem] border-[6px] border-warm-700 bg-warm-900 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-warm-700 rounded-b-2xl z-10" />

        {/* Screen content — placeholder app UI */}
        <div className="w-full h-full bg-warm-50 p-4 pt-8 flex flex-col gap-3">
          {/* Status bar placeholder */}
          <div className="flex justify-between items-center px-1 mb-1">
            <div className="w-8 h-2 rounded bg-warm-300" />
            <div className="flex gap-1">
              <div className="w-4 h-2 rounded bg-warm-300" />
              <div className="w-4 h-2 rounded bg-warm-300" />
            </div>
          </div>

          {/* Search bar placeholder */}
          <div className="w-full h-9 rounded-full bg-warm-200 flex items-center px-3 gap-2">
            <div className="w-4 h-4 rounded-full bg-warm-300" />
            <div className="w-24 h-2.5 rounded bg-warm-300" />
          </div>

          {/* Category chips */}
          <div className="flex gap-2 mt-1">
            <div className="h-7 w-16 rounded-full bg-primary/15" />
            <div className="h-7 w-20 rounded-full bg-warm-200" />
            <div className="h-7 w-14 rounded-full bg-warm-200" />
          </div>

          {/* Food cards */}
          <div className="flex-1 flex flex-col gap-2.5 mt-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-xl bg-white shadow-sm border border-warm-200 p-2.5 flex gap-2.5"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-lg">
                  {["🍛", "🥘", "🍲"][i]}
                </div>
                <div className="flex-1 flex flex-col justify-center gap-1.5">
                  <div
                    className="h-2.5 rounded bg-warm-300"
                    style={{ width: `${70 - i * 10}%` }}
                  />
                  <div
                    className="h-2 rounded bg-warm-200"
                    style={{ width: `${50 - i * 5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tab bar */}
          <div className="flex justify-around py-2 border-t border-warm-200">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div
                  className={`w-5 h-5 rounded-full ${
                    i === 0 ? "bg-primary/30" : "bg-warm-300"
                  }`}
                />
                <div className="w-6 h-1.5 rounded bg-warm-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
