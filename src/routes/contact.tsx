import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Layout } from "@/components/site/Layout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${SITE.name}` },
      {
        name: "description",
        content: `Get in touch with ${SITE.name}. Email ${SITE.email} or call ${SITE.phone}. Average response under one hour.`,
      },
    ],
  }),
  component: ContactPage,
});

const PROJECT_TYPES = [
  "Shopify Store Setup",
  "Shopify Store Redesign",
  "Store Migration",
  "Shopify SEO",
  "Klaviyo Email Flows",
  "Speed Optimization",
  "Dropshipping Setup",
  "Product Listing & Upload",
  "Branding & Logo",
  "Other",
] as const;

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  projectType: z.enum(PROJECT_TYPES, { message: "Please select a project type" }),
  message: z.string().trim().min(5, "Please share a few details").max(1000),
});

function ContactPage() {
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState<string>("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = formSchema.safeParse({ name, projectType, message });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your inputs");
      return;
    }
    setError(null);
    const text = `Hello ${SITE.shortName}, my name is ${parsed.data.name}.%0A%0AProject type: ${parsed.data.projectType}%0A%0A${encodeURIComponent(parsed.data.message)}`;
    const url = `https://wa.me/447462229610?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-6 pt-6 sm:pt-8">
        <header className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let's work together
          </h1>
          <p className="mt-2 text-muted-foreground">
            Fill the form and we'll continue the chat on WhatsApp.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
          noValidate
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={100}
                placeholder="Your full name"
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#1DBF73] focus:outline-none focus:ring-2 focus:ring-[#1DBF73]/20"
                required
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-foreground">
                Project type
              </label>
              <select
                id="projectType"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-[#1DBF73] focus:outline-none focus:ring-2 focus:ring-[#1DBF73]/20"
                required
              >
                <option value="">Select a project type</option>
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={1000}
                rows={5}
                placeholder="Tell us about your project, goals, and timeline..."
                className="mt-1.5 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#1DBF73] focus:outline-none focus:ring-2 focus:ring-[#1DBF73]/20"
                required
              />
            </div>

            {error && (
              <p className="text-sm font-medium text-destructive" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1DBF73] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.01]"
            >
              <i className="ri-whatsapp-line text-base" />
              Send message via WhatsApp
            </button>
          </div>
        </form>

        <div className="mt-8 mb-4">
          <p className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Direct channels
          </p>
          <ul className="mt-2 divide-y divide-border">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center gap-3 px-1 py-3.5 transition-colors hover:text-[#1DBF73]"
              >
                <i className="ri-mail-line text-lg text-[#1DBF73]" />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">Email</span>
                  <span className="block truncate text-xs text-muted-foreground">{SITE.email}</span>
                </span>
                <i className="ri-arrow-right-up-line text-base text-muted-foreground" />
              </a>
            </li>
            <li>
              <a
                href={SITE.phoneHref}
                className="group flex items-center gap-3 px-1 py-3.5 transition-colors hover:text-[#1DBF73]"
              >
                <i className="ri-phone-line text-lg text-[#1DBF73]" />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium text-foreground">Phone</span>
                  <span className="block truncate text-xs text-muted-foreground">{SITE.phone}</span>
                </span>
                <i className="ri-arrow-right-up-line text-base text-muted-foreground" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
