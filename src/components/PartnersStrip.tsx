const partners = [
  { src: "https://eldev.digital/assets/partner-shopify-DxWXDTrp.png", alt: "Shopify Partner" },
  { src: "https://eldev.digital/assets/shopify-plus-partner-OpfieTYS.png", alt: "Shopify Plus Partner" },
  { src: "https://eldev.digital/assets/partner-upwork-BquesEiX.png", alt: "Upwork" },
  { src: "https://eldev.digital/assets/partner-google-shopify-DBrp0M8S.png", alt: "Google & Shopify" },
];

export function PartnersStrip() {
  const items = [...partners, ...partners];
  return (
    <section className="mx-4 mt-6 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <p className="text-center text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        Trusted partner &amp; verified across
      </p>
      <div className="mt-4 overflow-hidden">
        <div className="flex animate-[scroll_25s_linear_infinite] items-center gap-10">
          {items.map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt={p.alt}
              className="h-10 w-auto shrink-0 object-contain opacity-80"
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </section>
  );
}
