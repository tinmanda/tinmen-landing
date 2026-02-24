import { motion, useReducedMotion } from "framer-motion";
import { MapPin, UtensilsCrossed, Truck } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const steps = [
  {
    icon: MapPin,
    title: "Add your address",
    description:
      "Tell us where you are, and we'll find home chefs cooking near you.",
  },
  {
    icon: UtensilsCrossed,
    title: "Browse today's meals",
    description:
      "See what's available right now — fresh biryani, dal, curries, and more from kitchens in your neighborhood.",
  },
  {
    icon: Truck,
    title: "Order and enjoy",
    description:
      "Place your order, track delivery in real time, and enjoy a homemade meal at your doorstep.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HowItWorks() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="how-it-works" className="bg-warm-50 py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center tracking-tight">
          How it works
        </h2>
        <p className="mt-4 text-text-secondary text-center max-w-xl mx-auto">
          Getting homemade food delivered is as simple as 1-2-3.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: reduced ? 0 : 0.15 }}
          className="mt-14 grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={reduced ? undefined : cardVariants}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
