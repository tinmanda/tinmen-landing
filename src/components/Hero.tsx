import { motion, useReducedMotion } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";
import FoodMarquee from "@/components/FoodMarquee";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-primary min-h-[100dvh] flex items-center overflow-clip">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />

      {/* Curved food marquee — flows left-to-right behind all content */}
      <FoodMarquee />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 py-24 md:py-0 w-full grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-16 items-center">
        {/* Text column */}
        <motion.div
          variants={reduced ? undefined : containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.p
            variants={reduced ? undefined : itemVariants}
            className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4"
          >
            Home-cooked meals, delivered
          </motion.p>
          <motion.h1
            variants={reduced ? undefined : itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-white tracking-tight leading-[1.05]"
          >
            Real food from
            <br />
            <span className="text-warm-300">real kitchens</span>
          </motion.h1>
          <motion.p
            variants={reduced ? undefined : itemVariants}
            className="mt-6 text-base sm:text-lg text-white/60 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            Your neighbors are incredible cooks. Tinmen connects you with home
            chefs in your area for fresh, authentic meals — made with love,
            delivered to your door.
          </motion.p>
          <motion.div
            variants={reduced ? undefined : itemVariants}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <motion.a
              href="#apps"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-primary hover:bg-warm-100 transition-colors shadow-lg"
            >
              Get the App
            </motion.a>
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border-2 border-white/25 px-8 py-3.5 text-sm font-semibold text-white hover:border-white/50 hover:bg-white/5 transition-all"
            >
              See How It Works
            </motion.a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            variants={reduced ? undefined : itemVariants}
            className="mt-10 flex items-center gap-3 justify-center md:justify-start"
          >
            <div className="flex -space-x-2">
              {["MK", "PS", "AR", "LD"].map((initials, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white/10 border-2 border-primary flex items-center justify-center text-[10px] font-bold text-white/70"
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-xs text-white/40">
              Built by a community of contributors
            </p>
          </motion.div>
        </motion.div>

        {/* Phone mockup */}
        <div className="relative flex items-center justify-center">
          <PhoneMockup />
        </div>
      </div>

      {/* Bottom curve transition to next section */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M0,80 L0,40 Q720,0 1440,40 L1440,80 Z"
            fill="var(--color-warm-50)"
          />
        </svg>
      </div>
    </section>
  );
}
