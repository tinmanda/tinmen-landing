import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import AppStoreBadges from "@/components/AppStoreBadges";

const apps = [
  {
    emoji: "🍽️",
    name: "Tinmen",
    tagline: "For food lovers",
    description: "Browse homemade meals, order, track delivery, and chat with your chef.",
  },
  {
    emoji: "👨‍🍳",
    name: "Tinmen Kitchen",
    tagline: "For home chefs",
    description: "Create your menu, post listings, manage orders, and receive payments.",
  },
  {
    emoji: "🛵",
    name: "Tinmen Delivery",
    tagline: "For delivery people",
    description: "Sign up with AI interview, claim delivery jobs, and earn on your schedule.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Apps() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="apps" className="bg-warm-100 py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center tracking-tight">
          Get the apps
        </h2>
        <p className="mt-4 text-text-secondary text-center max-w-lg mx-auto">
          Three apps, one platform. Download the one that fits you.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: reduced ? 0 : 0.1 }}
          className="mt-14 grid md:grid-cols-3 gap-6"
        >
          {apps.map((app, i) => (
            <motion.div
              key={i}
              variants={reduced ? undefined : cardVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 border border-warm-200 shadow-sm flex flex-col"
            >
              <span className="text-4xl">{app.emoji}</span>
              <h3 className="mt-4 text-lg font-bold text-text-primary">
                {app.name}
              </h3>
              <span className="text-xs font-semibold text-primary/70 uppercase tracking-wide">
                {app.tagline}
              </span>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
                {app.description}
              </p>
              <AppStoreBadges className="mt-5" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
