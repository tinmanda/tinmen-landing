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
      className="bg-primary py-24 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        {/* Phone mockup — matches tinmen-delivery deliver.tsx */}
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center order-2 md:order-1"
        >
          <div className="w-[250px] h-[500px] md:w-[260px] md:h-[520px] rounded-[2.5rem] border-[6px] border-white/15 bg-warm-50 shadow-xl overflow-hidden">
            <div className="w-full h-full flex flex-col">
              {/* Status bar spacer */}
              <div className="h-6" />

              {/* Greeting — matches deliver.tsx header */}
              <div className="px-4 pb-4">
                <p className="text-[9px] text-text-secondary">Good evening</p>
                <p className="text-[14px] font-bold text-text-primary" style={{ letterSpacing: "-0.5px" }}>
                  Delivery Dashboard
                </p>
              </div>

              {/* Quick Actions — matches deliver.tsx MenuItemCard pattern */}
              <div className="px-4 space-y-1.5">
                <p className="text-[7px] font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
                  Quick Actions
                </p>

                {/* Available Jobs */}
                <div className="bg-white rounded-2xl p-3 flex items-center gap-3 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <p className="text-[10px] font-semibold text-text-primary">Available Jobs</p>
                      <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-[7px] font-bold text-white">3</span>
                      </div>
                    </div>
                    <p className="text-[8px] text-text-secondary mt-0.5">Browse delivery jobs near you</p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-warm-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>

                {/* My Jobs */}
                <div className="bg-white rounded-2xl p-3 flex items-center gap-3 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-semibold text-text-primary">My Jobs</p>
                    <p className="text-[8px] text-text-secondary mt-0.5">View your delivery history</p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-warm-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>

              {/* Settings section */}
              <div className="px-4 mt-4 space-y-1.5">
                <p className="text-[7px] font-semibold text-text-secondary uppercase tracking-wider mb-1.5">
                  Settings
                </p>

                <div className="bg-white rounded-2xl p-3 flex items-center gap-3 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-semibold text-text-primary">Edit Profile</p>
                    <p className="text-[8px] text-text-secondary mt-0.5">Update your information</p>
                  </div>
                  <svg className="w-3.5 h-3.5 text-warm-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Tab bar — matches delivery app tabs */}
              <div className="flex justify-around py-2.5 px-4 border-t border-warm-100 bg-warm-50">
                {[
                  { label: "Deliver", active: true },
                  { label: "Chat", active: false },
                  { label: "Profile", active: false },
                ].map((tab, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className={`w-1 h-1 rounded-full ${tab.active ? "bg-primary" : "bg-transparent"}`} />
                    <span className={`text-[8px] font-semibold ${tab.active ? "text-primary" : "text-warm-400"}`}>
                      {tab.label}
                    </span>
                  </div>
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
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-tight">
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
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white/70" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <AppStoreBadges className="mt-8" app="delivery" />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
