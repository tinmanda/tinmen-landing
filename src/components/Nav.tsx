import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#for-chefs", label: "For Chefs" },
  { href: "#for-delivery", label: "For Delivery" },
  { href: "#contributors", label: "Contributors" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl"
      >
        <div
          className={`rounded-full border px-5 py-2.5 flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "bg-white/85 border-warm-300/50 shadow-lg backdrop-blur-xl"
              : "bg-white/70 border-warm-300/30 backdrop-blur-xl"
          }`}
        >
          <a href="#" className="flex items-center gap-2">
            <img
              src="/images/apps/tinmen-user.png"
              alt="Tinmen"
              className="w-7 h-7 rounded-lg"
            />
            <span className="text-lg font-bold text-primary tracking-tight">
              Tinmen
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#apps"
            className="hidden md:inline-flex rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white hover:bg-primary-light transition-colors"
          >
            Get the App
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1 text-text-primary"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-warm-50/95 backdrop-blur-md flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-2xl font-semibold text-text-primary hover:text-primary transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#apps"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.08 }}
              className="mt-4 rounded-full bg-primary px-8 py-3 text-lg font-semibold text-white"
            >
              Get the App
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
