import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — Top Rated Shopify Expert & Partner` },
      {
        name: "description",
        content:
          "Top Rated Shopify Expert & verified Shopify Partner. Store design, redesign, migration, Shopify SEO, and Klaviyo email flows.",
      },
      { property: "og:title", content: `${SITE.name} — Shopify Partner Expert` },
      { property: "og:image", content: SITE.avatar },
    ],
  }),
  component: AboutPage,
});

const SKILLS_GRID: { name: string; icon: string }[] = [
  { name: "Shopify Store Setup", icon: "ri-store-2-line" },
  { name: "Shopify Store Redesign", icon: "ri-palette-line" },
  { name: "Theme Customization", icon: "ri-brush-line" },
  { name: "Store Migration", icon: "ri-exchange-line" },
  { name: "Product & Collection Setup", icon: "ri-stack-line" },
  { name: "Store Settings Configuration", icon: "ri-settings-3-line" },
  { name: "POS Setup & Migration", icon: "ri-computer-line" },
  { name: "Website Audit & Optimization", icon: "ri-search-eye-line" },
  { name: "Ongoing Store Management", icon: "ri-tools-line" },
  { name: "Checkout Upgrade", icon: "ri-shopping-cart-2-line" },
  { name: "Conversion Rate Optimization", icon: "ri-line-chart-line" },
  { name: "Site Performance & Speed", icon: "ri-flashlight-line" },
  { name: "Shopify SEO", icon: "ri-search-line" },
  { name: "Dropshipping Setup", icon: "ri-truck-line" },
  { name: "Product Research", icon: "ri-bar-chart-box-line" },
  { name: "Product Listing Optimization", icon: "ri-price-tag-3-line" },
  { name: "Klaviyo Email Flows", icon: "ri-mail-send-line" },
  { name: "Email Marketing", icon: "ri-mail-star-line" },
  { name: "Facebook & Instagram Ads", icon: "ri-facebook-circle-line" },
  { name: "TikTok Ads", icon: "ri-tiktok-line" },
  { name: "Google Ads & Merchant Center", icon: "ri-google-line" },
];

const education = [
  {
    icon: "ri-school-line",
    school: "Bauchi State University",
    course: "Electrical Engineering",
    grad: "Graduated 2024",
  },
];

const certifications = [
  { title: "Shopify Website & Development", org: "Udemy", year: "2019" },
  { title: "Facebook Marketing & Advertising", org: "SkillUp", year: "2024" },
  { title: "Shopify Theme Development & Liquid", org: "Shopify Partner Academy", year: "2023" },
  { title: "Google Ads Search Certification", org: "Google Skillshop", year: "2024" },
  { title: "Klaviyo Email Marketing Certification", org: "Klaviyo Academy", year: "2024" },
];

const SHORT_BIO = `Hi, we're ${SITE.name}, a Shopify Partner team with years of experience helping store owners achieve massive success. Whether you need a fresh store setup, a full redesign, or want to turn your Shopify store into a profitable asset, we're here to help.`;

const FULL_BIO_REST = `Why are we different?\n\nWhen you work with us, you're not just getting a service — you're getting a team that's invested in your growth. We craft strategies that reflect your store's unique essence, bringing in more visitors, more conversions, and more profits. Your success is our priority.`;

const TESTIMONIALS = [
  { id: "cLq7sz_VIoo", label: "Client testimonial 1" },
  { id: "vqLETIpOWFI", label: "Client testimonial 2" },
  { id: "53U7c6LRKFg", label: "Client testimonial 3" },
];

const SKILLS_PREVIEW_COUNT = 8;

function AboutPage() {
  const [bioOpen, setBioOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(false);
  const visibleSkills = skillsOpen ? SKILLS_GRID : SKILLS_GRID.slice(0, SKILLS_PREVIEW_COUNT);
  const hiddenCount = SKILLS_GRID.length - SKILLS_PREVIEW_COUNT;

  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-6 sm:pt-8">
        {/* About me */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">About me</h2>
          <p className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-foreground/80">
            {SHORT_BIO}
            {bioOpen && "\n\n" + FULL_BIO_REST}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setBioOpen((v) => !v)}
              className="text-sm font-semibold text-[#1DBF73] hover:underline"
            >
              {bioOpen ? "Show less" : "Read more"}
            </button>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#1DBF73] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]"
            >
              <i className="ri-whatsapp-line text-base" />
              Contact Me
            </a>
          </div>
        </div>

        {/* Client Testimonials and Walkthroughs */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Client Testimonials and Walkthroughs
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Swipe to see more — real client wins and project walkthroughs.
          </p>
          <div className="mt-4">
            <TestimonialsCarousel items={TESTIMONIALS} />
          </div>
        </section>

        {/* Skills */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {visibleSkills.map((s) => (
              <span key={s.name} className="skill-chip">
                {s.name}
              </span>
            ))}
          </div>
          <div className="mt-3 flex justify-center">
            {!skillsOpen && hiddenCount > 0 && (
              <button
                type="button"
                onClick={() => setSkillsOpen(true)}
                className="rounded-full bg-[#222325] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1DBF73]"
              >
                Show {hiddenCount} more
              </button>
            )}
            {skillsOpen && (
              <button
                type="button"
                onClick={() => setSkillsOpen(false)}
                className="rounded-full bg-[#222325] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1DBF73]"
              >
                Show less
              </button>
            )}
          </div>
        </section>

        {/* Education */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Education</h2>
          <div className="mt-4 rounded-2xl border border-border bg-card p-5 shadow-card">
            {education.map((e) => (
              <div key={e.school} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <i className={`${e.icon} text-xl text-foreground/70`} />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-foreground">
                    <i className="ri-building-line text-base text-muted-foreground" />
                    <span className="font-semibold">{e.school}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <i className="ri-book-open-line text-base" />
                    <span>{e.course}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <i className="ri-graduation-cap-line text-base" />
                    <span>{e.grad}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Certifications</h2>
          <div className="relative mt-6 pl-6">
            <span className="absolute left-[5px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />
            <ul className="space-y-6">
              {[...certifications]
                .sort((a, b) => Number(b.year) - Number(a.year))
                .map((c) => (
                  <li key={c.title} className="relative">
                    <span
                      className="absolute -left-[26px] top-1 h-3 w-3 rounded-full bg-[#1DBF73] ring-4 ring-background"
                      aria-hidden="true"
                    />
                    <div className="font-semibold text-foreground">{c.title}</div>
                    <div className="mt-0.5 text-sm text-muted-foreground">
                      {c.org} · {c.year}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-10 mb-4 rounded-3xl border border-border bg-secondary p-6 text-center">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#222325] px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-[#1DBF73]"
          >
            <i className="ri-whatsapp-line text-base" />
            Contact Me
          </a>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1DBF73]/10 px-3 py-1 text-xs font-medium text-[#1DBF73]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1DBF73] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1DBF73]" />
              </span>
              Online
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-foreground/70 border border-border">
              <i className="ri-time-line text-sm" /> Avg. response under 1 hour
            </span>
          </div>
        </section>
      </section>
    </Layout>
  );
}
