import { RevealGroup, RevealItem } from "@/components/ui/reveal";

type Stat = { value: string; label: string };

export function StatsBand({
  stats,
  variant = "light",
}: {
  stats: Stat[];
  variant?: "light" | "brand";
}) {
  const onBrand = variant === "brand";
  return (
    <RevealGroup className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {stats.map((s) => (
        <RevealItem
          key={s.label}
          className={
            onBrand
              ? "rounded-blob bg-white/10 p-6 text-center backdrop-blur"
              : "rounded-blob border border-line bg-white p-6 text-center shadow-card"
          }
        >
          <p
            className={
              onBrand
                ? "font-display text-4xl font-extrabold text-white sm:text-5xl"
                : "bg-brand-gradient bg-clip-text font-display text-4xl font-extrabold text-transparent sm:text-5xl"
            }
          >
            {s.value}
          </p>
          <p
            className={
              onBrand
                ? "mt-3 text-sm leading-snug text-white/80"
                : "mt-3 text-sm leading-snug text-muted"
            }
          >
            {s.label}
          </p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
