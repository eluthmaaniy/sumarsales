import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Sumar Network Service" },
      { name: "description", content: "Client reviews for Sumar Network Service." },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  {
    name: "Amelia R.",
    role: "Apparel Brand Owner",
    text: "They rebuilt our storefront and conversions jumped within weeks. Communication was incredible.",
  },
  {
    name: "Daniel K.",
    role: "DTC Founder",
    text: "Migrated us from WooCommerce to Shopify without a hitch. Everything just worked on day one.",
  },
  {
    name: "Priya S.",
    role: "Wellness Startup",
    text: "Sharp eye for detail and very fast turnaround. Highly recommend for any Shopify project.",
  },
];

function ReviewsPage() {
  return (
    <main className="px-4 pt-10">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">What clients say</h1>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm shadow-sm">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">4.9</span>
          <span className="text-muted-foreground">avg from 214 reviews</span>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
        {reviews.map((r) => (
          <article
            key={r.name}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85">"{r.text}"</p>
            <div className="mt-4">
              <p className="text-sm font-semibold">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.role}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
