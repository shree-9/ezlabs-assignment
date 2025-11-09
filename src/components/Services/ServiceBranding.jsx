import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceBranding() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-[rgba(255,157,125,0.7)] flex flex-col justify-center items-center text-[#333] px-10">
      <h2 className="service-quote text-center italic text-lg">
        “A brand is a voice, and a product is a souvenir.” — Lisa Gansky
      </h2>
      {/* <img src={brushLine} alt="underline" className="w-56 my-3" /> */}

      <div className="flex items-center justify-center gap-12 mt-8 flex-wrap">
        <div className="shadow-xl bg-white p-2 rounded-md">
          <img src={brandingPhoto} alt="Branding" className="w-64 rounded-sm" />
          <p className="text-center mt-2 text-sm">Branding</p>
        </div>

        <div className="max-w-md">
          <p className="mb-4">
            A brand isn’t just what you see — it’s what you remember, what you carry home,
            and what you trust. We shape brands that people remember, return to, and fall in love with.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Branding & Communication</li>
            <li>Market Mapping</li>
            <li>Content Management</li>
            <li>Social Media Management</li>
            <li>Rebranding</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between w-full max-w-5xl mt-10">
        <button onClick={() => navigate("/film")} className="service-btn">&lt; Back</button>
        <button onClick={() => navigate("/art")} className="service-btn">Explore Now →</button>
      </div>

    </section>
  );
}
