import { CheckCircle2 } from "lucide-react";
import { Masthead } from "@/components/Masthead";
import { Reveal } from "@/components/Reveal";
import { GradientField } from "@/components/GradientField";
import { PARTNER } from "@/lib/content";

export const metadata = { title: "Partners | Extracta / Index" };

export default function PartnersPage() {
  return (
    <main>
      <Masthead kicker="Desk // Partners" title="Field capacity, wherever the copper is" dek={PARTNER.headline} />

      <section className="border-b border-line py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-copper">Alliance Record</p>
            <h2 className="text-2xl font-bold text-ink">{PARTNER.name}</h2>
            <ul className="mt-6 space-y-3">
              {PARTNER.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-ink-dim">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-copper" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 px-6 text-center">
        <GradientField variant="dark" />
        <div className="container relative z-10 mx-auto max-w-xl">
          <h2 className="text-2xl font-bold text-ink md:text-3xl">A partner-driven approach to worldwide execution</h2>
          <p className="mt-4 text-ink-dim">Our alliance network means no market is out of reach for a full decommissioning program.</p>
        </div>
      </section>
    </main>
  );
}
