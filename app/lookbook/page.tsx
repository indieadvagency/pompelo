import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { LightboxGallery } from "@/components/sections/lightbox-gallery";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Lookbook",
  description:
    "Step inside the Pompelo lookbook — an editorial gallery of our collections, shot like a story worth remembering.",
};

export default function LookbookPage() {
  return (
    <>
      <PageHero
        eyebrow="Lookbook"
        title="An editorial world, one frame at a time"
        intro="Tap any image to step into a fullscreen view. A magazine-style journey through the seasons of Pompelo."
      />

      <section className="pb-16">
        <div className="container-p">
          <Reveal>
            <LightboxGallery />
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 lg:pb-28">
        <div className="container-p">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-blob border border-line bg-white p-8 text-center shadow-card sm:flex-row sm:text-left">
              <div>
                <h2 className="text-2xl font-bold">Prefer it in print?</h2>
                <p className="mt-2 text-muted">
                  Download the full-season lookbook and line sheet from our
                  Media Center.
                </p>
              </div>
              <Button href="/media" withArrow>
                Media Center
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
