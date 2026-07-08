import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Pompelo collects, uses and protects your information.",
};

const sections = [
  {
    h: "The information we collect",
    p: "When you contact us or subscribe to our updates, we collect the details you choose to share — such as your name, email address and company. We do not sell products directly and do not process payment information on this site.",
  },
  {
    h: "How we use it",
    p: "We use your information solely to respond to your enquiries, manage retail partnerships and, where you've opted in, send occasional brand updates. You can unsubscribe at any time.",
  },
  {
    h: "How we protect it",
    p: "We apply appropriate technical and organisational measures to keep your data secure, and we retain it only for as long as necessary to fulfil the purposes described here.",
  },
  {
    h: "Your rights",
    p: "You may request access to, correction of, or deletion of your personal data at any time by contacting hello@pompelo.com. We will respond in line with applicable data-protection law.",
  },
  {
    h: "Cookies",
    p: "This site uses only essential cookies required for it to function. We do not use tracking cookies for advertising purposes.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="We keep this simple, because your trust matters more than your data."
      />
      <section className="pb-24">
        <div className="container-p mx-auto max-w-3xl">
          <div className="space-y-8 rounded-blob border border-line bg-white p-8 shadow-card sm:p-12">
            {sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-xl font-bold">{s.h}</h2>
                <p className="mt-3 leading-relaxed text-muted">{s.p}</p>
              </div>
            ))}
            <p className="border-t border-line pt-6 text-sm text-muted">
              This policy is provided for informational purposes as part of a
              brand portfolio and should be reviewed by legal counsel before
              production use.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
