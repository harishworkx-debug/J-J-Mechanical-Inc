import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Clock } from "lucide-react";
import { CtaBand } from "@/components/site/Chrome";

import { POSTS } from "@/data/posts";

export const Route = createFileRoute("/blog/$postSlug")({
  head: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.postSlug);
    const title = post ? post.title : "Home Comfort Advice";
    const description = post
      ? post.excerpt
      : "Practical HVAC and plumbing guidance from local professionals.";
    return {
      meta: [
        { title: `${title} | J&J Mechanical` },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { postSlug } = Route.useParams();
  const post = POSTS.find((p) => p.slug === postSlug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <article className="py-20">
        <div className="container-lux max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-copper">
            <ArrowLeft className="h-4 w-4" />
            All articles
          </Link>
          <p className="mt-12 eyebrow text-copper">{post.category}</p>
          <h1 className="mt-4 text-4xl leading-tight font-semibold sm:text-6xl">{post.title}</h1>
          <p className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />8 minute read <span>•</span>{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}{" "}
            <span>•</span> By {post.author}
          </p>
          <div className="prose-lux mt-12">{post.content}</div>
        </div>
      </article>
      <CtaBand
        title="Need help with a problem in your home?"
        body="Call our local team for a complete diagnosis and clear options."
      />
    </>
  );
}
