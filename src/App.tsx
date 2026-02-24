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
      <Nav />
      <Hero />
      <HowItWorks />
      <ForChefs />
      <ForDelivery />
      <About />
      <Apps />
      <Contributors />
      <Footer />
    </div>
  );
}

export default App;
