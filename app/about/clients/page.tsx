import { Clock, Eye, Handshake } from "lucide-react";
import { Masthead } from "@/components/Masthead";
import { Reveal } from "@/components/Reveal";
import { CLIENTS_TRUST_PILLARS } from "@/lib/content";

export const metadata = { title: "Clients | Extracta / Index" };

const ICONS = [Clock, Eye, Handshake];

export default function ClientsPage() {
  return (
    <main>
      <Masthead
        kicker="Desk // Clients"
        title="What our operators tell each other"
        dek="A decade of decommissioning programs, run in the open, with the same three commitments every time."
      />

      <section className="py-24 px-6">
        <div className="container mx-auto grid gap-4 border-t border-line pt-12 md:grid-cols-3">
          {CLIENTS_TRUST_PILLARS.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.title} y={i % 2 === 0 ? 20 : 36}>
                <div className="group h-full border border-line bg-bg-raised p-6 transition-colors hover:border-copper-dim">
                  <Icon size={20} strokeWidth={1.75} className="mb-4 text-copper" />
                  <h3 className="mb-2 font-semibold text-ink">{p.title}</h3>
                  <p className="text-sm text-ink-dim">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
