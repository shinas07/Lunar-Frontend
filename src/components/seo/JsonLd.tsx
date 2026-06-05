import { site } from "@/lib/site";
import { services } from "@/lib/data";

/**
 * Organization + Website structured data for rich search results.
 * Rendered once in the root layout.
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.legalName,
        alternateName: site.name,
        url: site.url,
        description: site.description,
        email: site.email,
        slogan: site.tagline,
        sameAs: [site.social.linkedin, site.social.x, site.social.github],
        makesOffer: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.tagline },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
