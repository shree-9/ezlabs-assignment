export default function FeaturesSection() {
  const features = [
    { title: "Pixel Perfect", desc: "Recreate Figma designs precisely." },
    { title: "Responsive Design", desc: "Works on mobile, tablet, and desktop." },
    { title: "Clean Code", desc: "Readable, modular, and maintainable code." },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold">Our Features</h2>
        <p className="text-gray-600 mt-2">
          We deliver quality and responsiveness in every pixel.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {features.map((f) => (
            <div key={f.title} className="p-6 border rounded-2xl hover:shadow-md transition bg-white">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
