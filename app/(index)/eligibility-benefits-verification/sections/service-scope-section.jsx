"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  ShieldCheck, 
  FileSearch, 
  DollarSign, 
  ClipboardList, 
  FileText 
} from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const TOP_CARDS = [
  {
    badge: "Check",
    title: "Eligibility & Active Coverage",
    desc: "Confirm active coverage, plan type, effective dates, termination details, and subscriber/dependent status.",
    icon: ShieldCheck,
  },
  {
    badge: "Benefits",
    title: "Benefit Detail Review",
    desc: "Collect benefit limits, covered services, visit limits, exclusions, and payer-specific rules tied to the requested service.",
    icon: FileSearch,
  },
];

const FOUNDATION_CARDS = [
  {
    badge: "Cost",
    title: "Patient Responsibility",
    desc: "Document copay, deductible, coinsurance, out-of-pocket status, and account notes needed for patient communication.",
    icon: DollarSign,
  },
  {
    badge: "Rules",
    title: "Authorization & Referral Needs",
    desc: "Identify prior authorization, referral, medical necessity, or documentation requirements early in the workflow.",
    icon: ClipboardList,
  },
  {
    badge: "Notes",
    title: "Clean System Documentation",
    desc: "Keep verification notes, payer references, call details, and queue updates organized inside your operating process.",
    icon: FileText,
  },
];

function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

function ServiceCard({ badge, title, desc, icon: Icon, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group relative flex h-full flex-col justify-between rounded-3xl border-2 border-slate-200/80 bg-white p-8 lg:p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/15 focus-within:ring-4 focus-within:ring-indigo-500/20">
        <div>
          {/* Badge & Large Icon Header */}
          <div className="flex items-center justify-between gap-4 mb-6">
            {badge && (
              <span className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-700 border border-indigo-100">
                {badge}
              </span>
            )}
            {Icon && (
              <div className="rounded-xl bg-slate-100 p-3.5 text-slate-700 transition-colors group-hover:bg-indigo-100 group-hover:text-indigo-700">
                <Icon className="h-7 w-7" />
              </div>
            )}
          </div>

          {/* Large Card Title */}
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 leading-tight lg:text-3xl">
            {title}
          </h3>

          {/* Expanded Large Description Text */}
          <p
            className={`${inter.className} mt-4 text-base lg:text-lg leading-relaxed text-slate-600 font-normal`}
          >
            {desc}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function ServiceScopeSection() {
  return (
    /* Full height viewport section */
    <section className="min-h-screen w-full bg-slate-50/60 py-12 lg:py-20 flex flex-col justify-center items-center">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 flex flex-col justify-between h-full">
        
        {/* Top Split Section */}
        <div className="mb-8 lg:mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          
          {/* Header Info Banner */}
          <Reveal className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-6">
            <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-bold text-indigo-700">
              <Briefcase className="h-4 w-4" />
              Service Scope
            </span>
            <h2 className="mt-6 text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              What the workflow covers.
            </h2>
            <p
              className={`${inter.className} mt-6 text-lg lg:text-xl leading-relaxed text-slate-600 font-normal`}
            >
              Give your team dependable front-end support that reduces avoidable
              rework, improves documentation, and keeps eligibility work visible.
            </p>
          </Reveal>

          {/* Top 2 Large Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {TOP_CARDS.map((card, i) => (
              <ServiceCard
                key={card.title}
                badge={card.badge}
                title={card.title}
                desc={card.desc}
               
                delay={(i + 1) * 80}
              />
            ))}
          </div>
        </div>

        {/* Foundation Grid: Expanded 3 Column Layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FOUNDATION_CARDS.map((card, i) => (
            <ServiceCard
              key={card.title}
              badge={card.badge}
              title={card.title}
              desc={card.desc}
             
              delay={(i + 3) * 80}
            />
          ))}
        </div>

      </div>
    </section>
  );
}