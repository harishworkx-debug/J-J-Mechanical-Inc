import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { CtaBand, SectionHeading } from "@/components/site/Chrome";
import { REVIEWS, SITE } from "@/data/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | J&J Mechanical" },
      {
        name: "description",
        content:
          "Read local customer reviews for J&J Mechanical HVAC, plumbing and gas service across Southside Virginia.",
      },
      { property: "og:title", content: "J&J Mechanical Customer Reviews" },
      {
        property: "og:description",
        content:
          "Real service experiences from homeowners and businesses across Southside Virginia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <section className="surface-ink py-24 text-center">
        <div className="container-lux">
          <p className="eyebrow text-copper">Local reputation</p>
          <h1 className="mt-4 text-4xl font-semibold text-ink-foreground sm:text-6xl">
            Service people remember for the right reasons.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-foreground/70">
            {SITE.rating} average rating from {SITE.reviewCount}+ local customers.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Customer experiences"
            title="Trusted from Blackstone to Farmville."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {REVIEWS.map((review) => (
              <article key={review.name} className="lux-card p-7">
                <div className="flex gap-1 text-copper">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 leading-8 text-muted-foreground">
                  “{review.text}”
                </blockquote>
                <p className="mt-6 font-semibold">{review.name}</p>
                <p className="text-sm text-muted-foreground">
                  {review.city} · {review.service}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Ready for service you can recommend?"
        body="Call J&J Mechanical for clear communication, measured diagnosis and work completed with care."
      />
    </>
  );
}
