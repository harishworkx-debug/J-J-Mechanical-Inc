import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { CtaBand, Eyebrow } from "@/components/site/Chrome";
import { img } from "@/lib/images";
import { POSTS } from "@/data/posts";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "HVAC & Plumbing Advice | J&J Mechanical Blog" },
      {
        name: "description",
        content:
          "Practical HVAC, heat pump, plumbing and gas advice for homeowners across Blackstone, Crewe, Farmville and Southside Virginia.",
      },
      { property: "og:title", content: "HVAC & Plumbing Advice | J&J Mechanical Blog" },
      {
        property: "og:description",
        content:
          "Practical HVAC, heat pump, plumbing and gas advice for homeowners across Blackstone, Crewe, Farmville and Southside Virginia.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE.domain}/blog` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE.domain}/blog` }],
  }),
  component: BlogListingPage,
});

function BlogListingPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden surface-ink py-24 lg:py-28">
        <img
          src={img("blog-hero")}
          alt="J&J Mechanical technician explaining heating and cooling system maintenance"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-ink/80 backdrop-blur-[2px]" />
        <div className="container-lux max-w-4xl animate-lux-rise">
          <Eyebrow>Home Service Field Notes</Eyebrow>
          <h1 className="mt-4 text-4xl leading-tight font-semibold text-ink-foreground sm:text-6xl">
            Straight answers for safer, more comfortable homes.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-foreground/80 sm:text-xl">
            Practical guidance and mechanical troubleshooting from technicians who service Southside Virginia homes every day.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-lux">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-copper" />
            <p className="eyebrow text-copper">Featured Articles</p>
          </div>
          <h2 className="mt-2 text-3xl font-semibold">Latest Advice & Guides</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post, i) => (
              <article
                key={post.slug}
                className="lux-card flex flex-col justify-between p-7 transition-all hover:border-copper/40"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-copper uppercase">{post.category}</span>
                    <span className="text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold leading-snug">
                    <Link
                      to="/blog/$postSlug"
                      params={{ postSlug: post.slug }}
                      className="hover:text-copper transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                </div>

                <div className="mt-6 border-t border-hairline pt-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {6 + i} min read
                    </span>
                    <Link
                      to="/blog/$postSlug"
                      params={{ postSlug: post.slug }}
                      className="inline-flex items-center gap-1.5 font-bold text-copper hover:underline"
                    >
                      Read Guide <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="A guide cannot diagnose the system in front of you."
        body="When you need a confident, measurement-verified answer, call J&J Mechanical at (434) 206-8795 for prompt local dispatch."
      />
    </>
  );
}
