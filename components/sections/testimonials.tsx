"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [i, setI] = useState(0);
  const go = (dir: number) =>
    setI((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  const t = TESTIMONIALS[i];

  return (
    <div className="relative mx-auto max-w-3xl text-center">
      <Quote className="mx-auto h-10 w-10 text-brand/25" />
      <div className="relative mt-6 min-h-[210px] sm:min-h-[180px]">
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <blockquote className="text-balance font-display text-xl font-medium leading-relaxed text-ink sm:text-2xl">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6">
              <span className="block font-semibold text-ink">{t.name}</span>
              <span className="text-sm text-muted">{t.role}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="grid h-11 w-11 place-items-center rounded-pill border border-line bg-white text-ink transition-colors hover:border-brand hover:text-brand"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              aria-current={idx === i}
              className="grid h-11 w-6 place-items-center"
            >
              <span
                className={cn(
                  "h-2 rounded-pill transition-all duration-300",
                  idx === i ? "w-7 bg-brand" : "w-2 bg-line"
                )}
              />
            </button>
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="grid h-11 w-11 place-items-center rounded-pill border border-line bg-white text-ink transition-colors hover:border-brand hover:text-brand"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
