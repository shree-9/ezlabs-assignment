import React from "react";

export default function AboutTeam() {
  return (
    <section
      id="about-team"
      className="relative min-h-screen flex flex-col justify-center bg-texture overflow-hidden"
      style={{
        background:
          "linear-gradient(rgba(255,157,125,0.7), rgba(255,157,125,0.7)), var(--peach)",
        backgroundBlendMode: "overlay",
      }}
    >
      <img
        src="/sticky-note.png"
        alt="About description note"
        className="absolute top-20 left-20 w-[320px] md:w-[400px] rotate-[-10deg] drop-shadow-xl"
      />

      <img
        src="/india-gate.png"
        alt="India Gate"
        className="absolute bottom-12 left-24 w-[160px] md:w-[200px]"
      />

      <div className="flex flex-col items-center justify-center text-center px-6 md:px-0">
        <div className="w-full flex justify-center gap-20 md:gap-40 text-[var(--text-muted)] italic text-sm mb-2">
          <span>Branding Experts</span>
          <span>Film Makers</span>
          <span>Art Curators</span>
        </div>

        <img
          src="/team-silhouette.png"
          alt="Team silhouettes"
          className="w-[620px] md:w-[720px] hover:scale-[1.05] transition-transform duration-500"
        />

        <p
          className="text-[var(--text-strong)] mt-8 mb-4 text-lg md:text-xl"
          style={{ fontFamily: "Halant, serif" }}
        >
          Take a closer look at the stories V bring to life.
        </p>

        <button
          className="bg-[var(--accent)] hover:bg-[var(--accent-dark)] text-white px-6 py-2 rounded-full shadow-md transition-all duration-300"
        >
          View Portfolio
        </button>
      </div>
    </section>
  );
}