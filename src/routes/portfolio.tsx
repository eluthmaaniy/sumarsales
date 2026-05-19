import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { projects, featuredImages, allCategories, type ProjectCategory } from "@/data/portfolio-projects";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: `Portfolio — ${SITE.name}` },
      {
        name: "description",
        content: `Browse the Shopify portfolio — 48+ stores across fashion, beauty, jewelry, watches, food, and more.`,
      },
      { property: "og:title", content: `Portfolio — ${SITE.name}` },
      { property: "og:image", content: featuredImages[0] },
    ],
  }),
  component: PortfolioPage,
});

type Filter = "All" | ProjectCategory;
const filters: Filter[] = ["All", ...allCategories];

function AutoCarousel({ images, interval = 3500 }: { images: string[]; interval?: number }) {
  const [idx, setIdx] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIdx((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-secondary shadow-card"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Featured Shopify project ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
        className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-soft hover:bg-white"
      >
        <i className="ri-arrow-left-s-line text-xl" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => setIdx((i) => (i + 1) % images.length)}
        className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-foreground shadow-soft hover:bg-white"
      >
        <i className="ri-arrow-right-s-line text-xl" />
      </button>
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-1.5 bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}

function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? projects.slice(0, 12) : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-6 sm:pt-8">
        <header className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Portfolio
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            48+ Shopify stores · designed, redesigned and shipped
          </p>
        </header>

        <div className="mt-6">
          <AutoCarousel images={featuredImages} />
        </div>

        <div className="mt-8 -mx-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 px-6">
            {filters.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === c ? "bg-[#222325] text-white hover:bg-[#1DBF73]" : "bg-secondary text-foreground/70 hover:bg-accent"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {filtered.map((p) => (
            <article key={p.title + p.img} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="truncate text-[15px] font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">{p.client}</p>
                </div>
                <span className="shrink-0 rounded-full bg-[#1DBF73]/10 px-2.5 py-1 text-[11px] font-medium text-[#1DBF73]">
                  {p.category}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 mb-4 flex justify-center">
          <Link
            to="/full-portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-[#222325] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1DBF73]"
          >
            View All {projects.length} Projects <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
