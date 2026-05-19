import googleShopify from "@/assets/partner-google-shopify.png";
import googlePartner from "@/assets/partner-google.png";
import shopifyPartner from "@/assets/partner-shopify.png";
import upwork from "@/assets/partner-upwork.png";
import shopifyPlus from "@/assets/shopify-plus-partner.png";

const logos = [
  { src: shopifyPartner, alt: "Shopify Partner" },
  { src: googlePartner, alt: "Google Partner" },
  { src: shopifyPlus, alt: "Shopify Plus Partner" },
  { src: upwork, alt: "Upwork" },
  { src: googleShopify, alt: "Google & Shopify" },
];

export function PartnerMarquee() {
  const items = [...logos, ...logos];
  return (
    <section className="mx-auto max-w-2xl px-6 pt-2">
      <div className="rounded-3xl border border-border bg-secondary py-5">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Trusted partner &amp; verified across
        </p>
        <div className="group relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-secondary to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-secondary to-transparent" />
          <div className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]">
            {items.map((l, i) => (
              <img
                key={`${l.alt}-${i}`}
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className="h-8 w-auto shrink-0 object-contain opacity-80 transition-opacity hover:opacity-100 sm:h-10"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
