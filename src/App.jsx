// src/App.jsx
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import AboutTeam from "./components/AboutTeam";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";

// Services (if needed later)
import ServicesIntro from "./components/Services/ServicesIntro";
import ServiceFilm from "./components/Services/ServiceFilm";
import ServiceBranding from "./components/Services/ServiceBranding";
import ServiceArt from "./components/Services/ServiceArt";

export default function App() {
  useEffect(() => {
    const container = document.querySelector(".horizontal-scroll");
    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY * 1.5; 
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main className="bg-texture text-[var(--text-strong)] font-inter overflow-hidden">
      <BrowserRouter>
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <div className="horizontal-scroll">
                <section>
                  <HeroSection />
                </section>
                <section>
                  <AboutUs />
                </section>
                <section>
                  <AboutTeam />
                </section>
                <section>
                  <Portfolio />
                </section>
                <section>
                  <ContactForm />
                </section>
              </div>
            }
          />

          <Route path="/services" element={<ServicesIntro />} />
          <Route path="/film" element={<ServiceFilm />} />
          <Route path="/branding" element={<ServiceBranding />} />
          <Route path="/art" element={<ServiceArt />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
