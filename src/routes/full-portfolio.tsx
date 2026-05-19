import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { projects, allCategories, type ProjectCategory } from "@/data/portfolio-projects";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/full-portfolio")({
  head: () => ({
    meta: [
      { title: `Full Portfolio (${projects.length}+ Projects) — ${SITE.name}` },
      {
        name: "description",
        content: `Browse all ${projects.length}+ Shopify projects — store design, redesigns, dropshipping, and more.`,
      },
      { property: "og:image", content: projects[0]?.img },
    ],
  }),
  component: FullPortfolio,
});

type Filter = "All" | ProjectCategory;
const filters: Filter[] = ["All", ...allCategories];

function FullPortfolio() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 pt-6 sm:pt-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <i className="ri-arrow-left-line" /> Back to Portfolio
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Full Portfolio
        </h1>
        <p className="mt-2 text-muted-foreground">
          All {projects.length} Shopify projects, in one place.
        </p>

        <div className="mt-6 -mx-6 overflow-x-auto no-scrollbar">
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

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-4">
          {filtered.map((p) => (
            <article
              key={p.title + p.img}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-transform hover:-translate-y-0.5"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="inline-block rounded-full bg-[#1DBF73]/10 px-2.5 py-1 text-[11px] font-medium text-[#1DBF73]">
                  {p.category}
                </span>
                <h3 className="mt-2 font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Ordered by <span className="font-medium text-foreground">{p.client}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
