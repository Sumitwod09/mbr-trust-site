import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

const images = [
  { src: "/gallery-1.svg", caption: "Project Exterior" },
  { src: "/gallery-2.svg", caption: "Interior Finish" },
  { src: "/construction.svg", caption: "Construction Site" },
  { src: "/gallery-4.svg", caption: "Completed Facade" },
  { src: "/kitchen.svg", caption: "Kitchen Renovation" },
  { src: "/gallery-6.svg", caption: "Project Detail" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight" && selected !== null) setSelected((s) => (s! + 1) % images.length);
      if (e.key === "ArrowLeft" && selected !== null) setSelected((s) => (s! - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Gallery</h1>
          <p className="mt-2 text-muted-foreground">A showcase of our recent projects and completed works.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className="group overflow-hidden rounded-lg shadow-soft bg-card p-2 flex flex-col"
              aria-label={`Open image ${idx + 1}`}
            >
              <img src={item.src} alt={item.caption} className="w-full h-48 object-cover rounded-md transform group-hover:scale-105 transition-transform" />
              <span className="mt-2 text-sm text-muted-foreground">{item.caption}</span>
            </button>
          ))}
        </div>

        {selected !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setSelected(null)}
          >
            <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 rounded-full bg-card p-2 shadow"
                aria-label="Close"
              >
                ✕
              </button>
              <img src={images[selected].src} alt={images[selected].caption} className="w-full h-[70vh] object-contain rounded" />
              <div className="mt-2 text-center text-sm text-muted-foreground">{images[selected].caption}</div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
