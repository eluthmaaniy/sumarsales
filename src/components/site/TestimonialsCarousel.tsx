import { useRef } from "react";

interface Item {
  id: string;
  label?: string;
}

export function TestimonialsCarousel({ items }: { items: Item[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="w-[calc(50%-6px)] flex-none snap-start"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <div className="relative w-full" style={{ aspectRatio: "9 / 16" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title={item.label ?? "Client testimonial"}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollBy(-1)}
        className="absolute -left-2 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-foreground shadow-soft hover:bg-white sm:flex"
      >
        <i className="ri-arrow-left-s-line text-xl" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollBy(1)}
        className="absolute -right-2 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-foreground shadow-soft hover:bg-white sm:flex"
      >
        <i className="ri-arrow-right-s-line text-xl" />
      </button>
    </div>
  );
}
