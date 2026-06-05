import {
  Code2,
  Blocks,
  Smartphone,
  Boxes,
  Coins,
  LifeBuoy,
  Layers,
  Clock,
  BadgeCheck,
  Users,
  ShieldCheck,
  Handshake,
  Compass,
  PenTool,
  Cpu,
  Rocket,
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
    slug: "web-development",
    title: "Web Development",
    icon: Code2,
    tagline: "Web 2.0, done right.",
    description:
      "Custom websites and web applications engineered for speed, scale, and conversion — from corporate sites and e-commerce to SaaS platforms, dashboards, and portals.",
    capabilities: [
      "Corporate sites, portfolios, landing pages & e-commerce",
      "SaaS platforms, dashboards & internal portals",
      "Frontend: React.js, Next.js, Vue.js",
      "Backend: Node.js, Python, PHP, Laravel",
      "REST & GraphQL APIs · CMS (WordPress, Strapi, Contentful)",
    ],
    accent: "electric",
  },
  {
    slug: "web3-blockchain",
    title: "Web3 & Blockchain",
    icon: Blocks,
    tagline: "Decentralized, by design.",
    description:
      "Smart contracts, DeFi protocols, NFT marketplaces, and DAOs built on Ethereum, Solana, BNB Chain, and Polygon — audit-ready and engineered for trust.",
    capabilities: [
      "Smart contracts (Ethereum, Solana, BNB Chain, Polygon)",
      "DeFi platforms — DEX, staking & yield farming",
      "NFT marketplaces — minting, listing & royalties",
      "DAO development & governance",
      "Web3 wallet integration & blockchain consulting",
    ],
    accent: "violet",
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    icon: Smartphone,
    tagline: "Native feel, every platform.",
    description:
      "iOS, Android, and cross-platform apps — including Web3-enabled DApp clients — designed, built, and shipped to the App Store and Play Store.",
    capabilities: [
      "iOS (Swift, Objective-C)",
      "Android (Kotlin, Java)",
      "Cross-platform (React Native, Flutter)",
      "Web3-enabled mobile DApp clients",
      "App Store & Play Store submission + ASO",
    ],
    accent: "aqua",
  },
  {
    slug: "product-development",
    title: "Product Development",
    icon: Boxes,
    tagline: "From idea to launch.",
    description:
      "End-to-end product builds for startups and teams — MVPs, SaaS architecture, and design-to-deploy delivery with UI/UX prototyping baked in.",
    capabilities: [
      "End-to-end conceptualisation, design & development",
      "MVP builds for startups",
      "SaaS product architecture",
      "Product roadmap consulting",
      "UI/UX design — Figma wireframes & prototypes",
    ],
    accent: "electric",
  },
  {
    slug: "crypto-solutions",
    title: "Crypto Solutions",
    icon: Coins,
    tagline: "Launch and scale on-chain.",
    description:
      "Token creation, tokenomics design, and crypto payment integrations — from ERC-20/721/1155 and BEP-20 tokens to wallets and gateways.",
    capabilities: [
      "Token creation (ERC-20, ERC-721, ERC-1155, BEP-20)",
      "Tokenomics design & modelling",
      "Crypto payment gateway integration",
      "Wallet integration (MetaMask, WalletConnect, Phantom)",
      "Audit-ready, secure contract code",
    ],
    accent: "violet",
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    icon: LifeBuoy,
    tagline: "We don't ship and disappear.",
    description:
      "Ongoing AMC packages, 24/7 monitoring, security patching, and cloud management — so your product stays fast, secure, and online.",
    capabilities: [
      "Monthly / quarterly AMC packages",
      "Bug fixing, performance & security patching",
      "24/7 uptime monitoring & incident response",
      "Code reviews & technical-debt reduction",
      "Cloud infrastructure management (AWS, Azure, GCP)",
    ],
    accent: "aqua",
  },
];

/* ------------------------------------------------------------------ */
/*  Portfolio / Case studies                                         */
/* ------------------------------------------------------------------ */
export type Project = {
  slug: string;
  name: string;
  sector: string;
  status: "Live" | "Completed" | "In Progress";
  year: string;
  summary: string;
  highlights: string[];
  metrics: { label: string; value: string }[];
  accent: "electric" | "violet" | "aqua";
  confidential?: boolean;
};

export const projects: Project[] = [
  {
    slug: "defi-staking-platform",
    name: "DeFi Staking Platform",
    sector: "Web3 & Blockchain",
    status: "Live",
    year: "2025",
    summary:
      "A non-custodial staking and yield-farming protocol with audited smart contracts, a real-time rewards dashboard, and multi-wallet support.",
    highlights: [
      "Audited staking & reward contracts on Polygon",
      "Real-time APY & rewards dashboard",
      "MetaMask + WalletConnect integration",
    ],
    metrics: [
      { label: "Total value locked", value: "$4M+" },
      { label: "Active wallets", value: "12k+" },
      { label: "Audit score", value: "A" },
    ],
    accent: "violet",
  },
  {
    slug: "nft-marketplace",
    name: "NFT Marketplace",
    sector: "Web3 & Blockchain",
    status: "Live",
    year: "2025",
    summary:
      "A full-featured NFT marketplace with lazy minting, on-chain royalties, collection pages, and an auction engine.",
    highlights: [
      "Gas-efficient lazy minting",
      "On-chain creator royalties",
      "Bid, buy-now & auction flows",
    ],
    metrics: [
      { label: "NFTs minted", value: "30k+" },
      { label: "Avg. mint cost", value: "−40%" },
      { label: "Chains", value: "3" },
    ],
    accent: "electric",
  },
  {
    slug: "saas-analytics-dashboard",
    name: "SaaS Analytics Dashboard",
    sector: "Web Development",
    status: "Live",
    year: "2024",
    summary:
      "A multi-tenant SaaS analytics platform with role-based access, billing, and a fast, real-time charting dashboard.",
    highlights: [
      "Multi-tenant architecture with RBAC",
      "Stripe billing & subscription management",
      "Real-time charts over large datasets",
    ],
    metrics: [
      { label: "Tenants", value: "200+" },
      { label: "p95 load", value: "<1.2s" },
      { label: "Uptime", value: "99.9%" },
    ],
    accent: "electric",
  },
  {
    slug: "cross-platform-delivery-app",
    name: "Cross-Platform Delivery App",
    sector: "Mobile Apps",
    status: "Live",
    year: "2024",
    summary:
      "A React Native delivery app with live order tracking, maps, push notifications, and integrated payments — shipped to both app stores.",
    highlights: [
      "Live GPS order tracking",
      "Push notifications & in-app payments",
      "Single codebase, iOS + Android",
    ],
    metrics: [
      { label: "Downloads", value: "50k+" },
      { label: "Store rating", value: "4.7★" },
      { label: "Crash-free", value: "99.8%" },
    ],
    accent: "aqua",
  },
  {
    slug: "corporate-website-cms",
    name: "Corporate Website & CMS",
    sector: "Web Development",
    status: "Completed",
    year: "2024",
    summary:
      "A high-performance corporate website on Next.js with a headless CMS, multilingual content, and a 95+ Lighthouse score.",
    highlights: [
      "Headless CMS for non-technical editors",
      "Multilingual, SEO-optimised pages",
      "95+ Lighthouse across the board",
    ],
    metrics: [
      { label: "Lighthouse", value: "95+" },
      { label: "Organic traffic", value: "+140%" },
      { label: "Languages", value: "3" },
    ],
    accent: "electric",
  },
  {
    slug: "token-launch-tokenomics",
    name: "Token Launch & Tokenomics",
    sector: "Crypto Solutions",
    status: "Completed",
    year: "2025",
    summary:
      "End-to-end token launch: ERC-20 contract, vesting, tokenomics modelling, and a presale dApp with crypto payments.",
    highlights: [
      "ERC-20 token with vesting & locks",
      "Tokenomics model & distribution",
      "Presale dApp with wallet payments",
    ],
    metrics: [
      { label: "Raised", value: "$1.2M" },
      { label: "Holders", value: "8k+" },
      { label: "Contract audit", value: "Passed" },
    ],
    accent: "violet",
  },
];

/* ------------------------------------------------------------------ */
/*  Values (About page)                                              */
/* ------------------------------------------------------------------ */
export type Value = { title: string; description: string; icon: LucideIcon };

export const values: Value[] = [
  {
    title: "Client-First Approach",
    description:
      "Your goals drive every decision. We listen first, advise honestly, and treat your product as if it were our own.",
    icon: Handshake,
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear scopes, clear quotes, no surprises. You always know what you're paying for and why.",
    icon: BadgeCheck,
  },
  {
    title: "Quality & Security",
    description:
      "Clean, reviewed, audit-ready code — with security and performance treated as defaults, not afterthoughts.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Partnership",
    description:
      "We're in it beyond launch — maintaining, improving, and scaling your product as your business grows.",
    icon: Users,
  },
];

/* ------------------------------------------------------------------ */
/*  Differentiators (home "Why choose us" bento)                     */
/* ------------------------------------------------------------------ */
export type Capability = { title: string; description: string; icon: LucideIcon };

export const capabilities: Capability[] = [
  {
    title: "Web2 + Web3 under one roof",
    description:
      "Websites, apps, and blockchain — one team that speaks both worlds, so your stack stays coherent.",
    icon: Blocks,
  },
  {
    title: "Full-stack expertise",
    description:
      "Frontend, backend, mobile, smart contracts, and cloud — end-to-end ownership, no hand-offs.",
    icon: Layers,
  },
  {
    title: "On-time delivery",
    description:
      "Clear milestones and tight iterations. We commit to dates and we hit them.",
    icon: Clock,
  },
  {
    title: "Post-launch support",
    description:
      "AMC packages, monitoring, and rapid fixes keep your product fast, secure, and online.",
    icon: LifeBuoy,
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
      "We learn your business, users, and goals, then define scope, timeline, and success metrics — in writing, before we build.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Figma wireframes and prototypes turn the plan into a clickable experience you can review before a line of code is written.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build in tight, reviewed iterations with automated testing and continuous delivery — you see progress every week.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy, monitor, and stay on — with maintenance, optimisation, and a roadmap for what's next.",
    icon: Rocket,
  },
];

/* ------------------------------------------------------------------ */
/*  Stats                                                             */
/* ------------------------------------------------------------------ */
export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
};

export const stats: Stat[] = [
  { value: 30, suffix: "+", label: "Projects delivered" },
  { value: 15, suffix: "+", label: "Happy clients" },
  { value: 1, suffix: "+", label: "Years of experience" },
  { value: 8, suffix: "+", label: "Blockchain projects" },
];

/* ------------------------------------------------------------------ */
/*  Target audience (marquee / trust bar)                            */
/* ------------------------------------------------------------------ */
export const industries: string[] = [
  "Startups",
  "SMEs",
  "Enterprises",
  "Web3 Projects",
  "Entrepreneurs",
  "E-Commerce",
  "Agencies",
  "Global Clients",
];

/* ------------------------------------------------------------------ */
/*  Technology stack (ticker)                                        */
/* ------------------------------------------------------------------ */
export const techStack: string[] = [
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Python",
  "Laravel",
  "React Native",
  "Flutter",
  "Solidity",
  "Ethereum",
  "Polygon",
  "Solana",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "GraphQL",
  "AWS",
  "Docker",
];

/* ------------------------------------------------------------------ */
/*  Testimonials                                                      */
/* ------------------------------------------------------------------ */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Lunar Global took our idea from a rough Figma to a live SaaS product in weeks. The communication was constant and the code quality is excellent.",
    name: "Aarav Mehta",
    role: "Founder, SaaS Startup",
    rating: 5,
  },
  {
    quote:
      "They built and audited our staking platform end to end. Genuine Web3 expertise — rare to find a team that handles both contracts and a polished frontend.",
    name: "Daniel Fischer",
    role: "Product Lead, DeFi Project",
    rating: 5,
  },
  {
    quote:
      "Our website's traffic and speed both jumped after the rebuild. On time, on budget, and they still support us months later.",
    name: "Priya Nair",
    role: "Marketing Head, Enterprise",
    rating: 5,
  },
];

/* ------------------------------------------------------------------ */
/*  Engineering principles (moving cards)                            */
/* ------------------------------------------------------------------ */
export type Principle = { quote: string; name: string; title: string };

export const principles: Principle[] = [
  {
    quote:
      "We treat reliability as a feature, not an afterthought. If it can't run unattended, it isn't finished.",
    name: "Reliability",
    title: "How we build",
  },
  {
    quote:
      "Security and audits are part of the build from day one — you can't bolt trust onto a product later.",
    name: "Trust by design",
    title: "How we build",
  },
  {
    quote:
      "Simplicity scales. We resist complexity until the problem genuinely demands it, then contain it cleanly.",
    name: "Essential simplicity",
    title: "How we build",
  },
  {
    quote:
      "We ship in tight loops with real users and real data — the only review that matters is production.",
    name: "Ship to learn",
    title: "How we build",
  },
  {
    quote:
      "We own outcomes end to end. The handoff isn't the finish line — your product performing in the field is.",
    name: "Total ownership",
    title: "How we build",
  },
  {
    quote:
      "Performance is a discipline. Every millisecond and every byte is accounted for, measured, and defended.",
    name: "Measured performance",
    title: "How we build",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                               */
/* ------------------------------------------------------------------ */
export const faqs: { q: string; a: string }[] = [
  {
    q: "What kinds of projects do you take on?",
    a: "Everything from corporate websites, e-commerce, and SaaS platforms to mobile apps, smart contracts, DeFi/NFT platforms, and full product builds. If it's digital, we likely build it.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We're based in India and work with clients globally across time zones, communicating in clear, regular updates throughout the project.",
  },
  {
    q: "How do projects usually start?",
    a: "With a short discovery call to understand your goals, scope, and timeline. From there we send a clear proposal with milestones and transparent pricing before any work begins.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Always. We offer monthly and quarterly AMC packages covering monitoring, bug fixes, security patches, and improvements — plus 30 days of post-launch fixes at no extra cost.",
  },
];
