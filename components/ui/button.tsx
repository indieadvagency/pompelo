import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-all duration-300 focus-visible:outline-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-soft hover:shadow-lift hover:-translate-y-0.5",
  outline:
    "border border-line bg-white text-ink hover:border-brand hover:text-brand hover:-translate-y-0.5 hover:shadow-soft",
  ghost: "text-ink hover:text-brand",
  light:
    "bg-white/90 text-ink backdrop-blur hover:bg-white hover:-translate-y-0.5 hover:shadow-card",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[0.95rem]",
  lg: "px-8 py-4 text-base",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow = false,
}: ButtonProps) {
  const external = href.startsWith("http");
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );
  const classes = cn(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
