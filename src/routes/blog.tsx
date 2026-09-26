import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { CtaBand, Eyebrow } from "@/components/site/Chrome";
import { img } from "@/lib/images";

import { POSTS } from "@/data/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "HVAC & Plumbing Advice | J&J Mechanical" },
      {
        name: "description",
        content:
          "Practical HVAC, plumbing and gas advice for homeowners across Blackstone and Southside Virginia.",
      },
      { property: "og:title", content: "J&J Mechanical Home Service Advice" },
      {
        property: "og:description",
        content: "Expert local guidance for safer, more comfortable and efficient homes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden surface-ink py-28">
        <img
          src={img("blog-hero")}
          alt="J&J Mechanical technician explaining a smart thermostat to a homeowner"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-ink/80" />
        <div className="container-lux max-w-4xl">
          <Eyebrow>Home service field notes</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold text-ink-foreground sm:text-6xl">
            Straight answers for safer, more comfortable homes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-foreground/70">
            Practical guidance from technicians who work on Southside Virginia homes every day.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="container-lux grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <article key={post.slug} className="lux-card flex flex-col p-7">
              <p className="eyebrow text-copper">{post.category}</p>
              <h2 className="mt-4 text-2xl leading-tight font-semibold">{post.title}</h2>
              <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
              <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-4 w-4" />
                {6 + i} minute read
              </p>
              <Link
                to="/blog/$postSlug"
                params={{ postSlug: post.slug }}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CtaBand
        title="A guide cannot diagnose the system in front of you."
        body="When you need a confident answer, call J&J Mechanical for measured diagnosis and clear options."
      />
    </>
  );
}
