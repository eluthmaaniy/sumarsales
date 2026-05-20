import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1DBF73] px-5 py-2.5 text-sm font-semibold text-white"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 rounded-full bg-[#1DBF73] px-5 py-2 text-sm font-medium text-white"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} — Top Rated Shopify Expert & Partner` },
      {
        name: "description",
        content:
          "Sumar Network Service — Shopify Partner expert helping store owners design, redesign, migrate, and scale profitable Shopify stores.",
      },
      { name: "theme-color", content: "#1DBF73" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:title", content: `${SITE.name} — Shopify Partner Expert` },
      {
        property: "og:description",
        content: "Store design, redesign, migration, Shopify SEO, and Klaviyo email flows.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: SITE.avatar },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "Sumar Network Service showcases digital solutions and client success stories." },
      { property: "og:description", content: "Sumar Network Service showcases digital solutions and client success stories." },
      { name: "twitter:description", content: "Sumar Network Service showcases digital solutions and client success stories." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f789b285-53f5-40e1-9f47-bbdfaa1ec57a/id-preview-ffac13ea--031a1d8e-4e58-4e38-ad9d-9153f3eed93c.lovable.app-1779155796961.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f789b285-53f5-40e1-9f47-bbdfaa1ec57a/id-preview-ffac13ea--031a1d8e-4e58-4e38-ad9d-9153f3eed93c.lovable.app-1779155796961.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/jpeg", href: SITE.avatar },
      { rel: "apple-touch-icon", href: SITE.avatar },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
