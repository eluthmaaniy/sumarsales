import { AspectRatio } from "@/components/ui/aspect-ratio";

export function YouTubeShort({ id, title }: { id: string; title?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <AspectRatio ratio={9 / 16}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title ?? "YouTube Short"}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </AspectRatio>
    </div>
  );
}
