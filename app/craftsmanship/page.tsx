import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { EditorialImage } from "@/components/ui/editorial-image";
import { Button } from "@/components/ui/button";
import { CRAFT_STEPS } from "@/lib/data";
import { Scissors, Feather, ShieldCheck, Repeat } from "lucide-react";

export const metadata: Metadata = {
  title: "Craftsmanship",
  description:
    "How Pompelo makes childrenswear — fabric selection, design, considered construction and rigorous quality assurance.",
};

const qualities = [
  { icon: Feather, title: "Softness", copy: "Fabrics washed and finished to a gentle, skin-loving hand-feel." },
  { icon: Scissors, title: "Precision", copy: "Patterns refined across dozens of real fittings for a true fit." },
  { icon: ShieldCheck, title: "Safety", copy: "Certified materials, free from harmful substances, tested rigorously." },
  { icon: Repeat, title: "Longevity", copy: "Reinforced construction engineered to be handed down." },
];

export default function CraftsmanshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Craftsmanship"
        title="The quiet art behind every garment"
        intro="Comfort you can feel and quality you can trust — the result of a process we refuse to rush."
      />

      {/* Intro split */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container-p grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <EditorialImage
              label="Made by hand, made with heart"
              caption="Our atelier · Milano"
              palette={["#FFC9C4", "#FF6656"]}
              className="aspect-[4/5]"
            />
          </Reveal>
          <div>
            <SectionHeader
              align="left"
              eyebrow="Our Approach"
              title="Where comfort is engineered, not assumed"
            />
            <p className="mt-6 leading-relaxed text-muted">
              Great childrenswear is invisible in the best way — a child never
              thinks about what they're wearing, they simply play. Achieving
              that takes obsessive attention to the things you don't see: the
              flatness of a seam, the give of a waistband, the roundness of a
              collar against a small neck.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              We work with heritage mills and long-standing partner ateliers,
              choosing craft over speed at every turn.
            </p>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <div className="container-p">
          <SectionHeader
            eyebrow="The Process"
            title="From fibre to finished garment"
          />
          <div className="relative mx-auto mt-16 max-w-3xl">
            <span
              aria-hidden
              className="absolute left-[27px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line sm:block"
            />
            <RevealGroup className="space-y-8">
              {CRAFT_STEPS.map((s) => (
                <RevealItem key={s.step}>
                  <div className="flex gap-5 sm:gap-7">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-gradient font-display text-lg font-bold text-white shadow-soft">
                      {s.step}
                    </span>
                    <div className="rounded-blob border border-line bg-cream p-6 shadow-card">
                      <h3 className="text-xl font-bold">{s.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted">{s.copy}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* Qualities */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container-p">
          <SectionHeader
            eyebrow="What you feel"
            title="Four things every Pompelo piece promises"
          />
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qualities.map(({ icon: Icon, title, copy }) => (
              <RevealItem
                key={title}
                className="rounded-blob border border-line bg-white p-7 text-center shadow-card"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent text-brand">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="mt-14 text-center">
            <Button href="/sustainability" withArrow>
              See our sustainability commitment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
