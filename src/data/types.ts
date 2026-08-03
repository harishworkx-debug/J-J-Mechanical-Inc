export type ServiceCategory = "hvac" | "plumbing" | "gas";

export interface Section {
  h: string;
  p: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  short: string;
  category: ServiceCategory;
  image: string;
  imageAlt: string;
  tagline: string;
  intro: string[];
  sections: Section[];
  benefits: string[];
  signs: string[];
  faqs: Faq[];
  major?: boolean;
}

export interface Location {
  slug: string;
  name: string;
  full: string;
  county: string;
  zips: string[];
  drive: string;
  intro: string[];
  landmarks: string[];
  housing: string;
  climate: string;
  faqs: Faq[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  sections: Section[];
}
