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
    <SectionWrapper
      id="contributors"
      className="bg-warm-50 py-20 md:py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center tracking-tight">
          Built by contributors
        </h2>
        <p className="mt-4 text-text-secondary text-center max-w-lg mx-auto">
          Tinmen is made by people who believe good food should be accessible to
          everyone.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: reduced ? 0 : 0.08 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {contributors.map((person, i) => (
            <motion.div
              key={i}
              variants={reduced ? undefined : cardVariants}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl p-5 border border-warm-200 shadow-sm text-center"
            >
              {/* Avatar initials */}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-sm font-bold text-primary">
                {person.initials}
              </div>
              <h3 className="mt-3 text-sm font-semibold text-text-primary">
                {person.name}
              </h3>
              <p className="text-xs text-text-secondary mt-0.5">
                {person.role}
              </p>

              {/* Social links */}
              {(person.github || person.linkedin) && (
                <div className="mt-3 flex justify-center gap-2">
                  {person.github && (
                    <a
                      href={person.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-500 hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-500 hover:text-primary transition-colors"
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
  );
}
