import { motion, useReducedMotion } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";
import FloatingIcons from "@/components/FloatingIcons";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative bg-primary min-h-screen flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-0 w-full grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Text column */}
        <motion.div
          variants={reduced ? undefined : containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left z-10"
        >
          <motion.h1
            variants={reduced ? undefined : itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
          >
            Homemade food,
            <br />
            delivered fresh
          </motion.h1>
          <motion.p
            variants={reduced ? undefined : itemVariants}
            className="mt-6 text-base sm:text-lg text-white/75 max-w-lg mx-auto md:mx-0 leading-relaxed"
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
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary hover:bg-warm-100 transition-colors"
            >
              Get the App
            </motion.a>
            <motion.a
              href="#how-it-works"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border-2 border-white/40 px-7 py-3 text-sm font-semibold text-white hover:border-white/70 transition-colors"
            >
              See How It Works
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Phone + floating icons */}
        <div className="relative flex justify-center">
          <FloatingIcons />
          <PhoneMockup />
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20"
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
