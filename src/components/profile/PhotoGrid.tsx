import { useState } from "react";
import { photos } from "@/data/photos";
import Lightbox from "./Lightbox";

const PhotoGrid = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<typeof photos[number] | null>(null);

  return (
    <section aria-labelledby="posts-title">
      <h2 id="posts-title" className="sr-only">Posts</h2>
      <div className="grid grid-cols-3 gap-[2px] sm:gap-1 md:gap-2">
        {photos.map((p) => (
          <button
            key={p.id}
            className="group relative aspect-square overflow-hidden focus:outline-none focus:ring-2 focus:ring-ring"
            onClick={() => { setActive(p); setOpen(true); }}
            aria-label={`Open ${p.alt}`}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>
      {active && (
        <Lightbox open={open} onOpenChange={setOpen} src={active.src} alt={active.alt} />
      )}
    </section>
  );
};

export default PhotoGrid;
