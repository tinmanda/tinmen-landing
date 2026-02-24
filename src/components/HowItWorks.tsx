import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Add your address",
    description:
      "Tell us where you are, and we'll find home chefs cooking near you.",
    image: "/images/food/thali.png",
  },
  {
    number: "02",
    title: "Browse today's meals",
    description:
      "See what's available right now — fresh biryani, dal, curries, and more from kitchens in your neighborhood.",
    image: "/images/food/biryani.png",
  },
  {
    number: "03",
    title: "Order and enjoy",
    description:
      "Place your order, track delivery in real time, and enjoy a homemade meal at your doorstep.",
    image: "/images/food/dosa.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HowItWorks() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="how-it-works" className="bg-warm-50 py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Simple as 1-2-3
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary tracking-tight">
            How it works
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto text-base">
            Getting homemade food delivered is as simple as 1-2-3.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: reduced ? 0 : 0.15 }}
          className="mt-16 grid md:grid-cols-3 gap-10 md:gap-12"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={reduced ? undefined : cardVariants}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Image circle */}
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 shadow-lg ring-4 ring-warm-100 group-hover:ring-primary/20 transition-all">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Step number */}
              <span className="text-xs font-bold text-primary/40 mb-2">
                {step.number}
              </span>

              <h3 className="text-lg font-bold text-text-primary">
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
