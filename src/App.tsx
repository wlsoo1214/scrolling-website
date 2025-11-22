import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

import { ProductGrid } from "./components/ProductGrid";

import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
