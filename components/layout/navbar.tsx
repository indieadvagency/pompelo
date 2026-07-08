"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/data";
import { LogoLockup } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line/70 bg-cream/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="container-p flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="Pompelo home">
          <LogoLockup />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "link-underline text-sm font-medium text-ink/80 transition-colors hover:text-brand",
                  pathname.startsWith(item.href) && "text-brand"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact" size="sm" withArrow>
            Get in touch
          </Button>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-pill border border-line bg-white text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden"
          >
            <div className="container-p pb-6 pt-2">
              <ul className="flex flex-col gap-1 rounded-blob border border-line bg-white p-3 shadow-card">
                <li>
                  <Link
                    href="/"
                    className="block rounded-2xl px-4 py-3 font-medium text-ink hover:bg-cream"
                  >
                    Home
                  </Link>
                </li>
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-2xl px-4 py-3 font-medium text-ink hover:bg-cream",
                        pathname.startsWith(item.href) && "text-brand"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="p-1">
                  <Button href="/contact" className="w-full" withArrow>
                    Get in touch
                  </Button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
