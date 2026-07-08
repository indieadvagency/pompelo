import { cn } from "@/lib/utils";

/**
 * Pompelo logo mark — an "M"/cat silhouette inspired by the brand icon:
 * rounded shoulders, two little "ears" and two eyes. Rendered in currentColor
 * so it can sit on the brand tile (white) or on cream (brand).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label="Pompelo"
      fill="none"
    >
      <path
        d="M22 78 V44 C22 30 30 22 40 22 C46 22 50 25 50 33 C50 25 54 22 60 22 C70 22 78 30 78 44 V78"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="42" cy="62" rx="4.6" ry="7" fill="currentColor" />
      <ellipse cx="58" cy="62" rx="4.6" ry="7" fill="currentColor" />
    </svg>
  );
}

export function LogoLockup({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "grid h-10 w-10 place-items-center rounded-[13px] shadow-soft",
          invert ? "bg-white text-brand" : "bg-brand-gradient text-white"
        )}
      >
        <LogoMark className="h-7 w-7" />
      </span>
      <span
        className={cn(
          "font-logo text-[1.6rem] font-bold leading-none tracking-tight",
          invert ? "text-white" : "text-brand"
        )}
      >
        Pompelo
      </span>
    </span>
  );
}
