import Link from "next/link";
import { ShieldCheck, TrendingUp, Leaf, HardHat, LineChart, ClipboardList, ArrowUpRight } from "lucide-react";
import { Masthead } from "@/components/Masthead";
import { Reveal } from "@/components/Reveal";
import { GradientField } from "@/components/GradientField";
import { HOW_WE_DO_IT_PILLARS, CONTACT } from "@/lib/content";

export const metadata = { title: "Field Ops | Extracta / Index" };

const PILLAR_ICONS = [ShieldCheck, TrendingUp, Leaf, HardHat, LineChart, ClipboardList];

export default function HowWeDoItPage() {
  return (
    <main>
      <Masthead
        kicker="Field Ops // Dossier 02"
        title="Your old copper network is a gold mine"
        dek="Extracta knows how to cash it in — with no interruptions to your ongoing operation and no stress on your CAPEX plan."
      />

      <section className="border-b border-line py-24 px-6">
        <div className="container mx-auto">
          <Reveal className="mb-14 max-w-2xl">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-copper">Operating Principles</p>
            <h2 className="text-3xl font-bold text-ink">Six rules the field crew never breaks</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {HOW_WE_DO_IT_PILLARS.map((p, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
                <Reveal key={p.title} y={i % 2 === 0 ? 20 : 36}>
                  <div
                    className="group h-full border border-line bg-bg-raised p-6 transition-colors hover:border-copper-dim"
                    data-string="spotlight"
                    data-string-id={`pillar-${i}`}
                  >
                    <Icon size={20} strokeWidth={1.75} className="mb-4 text-copper" />
                    <h3 className="mb-2 font-semibold text-ink">{p.title}</h3>
                    <p className="text-sm text-ink-dim">{p.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 px-6 text-center">
        <GradientField variant="signal" />
        <div className="container relative z-10 mx-auto max-w-xl">
          <h2 className="text-2xl font-bold text-ink md:text-3xl">Contact us now for worldwide service</h2>
          <a href={`mailto:${CONTACT.projectsEmail}`} className="mt-3 inline-flex min-h-11 items-center text-copper underline">
            {CONTACT.projectsEmail}
          </a>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-copper px-8 py-4 font-mono text-xs uppercase tracking-widest text-bg hover:scale-105 transition-transform"
            >
              Get in touch <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
