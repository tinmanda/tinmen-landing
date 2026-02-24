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
    <SectionWrapper id="for-chefs" className="bg-warm-100 py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            For Chefs
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary tracking-tight leading-tight">
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

          <AppStoreBadges
            className="mt-8"
            app="kitchen"
          />
        </motion.div>

        {/* Phone mockup — matches tinmen-kitchen kitchen.tsx dashboard */}
        <motion.div
          initial={reduced ? false : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="w-[250px] h-[500px] md:w-[260px] md:h-[520px] rounded-[2.5rem] border-[6px] border-warm-300 bg-warm-50 shadow-xl overflow-hidden">
            <div className="w-full h-full flex flex-col">
              {/* Status bar spacer */}
              <div className="h-6" />

              {/* Greeting */}
              <div className="px-4 pb-2">
                <p className="text-[9px] text-text-secondary">Good morning</p>
                <p className="text-[14px] font-bold text-text-primary" style={{ letterSpacing: "-0.5px" }}>
                  Fatima's Kitchen
                </p>
              </div>

              {/* Stats row — matches kitchen.tsx 3-stat layout */}
              <div className="px-4 pb-2.5 grid grid-cols-3 gap-1.5">
                <div className="bg-white rounded-2xl p-2 text-center">
                  <p className="text-[14px] font-bold text-primary">12</p>
                  <p className="text-[6px] font-semibold text-text-secondary uppercase tracking-wider">New Orders</p>
                </div>
                <div className="bg-white rounded-2xl p-2 text-center">
                  <p className="text-[14px] font-bold text-primary">3</p>
                  <p className="text-[6px] font-semibold text-text-secondary uppercase tracking-wider">Active</p>
                </div>
                <div className="bg-white rounded-2xl p-2 text-center">
                  <p className="text-[14px] font-bold text-primary">₹2.1k</p>
                  <p className="text-[6px] font-semibold text-text-secondary uppercase tracking-wider">Revenue</p>
                </div>
              </div>

              {/* Post a Dish CTA — matches kitchen.tsx pill button */}
              <div className="px-4 pb-3">
                <div className="w-full rounded-full bg-primary py-2.5 flex items-center justify-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  <span className="text-[10px] font-bold text-white">Post a Dish</span>
                </div>
              </div>

              {/* Active listings — matches kitchen.tsx listing cards */}
              <div className="px-4 flex-1 overflow-hidden">
                <p className="text-[7px] font-semibold text-text-secondary uppercase tracking-wider mb-2">Active Listings</p>
                {[
                  { name: "Chicken Biryani", img: "/images/food/biryani.png", qty: "8 left", price: "₹180" },
                  { name: "Dal Tadka", img: "/images/food/dal.png", qty: "5 left", price: "₹120" },
                  { name: "Paneer Masala", img: "/images/food/curry.png", qty: "3 left", price: "₹150" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-white rounded-2xl p-2 mb-1.5 shadow-sm">
                    <img src={item.img} alt={item.name} className="w-10 h-10 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[9px] font-semibold text-text-primary truncate">{item.name}</p>
                      <p className="text-[7px] text-success font-medium">{item.qty}</p>
                    </div>
                    <p className="text-[9px] font-bold text-primary">{item.price}</p>
                  </div>
                ))}
              </div>

              {/* Quick links — matches kitchen.tsx bottom section */}
              <div className="px-4 py-2.5 border-t border-warm-100 grid grid-cols-3 gap-1.5">
                {[
                  { label: "Menu", icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" },
                  { label: "Earnings", icon: "M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 013 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 013 6v3" },
                  { label: "Deliveries", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25" },
                ].map((link, i) => (
                  <div key={i} className="bg-white rounded-2xl py-2.5 flex flex-col items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                    </svg>
                    <span className="text-[7px] font-semibold text-text-primary">{link.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
