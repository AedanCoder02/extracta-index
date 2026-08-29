import Link from "next/link";
import { TrendingDown, PieChart, CircleDollarSign, ArrowUpRight } from "lucide-react";
import { Masthead } from "@/components/Masthead";
import { Reveal } from "@/components/Reveal";
import { METRICS } from "@/lib/content";

export const metadata = { title: "The Numbers | Extracta / Index" };

const METRIC_ICONS = [TrendingDown, PieChart, CircleDollarSign];

export default function NumbersPage() {
  return (
    <main>
      <Masthead
        kicker="Index // The Numbers"
        title="Behind every rationale, a solid set of meaningful numbers"
        dek="Unveiling any doubt that keeps a go-ahead decision pending."
      />

      <section className="py-20 px-6">
        <div className="container mx-auto grid gap-4 md:grid-cols-3">
          {METRICS.map((m, i) => {
            const Icon = METRIC_ICONS[i];
            return (
              <Reveal key={m.id} y={i % 2 === 0 ? 20 : 36}>
                <div className="group h-full border border-line bg-bg-raised p-7 text-center transition-colors hover:border-copper-dim">
                  <Icon size={22} strokeWidth={1.75} className="mx-auto mb-4 text-copper" />
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-ink-dim">{m.label}</p>
                  <p className="mb-4 font-mono text-5xl font-bold text-ink">{m.value}</p>
                  <p className="mb-6 text-sm text-ink-dim">{m.description}</p>
                  <Link
                    href="/contact"
                    className="inline-block border border-line px-5 py-2 font-mono text-xs uppercase tracking-widest text-ink-dim transition-colors hover:border-copper hover:text-copper"
                  >
                    Get in touch <ArrowUpRight size={12} className="ml-1 inline" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
