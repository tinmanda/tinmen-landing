import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { contributors } from "@/data/contributors";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contributors() {
  const reduced = useReducedMotion();

  return (
    <div className="relative bg-warm-50">
    <SectionWrapper
      id="contributors"
      className="pt-24 md:pt-32 pb-32 md:pb-40 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary/60">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-primary tracking-tight">
            Built by contributors
          </h2>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto text-base">
            Tinmen is made by people who believe homemade food should be accessible to
            everyone.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: reduced ? 0 : 0.08 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 max-w-3xl mx-auto"
        >
          {contributors.map((person, i) => (
            <motion.div
              key={i}
              variants={reduced ? undefined : cardVariants}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl p-6 md:p-7 border border-warm-200 shadow-sm text-center"
            >
              {/* Avatar initials */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-base font-bold text-primary">
                {person.initials}
              </div>
              <h3 className="mt-4 text-base font-semibold text-text-primary">
                {person.name}
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                {person.role}
              </p>

              {/* Social links */}
              {(person.github || person.linkedin) && (
                <div className="mt-3 flex justify-center gap-3">
                  {person.github && (
                    <a
                      href={person.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-400 hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-400 hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

    </SectionWrapper>
      {/* Bottom curve — outside SectionWrapper so entrance animation doesn't shift it */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16 block">
          <path d="M0,60 L1440,60 L1440,40 Q720,0 0,40 Z" fill="var(--color-warm-900)" />
        </svg>
      </div>
    </div>
  );
}
