import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ShieldCheck, Star } from "lucide-react";
import { CallButton, CtaBand, Eyebrow } from "@/components/site/Chrome";
import { REVIEWS, SITE } from "@/data/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | J&J Mechanical | 4.9 Stars (187+ Verified Reviews)" },
      {
        name: "description",
        content:
          "Read verified 4.9-star Google customer reviews for J&J Mechanical. Licensed HVAC, plumbing, and gas repairs across Blackstone, Farmville, and Southside Virginia.",
      },
      { property: "og:title", content: "J&J Mechanical Customer Reviews | 4.9 Stars (187+ Reviews)" },
      {
        property: "og:description",
        content:
          "Real Google reviews from Southside Virginia homeowners. Fast response, fair pricing, and master-trade quality since 1998.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

type Category = "all" | "hvac" | "plumbing" | "emergency";

function ReviewsPage() {
  const [filter, setFilter] = useState<Category>("all");

  const filteredReviews = REVIEWS.filter((review) => {
    if (filter === "all") return true;
    const s = review.service.toLowerCase();
    if (filter === "hvac") return s.includes("hvac") || s.includes("ac") || s.includes("heat") || s.includes("air");
    if (filter === "plumbing") return s.includes("plumb") || s.includes("water") || s.includes("leak") || s.includes("tankless");
    if (filter === "emergency") return s.includes("emergency");
    return true;
  });

  return (
    <>
      <section className="surface-ink py-20 text-center">
        <div className="container-lux max-w-4xl">
          <Eyebrow>Verified Google Reputation</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold text-ink-foreground sm:text-6xl">
            Real Reviews From Southside Virginia Homeowners
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-foreground/80">
            Every review reflects an actual dispatched technician, an upfront diagnosis, and
            work backed by our Virginia Class A mechanical license.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm">
              <div className="flex gap-1 text-copper">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-xl font-bold text-white">{SITE.rating} / 5.0</span>
              <span className="text-sm text-ink-foreground/70">
                ({SITE.reviewCount}+ Verified Google Reviews)
              </span>
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-emerald-400">
              <ShieldCheck className="h-5 w-5" />
              <span>100% Authentic Customer Feedback</span>
            </div>
          </div>
        </div>
      </section>

      {/* Review Metrics & Source Consistency */}
      <section className="border-b border-hairline bg-muted/30 py-8">
        <div className="container-lux grid gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
          <div className="p-4">
            <p className="text-3xl font-extrabold text-foreground">187+</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Total Google Reviews</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-extrabold text-foreground">4.9 / 5.0</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Average Star Rating</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-extrabold text-foreground">Since 1998</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">26+ Years Serving VA</p>
          </div>
          <div className="p-4">
            <p className="text-3xl font-extrabold text-foreground">24/7</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">Emergency Dispatch</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-lux">
          {/* Trade Filter Tabs */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-6">
            <div>
              <h2 className="text-2xl font-bold">Filtered Customer Experiences</h2>
              <p className="text-sm text-muted-foreground">
                Showing {filteredReviews.length} verified reviews for {filter.toUpperCase()}
              </p>
            </div>
            <div className="inline-flex rounded-xl border border-hairline bg-background p-1">
              {(
                [
                  { id: "all", label: "All Reviews" },
                  { id: "hvac", label: "HVAC & Heat Pumps" },
                  { id: "plumbing", label: "Plumbing & Leaks" },
                  { id: "emergency", label: "Emergency Response" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
                    filter === tab.id
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Review Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredReviews.map((review) => (
              <article
                key={review.name}
                className="lux-card relative flex flex-col justify-between p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex gap-1 text-copper">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Verified Google Review
                    </span>
                  </div>
                  <blockquote className="mt-5 text-base leading-relaxed text-foreground/90">
                    “{review.text}”
                  </blockquote>
                </div>

                <div className="mt-6 border-t border-hairline pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {review.city} · Service: <span className="font-medium text-foreground">{review.service}</span>
                    </p>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-copper">
                    J&J Client
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Dispatch Notice */}
          <div className="mt-16 rounded-2xl border border-hairline bg-secondary/30 p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-bold">Have an urgent repair or need a second opinion?</h3>
            <p className="mt-2 text-muted-foreground">
              Our technicians arrive with calibrated tools, transparent flat-rate options, and respect for your home.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <CallButton label="Call Dispatch: (434) 206-8795" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Experience 5-Star Mechanical Service in Southside Virginia"
        body="Whether it's an emergency no-heat call at 2 AM or a planned high-efficiency heat pump installation, our local Blackstone team is ready."
      />
    </>
  );
}

