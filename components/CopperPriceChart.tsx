"use client";

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const DATA = [
  { year: "2016", price: 2.2 },
  { year: "2018", price: 2.9 },
  { year: "2020", price: 2.8 },
  { year: "2022", price: 4.0 },
  { year: "2024", price: 4.2 },
  { year: "2026", price: 4.9 },
];

export function CopperPriceChart() {
  return (
    <div className="h-72 w-full font-mono text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="copperFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f5a623" stopOpacity={0.45} />
              <stop offset="100%" stopColor="#f5a623" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#2c2820" vertical={false} />
          <XAxis dataKey="year" stroke="#a8a196" tickLine={false} axisLine={false} />
          <YAxis stroke="#a8a196" tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
          <Tooltip
            contentStyle={{ background: "#17140f", border: "1px solid #2c2820", color: "#f4efe4", fontFamily: "inherit" }}
            formatter={(v) => [`$${Number(v).toFixed(2)}/lb`, "Copper"]}
          />
          <Area type="monotone" dataKey="price" stroke="#f5a623" strokeWidth={2} fill="url(#copperFill)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
