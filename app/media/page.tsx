import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { SectionHeader } from "@/components/ui/section-header";
import { RevealGroup, RevealItem, Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MEDIA_ASSETS, PRESS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Media Center",
  description:
    "Download the Pompelo company profile, brand guidelines, logo package, catalog and press kit. Resources for press and partners.",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media Center"
        title="Everything you need to tell our story"
        intro="Brand assets, catalogs and press resources for retail partners, journalists and collaborators — all in one place."
      />

      <section className="pb-8">
        <div className="container-p">
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MEDIA_ASSETS.map((asset) => (
              <RevealItem
                key={asset.title}
                className="group flex flex-col rounded-blob border border-line bg-white p-7 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-brand">
                    <FileText className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-medium text-muted">
                    {asset.meta}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold">{asset.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted">
                  {asset.description}
                </p>
                <button className="mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-pill border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors group-hover:border-brand group-hover:text-brand">
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Press */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="container-p">
          <SectionHeader
            eyebrow="Press"
            title="As featured in"
            intro="Pompelo has been celebrated by publications who share our love of design and childhood."
          />
          <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {PRESS.map((name) => (
              <span
                key={name}
                className="font-display text-lg font-semibold tracking-[0.18em] text-ink/40"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Press contact */}
      <section className="pb-24">
        <div className="container-p">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-blob border border-line bg-cream p-8 text-center shadow-card sm:flex-row sm:text-left">
              <div>
                <h2 className="text-2xl font-bold">Press & media enquiries</h2>
                <p className="mt-2 text-muted">
                  For interviews, samples or high-resolution imagery, our team is
                  happy to help.
                </p>
              </div>
              <Button href="/contact" withArrow>
                Contact the team
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
