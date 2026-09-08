import Image from "next/image";
import {
  TrendingUp,
  Users,
  FileText,
  Search,
  FilePlus2,
  ShieldCheck,
  CreditCard,
  UserCog,
} from "lucide-react";

const PROCESS_BADGES = [
  {
    icon: TrendingUp,
    title: "Reporting & Analytics",
    lines: ["Real-time Insights", "Performance Optimization"],
    angle: 315,
  },
  {
    icon: Users,
    title: "Patient Access",
    lines: ["Insurance Verification", "Eligibility & Benefits"],
    angle: 0,
  },
  {
    icon: FileText,
    title: "Registration",
    lines: ["Accurate Demographics", "Data Validation"],
    angle: 45,
  },
  {
    icon: Search,
    title: "Charge Capture",
    lines: ["Complete & Accurate", "Coding Alignment"],
    angle: 90,
  },
  {
    icon: FilePlus2,
    title: "Claims Submission",
    lines: ["Timely & Compliant", "Clean Claim Record"],
    angle: 135,
  },
  {
    icon: ShieldCheck,
    title: "Denial Management",
    lines: ["Denial Prevention", "Appeals & Resolution"],
    angle: 180,
  },
  {
    icon: CreditCard,
    title: "Payment Posting",
    lines: ["Accurate Posting", "Reconciliation"],
    angle: 225,
  },
  {
    icon: UserCog,
    title: "Patient Billing",
    lines: ["Clear Communication", "Payment Plans"],
    angle: 270,
  },
];

// Radius (% of container) each badge sits at, matching the ring's inset-[10%].
const BADGE_RADIUS = 40;

function ProcessBadge({ icon: Icon, title, lines, angle }) {
  const rad = (angle * Math.PI) / 180;
  const left = 50 + BADGE_RADIUS * Math.sin(rad);
  const top = 50 - BADGE_RADIUS * Math.cos(rad);

  return (
    <div
      className="absolute z-10 hidden w-52 -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-2xl bg-white/95 p-3 shadow-lg shadow-slate-900/10 ring-1 ring-slate-900/5 backdrop-blur-sm sm:flex"
      style={{ left: `${left}%`, top: `${top}%` }}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-sm font-semibold text-slate-900">
          {title}
        </span>
        <span className="block text-xs leading-snug text-slate-500">
          {lines[0]}
          <br />
          {lines[1]}
        </span>
      </span>
    </div>
  );
}

export default function HeroBadgesSection({
  className = "mx-auto aspect-square w-full max-w-[720px]",
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Gradient ring connecting the badges */}
      <div
        aria-hidden="true"
        className="absolute inset-[10%] hidden rounded-full sm:block"
        style={{
          background:
            "conic-gradient(from 200deg, #2563eb, #7c3aed, #06b6d4, #2563eb)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 5px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 5px))",
        }}
      />

      <Image
        src="/images/nurse-hero.png"
        alt="Nurse reviewing patient information"
        width={720}
        height={720}
        quality={80}
        className="relative z-20 mx-auto h-auto w-[60%] object-contain drop-shadow-2xl"
      />

      {PROCESS_BADGES.map((badge) => (
        <ProcessBadge key={badge.title} {...badge} />
      ))}
    </div>
  );
}

