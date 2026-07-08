"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { EditorialImage } from "@/components/ui/editorial-image";

type Shot = { label: string; caption: string; palette: [string, string]; span: string };

const SHOTS: Shot[] = [
  { label: "Morning Light", caption: "Girls · Signature", palette: ["#FF9E93", "#FA0000"], span: "md:col-span-2 md:row-span-2" },
  { label: "First Steps", caption: "Baby · Everyday", palette: ["#FFC9C4", "#FF6656"], span: "" },
  { label: "Quiet Hours", caption: "Newborn · Essentials", palette: ["#FFE0DD", "#FF9E93"], span: "" },
  { label: "The Explorer", caption: "Boys · Signature", palette: ["#FF6656", "#C40000"], span: "md:row-span-2" },
  { label: "Sun-washed", caption: "Seasonal · Limited", palette: ["#FF4130", "#FA0000"], span: "" },
  { label: "Playground", caption: "Girls · Signature", palette: ["#FF9E93", "#FF4130"], span: "" },
  { label: "Golden Field", caption: "Seasonal · Limited", palette: ["#FFC9C4", "#FA0000"], span: "md:col-span-2" },
  { label: "Homebound", caption: "Baby · Everyday", palette: ["#FFE0DD", "#FF6656"], span: "" },
  { label: "Little Wanderer", caption: "Boys · Signature", palette: ["#FF6656", "#FA0000"], span: "" },
];

export function LightboxGallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const move = useCallback(
    (dir: number) =>
      setActive((prev) =>
        prev === null ? prev : (prev + dir + SHOTS.length) % SHOTS.length
      ),
    []
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, move]);

  return (
    <>
      <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
        {SHOTS.map((shot, i) => (
          <button
            key={shot.label}
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden rounded-card text-left focus-visible:outline-none ${shot.span}`}
            aria-label={`Open ${shot.label}`}
          >
            <EditorialImage
              label={shot.label}
              caption={shot.caption}
              palette={shot.palette}
              rounded="rounded-card"
              className="h-full transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-pill bg-white/85 text-ink opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
              <Maximize2 className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm sm:p-8"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={SHOTS[active].label}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-pill bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                move(-1);
              }}
              aria-label="Previous"
              className="absolute left-4 grid h-12 w-12 place-items-center rounded-pill bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                move(1);
              }}
              aria-label="Next"
              className="absolute right-4 grid h-12 w-12 place-items-center rounded-pill bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <EditorialImage
                label={SHOTS[active].label}
                caption={SHOTS[active].caption}
                palette={SHOTS[active].palette}
                className="aspect-[3/4]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
