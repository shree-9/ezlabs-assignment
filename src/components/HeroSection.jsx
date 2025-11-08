import React from "react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-texture"
      style={{
        background:
          "linear-gradient(rgba(255,157,125,0.7), rgba(255,157,125,0.7)), var(--peach)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Left Side Logo + Mandala */}
      <div className="absolute left-16 flex flex-col items-center gap-4">
        <img src="/mandala-bg.png" alt="Mandala" className="w-[565px] opacity-60" />
        <img src="/vfilms-logo.png" alt="V Films Logo" className="absolute w-[388px] top-20" />
      </div>

      {/* Text Section */}
      <div className="max-w-3xl mx-auto text-center">
        <h1
          className="text-[48px] md:text-[60px] italic leading-tight mb-4"
          style={{ fontFamily: "Island Moments, cursive" }}
        >
          Varnan is where stories find <br /> their voice and form
        </h1>
        <p
          className="text-[28px] font-[Halant] text-[var(--accent)] mb-4"
        >
          Films · Brands · Art
        </p>
        <p className="text-[18px] font-[InstrumentSans] text-[var(--text-muted)] max-w-xl mx-auto leading-relaxed">
          Since 2008, V’ve been telling stories – stories of people, their journeys,
          and the places that shape them. Some begin in studios and others in the humble
          village square. But every story starts the same way — by listening with intention.
        </p>
      </div>
    </section>
  );
}
