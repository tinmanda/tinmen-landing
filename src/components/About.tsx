import { motion, useReducedMotion } from "framer-motion";
import { Heart, Users, Sparkles } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const callouts = [
  {
    icon: Heart,
    title: "Zero commission",
    description: "Chefs keep every rupee. No platform fees, no hidden charges.",
  },
  {
    icon: Users,
    title: "Community built",
    description:
      "An open project, built by contributors who believe in homemade food.",
  },
  {
    icon: Sparkles,
    title: "AI-powered",
    description:
      "Photos, interviews, and translations — all handled by AI so you don't have to.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="about" className="bg-warm-50 py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
          Food made by people, for people
        </h2>
        <p className="mt-5 text-text-secondary leading-relaxed max-w-2xl mx-auto">
          Tinmen is a community platform. No restaurants, no ghost kitchens —
          real people cooking real food. Free to use, zero commission, not
          VC-backed, built by contributors who love good food.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: reduced ? 0 : 0.12 }}
        className="mt-14 max-w-5xl mx-auto grid md:grid-cols-3 gap-6"
      >
        {callouts.map((item, i) => (
          <motion.div
            key={i}
            variants={reduced ? undefined : cardVariants}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-6 border border-warm-200 shadow-sm text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-base font-semibold text-text-primary">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
