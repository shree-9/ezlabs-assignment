
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import AboutTeam from "./components/AboutTeam";
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

// Services
import ServicesIntro from "./components/Services/ServicesIntro";
import ServiceFilm from "./components/Services/ServiceFilm";
import ServiceBranding from "./components/Services/ServiceBranding";
import ServiceArt from "./components/Services/ServiceArt";

export default function App() {
  return (
    <main className="bg-texture">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Main page route */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutUs />
                <AboutTeam />
                
                <Portfolio />
                <section id="contact" className="py-16 md:py-24">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Story</h2>
                    <p className="text-[var(--text-muted)] mb-10">
                      Ready to collaborate or discuss your next launch? Drop a message.
                    </p>
                    <ContactForm />
                  </div>
                </section>
                <Footer />
              </>
            }
          />

          {/* Service detail routes */}
          <Route path="/services" element={<ServicesIntro />} />
          <Route path="/film" element={<ServiceFilm />} />
          <Route path="/branding" element={<ServiceBranding />} />
          <Route path="/art" element={<ServiceArt />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
