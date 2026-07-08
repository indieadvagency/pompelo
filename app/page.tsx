import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeHero } from "@/components/sections/home-hero";
import { PressMarquee } from "@/components/sections/marquee";
import { SectionHeader } from "@/components/ui/section-header";
import { PhilosophyGrid } from "@/components/sections/philosophy";
import { CollectionCard } from "@/components/cards/collection-card";
import { StatsBand } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { InstagramGallery } from "@/components/sections/instagram";
import { Newsletter } from "@/components/sections/newsletter";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { EditorialImage } from "@/components/ui/editorial-image";
import { COLLECTIONS, STATS } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <PressMarquee />

      {/* About / story split */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-p grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <div className="relative">
              <EditorialImage
                label="The Pompelo Atelier"
                caption="Milano · est. our love of childhood"
                palette={["#FFE0DD", "#FF6656"]}
                className="aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-4 max-w-[210px] rounded-blob bg-white p-5 shadow-card sm:-right-6">
                <p className="font-display text-3xl font-extrabold text-brand">15+</p>
                <p className="text-sm text-muted">
                  years crafting clothes children love to grow up in
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeader
              align="left"
              eyebrow="Our Story"
              title="Fashion that grows with every childhood"
              intro="Pompelo was born from a simple belief: that children deserve clothes as thoughtful, comfortable and beautiful as the moments they live in them."
            />
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                From our Milan atelier, we design each collection around real
                movement and real play — pairing premium, skin-friendly fabrics
                with a warm, timeless design language.
              </p>
              <p>
                <strong className="text-ink">Our mission</strong> is to make
                childhood softer, and <strong className="text-ink">our vision</strong>{" "}
                is a wardrobe that's passed down, remembered and loved.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" withArrow>
                Discover our story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-p">
          <SectionHeader
            eyebrow="Our Philosophy"
            title="Six principles woven into everything we make"
            intro="Design decisions guided by comfort, safety and a deep respect for how children actually live."
          />
          <div className="mt-16">
            <PhilosophyGrid />
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-p">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              align="left"
              eyebrow="Collections"
              title="Curated collections for every age & adventure"
              className="max-w-xl"
            />
            <Reveal>
              <Link
                href="/collections"
                className="group inline-flex items-center gap-2 font-semibold text-brand"
              >
                View all collections
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {COLLECTIONS.slice(0, 3).map((c, i) => (
              <CollectionCard key={c.slug} collection={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability stats */}
      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-24 lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full opacity-20 blur-3xl"
          style={{ background: "linear-gradient(120deg,#FA0000,#FF4130)" }}
        />
        <div className="container-p relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center text-brand-light">
              <span className="h-px w-6 bg-brand-light" />
              Sustainability
              <span className="h-px w-6 bg-brand-light" />
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold sm:text-4xl lg:text-[2.75rem]">
              Made responsibly, made to be handed down
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Better materials, kinder production and garments built to last
              across siblings and seasons.
            </p>
          </div>
          <div className="mt-14">
            <StatsBand stats={STATS} variant="brand" />
          </div>
          <div className="mt-12 text-center">
            <Button href="/sustainability" variant="light" withArrow>
              Our commitment
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="container-p">
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted by boutiques and families alike"
          />
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="container-p">
          <SectionHeader
            eyebrow="@pompelo"
            title="Moments from the Pompelo world"
            intro="Follow along for editorial stories, behind-the-scenes and everyday little adventures."
          />
          <div className="mt-14">
            <InstagramGallery />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="pb-16 sm:pb-24 lg:pb-32">
        <div className="container-p">
          <Reveal>
            <Newsletter />
          </Reveal>
        </div>
      </section>
    </>
  );
}
