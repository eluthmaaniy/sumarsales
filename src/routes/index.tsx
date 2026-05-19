import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, GraduationCap, Award } from "lucide-react";
import { ProfileHero } from "@/components/ProfileHero";
import { PartnersStrip } from "@/components/PartnersStrip";
import { YouTubeShort } from "@/components/YouTubeShort";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — Shopify Partner Expert` },
      {
        name: "description",
        content:
          "Shopify store setup, redesign, migration, and optimization by Sumar Network Service.",
      },
      { property: "og:title", content: `${SITE.name}` },
      { property: "og:description", content: "I'll bring your ideas to life." },
      { property: "og:image", content: SITE.avatar },
    ],
  }),
  component: Index,
});

const skills = [
  "Shopify Store Setup",
  "Shopify Store Redesign",
  "Theme Customization",
  "Store Migration",
  "Product & Collection Setup",
  "Store Settings Configuration",
  "POS Setup & Migration",
  "Website Audit & Optimization",
  "Shopify App Integration",
  "Speed Optimization",
  "Conversion Rate Optimization",
  "Klaviyo Email Marketing",
  "SEO for Shopify",
];

const certs = [
  { title: "Facebook Marketing & Advertising", org: "SkillUp · 2024" },
  { title: "Google Ads Search Certification", org: "Google Skillshop · 2024" },
  { title: "Klaviyo Email Marketing Certification", org: "Klaviyo Academy · 2024" },
  { title: "Shopify Theme Development & Liquid", org: "Shopify Partner Academy · 2023" },
  { title: "Shopify Website & Development", org: "Udemy · 2019" },
];

const shorts = ["cLq7sz_VIoo", "vqLETIpOWFI", "53U7c6LRKFg"];

function Index() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const visibleSkills = showAllSkills ? skills : skills.slice(0, 8);

  return (
    <main>
      <ProfileHero />
      <PartnersStrip />

      {/* About */}
      <section className="mx-4 mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-bold">About me</h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground/85">
          Hi, we're <strong>Sumar Network Service</strong>, a Shopify Partner team with
          years of experience helping store owners achieve massive success. Whether you
          need a fresh store setup, a full redesign, or want to turn your Shopify store
          into a profitable asset, we're here to help bring your ideas to life.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Read more
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" /> Contact Me
          </Link>
        </div>
      </section>

      {/* Testimonials Shorts */}
      <section className="mx-4 mt-8">
        <h2 className="text-xl font-bold">Client Testimonials and Walkthroughs</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Real client wins and project walkthroughs.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {shorts.map((id) => (
            <YouTubeShort key={id} id={id} title="Client Testimonial" />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mx-4 mt-8">
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {visibleSkills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm shadow-sm"
            >
              {s}
            </span>
          ))}
        </div>
        {skills.length > 8 && (
          <button
            onClick={() => setShowAllSkills((v) => !v)}
            className="mt-3 text-sm font-semibold text-primary hover:underline"
          >
            {showAllSkills ? "Show less" : `Show ${skills.length - 8} more`}
          </button>
        )}
      </section>

      {/* Education */}
      <section className="mx-4 mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <GraduationCap className="h-5 w-5 text-primary" /> Education
        </h2>
        <div className="mt-4">
          <p className="font-semibold">University of Abuja</p>
          <p className="text-sm text-muted-foreground">B.A. English</p>
          <p className="text-sm text-muted-foreground">Graduated 2025</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-4 mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <Award className="h-5 w-5 text-primary" /> Certifications
        </h2>
        <ul className="mt-4 space-y-4">
          {certs.map((c) => (
            <li key={c.title} className="border-l-2 border-primary pl-3">
              <p className="font-semibold">{c.title}</p>
              <p className="text-sm text-muted-foreground">{c.org}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer CTA */}
      <section className="mx-4 mt-8 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm"
        >
          <MessageCircle className="h-4 w-4" /> Contact Me
        </Link>
        <p className="mt-3 text-xs text-muted-foreground">
          Online · Avg. response under 1 hour
        </p>
      </section>
    </main>
  );
}
