import type { Metadata } from "next";
import { MapPin, Globe2, Store, Handshake } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { REGIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Retail Partners",
  description:
    "Pompelo partners with over 240 boutiques and department stores across 20+ countries. Discover our distribution and become a stockist.",
};

const totalPartners = REGIONS.reduce((n, r) => n + r.partners, 0);

// abstract pin positions over the stylised map panel (percentages)
const PINS = [
  { top: "34%", left: "46%" },
  { top: "30%", left: "50%" },
  { top: "40%", left: "48%" },
  { top: "28%", left: "44%" },
  { top: "44%", left: "62%" },
  { top: "38%", left: "78%" },
  { top: "52%", left: "70%" },
  { top: "36%", left: "24%" },
];

const highlights = [
  { icon: Globe2, value: "20+", label: "Countries served" },
  { icon: Store, value: `${totalPartners}`, label: "Retail partners" },
  { icon: Handshake, value: "5", label: "Global regions" },
];

export default function RetailPartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Retail Partners"
        title="A carefully chosen family of stockists worldwide"
        intro="Pompelo lives in beautiful boutiques and considered department stores across the globe — each one chosen for the care they share with our own."
      >
        <Button href="/contact" withArrow>
          Become a partner
        </Button>
      </PageHero>

      {/* Map panel */}
      <section className="pb-8">
        <div className="container-p">
          <Reveal>
            <div className="relative overflow-hidden rounded-blob border border-line bg-white p-6 shadow-card sm:p-10">
              <div
                className="relative aspect-[16/8] w-full overflow-hidden rounded-blob"
                style={{
                  backgroundImage:
                    "radial-gradient(120% 120% at 50% 0%, #FFF6F5, #FFE0DD)",
                }}
              >
                {/* dotted world texture */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(#FA0000 1.2px, transparent 1.2px)",
                    backgroundSize: "18px 18px",
                    opacity: 0.12,
                    maskImage:
                      "radial-gradient(120% 90% at 50% 40%, black 55%, transparent 85%)",
                  }}
                />
                {PINS.map((p, i) => (
                  <span
                    key={i}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ top: p.top, left: p.left }}
                  >
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/40" />
                      <span className="relative inline-flex h-3.5 w-3.5 items-center justify-center rounded-full bg-brand text-white">
                        <MapPin className="h-2.5 w-2.5" />
                      </span>
                    </span>
                  </span>
                ))}
                <div className="absolute bottom-5 left-5 rounded-blob bg-white/90 px-5 py-3 shadow-card backdrop-blur">
                  <p className="font-display text-2xl font-extrabold text-brand">
                    {totalPartners}+
                  </p>
                  <p className="text-xs text-muted">partners & growing</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="container-p">
          <RevealGroup className="grid gap-6 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, value, label }) => (
              <RevealItem
                key={label}
                className="flex items-center gap-4 rounded-blob border border-line bg-white p-6 shadow-card"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-brand">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <p className="font-display text-3xl font-extrabold text-ink">
                    {value}
                  </p>
                  <p className="text-sm text-muted">{label}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Regions */}
      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <div className="container-p">
          <SectionHeader
            eyebrow="Distribution"
            title="Where to find Pompelo"
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REGIONS.map((r) => (
              <RevealItem
                key={r.region}
                className="rounded-blob border border-line bg-cream p-7 shadow-card"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{r.region}</h3>
                  <span className="rounded-pill bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">
                    {r.partners} partners
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {r.countries.map((c) => (
                    <span
                      key={c}
                      className="rounded-pill border border-line bg-white px-3 py-1 text-sm text-muted"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container-p">
          <Reveal>
            <div className="relative overflow-hidden rounded-blob bg-brand-gradient px-6 py-16 text-center text-white shadow-lift sm:px-16">
              <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
                Bring Pompelo to your store
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/85">
                Join a global family of retailers who share our love of quality,
                comfort and childhood. Request our current line sheet and
                wholesale terms.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/contact" variant="light" withArrow>
                  Start a conversation
                </Button>
                <Button
                  href="/media"
                  variant="ghost"
                  className="text-white hover:text-white/80"
                >
                  Download catalog
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
