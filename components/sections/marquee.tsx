import { PRESS } from "@/lib/data";

export function PressMarquee() {
  const items = [...PRESS, ...PRESS];
  return (
    <section aria-label="As featured in" className="border-y border-line bg-white py-8">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-lg font-semibold tracking-[0.2em] text-ink/35"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
