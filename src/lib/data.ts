import {
  Blocks,
  Radar,
  Building2,
  Boxes,
  CloudCog,
  Database,
  Compass,
  PenTool,
  Cpu,
  Rocket,
  Gauge,
  ShieldCheck,
  Sparkles,
  GitBranch,
  Layers,
  Network,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Services                                                          */
/* ------------------------------------------------------------------ */
export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  capabilities: string[];
  accent: "electric" | "violet" | "aqua";
};

export const services: Service[] = [
  {
    slug: "blockchain-development",
    title: "Blockchain Development",
    icon: Blocks,
    tagline: "Trustless infrastructure, engineered for scale.",
    description:
      "We design and ship decentralized systems — from settlement networks and smart contracts to tokenization and secure on-chain data — built for institutions that demand correctness and resilience.",
    capabilities: [
      "Smart contract architecture & audits",
      "Distributed ledger & settlement networks",
      "Tokenization & digital asset platforms",
      "Wallet, custody & key-management systems",
      "Zero-knowledge & privacy-preserving proofs",
    ],
    accent: "electric",
  },
  {
    slug: "telecom-intelligence",
    title: "Telecom Intelligence Systems",
    icon: Radar,
    tagline: "Signal at national scale.",
    description:
      "Platforms that ingest, process, and analyze communication-activity data at massive throughput for authorized government and operator use cases — with auditability and access control engineered in from day one.",
    capabilities: [
      "High-throughput data ingestion pipelines",
      "Real-time correlation & pattern analysis",
      "Lawful-access & policy-controlled workflows",
      "Geospatial & temporal intelligence",
      "Tamper-evident audit & compliance logging",
    ],
    accent: "violet",
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software",
    icon: Building2,
    tagline: "Mission-critical systems that hold up.",
    description:
      "Scalable internal platforms, workflow automation, and operational systems that replace fragmented tooling with a single, dependable source of truth across your organization.",
    capabilities: [
      "Modular platform & micro-service design",
      "Workflow automation & orchestration",
      "Identity, roles & access governance",
      "Legacy modernization & migration",
      "SLAs, observability & 24/7 reliability",
    ],
    accent: "aqua",
  },
  {
    slug: "product-engineering",
    title: "Product Engineering",
    icon: Boxes,
    tagline: "From whiteboard to production.",
    description:
      "End-to-end product teams that take an idea through discovery, design, and engineering into a launched product — with the craft of a startup and the rigor of an enterprise.",
    capabilities: [
      "Product discovery & technical strategy",
      "UX/UI design systems",
      "Full-stack web & mobile engineering",
      "API & platform development",
      "Rapid prototyping & validation",
    ],
    accent: "electric",
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    icon: CloudCog,
    tagline: "Infrastructure that scales without drama.",
    description:
      "Cloud-native architecture, automation, and DevOps practices that make your systems elastic, secure, and observable — engineered to grow from first user to national scale.",
    capabilities: [
      "Cloud-native architecture (AWS / GCP / Azure)",
      "Kubernetes & container orchestration",
      "Infrastructure-as-code & CI/CD",
      "Security hardening & zero-trust networking",
      "Cost optimization & FinOps",
    ],
    accent: "violet",
  },
  {
    slug: "data-platforms",
    title: "Data Platforms",
    icon: Database,
    tagline: "Decisions, powered by your data.",
    description:
      "Data intelligence systems — pipelines, warehouses, analytics, and machine learning — that turn raw, high-volume data into a measurable operational advantage.",
    capabilities: [
      "Streaming & batch data pipelines",
      "Lakehouse & warehouse architecture",
      "Real-time analytics & dashboards",
      "Machine learning & model deployment",
      "Data governance & quality",
    ],
    accent: "aqua",
  },
];

/* ------------------------------------------------------------------ */
/*  Projects / Case studies                                          */
/* ------------------------------------------------------------------ */
export type Project = {
  slug: string;
  name: string;
  sector: string;
  status: "In Production" | "In Development" | "Case Study";
  year: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  accent: "electric" | "violet" | "aqua";
  confidential?: boolean;
};

export const projects: Project[] = [
  {
    slug: "distributed-settlement-network",
    name: "Distributed Settlement Network",
    sector: "Blockchain",
    status: "In Production",
    year: "2025",
    summary:
      "A high-assurance distributed ledger that settles institutional transactions with cryptographic finality, replacing slow, opaque reconciliation with a single verifiable source of truth.",
    highlights: [
      "Deterministic smart-contract settlement engine",
      "Sub-second finality across distributed validators",
      "Independent third-party security audit passed",
    ],
    metrics: [
      { label: "Settlement finality", value: "<1s" },
      { label: "Uptime", value: "99.99%" },
      { label: "Throughput", value: "10k tps" },
    ],
    accent: "electric",
  },
  {
    slug: "telecom-intelligence-platform",
    name: "Telecom Intelligence Platform",
    sector: "Telecommunications",
    status: "In Development",
    year: "2026",
    summary:
      "A national-scale platform that processes and analyzes communication-activity data for authorized government use cases — engineered with lawful-access controls, full auditability, and real-time correlation.",
    highlights: [
      "Ingestion pipeline built for billions of daily events",
      "Policy-gated, role-based lawful access",
      "Real-time geospatial & temporal correlation",
    ],
    metrics: [
      { label: "Daily events", value: "10B+" },
      { label: "Query latency", value: "<200ms" },
      { label: "Audit coverage", value: "100%" },
    ],
    accent: "violet",
    confidential: true,
  },
  {
    slug: "enterprise-resource-suite",
    name: "Enterprise Resource Suite",
    sector: "Government & Enterprise",
    status: "In Production",
    year: "2025",
    summary:
      "A modular operations suite that unified procurement, identity, and workflow for a large organization — retiring a decade of fragmented legacy tooling.",
    highlights: [
      "Unified identity & access governance",
      "Automated multi-stage approval workflows",
      "Migrated 12+ legacy systems with zero data loss",
    ],
    metrics: [
      { label: "Legacy systems retired", value: "12+" },
      { label: "Process time cut", value: "−64%" },
      { label: "Active users", value: "8,000+" },
    ],
    accent: "aqua",
  },
  {
    slug: "realtime-data-intelligence",
    name: "Real-time Data Intelligence Engine",
    sector: "Data Platforms",
    status: "Case Study",
    year: "2024",
    summary:
      "A streaming analytics engine that turns high-volume operational data into live decision intelligence, with sub-second dashboards and embedded machine-learning models.",
    highlights: [
      "Streaming lakehouse architecture",
      "Sub-second analytical queries at scale",
      "Embedded anomaly-detection models",
    ],
    metrics: [
      { label: "Data scanned", value: "5PB+" },
      { label: "Query latency", value: "<800ms" },
      { label: "Models in prod", value: "20+" },
    ],
    accent: "electric",
  },
];

/* ------------------------------------------------------------------ */
/*  Values                                                            */
/* ------------------------------------------------------------------ */
export type Value = { title: string; description: string; icon: LucideIcon };

export const values: Value[] = [
  {
    title: "Precision",
    description:
      "We engineer for correctness. In the systems we build, a rounding error can cost a settlement or a signal — so we leave nothing to chance.",
    icon: Gauge,
  },
  {
    title: "Trust",
    description:
      "Governments and enterprises hand us their hardest, most sensitive problems. Security, auditability, and discretion are defaults, not features.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description:
      "We work at the frontier — blockchain, telecom intelligence, applied ML — and bring proven engineering discipline to emerging technology.",
    icon: Sparkles,
  },
  {
    title: "Ownership",
    description:
      "We act like founders of every system we touch. We measure ourselves by outcomes shipped, not hours billed.",
    icon: GitBranch,
  },
];

/* ------------------------------------------------------------------ */
/*  Process                                                           */
/* ------------------------------------------------------------------ */
export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We immerse in your domain, map constraints and risks, and define what success measurably looks like before a line of code is written.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We design the system — data models, security boundaries, scale targets — and pressure-test the architecture against your hardest requirements.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Engineer",
    description:
      "Senior teams build in tight iterations with rigorous review, automated testing, and continuous delivery from day one.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "We ship to production, instrument everything, and stay accountable for reliability, performance, and the roadmap ahead.",
    icon: Rocket,
  },
];

/* ------------------------------------------------------------------ */
/*  Stats                                                             */
/* ------------------------------------------------------------------ */
export type Stat = { value: number; suffix?: string; prefix?: string; label: string; decimals?: number };

export const stats: Stat[] = [
  { value: 6, suffix: "+", label: "Industries served" },
  { value: 99.99, suffix: "%", label: "Platform uptime", decimals: 2 },
  { value: 10, suffix: "B+", label: "Events processed daily" },
  { value: 24, suffix: "/7", label: "Mission support" },
];

/* ------------------------------------------------------------------ */
/*  Industries (marquee + global reach)                              */
/* ------------------------------------------------------------------ */
export const industries: string[] = [
  "Government",
  "Telecommunications",
  "Enterprise",
  "Financial Infrastructure",
  "Defense & Security",
  "Data Intelligence",
  "Startups",
  "Technology Partners",
];

/* ------------------------------------------------------------------ */
/*  Capabilities (bento / tech)                                      */
/* ------------------------------------------------------------------ */
export type Capability = { title: string; description: string; icon: LucideIcon };

export const capabilities: Capability[] = [
  {
    title: "Security-first engineering",
    description:
      "Zero-trust architecture, encryption by default, and tamper-evident auditing built into every system.",
    icon: ShieldCheck,
  },
  {
    title: "Built for national scale",
    description:
      "Architectures proven against billions of daily events and millions of users without degrading.",
    icon: Network,
  },
  {
    title: "Composable platforms",
    description:
      "Modular services and clean APIs that let your teams build on top of what we deliver.",
    icon: Layers,
  },
  {
    title: "Applied intelligence",
    description:
      "Machine learning embedded where it creates measurable operational advantage — not as a buzzword.",
    icon: Cpu,
  },
];

/* ------------------------------------------------------------------ */
/*  Engineering principles (moving cards)                            */
/* ------------------------------------------------------------------ */
export type Principle = { quote: string; name: string; title: string };

export const principles: Principle[] = [
  {
    quote:
      "We treat reliability as a feature, not an afterthought. If it can't run unattended at 3 a.m., it isn't finished.",
    name: "Reliability",
    title: "Engineering principle",
  },
  {
    quote:
      "Security and auditability are designed in from the first commit. You can't bolt trust onto a system later.",
    name: "Trust by design",
    title: "Engineering principle",
  },
  {
    quote:
      "Simplicity scales. We resist complexity until the problem genuinely demands it — then we contain it cleanly.",
    name: "Essential simplicity",
    title: "Engineering principle",
  },
  {
    quote:
      "We ship in tight loops with real users and real data, because the only review that matters is production.",
    name: "Ship to learn",
    title: "Engineering principle",
  },
  {
    quote:
      "We own outcomes end to end. The handoff is not the finish line — the system performing in the field is.",
    name: "Total ownership",
    title: "Engineering principle",
  },
  {
    quote:
      "Performance is a discipline. Every millisecond and every byte is accounted for, measured, and defended.",
    name: "Measured performance",
    title: "Engineering principle",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */
export const faqs: { q: string; a: string }[] = [
  {
    q: "What kinds of organizations do you work with?",
    a: "Governments, enterprises, telecom operators, and ambitious startups. We specialize in complex, high-stakes systems where correctness, security, and scale are non-negotiable.",
  },
  {
    q: "How do engagements typically start?",
    a: "Most begin with a short discovery phase where we map your problem, constraints, and success metrics. From there we propose an architecture and a phased delivery plan.",
  },
  {
    q: "Can you work within strict security and compliance requirements?",
    a: "Yes. Security, auditability, and access control are core to how we build — particularly for government and telecom intelligence systems that operate under strict authorization.",
  },
  {
    q: "Do you support what you build after launch?",
    a: "Always. We instrument everything we ship and stay accountable for reliability, performance, and the roadmap — with 24/7 support for mission-critical platforms.",
  },
];
