import { createFileRoute } from "@tanstack/react-router";
import { LayoutGrid } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Sumar Network Service" },
      {
        name: "description",
        content: "Selected Shopify projects by Sumar Network Service.",
      },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { title: "Fashion Storefront", tag: "Redesign" },
  { title: "Wellness Brand Launch", tag: "Setup" },
  { title: "Multi-currency Migration", tag: "Migration" },
  { title: "Conversion-focused Theme", tag: "Theme" },
  { title: "POS Rollout", tag: "POS" },
  { title: "Subscription Storefront", tag: "Apps" },
];

function PortfolioPage() {
  return (
    <main className="px-4 pt-10">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          <LayoutGrid className="h-3.5 w-3.5" /> Portfolio
        </span>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Selected Work</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A snapshot of recent Shopify projects we've shipped.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-transform hover:-translate-y-0.5"
          >
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-primary/20 to-accent" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-primary">
              {p.tag}
            </p>
            <p className="mt-1 font-semibold">{p.title}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
