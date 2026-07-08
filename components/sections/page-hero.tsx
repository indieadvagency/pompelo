import { Reveal } from "@/components/ui/reveal";
import { Blob } from "@/components/ui/blobs";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden pt-[72px]", className)}>
      <Blob className="left-[-6rem] top-[2rem] h-72 w-72" from="#FFE0DD" to="#FF9E93" />
      <Blob
        className="right-[-5rem] top-[6rem] h-64 w-64"
        from="#FFC9C4"
        to="#FF6656"
        float="animate-float-slow"
      />
      <div className="container-p relative py-16 text-center sm:py-24">
        <Reveal>
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-brand" />
            {eyebrow}
            <span className="h-px w-6 bg-brand" />
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
              {intro}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {children}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
