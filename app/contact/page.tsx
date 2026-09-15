import type { Metadata } from "next";
import ContactHero from "@/components/Contact/ContactHero";
import ContactForm from "@/components/Contact/ContactForm";
import ContactSecondary from "@/components/Contact/ContactSecondary";
import s from "@/components/Contact/Contact.module.css";

export const metadata: Metadata = {
  title: "Contact | LSeT Foundation",
  description:
    "Tell us what you're trying to do. We answer every message within five working days.",
};

/**
 * Figma `7 · Contact us`, node 1993:3270 — content area only. The nav bar and
 * the footer come from the root layout unchanged; Figma draws both inside this
 * frame, but they are the site's own and are not rebuilt here.
 *
 * No <MeshField>: this is the one page with no light run to put one behind.
 * The whole surface is a single photograph, as drawn.
 */
export default function ContactPage() {
  return (
    <>
      <main className={s.page}>
        <ContactHero />

        {/* The form alone. A rail beside it carried the challenge callout, the
            three desks and the address until it was taken out, by direction —
            see contact.data.ts for what went with it. */}
        <div className={s.split}>
          <ContactForm />
        </div>

        <ContactSecondary />
      </main>
    </>
  );
}
