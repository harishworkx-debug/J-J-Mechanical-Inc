import fs from "node:fs";
import path from "node:path";
import { SITE } from "./src/data/site";
import { SERVICES, LOCATIONS } from "./src/data/services";

function generateSitemap() {
  const staticRoutes = [
    "/",
    "/about",
    "/reviews",
    "/blog",
    "/contact",
  ];

  const dynamicRoutes = new Set<string>();

  // Main service pages (all services linked with the primary location 'blackstone-va')
  SERVICES.forEach((service) => {
    dynamicRoutes.add(`/${service.slug}-blackstone-va`);
  });

  // Service areas (only ac-repair for all locations as the main landing page)
  LOCATIONS.forEach((location) => {
    dynamicRoutes.add(`/ac-repair-${location.slug}`);
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
  </url>`
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
