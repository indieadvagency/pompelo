import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { StatsBand } from "@/components/sections/stats";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { EditorialImage } from "@/components/ui/editorial-image";
import { Button } from "@/components/ui/button";
import { SUSTAINABILITY_VALUES, STATS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Pompelo's commitment to safe materials, ethical production, quality assurance and environmental responsibility.",
};

const commitments = [
  "OEKO-TEX® and organic-certified fabrics",
  "Fair-wage, safe partner ateliers",
  "Reduced-water, low-impact dyeing",
  "Plastic-free, recyclable packaging",
  "Durability testing on every style",
  "A growing circular take-back programme",
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Kinder to skin, kinder to the planet"
        intro="We believe the clothes of childhood should leave the lightest footprint — and last long enough to be loved twice."
      />

      {/* Stats on brand band */}
      <section className="pb-8">
        <div className="container-p">
          <Reveal>
            <div className="relative overflow-hidden rounded-blob bg-ink px-6 py-14 sm:px-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-25 blur-3xl"
                style={{ background: "linear-gradient(120deg,#FA0000,#FF4130)" }}
              />
              <div className="relative">
                <StatsBand stats={STATS} variant="brand" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container-p">
          <SectionHeader
            eyebrow="Our Commitment"
            title="Four promises, held to account"
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2">
            {SUSTAINABILITY_VALUES.map(({ icon: Icon, title, copy }) => (
              <RevealItem
                key={title}
                className="flex gap-5 rounded-blob border border-line bg-white p-7 shadow-card"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                  <Icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{copy}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Story split with checklist */}
      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <div className="container-p grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Built to be handed down"
              title="The most sustainable garment is the one that's worn again"
            />
            <p className="mt-6 leading-relaxed text-muted">
              Longevity is our first sustainability strategy. We engineer every
              piece to survive siblings, seasons and hundreds of washes — because
              a garment loved twice is worth two made once.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {commitments.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-ink">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href="/craftsmanship" variant="outline" withArrow>
                How we make it
              </Button>
            </div>
          </div>
          <Reveal direction="left">
            <EditorialImage
              label="Loved twice"
              caption="Circular by design"
              palette={["#FFE0DD", "#34A853"]}
              className="aspect-[4/5]"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
