import { SITE } from "@/lib/site";
import { BadgeCheck, Globe, MapPin, Star, Lock } from "lucide-react";

export function ProfileHero() {
  return (
    <header className="relative">
      <div
        className="h-56 w-full bg-cover bg-center sm:h-72 md:h-80"
        style={{ backgroundImage: `url(${SITE.cover})` }}
        role="img"
        aria-label="Cover"
      />
      <div className="relative -mt-14 flex justify-center">
        <div className="rounded-full border-4 border-primary bg-card p-1 shadow-lg">
          <img
            src={SITE.avatar}
            alt={SITE.name}
            className="h-28 w-28 rounded-full object-cover"
          />
          <span className="absolute bottom-2 right-[calc(50%-3.5rem)] h-4 w-4 rounded-full border-2 border-card bg-primary" />
        </div>
      </div>

      <div className="mt-4 px-4 text-center">
        <h1 className="flex items-center justify-center gap-2 text-2xl font-bold sm:text-3xl">
          {SITE.name}
          <BadgeCheck className="h-6 w-6 fill-primary text-primary-foreground" />
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{SITE.tagline}</p>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-primary" /> Global
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Globe className="h-4 w-4 text-primary" /> English
          </span>
        </div>

        <div className="mt-3 flex items-center justify-center gap-2 text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" /> Online
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm shadow-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">4.9</span>
            <span className="text-muted-foreground">(214)</span>
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm shadow-sm">
            <Lock className="h-3.5 w-3.5" />
            <span className="font-semibold text-xs">SHOPIFY PLUS PARTNER</span>
          </span>
        </div>
      </div>
    </header>
  );
}
