import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { COLLECTIONS } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { EditorialImage } from "@/components/ui/editorial-image";
import { Button } from "@/components/ui/button";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const c = COLLECTIONS.find((x) => x.slug === slug);
  if (!c) return { title: "Collection" };
  return {
    title: `${c.name} Collection`,
    description: c.intro,
  };
}

export default async function CollectionPage({ params }: Params) {
  const { slug } = await params;
  const index = COLLECTIONS.findIndex((c) => c.slug === slug);
  if (index === -1) notFound();
  const c = COLLECTIONS[index];
  const next = COLLECTIONS[(index + 1) % COLLECTIONS.length];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-[72px]">
        <div className="container-p grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-20">
          <Reveal direction="right">
            <div>
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-brand"
              >
                <ArrowLeft className="h-4 w-4" /> All collections
              </Link>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-pill bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand">
                  {c.season}
                </span>
                <span className="text-sm font-medium text-muted">
                  {c.ageRange}
                </span>
              </div>
              <h1 className="mt-5 text-balance text-5xl font-extrabold leading-[1] sm:text-6xl">
                {c.name}
              </h1>
              <p className="mt-3 font-display text-xl text-brand">{c.tagline}</p>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
                {c.intro}
              </p>
            </div>
          </Reveal>
          <Reveal direction="left">
            <EditorialImage
              label={`${c.name} Collection`}
              caption={c.season}
              palette={c.palette}
              className="aspect-[4/5]"
            />
          </Reveal>
        </div>
      </section>

      {/* Story + highlights */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="container-p grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="The Story"
              title="Season inspiration"
            />
            <p className="mt-6 max-w-prose2 text-lg leading-relaxed text-muted">
              {c.story}
            </p>
          </div>
          <div className="rounded-blob border border-line bg-white p-8 shadow-card">
            <h3 className="text-lg font-bold">Collection highlights</h3>
            <ul className="mt-5 space-y-4">
              {c.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-pill bg-success/15 text-success">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-muted">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Editorial gallery */}
      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="container-p">
          <SectionHeader eyebrow="Editorial" title="The lookbook" />
          <RevealGroup className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
            {Array.from({ length: c.gallery }).map((_, i) => (
              <RevealItem
                key={i}
                className={i % 5 === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}
              >
                <EditorialImage
                  index={i}
                  palette={i % 2 === 0 ? c.palette : undefined}
                  rounded="rounded-card"
                  showMark={false}
                  className={i % 5 === 0 ? "aspect-[4/5] md:h-full" : "aspect-square"}
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Fabrics */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="container-p">
          <SectionHeader
            eyebrow="Fabric Details"
            title="Chosen for softness, made to last"
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            {c.fabrics.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-blob border border-line bg-white p-7 shadow-card">
                  <span
                    className="h-10 w-10 rounded-2xl"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${c.palette[0]}, ${c.palette[1]})`,
                    }}
                  />
                  <h3 className="mt-5 text-lg font-bold">{f.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{f.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Next collection */}
      <section className="pb-24">
        <div className="container-p">
          <Link
            href={`/collections/${next.slug}`}
            className="group flex flex-col items-center justify-between gap-6 overflow-hidden rounded-blob bg-ink p-8 text-white shadow-card sm:flex-row sm:p-10"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                Next collection
              </p>
              <p className="mt-2 font-display text-3xl font-bold">{next.name}</p>
              <p className="mt-1 text-white/60">{next.tagline}</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-pill bg-brand-gradient px-6 py-3 font-semibold transition-transform group-hover:translate-x-1">
              Explore <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
