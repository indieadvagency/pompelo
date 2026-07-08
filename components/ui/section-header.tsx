import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-brand" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-balance text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
