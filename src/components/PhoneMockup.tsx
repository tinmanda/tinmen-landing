import { motion, useReducedMotion } from "framer-motion";
import { asset } from "@/utils/asset";

export default function PhoneMockup({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      {/* Phone frame */}
      <div className="relative mx-auto w-[250px] h-[500px] md:w-[270px] md:h-[540px] rounded-[2.5rem] border-[6px] border-warm-800/90 bg-warm-800 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-warm-800 rounded-b-xl z-10" />

        {/* Screen — matches tinmen-user eat.tsx */}
        <div className="w-full h-full bg-warm-50 flex flex-col">
          {/* Status bar spacer */}
          <div className="h-7" />

          {/* Greeting */}
          <div className="px-4 pb-2">
            <p className="text-[9px] text-text-secondary">Good evening</p>
            <p className="text-[14px] font-bold text-text-primary" style={{ letterSpacing: "-0.5px" }}>
              What's cooking nearby?
            </p>
          </div>

          {/* Address selector card */}
          <div className="mx-4 mb-3 bg-white rounded-xl p-2.5 shadow-sm border border-warm-100 flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[8px] text-text-secondary">Delivering to</p>
              <p className="text-[10px] font-semibold text-primary truncate">Banjara Hills, Hyderabad</p>
            </div>
            <svg className="w-3 h-3 text-warm-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>

          {/* Chef cards — matches eat.tsx ChefCard component */}
          <div className="flex-1 px-4 space-y-2 overflow-hidden">
            {/* Chef 1 */}
            <div className="bg-[#E5DCCC] rounded-2xl p-2.5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-[7px] font-bold text-primary">RD</span>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-text-primary" style={{ letterSpacing: "-0.3px" }}>Rina Das</p>
                  <p className="text-[7px] text-text-secondary">Cooking today</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                <img src={asset("images/food/biryani.png")} className="w-[52px] h-[52px] rounded-xl object-cover" alt="Biryani" />
                <img src={asset("images/food/curry.png")} className="w-[52px] h-[52px] rounded-xl object-cover" alt="Curry" />
                <img src={asset("images/food/naan.png")} className="w-[52px] h-[52px] rounded-xl object-cover" alt="Naan" />
              </div>
            </div>

            {/* Chef 2 */}
            <div className="bg-[#E5DCCC] rounded-2xl p-2.5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-[7px] font-bold text-primary">RS</span>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-text-primary" style={{ letterSpacing: "-0.3px" }}>Rosmeen Shaik</p>
                  <p className="text-[7px] text-text-secondary">Cooking today</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                <img src={asset("images/food/dal.png")} className="w-[52px] h-[52px] rounded-xl object-cover" alt="Dal" />
                <img src={asset("images/food/thali.png")} className="w-[52px] h-[52px] rounded-xl object-cover" alt="Thali" />
                <img src={asset("images/food/samosa.png")} className="w-[52px] h-[52px] rounded-xl object-cover" alt="Samosa" />
              </div>
            </div>

            {/* Chef 3 */}
            <div className="bg-[#E5DCCC] rounded-2xl p-2.5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-[7px] font-bold text-primary">NK</span>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-text-primary" style={{ letterSpacing: "-0.3px" }}>Nancy Keps</p>
                  <p className="text-[7px] text-text-secondary">Cooking tomorrow</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                <img src={asset("images/food/dosa.png")} className="w-[52px] h-[52px] rounded-xl object-cover" alt="Dosa" />
                <img src={asset("images/food/idli.png")} className="w-[52px] h-[52px] rounded-xl object-cover" alt="Idli" />
                <img src={asset("images/food/chai.png")} className="w-[52px] h-[52px] rounded-xl object-cover" alt="Chai" />
              </div>
            </div>
          </div>

          {/* Floating cart button */}
          <div className="px-4 py-2">
            <div className="w-full rounded-full bg-primary flex items-center justify-between px-4 py-2.5 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white">2</span>
                </div>
                <span className="text-[10px] font-semibold text-white">View Cart</span>
              </div>
              <span className="text-[10px] font-bold text-white">₹330</span>
            </div>
          </div>

          {/* Tab bar — matches app bottom navigation */}
          <div className="flex justify-around py-2 px-4 border-t border-warm-100 bg-warm-50">
            {[
              { label: "Eat", active: true, icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
              { label: "Search", active: false, icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
              { label: "Orders", active: false, icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" },
              { label: "Profile", active: false, icon: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275" },
            ].map((tab, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <svg className={`w-4 h-4 ${tab.active ? "text-primary" : "text-warm-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={tab.icon} />
                </svg>
                <span className={`text-[7px] font-semibold ${tab.active ? "text-primary" : "text-warm-400"}`}>{tab.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Phone glow */}
      <div className="absolute -inset-6 rounded-[3rem] bg-white/[0.03] blur-2xl -z-10" />
    </motion.div>
  );
}
