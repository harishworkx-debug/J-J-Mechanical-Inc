import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Phone, CheckCircle2, BookOpen } from "lucide-react";
import { CallButton, CtaBand, Eyebrow } from "@/components/site/Chrome";
import { POSTS } from "@/data/posts";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/blog/$postSlug")({
  head: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.postSlug);
    const title = post ? `${post.title} | J&J Mechanical` : "HVAC & Plumbing Advice | J&J Mechanical";
    const description = post
      ? post.excerpt
      : "Practical HVAC and plumbing guidance from local professionals in Blackstone and Southside Virginia.";
    const canonicalUrl = `${SITE.domain}/blog/${params.postSlug}`;

    const schema = post
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              author: {
                "@type": "Organization",
                name: post.author || "J&J Mechanical",
                url: SITE.domain,
              },
              publisher: {
                "@type": "HVACBusiness",
                name: "J&J Mechanical",
                url: SITE.domain,
                logo: `${SITE.domain}/favicon.png`,
              },
              datePublished: post.date,
              mainEntityOfPage: canonicalUrl,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: SITE.domain,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: `${SITE.domain}/blog`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.title,
                  item: canonicalUrl,
                },
              ],
            },
          ],
        }
      : null;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonicalUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [
        { rel: "canonical", href: canonicalUrl },
      ],
      scripts: schema
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify(schema),
            },
          ]
        : [],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { postSlug } = Route.useParams();
  const post = POSTS.find((p) => p.slug === postSlug);

  if (!post) {
    return (
      <section className="py-28 text-center">
        <div className="container-lux max-w-xl">
          <h1 className="text-4xl font-semibold">Article Not Found</h1>
          <p className="mt-4 text-muted-foreground">
            The guide you are looking for has been moved or updated.
          </p>
          <Link to="/blog" className="mt-6 inline-flex items-center gap-2 font-bold text-copper">
            <ArrowLeft className="h-4 w-4" /> Return to all articles
          </Link>
        </div>
      </section>
    );
  }

  // Related posts
  const otherPosts = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="py-16 lg:py-24">
        <div className="container-lux max-w-4xl">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[18rem] sm:max-w-md">{post.title}</span>
          </nav>

          <div className="mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold text-copper hover:underline uppercase tracking-wider"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to All Field Guides
            </Link>
          </div>

          <div className="mt-6">
            <Eyebrow>{post.category.toUpperCase()} GUIDE</Eyebrow>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-hairline py-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-copper" />
                By {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-copper" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-copper" />
                7 min read
              </span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose-lux mt-10">
            {post.content}
          </div>

          {/* Direct Expert Assistance Box */}
          <div className="mt-14 rounded-2xl border border-copper/30 surface-ink p-7 text-ink-foreground lg:p-8">
            <p className="eyebrow text-copper">Need On-Site Diagnostics?</p>
            <h3 className="mt-2 text-2xl font-semibold text-ink-foreground">
              Have a technician test your system directly.
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink-foreground/75">
              Online guides provide great context, but heating, cooling, and plumbing systems require physical instrument testing to diagnose accurately. J&J Mechanical provides upfront flat-rate pricing and 24/7 emergency response across Blackstone, Farmville, Crewe, and Victoria.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <CallButton label="Call (434) 206-8795" />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 px-6 py-3.5 text-sm font-semibold text-ink-foreground hover:bg-ink-foreground/10"
              >
                Schedule Online <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* More Articles */}
          <div className="mt-20 border-t border-hairline pt-12">
            <div className="flex items-center justify-between">
              <div>
                <p className="eyebrow text-copper">Continue Reading</p>
                <h3 className="mt-1 text-2xl font-semibold">Related Guides & Advice</h3>
              </div>
              <Link to="/blog" className="hidden text-sm font-bold text-copper hover:underline sm:inline-flex items-center gap-1">
                View all articles <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {otherPosts.map((p) => (
                <article key={p.slug} className="lux-card flex flex-col justify-between p-6">
                  <div>
                    <span className="text-xs font-bold text-copper uppercase">{p.category}</span>
                    <h4 className="mt-2 text-base font-semibold leading-snug">
                      <Link to="/blog/$postSlug" params={{ postSlug: p.slug }} className="hover:text-copper transition-colors">
                        {p.title}
                      </Link>
                    </h4>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground line-clamp-2">{p.excerpt}</p>
                  </div>
                  <div className="mt-4 border-t border-hairline pt-3">
                    <Link
                      to="/blog/$postSlug"
                      params={{ postSlug: p.slug }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-copper hover:underline"
                    >
                      Read Guide <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CtaBand
        title="Need help with a mechanical problem in your home?"
        body="Call our local team for a complete diagnosis, measured readings, and clear upfront options."
      />
    </>
  );
}
