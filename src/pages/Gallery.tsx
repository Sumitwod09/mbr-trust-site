import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

const images = [
  { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop", caption: "Modern Building Exterior" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", caption: "Luxury Interior Design" },
  { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", caption: "Construction Site Progress" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop", caption: "Completed Residential Project" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop", caption: "Modern Kitchen Renovation" },
  { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop", caption: "Commercial Building Facade" },
  { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2787&auto=format&fit=crop", caption: "Bathroom Renovation" },
  { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop", caption: "Living Room Interior" },
  { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop", caption: "Office Space Design" },
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
