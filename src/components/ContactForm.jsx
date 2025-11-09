import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    // 🧩 Front-end Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setStatus("Please fill out all fields.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("✅ Form Submitted Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("❌ Something went wrong. Please try again later.");
      }
    } catch (err) {
      setStatus("⚠️ Unable to connect. Please check your internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative h-screen w-screen bg-[var(--peach)] flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-16 overflow-hidden"
    >
     
      <img
        src="/mandala-righ.png"
        alt="Mandala left"
        className="absolute left-0 bottom-0 w-[400px] md:w-[500px] opacity-25 pointer-events-none select-none"
      />
      <img
        src="/mandala-righ.png"
        alt="Mandala right"
        className="absolute top-0 right-0 w-[400px] md:w-[500px] opacity-25 pointer-events-none select-none"
      />

     
      <div className="w-full md:w-1/2 z-10">
        <h2 className="text-3xl font-[Halant] text-[var(--text-strong)] mb-6">
          Whether you have an idea, a question, or simply want to explore how V
          can work together,<br/> V’re just a message away.
        </h2>
        <p className="text-[var(--text-muted)] leading-relaxed">
          Let’s catch up over coffee.
          <br />
          Great stories always begin with a good conversation.
        </p>
      </div>

   
      <div className="w-full md:w-1/2 z-10 mt-10 md:mt-0">
        <h3 className="text-2xl font-[Halant] mb-2 text-center md:text-left">
          Join the Story
        </h3>
        <p className="text-center md:text-left mb-6 text-[var(--text-muted)]">
          Ready to bring your vision to life? Let’s talk. 
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white/60 backdrop-blur-md p-6 rounded-lg shadow-md"
        >
          <input
            type="text"
            placeholder="Your name*"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
          <input
            type="email"
            placeholder="Your email*"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
          <input
            type="text"
            placeholder="Phone*"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          />
          <textarea
            placeholder="Your message*"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="border border-gray-300 rounded-md p-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-[var(--accent)] text-white py-2 rounded-md shadow-md hover:bg-[var(--accent-dark)] transition-transform hover:-translate-y-[2px]"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {status && (
            <p
              className={`text-center text-sm mt-2 ${
                status.includes("✅")
                  ? "text-green-600"
                  : status.includes("⚠️") || status.includes("❌")
                  ? "text-red-600"
                  : "text-orange-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>

        <div className="flex justify-center md:justify-start gap-6 text-[var(--accent)] mt-6 text-sm md:text-base">
          <a
            href="mailto:vernita@varnanfilms.co.in"
            className="hover:underline"
          >
            vernita@varnanfilms.co.in
          </a>
          <span>|</span>
          <a href="tel:+919873684567" className="hover:underline">
            +91 98736 84567
          </a>
        </div>
      </div>

     
    </section>
  );
}
