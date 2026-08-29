import { Grain } from "./Grain";

// z-0 + DOM order (not negative z-index) — negative z-index layers failed to
// composite reliably in the sibling extracta-business build's screenshot/
// render pipeline; this structure sidesteps that class of bug entirely.
export function GradientField({ variant = "dark" }: { variant?: "dark" | "signal" }) {
  const glow = variant === "signal" ? "var(--signal)" : "var(--copper)";
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      <div
        className="absolute inset-0 blob-a"
        style={{ background: `radial-gradient(circle at 15% 20%, ${glow}33, transparent 55%)` }}
      />
      <div
        className="absolute inset-0 blob-b"
        style={{ background: `radial-gradient(circle at 85% 80%, ${glow}22, transparent 50%)` }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          opacity: 0.25,
        }}
      />
      <Grain opacity={0.05} />
    </div>
  );
}
