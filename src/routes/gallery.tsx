import { createFileRoute } from "@tanstack/react-router";
import { YouTubeShort } from "@/components/YouTubeShort";
import { Clapperboard } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside the Shopify Studio | Sumar Network Service" },
      {
        name: "description",
        content:
          "Live, unedited recordings of real Shopify store work — straight from the build desk.",
      },
      { property: "og:title", content: "Inside the Shopify Studio" },
      {
        property: "og:description",
        content: "Live build reels from Sumar Network Service.",
      },
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
    <main className="px-4 pt-10">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          <Clapperboard className="h-3.5 w-3.5" /> Live Build Reels
        </span>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
          Inside the Shopify Studio
        </h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Raw, unedited recordings of real Shopify store work — straight from the build desk.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {reels.map((r) => (
          <figure key={r.id}>
            <YouTubeShort id={r.id} title={r.caption} />
            <figcaption className="mt-3 text-center text-sm font-medium text-muted-foreground">
              {r.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
