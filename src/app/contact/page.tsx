import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/shared/PageHeader";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { faqs } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free quote from Lunar Global Technologies. Tell us about your website, app, or Web3 project — phone, email, and WhatsApp available.",
  alternates: { canonical: "/contact" },
};

const details = [
  { icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phoneTel}` },
  { icon: MessageCircle, label: "WhatsApp", value: site.phone, href: site.whatsapp },
  { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Based in", value: site.location },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something that holds up."
        description="Tell us about the system you need. The harder the problem, the more interested we are."
      />

      <Section className="pt-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Left — details */}
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-cloud">
                Talk to engineers, not a sales funnel.
              </h2>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-mist">
                Every inquiry is read by someone who can actually scope the work.
                Share as much or as little as you like — we&apos;ll take it from there.
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col gap-3">
              {details.map((d, i) => {
                const Icon = d.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-xl border border-line bg-surface/60 p-4 transition-colors hover:border-line-strong">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-line bg-elevated/60">
                      <Icon className="h-5 w-5 text-electric" />
                    </span>
                    <div>
                      <div className="font-mono text-xs uppercase tracking-widest text-faint">
                        {d.label}
                      </div>
                      <div className="mt-0.5 text-cloud">{d.value}</div>
                    </div>
                  </div>
                );
                return (
                  <Reveal key={d.label} delay={i * 0.06}>
                    {d.href ? (
                      <a href={d.href} className="block">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right — form */}
          <Reveal direction="left" delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section size="tight" className="border-t border-line">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold text-cloud sm:text-4xl">
              Frequently asked
            </h2>
            <p className="mt-4 max-w-xs text-pretty text-mist">
              A few things organizations usually want to know before reaching out.
            </p>
          </Reveal>
          <div className="flex flex-col divide-y divide-line border-t border-line">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.06} className="py-6">
                <h3 className="font-display text-lg font-medium text-cloud">{faq.q}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-mist">{faq.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
