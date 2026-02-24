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

function App() {
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
      <main>
        <Hero />
        <HowItWorks />
        <ForChefs />
        <ForDelivery />
        <About />
        <Apps />
        <Contributors />
      </main>
      <Footer />
    </div>
  );
}

export default App;
