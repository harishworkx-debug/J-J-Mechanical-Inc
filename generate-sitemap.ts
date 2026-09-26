import fs from "node:fs";
import path from "node:path";
import { SITE } from "./src/data/site";
import { SERVICES, LOCATIONS, allServicePages } from "./src/data/services";

function generateSitemap() {
  const staticRoutes = ["/", "/about", "/reviews", "/blog", "/contact"];

  const dynamicRoutes = new Set<string>();

  // Add every combination of service + location

  // Add every combination of service + location
  allServicePages().forEach((page) => {
    dynamicRoutes.add(page.url);
  });

  // Blog posts
  const POSTS = [
    { slug: "heat-pump-not-heating" },
    { slug: "ac-repair-or-replace" },
    { slug: "water-heater-warning-signs" },
    { slug: "prevent-frozen-pipes" },
    { slug: "hvac-maintenance-guide" },
  ];
  POSTS.forEach((post) => {
    dynamicRoutes.add(`/blog/${post.slug}`);
  });

  const allRoutes = [...staticRoutes, ...Array.from(dynamicRoutes)];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${SITE.domain}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  const publicDir = path.resolve(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemap, "utf8");

  console.log(`Sitemap generated successfully at ${sitemapPath} with ${allRoutes.length} URLs.`);
}

generateSitemap();
