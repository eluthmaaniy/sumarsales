import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Gallery — Inside the Shopify Studio | ${SITE.name}` },
      {
        name: "description",
        content: "Live, unedited recordings of real Shopify store work — straight from the build desk.",
      },
      { property: "og:title", content: "Inside the Shopify Studio" },
    ],
  }),
  component: GalleryPage,
});

const reels = [
  { id: "b-97OtPxnUw", caption: "Reel 01 · Live Shopify Build" },
  { id: "QYhUyoyWYd4", caption: "Reel 02 · Store Configuration" },
];

function GalleryPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-6 sm:pt-8">
        <header className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#1DBF73]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#1DBF73]">
            <i className="ri-film-line" /> Live Build Reels
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Inside the Shopify Studio
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Raw, unedited recordings of real Shopify store work — straight from the build desk.
          </p>
        </header>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {reels.map((r) => (
            <figure key={r.id}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="relative w-full" style={{ aspectRatio: "9 / 16" }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${r.id}`}
                    title={r.caption}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </div>
              <figcaption className="mt-3 text-center text-xs font-medium text-muted-foreground">
                {r.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Layout>
  );
}
