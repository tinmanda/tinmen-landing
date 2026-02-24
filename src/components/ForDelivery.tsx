import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import AppStoreBadges from "@/components/AppStoreBadges";

const valueProps = [
  "Quick AI-powered sign-up — no paperwork",
  "Choose your own hours and delivery zone",
  "Pick up from chefs, deliver to neighbors",
  "Track earnings in real time",
];

export default function ForDelivery() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper
      id="for-delivery"
      className="bg-primary py-20 md:py-28 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Phone placeholder */}
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center order-2 md:order-1"
        >
          <div className="w-[240px] h-[480px] md:w-[260px] md:h-[520px] rounded-[2.5rem] border-[6px] border-white/20 bg-white/10 backdrop-blur-sm shadow-xl overflow-hidden">
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
              <span className="text-5xl">🛵</span>
              <p className="text-sm font-semibold text-white text-center">
                Tinmen Delivery
              </p>
              <p className="text-xs text-white/60 text-center">
                Claim jobs, deliver meals, earn money
              </p>
              <div className="w-full space-y-2 mt-2">
                {[75, 55, 85].map((w, i) => (
                  <div
                    key={i}
                    className="h-8 rounded-lg bg-white/10"
                    style={{ width: `${w}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={reduced ? false : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="order-1 md:order-2"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-white/50">
            For Delivery
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Deliver meals.
            <br />
            Earn money.
            <br />
            Set your own hours.
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            Sign up in minutes with our AI voice interview — no paperwork. Pick
            zones that work for you, claim jobs when available, and earn
            delivering homemade food.
          </p>

          <ul className="mt-6 space-y-3">
            {valueProps.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-white/90"
              >
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-lime-400/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-lime-300" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <AppStoreBadges className="mt-8" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
