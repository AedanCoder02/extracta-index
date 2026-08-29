const ITEMS = [
  "COPPER SPOT ▲ +4.2%",
  "OPEX SAVED -60% AVG",
  "CAPEX OFFSET UP TO 1/3",
  "ZERO UPFRONT COST",
  "10+ YEARS FIELD-PROVEN",
  "16-STEP CUTTING PROTOCOL",
  "ZERO LANDFILL POLICY",
  "FULL AUDIT TRAIL, CUT TO SALE",
];

export function Ticker() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-line bg-bg-raised py-3">
      <div className="marquee-track flex w-max gap-10 font-mono text-xs tracking-widest text-ink-dim">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className={item.includes("▲") ? "text-wire" : ""}>{item}</span>
            <span className="text-copper-dim">//</span>
          </span>
        ))}
      </div>
    </div>
  );
}
