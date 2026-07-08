import { PHILOSOPHY } from "@/lib/data";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";

export function PhilosophyGrid() {
  return (
    <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {PHILOSOPHY.map(({ icon: Icon, title, copy }) => (
        <RevealItem
          key={title}
          className="group relative overflow-hidden rounded-blob border border-line bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
        >
          <div
            aria-hidden
            className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/60 transition-transform duration-500 group-hover:scale-125"
          />
          <div className="relative">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-soft">
              <Icon className="h-7 w-7" />
            </span>
            <h3 className="mt-6 text-xl font-bold text-ink">{title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{copy}</p>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
