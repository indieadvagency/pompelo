import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { EditorialImage } from "@/components/ui/editorial-image";
import { Button } from "@/components/ui/button";
import { Compass, Target, Gem } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, mission and vision behind Pompelo — premium childrenswear designed in Milan with warmth, comfort and craft.",
};

const pillars = [
  {
    icon: Compass,
    title: "Our Vision",
    copy: "A world where children's clothing is cherished, handed down and remembered — where quality and kindness outlast every trend.",
  },
  {
    icon: Target,
    title: "Our Mission",
    copy: "To make childhood softer: designing comfortable, safe and beautiful garments that support play, discovery and growth.",
  },
  {
    icon: Gem,
    title: "Our Values",
    copy: "Comfort first, premium materials, honest craft and a warm, family-focused spirit in every decision we make.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Pompelo"
        title="A children's fashion house with a warm European soul"
        intro="Founded in Milan, Pompelo brings together premium craft and playful design to dress the most precious years of life."
      >
        <Button href="/collections" withArrow>
          Explore Collections
        </Button>
        <Button href="/craftsmanship" variant="outline">
          Our Craft
        </Button>
      </PageHero>

      {/* Story split */}
      <section id="story" className="py-14 sm:py-20 lg:py-28">
        <div className="container-p grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <EditorialImage
              label="Where it begins"
              caption="Our Milan design studio"
              palette={["#FFC9C4", "#FA0000"]}
              className="aspect-[4/5]"
            />
          </Reveal>
          <div>
            <SectionHeader
              align="left"
              eyebrow="Our Story"
              title="Born from a love of childhood"
            />
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                Pompelo began with a small idea and a big feeling — that the
                clothes children wear during their most formative years should
                be as thoughtful as the memories made in them.
              </p>
              <p>
                We started in a modest Milanese studio, obsessing over the
                softness of a seam and the exact roundness of a collar. That
                obsession never left. Today, our collections travel to hundreds
                of boutiques across the world, but the heart of Pompelo remains
                the same: warmth, comfort and craft.
              </p>
              <p>
                Every piece we design carries a quiet promise — to be gentle on
                the skin, generous with movement, and beautiful enough to keep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <div className="container-p">
          <SectionHeader
            eyebrow="What guides us"
            title="Purpose stitched into every collection"
          />
          <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, copy }) => (
              <RevealItem
                key={title}
                className="rounded-blob border border-line bg-cream p-8 shadow-card"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{copy}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Signature quote */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container-p">
          <Reveal>
            <div className="relative overflow-hidden rounded-blob bg-brand-gradient px-6 py-16 text-center text-white shadow-lift sm:px-16">
              <p className="mx-auto max-w-3xl text-balance font-display text-2xl font-semibold leading-relaxed sm:text-3xl">
                “We don't design clothes for children. We design the softest
                backdrop for their biggest, smallest and most unforgettable
                moments.”
              </p>
              <p className="mt-6 text-white/80">— The Pompelo Founders</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
