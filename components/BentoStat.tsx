import type { LucideIcon } from "lucide-react";

export function BentoStat({
  icon: Icon,
  label,
  value,
  description,
  className = "",
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`group relative border border-line bg-bg-raised p-6 transition-colors hover:border-copper-dim ${className}`}>
      <div className="mb-4 flex items-center justify-between">
        <Icon size={20} strokeWidth={1.75} className="text-copper" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">{label}</span>
      </div>
      <p className="font-mono text-4xl font-bold text-ink">{value}</p>
      {description && <p className="mt-3 text-sm text-ink-dim">{description}</p>}
    </div>
  );
}
