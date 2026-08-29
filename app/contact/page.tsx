import { Masthead } from "@/components/Masthead";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "./ContactForm";
import { CONTACT } from "@/lib/content";

export const metadata = { title: "Contact | Extracta / Index" };

export default function ContactPage() {
  return (
    <main>
      <Masthead kicker="Open a file" title="Start the audit" dek="Tell us about your network — we'll respond within one business day." />

      <section className="py-20 px-6">
        <div className="container mx-auto grid gap-14 md:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-copper">Desk</p>
            <p className="text-ink-dim">{CONTACT.address}</p>
            <p className="mt-3 text-ink-dim">{CONTACT.phone}</p>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center min-h-11 text-copper hover:text-ink">
              {CONTACT.email}
            </a>
          </Reveal>
          <Reveal y={30}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
