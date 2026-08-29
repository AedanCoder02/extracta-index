"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Failed to send");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-copper-dim bg-bg-raised p-8 font-mono text-sm text-copper">
        Message logged. We&apos;ll respond within one business day.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-ink-dim">First name</label>
          <input name="firstName" required className="w-full border border-line bg-bg-raised px-4 py-3 text-ink outline-none focus:border-copper" />
        </div>
        <div>
          <label className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-ink-dim">Last name</label>
          <input name="lastName" className="w-full border border-line bg-bg-raised px-4 py-3 text-ink outline-none focus:border-copper" />
        </div>
      </div>
      <div>
        <label className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-ink-dim">Email</label>
        <input name="email" type="email" required className="w-full border border-line bg-bg-raised px-4 py-3 text-ink outline-none focus:border-copper" />
      </div>
      <div>
        <label className="mb-1 block font-mono text-[10px] uppercase tracking-widest text-ink-dim">Message</label>
        <textarea name="message" required rows={5} className="w-full border border-line bg-bg-raised px-4 py-3 text-ink outline-none focus:border-copper" />
      </div>
      {status === "error" && <p className="font-mono text-xs text-signal">{errorMsg}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 bg-copper px-8 py-4 font-mono text-xs uppercase tracking-widest text-bg transition-transform hover:scale-105 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Open a file"}
        <ArrowUpRight size={14} />
      </button>
    </form>
  );
}
