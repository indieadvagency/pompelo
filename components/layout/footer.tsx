import Link from "next/link";
import { Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { LogoLockup } from "@/components/brand/logo";
import { CONTACT } from "@/lib/data";

const columns = [
  {
    title: "Brand",
    links: [
      { label: "About Pompelo", href: "/about" },
      { label: "Our Story", href: "/about#story" },
      { label: "Craftsmanship", href: "/craftsmanship" },
      { label: "Sustainability", href: "/sustainability" },
    ],
  },
  {
    title: "Collections",
    links: [
      { label: "Newborn", href: "/collections/newborn" },
      { label: "Baby", href: "/collections/baby" },
      { label: "Girls", href: "/collections/girls" },
      { label: "Boys", href: "/collections/boys" },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Retail Partners", href: "/retail-partners" },
      { label: "Media Center", href: "/media" },
      { label: "Lookbook", href: "/lookbook" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-20 blur-2xl"
        style={{ background: "linear-gradient(120deg,#FA0000,#FF4130)" }}
      />
      <div className="container-p relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <LogoLockup invert />
            <p className="mt-5 leading-relaxed text-white/60">
              Comfortable, playful, premium fashion for every childhood
              adventure. Designed in Milan, worn everywhere.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-pill border border-white/15 text-white/80 transition-colors hover:border-brand hover:text-brand"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-pill border border-white/15 text-white/80 transition-colors hover:border-brand hover:text-brand"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                {col.title}
              </h4>
              <ul className="mt-3 space-y-1">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex min-h-[40px] items-center gap-1 text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center">
          <p className="py-2">© {new Date().getFullYear()} Pompelo. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6">
            <Link href="/privacy" className="inline-flex min-h-[40px] items-center hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="inline-flex min-h-[40px] items-center hover:text-white">
              Contact
            </Link>
            <span className="py-2">Made with care in Milano</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
