import Link from "next/link";
import { Masthead } from "@/components/Masthead";
import { Reveal } from "@/components/Reveal";
import { BLOG_POSTS } from "@/lib/content";

export const metadata = { title: "Dispatches | Extracta / Index" };

export default function JournalPage() {
  return (
    <main>
      <Masthead kicker="Dispatches" title="Field notes from the copper decommissioning desk" />

      <section className="py-16 px-6">
        <div className="container mx-auto divide-y divide-line border-t border-line">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} y={i % 2 === 0 ? 16 : 28}>
              <Link href={`/journal/${post.slug}`} className="group grid gap-6 py-10 md:grid-cols-[220px_1fr]">
                <div className="aspect-[4/3] overflow-hidden border border-line">
                  <img
                    src={post.image}
                    alt=""
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-copper-dim">
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })} — {post.author}
                  </p>
                  <h2 className="text-2xl font-bold text-ink transition-colors group-hover:text-copper">{post.title}</h2>
                  <p className="mt-3 max-w-2xl text-ink-dim">{post.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
