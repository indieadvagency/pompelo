"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Send } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-blob bg-brand-gradient px-6 py-14 text-center shadow-lift sm:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-black/10 blur-xl"
      />
      <div className="relative mx-auto max-w-xl">
        <h2 className="text-balance text-3xl font-bold text-white sm:text-4xl">
          Stories from the Pompelo world
        </h2>
        <p className="mt-4 text-white/85">
          New collections, editorial features and partner news — a few times a
          season, never more.
        </p>

        {done ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto mt-8 inline-flex items-center gap-2 rounded-pill bg-white px-6 py-3 font-semibold text-brand"
          >
            <Check className="h-5 w-5" /> You're on the list — welcome!
          </motion.div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.includes("@")) setDone(true);
            }}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="nl-email" className="sr-only">
              Email address
            </label>
            <input
              id="nl-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-pill border border-white/30 bg-white/95 px-5 py-3.5 text-ink placeholder:text-muted focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-ink px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Subscribe <Send className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
