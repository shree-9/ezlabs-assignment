import React from "react";
import { useNavigate } from "react-router-dom";
import artCuration from "/art-curation.png";
import frameIcon from "/icons/frame.png";
import paletteIcon from "/icons/palette.png";

export default function ServiceArt() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-[rgba(255,157,125,0.7)] flex flex-col justify-center items-center text-[#333] px-10">
      <h2 className="service-quote text-center italic text-lg">
        “V take art where it belongs, to the people.” — Vernita Verma
      </h2>

      <div className="flex items-center justify-center gap-12 mt-8 flex-wrap">
        <div className="shadow-xl bg-white p-2 rounded-md">
          <img src={artCuration} alt="Art Curation" className="w-64 rounded-sm" />
          <p className="text-center mt-2 text-sm">aArt Curation</p>
        </div>

        <div className="max-w-md">
          <p className="mb-4">
            Art isn’t meant to sit on distant walls — it’s meant to breathe, to
            travel, to belong. Through every festival, every performance, and
            every gathering, we help stories find their stage and their people.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Art Festivals</li>
            <li>Live Performances</li>
            <li>Community Events</li>
            <li>Cultural Storytelling</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between w-full max-w-5xl mt-10">
        <button onClick={() => navigate("/branding")} className="service-btn">
          &lt; Back
        </button>
        <button onClick={() => navigate("/services")} className="service-btn">
          Explore Now →
        </button>
      </div>

      <img
        src={frameIcon}
        alt=""
        className="absolute top-20 right-12 w-10 opacity-80"
      />
      <img
        src={paletteIcon}
        alt=""
        className="absolute bottom-16 left-10 w-10 opacity-80"
      />
    </section>
  );
}