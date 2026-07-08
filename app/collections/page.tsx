import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CollectionCard } from "@/components/cards/collection-card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Newsletter } from "@/components/sections/newsletter";
import { Reveal } from "@/components/ui/reveal";
import { COLLECTIONS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore Pompelo's collections — Newborn, Baby, Girls, Boys and our seasonal capsule. Editorial stories, fabrics and highlights.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title="Every age, every adventure, beautifully dressed"
        intro="From a newborn's first days to a ten-year-old's boldest expeditions — collections designed to be worn, loved and remembered."
      />

      <section className="pb-8">
        <div className="container-p">
          <RevealGroup className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {COLLECTIONS.map((c, i) => (
              <RevealItem key={c.slug}>
                <CollectionCard collection={c} index={i} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="py-16 sm:py-24 lg:py-28">
        <div className="container-p">
          <Reveal>
            <Newsletter />
          </Reveal>
        </div>
      </section>
    </>
  );
}
