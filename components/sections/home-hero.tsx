"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Photo-backed hero card. Fills the card with a lifestyle image (object-cover),
 * adds a subtle bottom readability gradient, and zooms gently on hover.
 * Keeps the same rounded-blob / shadow-lift language as the rest of the UI.
 * `focus` tunes object-position so faces stay in frame across breakpoints.
 */
function PhotoCard({
  src,
  alt,
  label,
  focus = "center",
}: {
  src: string;
  alt: string;
  label: string;
  focus?: string;
}) {
  return (
    <div
      className="group relative aspect-[3/4] overflow-hidden rounded-blob shadow-lift"
      style={{ backgroundImage: "linear-gradient(135deg,#FF9E93,#FA0000)" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1024px) 62vw, 300px"
        style={{ objectPosition: focus }}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="font-display text-lg font-bold leading-tight text-white drop-shadow-sm">
          {label}
        </p>
      </div>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-[72px]">
      {/* organic background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 85% 10%, #FFE0DD 0%, transparent 60%), radial-gradient(50% 45% at 5% 30%, #FFEFEE 0%, transparent 55%)",
        }}
      />
      <div className="container-p relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-pill border border-line bg-white px-4 py-2 text-xs font-medium text-ink shadow-soft sm:text-sm"
          >
            <Sparkles className="h-4 w-4 shrink-0 text-brand" />
            Premium childrenswear · Designed in Milan
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.08 }}
            className="mt-6 text-balance text-5xl font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl"
          >
            Growing with{" "}
            <span className="relative whitespace-nowrap">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Style
              </span>
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-brand/40"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C40 3 160 3 198 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
            className="mt-7 max-w-lg text-pretty text-lg leading-relaxed text-muted"
          >
            Designing comfortable, playful fashion for every childhood
            adventure — crafted with premium fabrics and a warm, European soul.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/collections" size="lg" withArrow>
              Explore Collections
            </Button>
            <Button href="/about" variant="outline" size="lg">
              Our Story
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {["#FF6656", "#FF9E93", "#FA0000", "#FFC9C4"].map((c) => (
                <span
                  key={c}
                  className="h-9 w-9 rounded-full border-2 border-white"
                  style={{ background: c }}
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted">
                Loved by 280+ boutiques across 20 countries
              </p>
            </div>
          </motion.div>
        </div>

        {/* Floating editorial composition */}
        <div className="relative mx-auto h-[440px] w-full max-w-md lg:h-[560px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="absolute left-0 top-4 w-[62%]"
          >
            <div className="animate-float">
              <PhotoCard
                src="/images/girls-signature.jpg"
                alt="Two children reading a book together in Pompelo"
                label="Girls · Signature"
                focus="center 30%"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
            className="absolute bottom-2 right-0 w-[56%]"
          >
            <div className="animate-float-slow">
              <PhotoCard
                src="/images/baby-everyday.jpg"
                alt="Smiling baby lying on a bed in Pompelo"
                label="Baby · Everyday"
                focus="center 25%"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
            className="absolute right-6 top-0 rounded-blob bg-white px-5 py-4 shadow-card"
          >
            <p className="font-display text-2xl font-extrabold text-brand">100%</p>
            <p className="text-xs text-muted">Certified soft cotton</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
