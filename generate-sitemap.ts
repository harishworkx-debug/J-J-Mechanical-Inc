import fs from "node:fs";
import path from "node:path";
import { SITE } from "./src/data/site";
import { allServicePages } from "./src/data/services";
import { POSTS } from "./src/data/posts";

function generateSitemap() {
  const staticRoutes = ["/", "/about", "/reviews", "/blog", "/contact"];

  const dynamicRoutes = new Set<string>();

  // Service × Location combinations
  allServicePages().forEach((page) => {
    dynamicRoutes.add(page.url);
  });

  // Individual blog posts
  POSTS.forEach((post) => {
    dynamicRoutes.add(`/blog/${post.slug}`);
  });

  const allRoutes = [...staticRoutes, ...Array.from(dynamicRoutes)];
  const today = new Date().toISOString().split("T")[0];

  // Google for Developers compliant format:
  // Google ignores <priority> and <changefreq>. Only clean <loc> and <lastmod> are used.
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${SITE.domain}${route}</loc>
    <lastmod>${today}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  const publicDir = path.resolve(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemap, "utf8");

  console.log(`Sitemap generated successfully at ${sitemapPath} with ${allRoutes.length} clean canonical URLs.`);
}

generateSitemap();
