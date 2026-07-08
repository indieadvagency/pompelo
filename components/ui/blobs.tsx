import { cn } from "@/lib/utils";

/** Soft organic background shape inspired by the rounded logo geometry. */
export function Blob({
  className,
  from = "#FFE0DD",
  to = "#FF9E93",
  float = "animate-float",
}: {
  className?: string;
  from?: string;
  to?: string;
  float?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={cn("absolute -z-10 blur-[2px] opacity-70", float, className)}
    >
      <defs>
        <linearGradient id={`g-${from}-${to}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <path
        fill={`url(#g-${from}-${to})`}
        d="M45.8,-59.6C58.4,-51.3,66.7,-36.3,70.6,-20.3C74.5,-4.4,74,12.6,67.1,26.6C60.2,40.6,46.9,51.6,32.2,59.3C17.5,67,1.4,71.4,-14.9,69.9C-31.2,68.4,-47.7,61,-58.6,48.4C-69.5,35.8,-74.8,18,-74.6,0.2C-74.4,-17.6,-68.7,-35.1,-57.4,-43.8C-46.1,-52.5,-29.2,-52.3,-13.9,-56.7C1.5,-61.1,15.3,-70.1,29.5,-70.2C43.7,-70.3,58.3,-61.4,45.8,-59.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/** Tiny decorative dot pattern block. */
export function DotGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("h-24 w-24", className)}
      style={{
        backgroundImage: "radial-gradient(#FA0000 1.4px, transparent 1.4px)",
        backgroundSize: "14px 14px",
        opacity: 0.18,
      }}
    />
  );
}
