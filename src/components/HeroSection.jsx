// src/components/HeroSection.jsx
import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-screen flex flex-row items-center justify-between px-16 md:px-24 bg-texture overflow-hidden"
      style={{
        background:
          "linear-gradient(rgba(255,157,125,0.7), rgba(255,157,125,0.7)), var(--peach)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Left Side Logo + Mandala */}
      <div className="relative flex flex-col items-center justify-center w-[45%]">
        <img
          src="/mandala-bg.png"
          alt="Mandala"
          className="w-[520px] opacity-50"
        />
        <img
          src="/vfilms-logo.png"
          alt="V Films Logo"
          className="absolute w-[340px] top-[28%]"
        />
      </div>

      {/* Right Side Text Section */}
      <div className="w-[50%] flex flex-col justify-center text-left px-8">
        <h1
          className="text-[46px] md:text-[58px] leading-[1.2] mb-4 italic text-[var(--text-strong)] break-words max-w-[520px]"
          style={{ fontFamily: "Island Moments, cursive" }}
        >
          Varnan is where stories find their voice and form
        </h1>

        <p className="text-[26px] font-[Halant] text-[var(--accent)] mb-4">
          Films · Brands · Art
        </p>

        <p className="text-[18px] font-[InstrumentSans] text-[var(--text-muted)] leading-relaxed max-w-[520px]">
          Since 2008, V’ve been telling stories – stories of people, their journeys,<br/>
          and the places that shape them. Some begin in studios and others in the humble<br/>
          village square. But every story starts the same way — by listening with intention.
        </p>
      </div>
    </section>
  );
}
