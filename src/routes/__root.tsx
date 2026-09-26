import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Footer, Header, StickyCta } from "@/components/site/Chrome";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "J&J Mechanical | HVAC, Plumbing & Gas Contractor in Blackstone VA" },
      {
        name: "description",
        content:
          "J&J Mechanical provides HVAC, AC, heating, furnace, heat pump, plumbing, water heater, drain, sewer and gas services in Blackstone, VA and surrounding Southside Virginia. Call (434) 206-8795.",
      },
      { name: "author", content: "J&J Mechanical" },
      {
        property: "og:title",
        content: "J&J Mechanical | HVAC, Plumbing & Gas Contractor in Blackstone VA",
      },
      {
        property: "og:description",
        content:
          "J&J Mechanical provides HVAC, AC, heating, furnace, heat pump, plumbing, water heater, drain, sewer and gas services in Blackstone, VA and surrounding Southside Virginia. Call (434) 206-8795.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "J&J Mechanical | HVAC, Plumbing & Gas Contractor in Blackstone VA",
      },
      {
        name: "twitter:description",
        content:
          "J&J Mechanical provides HVAC, AC, heating, furnace, heat pump, plumbing, water heater, drain, sewer and gas services in Blackstone, VA and surrounding Southside Virginia. Call (434) 206-8795.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const canonicalPath = router.state.location.pathname === "/" ? "" : router.state.location.pathname;

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <link rel="canonical" href={`https://www.jjmechanicalservice.com${canonicalPath}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              name: "J&J Mechanical",
              url: "https://www.jjmechanicalservice.com",
              logo: "https://www.jjmechanicalservice.com/favicon.png",
              image: "https://www.jjmechanicalservice.com/favicon.png",
              description:
                "J&J Mechanical is a residential and commercial mechanical contractor serving Blackstone and surrounding Southside Virginia communities with HVAC, air conditioning, heating, furnace, heat pump, plumbing, water heater, drain and sewer, and gas services.",
              telephone: "+14342068795",
              address: {
                "@type": "PostalAddress",
                streetAddress: "111 N Main St",
                addressLocality: "Blackstone",
                addressRegion: "VA",
                postalCode: "23824",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.08099,
                longitude: -78.00015,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
            }),
          }}
        />
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
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyCta />
    </QueryClientProvider>
  );
}
