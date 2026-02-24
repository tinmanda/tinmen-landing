import { motion, useReducedMotion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import AppStoreBadges from "@/components/AppStoreBadges";
import { asset } from "@/utils/asset";

const apps = [
  {
    icon: asset("images/apps/tinmen-user.png"),
    name: "Tinmen",
    tagline: "For food lovers",
    description:
      "Browse homemade meals, order, track delivery, and chat with your chef.",
    app: "user" as const,
  },
  {
    icon: asset("images/apps/tinmen-kitchen.png"),
    name: "Tinmen Kitchen",
    tagline: "For home chefs",
    description:
      "Create your menu, post listings, manage orders, and receive payments.",
    app: "kitchen" as const,
  },
  {
    icon: asset("images/apps/tinmen-delivery.png"),
    name: "Tinmen Delivery",
    tagline: "For delivery people",
    description:
      "Sign up with AI interview, claim delivery jobs, and earn on your schedule.",
    app: "delivery" as const,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Apps() {
  const reduced = useReducedMotion();

  return (
    <SectionWrapper id="apps" className="bg-warm-100 py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Download
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary tracking-tight">
            Get the apps
          </h2>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto text-base">
            Three apps, one platform. Download the one that fits you.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: reduced ? 0 : 0.1 }}
          className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {apps.map((app, i) => (
            <motion.div
              key={i}
              variants={reduced ? undefined : cardVariants}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-7 md:p-8 border border-warm-200 shadow-sm flex flex-col"
            >
              <img
                src={app.icon}
                alt={app.name}
                className="w-18 h-18 md:w-20 md:h-20 rounded-2xl shadow-md"
                loading="lazy"
              />
              <h3 className="mt-5 text-xl font-bold text-text-primary">
                {app.name}
              </h3>
              <span className="text-xs font-semibold text-primary/70 uppercase tracking-wide mt-0.5">
                {app.tagline}
              </span>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
                {app.description}
              </p>
              <AppStoreBadges className="mt-6" app={app.app} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
