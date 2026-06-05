import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { site, navLinks } from "@/lib/site";
import { services } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";

function SocialIcon({ name }: { name: "linkedin" | "x" | "instagram" | "github" | "telegram" }) {
  const paths: Record<string, React.ReactNode> = {
    instagram: (
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.42-.35 1.04-.4 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.19.22.55.47.94.88 1.35.41.41.8.66 1.35.88.42.16 1.04.35 2.19.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.42.35-1.04.4-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.19a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.42-.16-1.04-.35-2.19-.4-1.24-.06-1.61-.07-4.76-.07zm0 2.76a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6zm0 1.62a3.68 3.68 0 1 0 0 7.36 3.68 3.68 0 0 0 0-7.36zm5.48-.16a1.24 1.24 0 1 1 0 2.48 1.24 1.24 0 0 1 0-2.48z" />
    ),
    telegram: (
      <path d="M22 3.41 18.66 19.5c-.25 1.11-.91 1.39-1.85.86l-5.1-3.76-2.46 2.37c-.27.27-.5.5-1.03.5l.37-5.2 9.46-8.55c.41-.37-.09-.57-.64-.2L5.18 13.05l-5.03-1.57c-1.1-.34-1.12-1.1.23-1.62L20.58 1.93c.91-.34 1.71.2 1.42 1.48z" />
    ),
    linkedin: (
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.78v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46C22.4 7.74 24 10.06 24 14.2V24h-5v-8.7c0-2.07-.74-3.48-2.6-3.48-1.42 0-2.26.95-2.63 1.87-.14.33-.17.79-.17 1.25V24h-5s.07-14.5 0-16z" />
    ),
    x: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.656l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
    ),
    github: (
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.438 9.63 8.205 11.19.6.11.82-.26.82-.57 0-.28-.01-1.02-.015-2-3.338.71-4.042-1.58-4.042-1.58-.546-1.36-1.335-1.72-1.335-1.72-1.087-.73.084-.72.084-.72 1.205.082 1.838 1.215 1.838 1.215 1.07 1.79 2.807 1.273 3.492.973.108-.76.418-1.273.762-1.566-2.665-.296-5.466-1.298-5.466-5.776 0-1.276.465-2.32 1.235-3.138-.135-.295-.54-1.487.105-3.1 0 0 1.005-.31 3.3 1.198a11.6 11.6 0 0 1 3-.39c1.02.005 2.047.135 3 .39 2.28-1.508 3.285-1.198 3.285-1.198.645 1.613.24 2.805.12 3.1.765.818 1.23 1.862 1.23 3.138 0 4.49-2.805 5.476-5.475 5.766.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.91 24 17.495 24 12.29 24 5.78 18.63.5 12 .5z" />
    ),
  };
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]" aria-hidden>
      {paths[name]}
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-2">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-electric/60 to-transparent"
      />
      <div className="container-px mx-auto max-w-7xl py-12 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              {site.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <SocialLink href={site.social.linkedin} label="LinkedIn">
                <SocialIcon name="linkedin" />
              </SocialLink>
              <SocialLink href={site.social.x} label="X">
                <SocialIcon name="x" />
              </SocialLink>
              <SocialLink href={site.social.instagram} label="Instagram">
                <SocialIcon name="instagram" />
              </SocialLink>
              <SocialLink href={site.social.telegram} label="Telegram">
                <SocialIcon name="telegram" />
              </SocialLink>
              <SocialLink href={site.social.github} label="GitHub">
                <SocialIcon name="github" />
              </SocialLink>
            </div>
          </div>

          {/* Navigate */}
          <FooterCol title="Company">
            {navLinks.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Services */}
          <FooterCol title="Services">
            {services.slice(0, 6).map((s) => (
              <FooterLink key={s.slug} href={`/services#${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterCol>

          {/* Contact */}
          <FooterCol title="Get in touch">
            <a
              href={`tel:${site.phoneTel}`}
              className="group inline-flex items-center gap-2 text-sm text-haze transition-colors hover:text-cloud"
            >
              <Phone className="h-4 w-4 text-electric" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 text-sm text-haze transition-colors hover:text-cloud"
            >
              <Mail className="h-4 w-4 text-electric" />
              {site.email}
            </a>
            <span className="inline-flex items-center gap-2 text-sm text-haze">
              <MapPin className="h-4 w-4 text-electric" />
              {site.location}
            </span>
            <Link
              href="/contact"
              className="group mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-electric transition-colors hover:text-electric-bright"
            >
              Get a free quote
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </FooterCol>
        </div>

        {/* Refined wordmark — branded, but not overpowering */}
        <div aria-hidden className="mt-12 select-none overflow-hidden">
          <div className="bg-gradient-to-b from-cloud/[0.08] to-transparent bg-clip-text font-display text-[clamp(3rem,12vw,9rem)] font-bold leading-[0.78] tracking-tighter text-transparent">
            LUNAR
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-sm text-mist sm:flex-row sm:items-center">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-faint">
            {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono text-xs uppercase tracking-widest text-faint">
        {title}
      </h4>
      <div className="mt-4 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="link-underline inline-block w-fit text-sm text-haze transition-colors hover:text-cloud"
    >
      {children}
    </Link>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-mist transition-all hover:border-electric/60 hover:text-cloud"
    >
      {children}
    </a>
  );
}
