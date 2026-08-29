import { Car, Sun, Mountain, BarChart3 } from "lucide-react";
import { Masthead } from "@/components/Masthead";
import { Reveal } from "@/components/Reveal";
import { CopperPriceChart } from "@/components/CopperPriceChart";
import { VALUE_DRIVERS } from "@/lib/content";

export const metadata = { title: "Market Thesis | Extracta / Index" };

const DRIVER_ICONS = [Car, Sun, Mountain, BarChart3];

export default function ValuePage() {
  return (
    <main>
      <Masthead
        kicker="Index // Market Thesis"
        title="Copper prices are climbing at levels unseen before"
        dek="At least four converging trends are driving copper prices up in a way that makes this among the most solid commodity trends today."
      />

      <section className="border-b border-line py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Reveal className="border border-line bg-bg-raised p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-copper">Illustrative — Copper, $/lb</p>
            <CopperPriceChart />
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto grid gap-4 md:grid-cols-2">
          {VALUE_DRIVERS.map((d, i) => {
            const Icon = DRIVER_ICONS[i];
            return (
              <Reveal key={d.title} y={i % 2 === 0 ? 20 : 36}>
                <div className="group h-full border border-line bg-bg-raised p-7 transition-colors hover:border-copper-dim">
                  <Icon size={20} strokeWidth={1.75} className="mb-4 text-copper" />
                  <h3 className="mb-2 font-semibold text-ink">{d.title}</h3>
                  <p className="text-sm text-ink-dim">{d.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
