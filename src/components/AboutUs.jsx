import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServicesIntro() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Film Production",
      image: "/film-production.png",
      link: "/services/film-production",
      rotation: "-rotate-6",
    },
    {
      title: "Branding",
      image: "/branding.png",
      link: "/services/branding",
      rotation: "rotate-3",
    },
    {
      title: "Art Curation",
      image: "/art-curation.png",
      link: "/services/art-curation",
      rotation: "-rotate-3",
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-texture overflow-hidden"
      style={{
        background:
          "linear-gradient(rgba(255,157,125,0.7), rgba(255,157,125,0.7)), var(--peach)",
        backgroundBlendMode: "overlay",
      }}
    >
      
      <div className="absolute bottom-0 left-0 w-full h-[80px] opacity-30">
        <img
          src="/mandala-border.png"
          alt="decorative border"
          className="w-full h-full object-cover"
        />
      </div>

      
      <h2 className="text-3xl md:text-4xl text-[var(--text-strong)] text-center font-[Halant] mb-16">
        The storyboard reveals the breadth of our craft.
      </h2>

      
      <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 md:gap-12 px-4">
        {services.map((service, index) => (
          <img
            key={index}
            src={service.image}
            alt={service.title}
            onClick={() => navigate(service.link)}
            className={`cursor-pointer w-[260px] h-[340px] object-cover transition-transform duration-300 transform ${service.rotation} hover:scale-105 hover:rotate-0`}
          />
        ))}
      </div>
    </section>
  );
}
