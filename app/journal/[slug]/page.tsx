import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/lib/content";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  return { title: post ? `${post.title} | Extracta / Index` : "Dispatch | Extracta / Index" };
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-line py-20 px-6">
        <div className="absolute inset-0 z-0">
          <img src={post.image} alt="" className="h-full w-full object-cover opacity-30 grayscale" />
          <div className="absolute inset-0 bg-bg/80" />
        </div>
        <div className="container relative z-10 mx-auto max-w-3xl">
          <Link href="/journal" className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-copper hover:text-ink">
            <ArrowLeft size={14} /> Back to Dispatches
          </Link>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-copper-dim">
            {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} — {post.author}
          </p>
          <h1 className="text-3xl font-bold text-ink md:text-5xl">{post.title}</h1>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-2xl">
          {post.body.split("\n\n").map((para, i) => (
            <p key={i} className="mb-6 leading-relaxed text-ink-dim">
              {para}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
