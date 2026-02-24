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
    <SectionWrapper id="about" className="relative bg-warm-50 pt-32 md:pt-40 pb-24 md:pb-32 px-6">
      {/* Curve from For Delivery (primary) into this section */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16 block">
          <path d="M0,0 L1440,0 L1440,20 Q720,60 0,20 Z" fill="var(--color-primary)" />
        </svg>
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
          Our Mission
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary tracking-tight">
          Food made by people, for people
        </h2>
        <p className="mt-5 text-text-secondary leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
          Tinmen is a community platform. No restaurants, no ghost kitchens —
          real people cooking real food. Free to use, zero commission, not
          VC-backed, built by contributors who love good food.
        </p>
      </div>

      {/* Food image strip */}
      <div className="mt-14 max-w-4xl mx-auto">
        <div className="flex justify-center gap-4 md:gap-8">
          {[
            "/images/food/biryani.png",
            "/images/food/samosa.png",
            "/images/food/dal.png",
            "/images/food/naan.png",
            "/images/food/chai.png",
          ].map((src, i) => (
            <motion.div
              key={i}
              initial={reduced ? false : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md ring-2 ring-warm-200 hover:ring-primary/30 transition-all hover:scale-105"
            >
              <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: reduced ? 0 : 0.12 }}
        className="mt-16 max-w-5xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8"
      >
        {callouts.map((item, i) => (
          <motion.div
            key={i}
            variants={reduced ? undefined : cardVariants}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-2xl p-7 md:p-8 border border-warm-200 shadow-sm text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-text-primary">
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
