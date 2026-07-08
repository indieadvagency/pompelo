"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const inputCls =
  "w-full rounded-2xl border border-line bg-cream px-4 py-3 text-ink placeholder:text-muted/70 transition-colors focus:border-brand focus:bg-white focus:outline-none";

const topics = [
  "Retail partnership",
  "Wholesale enquiry",
  "Press & media",
  "General enquiry",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-blob border border-line bg-white p-12 text-center shadow-card"
      >
        <span className="grid h-16 w-16 place-items-center rounded-pill bg-success/15 text-success">
          <Check className="h-8 w-8" />
        </span>
        <h3 className="mt-6 text-2xl font-bold">Thank you for reaching out</h3>
        <p className="mt-3 max-w-sm text-muted">
          Your message is on its way. Our team will get back to you within two
          working days.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-blob border border-line bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
            Full name
          </label>
          <input id="name" name="name" required placeholder="Jane Doe" className={inputCls} />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-ink">
            Company <span className="text-muted">(optional)</span>
          </label>
          <input id="company" name="company" placeholder="Boutique name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="topic" className="mb-2 block text-sm font-medium text-ink">
            Topic
          </label>
          <select id="topic" name="topic" className={inputCls} defaultValue={topics[0]}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about your enquiry…"
          className={inputCls}
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-brand-gradient px-8 py-4 font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift sm:w-auto"
      >
        Send message
      </button>
      <p className="mt-4 text-xs text-muted">
        By submitting this form you agree to our Privacy Policy. We'll only use
        your details to respond to your enquiry.
      </p>
    </form>
  );
}
