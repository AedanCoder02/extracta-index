import { Map, Workflow, ClipboardList, Compass, Users, PackageMinus, Trash2 } from "lucide-react";
import { Masthead } from "@/components/Masthead";
import { Reveal } from "@/components/Reveal";
import { GradientField } from "@/components/GradientField";
import { SYSTEMS_FEATURES } from "@/lib/content";

export const metadata = { title: "Systems | Extracta / Index" };

const FEATURE_ICONS = [Map, Workflow, ClipboardList];
const WORKFLOW_STEPS = [
  { title: "Strategic Planning", Icon: Compass },
  { title: "Public Interactions", Icon: Users },
  { title: "Decommissioning", Icon: PackageMinus },
  { title: "Disposal", Icon: Trash2 },
];

export default function SystemsPage() {
  return (
    <main>
      <Masthead
        kicker="Index // Systems"
        title="The instrumentation behind every extraction"
        dek="Cloud-native tooling and a gated workflow — nothing left to chance."
      />

      <section className="border-b border-line py-24 px-6">
        <div className="container mx-auto grid gap-4 md:grid-cols-3">
          {SYSTEMS_FEATURES.map((f, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
              <Reveal key={f.title} y={i % 2 === 0 ? 20 : 36}>
                <div className="h-full border border-line bg-bg-raised p-6 transition-colors hover:border-copper-dim">
                  <Icon size={20} strokeWidth={1.75} className="mb-4 text-copper" />
                  <h3 className="mb-2 font-semibold text-ink">{f.title}</h3>
                  <p className="text-sm text-ink-dim">{f.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden py-24 px-6">
        <GradientField variant="signal" />
        <div className="container relative z-10 mx-auto">
          <Reveal className="mb-12 max-w-2xl">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-copper">The Checklist</p>
            <h2 className="text-3xl font-bold text-ink">Four gates, in order, every time</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WORKFLOW_STEPS.map((s, i) => (
              <Reveal key={s.title} y={i % 2 === 0 ? 16 : 28}>
                <div className="border border-line bg-bg p-6 text-center">
                  <s.Icon size={22} strokeWidth={1.75} className="mx-auto mb-3 text-copper" />
                  <p className="font-mono text-[10px] uppercase tracking-widest text-copper-dim">Gate {i + 1}</p>
                  <p className="mt-2 font-semibold text-ink">{s.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
