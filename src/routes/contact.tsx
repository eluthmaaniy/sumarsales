import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${SITE.name}` },
      {
        name: "description",
        content: `Reach Sumar Network Service via email or phone. Avg. response under 1 hour.`,
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="px-4 pt-10">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Let's talk</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          We're online and replying within the hour.
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
        <a
          href={`mailto:${SITE.email}`}
          className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <Mail className="h-6 w-6 text-primary" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Email
          </p>
          <p className="mt-1 break-all font-semibold group-hover:text-primary">
            {SITE.email}
          </p>
        </a>
        <a
          href={SITE.phoneHref}
          className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <Phone className="h-6 w-6 text-primary" />
          <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Phone
          </p>
          <p className="mt-1 font-semibold group-hover:text-primary">{SITE.phone}</p>
        </a>
      </div>

      <div className="mx-auto mt-6 max-w-2xl text-center">
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm"
        >
          <MessageCircle className="h-4 w-4" /> Message on WhatsApp
        </a>
      </div>
    </main>
  );
}
