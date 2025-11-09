import React from "react";
import { useNavigate } from "react-router-dom";


export default function ServiceFilm() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-[rgba(255,157,125,0.7)] flex flex-col justify-center items-center text-[#333] px-10">
      <h2 className="service-quote text-center italic text-lg">
        “Filmmaking is a chance to live many lifetimes.” — Robert Altman
      </h2>
      {/* <img src={brushLine} alt="underline" className="w-56 my-3" /> */}

      <div className="flex items-center justify-center gap-12 mt-8 flex-wrap">
        <div className="shadow-xl bg-white p-2 rounded-md">
          {/* <img src={filmPhoto} alt="Film Production" className="w-64 rounded-sm" /> */}
          <p className="text-center mt-2 text-sm">Film Production</p>
        </div>

        <div className="max-w-md">
          <p className="mb-4">
            Who says films are just an escape? We see them as a way to live many lives — to feel,
            to explore, and to tell stories that stay. With each film, we carry new memories and
            reasons to keep creating.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between w-full max-w-5xl mt-10">
        <button onClick={() => navigate("/services")} className="service-btn">&lt; Back</button>
        <button onClick={() => navigate("/branding")} className="service-btn">Explore Now →</button>
      </div>

    </section>
  );
}
