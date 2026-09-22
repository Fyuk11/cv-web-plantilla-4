import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PracticeAreas from './components/PracticeAreas';
import FeaturedCases from './components/FeaturedCases';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent selection:text-white flex flex-col justify-between">
      <div>
        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <PracticeAreas />
          <FeaturedCases />
          <Career />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}