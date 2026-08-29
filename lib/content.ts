// Same facts as the extracta-group (3D) and extracta-business (corporate) builds
// — ported directly, not re-derived. This build's job is a different visual
// and editorial voice (a market-index / field-dispatch framing), not new facts.

export interface ProcessStep {
  id: string;
  stage: number;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  { id: "audit", stage: 1, title: "Network Audit", description: "We audit cable logs to identify abandoned and underutilized copper, then verify frame and deployment schemes with a physical site audit." },
  { id: "migration", stage: 2, title: "Migration Engineering", description: "We recommend cables for removal, subject to Telco approval, and consolidate work circuits to maximize extraction volume against ROI." },
  { id: "cutting", stage: 3, title: "Cutting Process", description: "A proprietary 16-step cutting methodology, refined over a decade of field operations, guarantees network continuity throughout the process." },
  { id: "extraction", stage: 4, title: "Extraction Process", description: "Specialized equipment and trained crews remove and cut cable, with progress monitored in real time through our cloud-based tracking system." },
  { id: "sorting", stage: 5, title: "Sorting & Sampling", description: "Recovered cable is sampled and negotiated with international buyers, with rigorous records maintained for full audit traceability." },
  { id: "sale", stage: 6, title: "Ship & Sale", description: "Cable ships and sale proceeds are collected immediately, closed out with monthly net-profit reporting back to the client." },
];

export interface Metric {
  id: string;
  label: string;
  value: string;
  description: string;
}

export const METRICS: Metric[] = [
  { id: "opex", label: "OPEX", value: "-60%", description: "Average savings registered by Tier 1 telecom companies that decommission and extract copper plant from their infrastructure." },
  { id: "capex", label: "CAPEX offset", value: "1/3", description: "Operators can offset up to $1 of every $3 required to upgrade a copper-based network." },
  { id: "direct-cost", label: "Direct cost", value: "$0", description: "Operators commit no upfront cash resources — our engineers work with minimal involvement of the existing platform." },
];

export interface PartnerInfo {
  name: string;
  url: string;
  headline: string;
  bullets: string[];
}

export const PARTNER: PartnerInfo = {
  name: "Protel Technologies",
  url: "https://proteltechnologies.com/?lang=en",
  headline: "20+ years rolling out outside plant for world-class customers, in every technology",
  bullets: [
    "Mobile networks",
    "Fiber networks (FTTH, FTTC)",
    "Long-haul networks",
    "Installation and maintenance",
    "12+ markets across the Americas",
    "Deep, hands-on knowledge of most vendor configurations",
  ],
};

export interface ClientPillar { title: string; body: string }

export const CLIENTS_TRUST_PILLARS: ClientPillar[] = [
  { title: "Over 10 Years Experience", body: "We have been doing this activity for a decade already, fine-tuning our methods until they are near flawless." },
  { title: "Transparency", body: "Customers follow extraction, sorting, and sale step by step in real time on an open-books mode of supervision." },
  { title: "Cooperation", body: "We transfer knowledge to our customers' teams so they're fully integrated from decommission strategy through final sale." },
];

export interface HeroCopy {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  primaryCtaHref: string;
}

export const HERO: HeroCopy = {
  eyebrow: "Vol. 01 — Copper Decommissioning Desk",
  headline: "Idle copper is a mispriced asset",
  subheadline: "Extracta Group runs the audit, the extraction, and the sale — converting retired network plant into recovered capital, with zero upfront CAPEX and zero disruption to live service.",
  primaryCta: "Open a file",
  primaryCtaHref: "/contact",
};

export interface CtaCopy { headline: string; body: string; buttonLabel: string; buttonHref: string }

export const CTA: CtaCopy = {
  headline: "Every idle mile of copper is capital sitting on the pole.",
  body: "No upfront CAPEX. No disruption to live service. Full audit trail from cut to sale.",
  buttonLabel: "Start the audit",
  buttonHref: "/contact",
};

export interface ValuePillar { title: string; body: string }

export const HOW_WE_DO_IT_PILLARS: ValuePillar[] = [
  { title: "Business Continuity", body: "The telecom business is mission critical. Our method causes no interruption to the normal dynamics of service delivery." },
  { title: "Progressive Development", body: "Circuit Compression techniques mean profits start flowing from the earliest stages of the project." },
  { title: "Environmental Consciousness", body: "A zero-landfill approach to decommissioned assets — compliant, and eligible for carbon credits." },
  { title: "Operational Safety", body: "As experienced OSP operators, we hold every requirement of OSHA and ITU industrial safety standards." },
  { title: "Commodities Market Control", body: "A decade dealing with the major global commodities recyclers gives us leverage for the best sale conditions." },
  { title: "Project Management Capability", body: "Human knowhow, industry practice, technology, and a deep sense of business ethics — the go-to choice for the task." },
];

export const SYSTEMS_FEATURES = [
  { title: "Formidable Tools", body: "GIS-based vectorial and object-oriented application, always available in the Cloud.", image: "/images/photos/gis-map.png" },
  { title: "Sectorized Workflow", body: "Project planning runs through a strict workflow checklist: strategic planning, public interactions, decommissioning, and disposal, each gated.", image: null },
  { title: "Project Management", body: "A 6-wise enhanced approach to project management design, adapted for compression, decommission and migration.", image: null },
];

export interface ValueDriver { title: string; body: string }

export const VALUE_DRIVERS: ValueDriver[] = [
  { title: "Electric Car Industry", body: "Sustained growth in EV production increases demand for copper heavily used in batteries." },
  { title: "Solar Panels", body: "Copper is a key component in the manufacturing of renewable-energy generation hardware." },
  { title: "Mining Regulations", body: "Tighter regulations aimed at climate and territory preservation make new extraction more expensive." },
  { title: "Economic Growth", body: "Fast-growing economies demand more energy, vehicles, and copper-dependent goods." },
];

export interface TeamMember { name: string; role: string; bio: string; photo: string }

export const TEAM: TeamMember[] = [
  { name: "Antonio Belfort", role: "Co-Founder and CEO", bio: "Entrepreneur combining proven achievements with solid management consulting experience worldwide. 25+ years of professional experience.", photo: "/images/team/team-antonio-belfort.jpeg" },
  { name: "Albert Scharffenorth", role: "Co-Founder and CCO", bio: "30 years as executive and owner of IT and Telecom companies. Overseen rollout of thousands of km of trunk fiber and up to a million homes passed.", photo: "/images/team/team-albert-scharffenorth.png" },
  { name: "Leonard Boord", role: "Director", bio: "Founder of Slon Capital, Managing Director of Lydians Capital. 4-time CEO in Latin American tech, two startups delivered to Fortune 500 buyers.", photo: "/images/team/team-leonard-boord.png" },
  { name: "Peter D Aquino", role: "Senior Advisor", bio: "Former Bell Atlantic executive and CEO of RCN. Current CEO at Sea Change. Serial investor in telecom ventures.", photo: "/images/team/team-peter-daquino.png" },
];

export const TEAM_GALLERY = [
  "/images/gallery/gallery-cablespicados.jpg",
  "/images/gallery/gallery-copper-sym.png",
  "/images/gallery/gallery-img9334.jpeg",
  "/images/gallery/gallery-multipar2.png",
  "/images/gallery/gallery-cablescut4.png",
  "/images/gallery/gallery-img0557.jpeg",
];

export interface ContactInfo { address: string; phone: string; email: string; projectsEmail: string }

export const CONTACT: ContactInfo = {
  address: "7875 NW 12th St Suite 111, Miami, FL 33126, United States",
  phone: "+1 305 771 2133",
  email: "info@extractagroup.com",
  projectsEmail: "projects@extractagroup.com",
};

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  body: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "extracta-group-mercury-access-alliance",
    title: "Extracta Group and Mercury Access Form Strategic Alliance",
    author: "Antonio Belfort",
    date: "2024-05-13",
    excerpt: "Extracta Group announces a strategic alliance with Mercury Access, expanding decommissioning capacity and market reach.",
    image: "/images/blog/blog-co1.png",
    body: `Extracta Group is pleased to announce a new strategic alliance with Mercury Access, combining our proven copper decommissioning methodology with Mercury's regional field operations network.\n\nThis partnership expands the scale at which Extracta can execute simultaneous decommissioning campaigns, reducing mobilization time for operators who need a fast, coordinated migration off legacy copper infrastructure.\n\nBoth organizations share a commitment to zero-interruption operations and full financial transparency for the operators we serve.`,
  },
  {
    slug: "walking-away-from-copper",
    title: "Walking Away from Copper",
    author: "Pablo Bedoya",
    date: "2026-07-04",
    excerpt: "Abandoning a copper plant in place is the costliest version of decommissioning — here's why a structured extraction changes the calculus.",
    image: "/images/blog/blog-truck4.jpg",
    body: `When a market's fiber buildout reaches completion, the legacy copper underneath it faces one of three fates: it stays in place and abandoned, it gets left half-recovered in an ad hoc way, or it goes through a structured decommissioning and extraction program.\n\nThe first option is deceptively expensive. Abandoned cable still occupies duct space and pole capacity with real opportunity cost. It remains a theft target and shows up nowhere on the balance sheet, even though it retains real commodity value.\n\nA structured extraction program flips this: audited against cable logs, engineered for minimal-disruption migration, cut and pulled under a continuity-first methodology, then sorted, sampled, and sold into international buyer markets.`,
  },
  {
    slug: "end-of-the-copper-network-is-near",
    title: "The End of the Copper Network is Near",
    author: "Leonard Boord",
    date: "2026-07-04",
    excerpt: "DSL variants pushed copper's usable bandwidth further than its designers ever intended — but the physics stop scaling.",
    image: "/images/blog/blog-broken-cable.jpg",
    body: `Copper access networks are entering a managed decline across nearly every major market. DSL variants pushed copper's usable bandwidth further than its original designers intended, but the physics stop scaling.\n\nWhat's changing is not that copper stops working on some fixed date. What's changing is the economics of keeping it in service — truck rolls for degraded pairs, occupied duct and pole space, a nonzero theft and vandalism risk.\n\nFor an operator mid-rollout, the copper underneath already-migrated areas is not a sunk cost — it's a physical asset with real commodity value.`,
  },
  {
    slug: "future-of-the-copper-network",
    title: "What is the Future of the Copper Network?",
    author: "Pablo Bedoya",
    date: "2026-07-04",
    excerpt: "Copper access networks built the last century of telephony — but the maintenance curve and fiber's economics are now moving in opposite directions.",
    image: "/images/blog/blog-service-trends.png",
    body: `The future of the copper network is not a single end date. It is a rolling decommissioning schedule that tracks fiber deployment market by market.\n\nEvery quarter, more operators formalize decommissioning as its own budget line rather than an afterthought — a shift that turns idle plant into recovered capital on a predictable schedule.\n\nThe operators moving fastest treat fiber migration and copper decommissioning as two halves of the same program, funded from the same source.`,
  },
  {
    slug: "bt-openreach-shutting-down-copper",
    title: "BT Openreach Are Shutting Down The Copper Wire Telephone Network",
    author: "Antonio Belfort",
    date: "2026-07-04",
    excerpt: "One of the world's largest telecom infrastructure operators has committed to a full copper switch-off — a signal for the rest of the industry.",
    image: "/images/blog/blog-ducts.jpg",
    body: `BT Openreach's commitment to fully retire its copper wire telephone network marks one of the largest planned copper decommissioning programs in the world.\n\nA switch-off at this scale takes years of planning around exactly the questions Extracta Group specializes in: migrating live services without interruption, physically recovering retired plant, and converting it into capital that funds the replacement network.\n\nOperators watching Openreach's program should expect the same questions on their own roadmap — the earlier a decommissioning partner is brought in, the more recovered value stays on the operator's side of the ledger.`,
  },
];
