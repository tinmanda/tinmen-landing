import { useState, useEffect } from "react";
import "./App.css";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ForChefs from "@/components/ForChefs";
import ForDelivery from "@/components/ForDelivery";
import About from "@/components/About";
import Apps from "@/components/Apps";
import Contributors from "@/components/Contributors";
import Footer from "@/components/Footer";
import LegalPage from "@/components/LegalPage";

type Page = "home" | "terms" | "privacy";

function getPageFromHash(): Page {
  const hash = window.location.hash;
  if (hash === "#/terms") return "terms";
  if (hash === "#/privacy") return "privacy";
  return "home";
}

function App() {
  const [page, setPage] = useState<Page>(getPageFromHash);

  useEffect(() => {
    const onHashChange = () => {
      const next = getPageFromHash();
      setPage(next);

      // Scroll to top when navigating to a legal page
      if (next !== "home") {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // After switching back to home, scroll to the section if the hash is a section anchor
  useEffect(() => {
    if (page === "home") {
      const hash = window.location.hash;
      if (hash && !hash.startsWith("#/")) {
        requestAnimationFrame(() => {
          const el = document.getElementById(hash.slice(1));
          if (el) el.scrollIntoView({ behavior: "smooth" });
        });
      }
    }
  }, [page]);

  return (
    <div className="min-h-screen">
      {/* Skip to content link for keyboard navigation */}
      <a
        href="#how-it-works"
        className="sr-only focus:not-sr-only focus:fixed focus:top-20 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-6 focus:py-3 focus:text-white focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Skip to content
      </a>
      <Nav />
      {page === "home" ? (
        <>
          <main>
            <Hero />
            <HowItWorks />
            <ForChefs />
            <ForDelivery />
            <About />
            <Apps />
            <Contributors />
          </main>
        </>
      ) : (
        <main>
          <LegalPage page={page} />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
