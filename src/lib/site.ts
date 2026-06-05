/**
 * Central site configuration. Update these values to rebrand or
 * point metadata at your production domain.
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://lunar.tech";

export const site = {
  name: "Lunar",
  legalName: "Lunar Technologies",
  domain: "lunar.tech",
  url: SITE_URL,
  tagline: "Software for the next frontier.",
  description:
    "Lunar is a product-focused technology company engineering mission-critical software for governments, enterprises, and telecom operators — from blockchain infrastructure to telecom intelligence platforms.",
  email: "hello@lunar.tech",
  inquiriesEmail: "partnerships@lunar.tech",
  phone: "+1 (415) 000-0000",
  location: "San Francisco · Remote-first",
  social: {
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
    github: "https://github.com/",
  },
  ogImage: "/opengraph-image",
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
