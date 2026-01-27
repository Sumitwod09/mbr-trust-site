import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

const images = [
  { src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop", caption: "Project 1" },
  { src: "https://images.unsplash.com/photo-1571896349842-b08586b5ea14?q=80&w=2070&auto=format&fit=crop", caption: "Project 2" },
  { src: "https://images.unsplash.com/photo-1567538096051-b6643b25c45d?q=80&w=2070&auto=format&fit=crop", caption: "Project 3" },
  { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop", caption: "Project 4" },
  { src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop", caption: "Project 5" },
  { src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop", caption: "Project 6" },
  { src: "https://images.unsplash.com/photo-1598928506696-a575cf31de76?q=80&w=2070&auto=format&fit=crop", caption: "Project 7" },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop", caption: "Project 8" },
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045b122?q=80&w=2070&auto=format&fit=crop", caption: "Project 9" },
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

            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
