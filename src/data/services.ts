import { HVAC_SERVICES } from "./services-hvac";
import { PLUMBING_SERVICES } from "./services-plumbing";
import { GAS_SERVICES } from "./services-gas";
import { LOCATIONS } from "./locations";
import type { Service, ServiceCategory } from "./types";

export const SERVICES: Service[] = [...HVAC_SERVICES, ...PLUMBING_SERVICES, ...GAS_SERVICES];

export const CATEGORY_LABEL: Record<ServiceCategory, string> = {
  hvac: "HVAC Services",
  plumbing: "Plumbing Services",
  gas: "Gas Services",
};

export const MAJOR_SERVICES = SERVICES.filter((s) => s.major);

export function servicesByCategory(category: ServiceCategory) {
  return SERVICES.filter((s) => s.category === category);
}

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

/** URL is always /{service-slug}-{location-slug}. */
export function pageUrl(serviceSlug: string, locationSlug: string) {
  return `/${serviceSlug}-${locationSlug}`;
}

export interface ParsedPage {
  service: Service;
  location: (typeof LOCATIONS)[number];
}

export function parsePageSlug(slug: string): ParsedPage | null {
  for (const location of LOCATIONS) {
    const suffix = `-${location.slug}`;
    if (slug.endsWith(suffix)) {
      const service = getService(slug.slice(0, -suffix.length));
      if (service) {
        return { service, location };
      }
    }
  }
  return null;
}

/** Every service × location URL, used for the sitemap and internal linking. */
export function allServicePages() {
  const pages: { url: string; service: Service; location: (typeof LOCATIONS)[number] }[] = [];
  for (const location of LOCATIONS) {
    for (const service of SERVICES) {
      pages.push({ url: pageUrl(service.slug, location.slug), service, location });
    }
  }
  return pages;
}

export { LOCATIONS };
export type { Service, ServiceCategory };
