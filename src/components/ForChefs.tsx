import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import AppStoreBadges from "@/components/AppStoreBadges";

const valueProps = [
  "AI-generated food photos — no photography needed",
  "Post listings when you're ready to cook",
  "Direct chat with your customers",
  "Get paid directly — no platform fees, ever",
];

export default function ForChefs() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="for-chefs" className="bg-warm-100 py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/70">
            For Chefs
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-primary tracking-tight leading-tight">
            Your kitchen.
            <br />
            Your business.
            <br />
            Zero commission.
          </h2>
          <p className="mt-5 text-text-secondary leading-relaxed">
            Turn your love of cooking into income. Create your menu, post
            listings when you're ready, and get orders from neighbors. We don't
            take a cut — every rupee goes to you.
          </p>

          <ul className="mt-6 space-y-3">
            {valueProps.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-text-primary">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <AppStoreBadges className="mt-8" />
        </motion.div>

        {/* Phone placeholder */}
        <motion.div
          initial={reduced ? false : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="w-[240px] h-[480px] md:w-[260px] md:h-[520px] rounded-[2.5rem] border-[6px] border-warm-300 bg-white shadow-xl overflow-hidden">
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6">
              <span className="text-5xl">👨‍🍳</span>
              <p className="text-sm font-semibold text-primary text-center">
                Tinmen Kitchen
              </p>
              <p className="text-xs text-text-secondary text-center">
                Manage your menu, post listings, and get orders
              </p>
              <div className="w-full space-y-2 mt-2">
                {[65, 80, 50].map((w, i) => (
                  <div
                    key={i}
                    className="h-8 rounded-lg bg-warm-100"
                    style={{ width: `${w}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
