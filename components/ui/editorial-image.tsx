import { cn } from "@/lib/utils";
import { LogoMark } from "@/components/brand/logo";

/**
 * Editorial image slot. Renders a refined gradient "moodboard" panel styled
 * like a fashion lookbook frame — ready to be swapped for real photography.
 * Deterministic gradient direction/shapes keep the grid feeling curated.
 */
const PAIRS: [string, string][] = [
  ["#FFE0DD", "#FF6656"],
  ["#FFC9C4", "#FA0000"],
  ["#FF9E93", "#FF4130"],
  ["#FFF6F5", "#FF9E93"],
  ["#FF6656", "#C40000"],
];

export function EditorialImage({
  label,
  caption,
  index = 0,
  palette,
  className,
  rounded = "rounded-blob",
  showMark = true,
}: {
  label?: string;
  caption?: string;
  index?: number;
  palette?: [string, string];
  className?: string;
  rounded?: string;
  showMark?: boolean;
}) {
  const [from, to] = palette ?? PAIRS[index % PAIRS.length];
  const angle = 115 + (index % 4) * 20;

  return (
    <div
      className={cn(
        "group relative isolate flex flex-col justify-end overflow-hidden grain",
        rounded,
        className
      )}
      style={{ backgroundImage: `linear-gradient(${angle}deg, ${from}, ${to})` }}
    >
      {/* soft light + organic sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(80% 60% at 25% 15%, rgba(255,255,255,0.45), transparent 60%), radial-gradient(60% 60% at 90% 100%, rgba(0,0,0,0.10), transparent 55%)",
        }}
      />
      {showMark && (
        <LogoMark className="absolute right-5 top-5 h-8 w-8 text-white/45 transition-transform duration-500 group-hover:scale-110" />
      )}
      {(label || caption) && (
        <div className="relative z-10 p-6">
          {label && (
            <p className="font-display text-lg font-bold leading-tight text-white drop-shadow-sm">
              {label}
            </p>
          )}
          {caption && (
            <p className="mt-1 text-sm text-white/80">{caption}</p>
          )}
        </div>
      )}
    </div>
  );
}
