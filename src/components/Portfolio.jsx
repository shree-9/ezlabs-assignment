import React, { useState } from "react";

export default function Portfolio() {
  const videos = [
    "https://www.youtube.com/",
    "https://www.youtube.com/",
  ];

  const [current, setCurrent] = useState(0);

  const prevVideo = () =>
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const nextVideo = () =>
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

  return (
    <section
      id="portfolio"
      className="relative min-h-screen bg-[var(--peach)] flex flex-col justify-center items-center px-8 py-16 overflow-hidden"
    >
      
      <h2 className="text-2xl md:text-3xl font-[Halant] text-center mb-2 text-[var(--text-strong)]">
        The Highlight Reel
      </h2>
      <p className="text-center text-[var(--text-muted)] mb-10">
        Watch the magic we’ve captured.
      </p>


      <img
        src="/camera-illustration-left.png"
        alt="Camera Illustration"
        className="absolute left-6 bottom-6 opacity-30 w-40 md:w-56 lg:w-72 pointer-events-none select-none"
      />

  
      <div className="absolute right-0 bottom-0 w-[450px] md:w-[600px] lg:w-[750px] overflow-hidden pointer-events-none select-none">
        <img
          src="/mandala-righ.png"
          alt="Mandala Illustration"
          className="relative translate-x-[30%] translate-y-[30%] opacity-25"
        />
      </div>


      <div className="relative flex justify-center items-center bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-6 border-[6px] border-[#f4dbce] max-w-3xl z-10">
    
        <button
          onClick={prevVideo}
          className="absolute left-2 md:left-6 text-3xl text-[#333] hover:text-[var(--accent)] transition-transform hover:-translate-x-1"
        >
          ❮
        </button>

  
        <div className="border-[12px] border-[#e3d2ca] rounded-lg shadow-inner overflow-hidden flex justify-center items-center bg-black w-[320px] md:w-[560px] aspect-video">
          <iframe
            width="560"
            height="315"
            src={videos[current]}
            title="Portfolio Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

   
        <button
          onClick={nextVideo}
          className="absolute right-2 md:right-6 text-3xl text-[#333] hover:text-[var(--accent)] transition-transform hover:translate-x-1"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
