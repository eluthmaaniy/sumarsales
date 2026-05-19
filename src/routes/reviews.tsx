import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {
  reviewsAll,
  ratingSummary,
  formatRelativeDate,
  formatExactDate,
  type Review,
} from "@/data/reviews-data";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: `Reviews (4.8 ★ · 239) — ${SITE.name}` },
      {
        name: "description",
        content: `Verified Shopify Partner reviews for ${SITE.name} — 4.8★ across 239 reviews.`,
      },
    ],
  }),
  component: ReviewsPage,
});

const STAR_GOLD = "#F5C452";

export function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "xs" }) {
  const cls = size === "xs" ? "text-xs" : "text-sm";
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <i
          key={i}
          className={`ri-star-fill ${cls}`}
          style={{ color: i < rating ? STAR_GOLD : "var(--color-border)" }}
        />
      ))}
    </div>
  );
}

function useLiveDate(ts: number) {
  const [label, setLabel] = useState<string>(() => formatExactDate(ts));
  useEffect(() => {
    const update = () => setLabel(`${formatRelativeDate(ts)} · ${formatExactDate(ts)}`);
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, [ts]);
  return label;
}

export function ReviewCard({ r }: { r: Review }) {
  const dateLabel = useLiveDate(r.timestamp);
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-start gap-3">
        <img
          src={r.avatar}
          alt={r.name}
          loading="lazy"
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold text-foreground">{r.name}</span>
            {r.repeat && (
              <span className="rounded-full bg-[#1DBF73]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#1DBF73]">
                Repeat client
              </span>
            )}
          </div>
          <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted-foreground">
            <span>
              <span aria-hidden>{r.countryFlag}</span> {r.country}
            </span>
            <span>·</span>
            <span suppressHydrationWarning>{dateLabel}</span>
          </div>
          <div className="mt-2 grid gap-1 text-xs sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Quality of work</span>
              <Stars rating={r.rating} size="xs" />
              <span className="font-semibold text-foreground">{r.rating}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Communication</span>
              <Stars rating={r.rating} size="xs" />
              <span className="font-semibold text-foreground">{r.rating}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-foreground/80">{r.text}</p>
      <p className="mt-3 text-xs text-muted-foreground">
        Service reviewed: <span className="font-medium text-foreground">{r.service}</span>
      </p>
    </article>
  );
}

function RatingBar({ stars, count, total }: { stars: number; count: number; total: number }) {
  const pct = Math.max(2, Math.round((count / total) * 100));
  return (
    <div className="flex items-center gap-3">
      <div className="flex w-16 shrink-0 items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <i
            key={i}
            className="ri-star-fill text-xs"
            style={{ color: i < stars ? STAR_GOLD : "var(--color-border)" }}
          />
        ))}
      </div>
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-[#1DBF73]" style={{ width: `${pct}%` }} />
      </div>
      <span className="w-10 shrink-0 text-right text-xs text-muted-foreground">({count})</span>
    </div>
  );
}

function ReviewsPage() {
  const preview = reviewsAll.slice(0, 8);
  const featured = reviewsAll
    .slice()
    .sort((a, b) => Number(b.repeat ?? 0) - Number(a.repeat ?? 0) || b.rating - a.rating)
    .filter((r) => r.rating === 5)
    .slice(0, 5);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || featured.length === 0) return;
    const id = setInterval(() => {
      const el = carouselRef.current;
      if (!el) return;
      const next = (activeSlide + 1) % featured.length;
      el.scrollTo({ left: el.clientWidth * next, behavior: "smooth" });
      setActiveSlide(next);
    }, 4000);
    return () => clearInterval(id);
  }, [activeSlide, paused, featured.length]);

  const onScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    if (idx !== activeSlide) setActiveSlide(idx);
  };

  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-6 sm:pt-8">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Reviews
          </h1>
          <p className="mt-2 text-muted-foreground">
            What clients say about working with us.
          </p>
        </header>

        <div className="mt-6 rounded-3xl border border-border bg-secondary p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-semibold tracking-tight text-foreground">
                  {ratingSummary.average}
                </span>
                <Stars rating={5} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Based on {ratingSummary.total} verified reviews
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1DBF73] px-3 py-1.5 text-xs font-semibold text-white">
              <i className="ri-verified-badge-fill" /> Verified
            </span>
          </div>

          <div className="mt-5 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Overall rating summary
            </p>
            {([5, 4, 3, 2, 1] as const).map((s) => (
              <RatingBar
                key={s}
                stars={s}
                count={ratingSummary.breakdown[s]}
                total={ratingSummary.total}
              />
            ))}
          </div>
        </div>

        {featured.length > 0 && (
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Featured reviews
              </h2>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
                <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[#1DBF73]" />
                Auto-playing
              </span>
            </div>
            <div
              ref={carouselRef}
              onScroll={onScroll}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={() => setPaused(true)}
              onTouchEnd={() => setPaused(false)}
              className="featured-carousel no-scrollbar"
            >
              {featured.map((r, i) => (
                <div key={r.name + i}>
                  <ReviewCard r={r} />
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-center gap-1.5">
              {featured.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const el = carouselRef.current;
                    if (!el) return;
                    el.scrollTo({ left: el.clientWidth * i, behavior: "smooth" });
                    setActiveSlide(i);
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${activeSlide === i ? "w-6 bg-[#1DBF73]" : "w-1.5 bg-border"}`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {preview.map((r, i) => (
            <ReviewCard key={r.name + i} r={r} />
          ))}
        </div>

        <div className="mt-8 mb-4 flex justify-center">
          <Link
            to="/full-reviews"
            className="inline-flex items-center gap-2 rounded-full bg-[#222325] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1DBF73]"
          >
            See all {ratingSummary.total} reviews <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
