/**
 * Central site configuration. Update these values to rebrand or
 * point metadata at your production domain.
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://www.lunarglobaltechnologies.com";

const PHONE_RAW = "918755247673";

export const site = {
  name: "Lunar Global Technologies",
  shortName: "Lunar Global",
  legalName: "Lunar Global Technologies",
  founder: "Rajat Pratap Singh",
  domain: "lunarglobaltechnologies.com",
  url: SITE_URL,
  tagline: "Building the future — Web2, Web3 & beyond.",
  description:
    "Lunar Global Technologies is a full-service technology company delivering end-to-end digital products — websites, web apps, mobile apps, blockchain & DeFi platforms, and on-demand product development — for startups, SMEs, and enterprises in India and worldwide.",
  email: "info@lunarglobaltechnologies.com",
  inquiriesEmail: "info@lunarglobaltechnologies.com",
  phone: "+91 87552 47673",
  phoneRaw: PHONE_RAW,
  phoneTel: "+918755247673",
  whatsapp: `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(
    "Hi, I found you on your website and would like to discuss a project."
  )}`,
  location: "India · Serving clients globally",
  social: {
    linkedin: "https://www.linkedin.com/company/lunar-global-technologies",
    x: "https://x.com/lunarglobaltech",
    instagram: "https://www.instagram.com/lunarglobaltechnologies",
    github: "https://github.com/lunarglobaltech",
    telegram: "https://t.me/lunarglobaltech",
  },
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
