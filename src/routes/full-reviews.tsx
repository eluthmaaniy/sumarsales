import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { reviewsAll, ratingSummary } from "@/data/reviews-data";
import { ReviewCard, Stars } from "./reviews";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/full-reviews")({
  head: () => ({
    meta: [
      { title: `All ${ratingSummary.total} Reviews — ${SITE.name}` },
      {
        name: "description",
        content: `Read all ${ratingSummary.total} verified Shopify client reviews — ${ratingSummary.average}★ average.`,
      },
    ],
  }),
  component: FullReviews,
});

const PAGE_SIZE = 24;

function FullReviews() {
  const [count, setCount] = useState(PAGE_SIZE);
  const [filter, setFilter] = useState<"all" | "5" | "4" | "3" | "repeat">("all");

  const filtered = reviewsAll.filter((r) => {
    if (filter === "all") return true;
    if (filter === "repeat") return r.repeat;
    return String(r.rating) === filter;
  });
  const visible = filtered.slice(0, count);

  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-6 pt-6 sm:pt-8">
        <Link
          to="/reviews"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <i className="ri-arrow-left-line" /> Back to Reviews
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          All Reviews
        </h1>
        <div className="mt-2 flex items-center gap-2 text-muted-foreground">
          <Stars rating={5} />
          <span className="font-semibold text-foreground">{ratingSummary.average}</span>
          <span>({ratingSummary.total})</span>
        </div>

        <div className="mt-6 -mx-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 px-6">
            {([
              ["all", "All reviews"],
              ["5", "5 stars"],
              ["4", "4 stars"],
              ["3", "3 stars"],
              ["repeat", "Repeat clients"],
            ] as const).map(([k, label]) => (
              <button
                key={k}
                onClick={() => {
                  setFilter(k);
                  setCount(PAGE_SIZE);
                }}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${filter === k ? "bg-[#222325] text-white hover:bg-[#1DBF73]" : "bg-secondary text-foreground/70 hover:bg-accent"}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {visible.map((r, i) => (
            <ReviewCard key={r.name + i} r={r} />
          ))}
        </div>

        {count < filtered.length && (
          <div className="mt-8 mb-4 flex justify-center">
            <button
              onClick={() => setCount((c) => c + PAGE_SIZE)}
              className="inline-flex items-center gap-2 rounded-full bg-[#222325] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1DBF73]"
            >
              Load more reviews <i className="ri-arrow-down-line" />
            </button>
          </div>
        )}
        {count >= filtered.length && (
          <p className="mt-8 mb-4 text-center text-sm text-muted-foreground">
            You've reached the end · {filtered.length} reviews shown
          </p>
        )}
      </section>
    </Layout>
  );
}
