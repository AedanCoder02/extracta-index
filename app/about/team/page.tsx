import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Masthead } from "@/components/Masthead";
import { Reveal } from "@/components/Reveal";
import { GradientField } from "@/components/GradientField";
import { TEAM, TEAM_GALLERY } from "@/lib/content";

export const metadata = { title: "Team | Extracta / Index" };

export default function TeamPage() {
  return (
    <main>
      <Masthead
        kicker="Desk // Roster"
        title="Only disciplined passion turns technology into value"
        dek="Decades of combined knowledge in telecom, finance, project management, and technological prowess."
      />

      <section className="border-b border-line py-16 px-6">
        <div className="container mx-auto grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-copper">Cash Driven</p>
            <h2 className="mb-3 text-2xl font-bold text-ink">Value motivated, always</h2>
            <p className="text-ink-dim">
              Extracta goes about every process with one thing in mind: saving customers&apos; cherished resources by
              letting them focus on their core business while maximizing their windfalls.
            </p>
          </Reveal>
          <Reveal y={30} className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {TEAM_GALLERY.map((src) => (
              <div key={src} className="group aspect-square overflow-hidden border border-line">
                <img src={src} alt="" className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-line py-24 px-6">
        <GradientField variant="dark" />
        <div className="container relative z-10 mx-auto mb-14 max-w-xl text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-copper">Meet the desk</p>
          <h2 className="text-3xl font-bold text-ink">The roster</h2>
        </div>
        <div className="container relative z-10 mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} y={i % 2 === 0 ? 20 : 36} className="h-full">
              <div className="h-full border border-line bg-bg-raised p-6 text-center transition-colors hover:border-copper-dim">
                <img src={member.photo} alt={member.name} className="mx-auto mb-4 h-20 w-20 rounded-full object-cover grayscale" />
                <p className="font-semibold text-ink">{member.name}</p>
                <p className="mt-1 mb-3 inline-block border border-copper-dim px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-copper">
                  {member.role}
                </p>
                <p className="text-xs text-ink-dim">{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <div className="container mx-auto max-w-xl">
          <h2 className="text-2xl font-bold text-ink md:text-3xl">We&apos;d love to work with you</h2>
          <p className="mt-4 text-ink-dim">
            Ready with the tools and the focus to develop a fast-launching project — old copper out, full digital services in.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 border border-copper px-8 py-4 font-mono text-xs uppercase tracking-widest text-copper transition-colors hover:bg-copper hover:text-bg"
          >
            Learn more <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
