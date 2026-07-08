import type { Metadata } from "next";
import { Mail, Phone, MapPin, Handshake } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { ContactForm } from "@/components/sections/contact-form";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { CONTACT, FAQ } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Pompelo for retail partnerships, wholesale enquiries and press. Based in Milan, working worldwide.",
};

const infoCards = [
  {
    icon: Handshake,
    label: "Partnerships",
    value: CONTACT.partnerships,
    href: `mailto:${CONTACT.partnerships}`,
  },
  {
    icon: Mail,
    label: "General",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Studio",
    value: CONTACT.address,
    href: "#map",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's start a conversation"
        intro="Whether you're a boutique, a distributor or a member of the press, we'd love to hear from you."
      />

      <section className="pb-16">
        <div className="container-p grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Info */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {infoCards.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group rounded-blob border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                    <Icon className="h-6 w-6" />
                  </span>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted">
                    {label}
                  </p>
                  <p className="mt-1 font-medium text-ink transition-colors group-hover:text-brand">
                    {value}
                  </p>
                </a>
              ))}
            </div>

            {/* Map */}
            <div
              id="map"
              className="mt-6 overflow-hidden rounded-blob border border-line shadow-card"
            >
              <iframe
                title="Pompelo studio location — Milano"
                src="https://www.google.com/maps?q=Milano%20Italy&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, display: "block" }}
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <div className="container-p">
          <SectionHeader
            eyebrow="FAQ"
            title="Questions, answered"
            intro="A few things partners and parents often ask us."
          />
          <div className="mt-14">
            <Reveal>
              <Accordion items={FAQ} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
