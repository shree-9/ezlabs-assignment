import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServicesIntro() {
  const navigate = useNavigate();

  const cards = [
    { title: "Film Production", img: "/film-photo.png", path: "/film" },
    { title: "Branding", img: "/branding-photo.png", path: "/branding" },
    { title: "Art Curation", img: "/art-curation.png", path: "/art" },
  ];

  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-center items-center text-[#333] bg-[rgba(255,157,125,0.7)] px-8 py-12"
    >
      <h2 className="text-2xl md:text-3xl italic mb-6 text-center font-[Halant]">
        “The storyboard reveals the breadth of our craft.”
      </h2>
      <p className="text-center text-sm text-[#555] mb-10 max-w-xl">
        Explore our three core verticals that bring stories, brands, and art to life.
      </p>

      <div className="flex flex-wrap justify-center gap-10 mt-6">
        {cards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.path)}
            className="cursor-pointer bg-white rounded-lg shadow-xl p-2 transform transition-transform duration-300 hover:-translate-y-2 hover:rotate-1"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-56 h-64 object-cover rounded-sm"
            />
            <p className="text-center mt-2 text-sm font-medium">{card.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
