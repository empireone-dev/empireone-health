"use client";

import { motion } from "motion/react";
import { Briefcase } from "lucide-react";


const TOP_CARDS = [
  {
    badge: "Benefits",
    title: "Coverage & Benefit Questions",
    desc: "Support member inquiries about eligibility, covered services, benefit limits, plan details, and cost-share basics.",
  },
  {
    badge: "Claims",
    title: "Claims Status & EOB Help",
    desc: "Assist with claim status questions, EOB explanation routing, denial reason direction, and account documentation.",
  },
];

const FOUNDATION_CARDS = [
 
  {
    badge: "Network",
    title: "Provider Network Guidance",
    desc: "Help members navigate provider directory questions, network status, PCP selection, and access-related routing.",
  },
  {
    badge: "Requests",
    title: "Service Request Intake",
    desc: "Document requests, route cases to the right queue, capture required details, and maintain clear next-action ownership.",
  },
  {
    badge: "Escalate",
    title: "Appeal & Grievance Handoff",
    desc: "Identify complaints, access issues, adverse decisions, or urgent concerns that require formal escalation or specialist review.",
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
      <div className="group relative flex h-full flex-col justify-between rounded-3xl border-2 border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/15 focus-within:ring-4 focus-within:ring-indigo-500/20 sm:p-8 lg:p-10">
        <div>
          {/* Badge & Large Icon Header */}
          <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
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
          <h3 className="text-xl font-bold leading-tight tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
            {title}
          </h3>

          {/* Expanded Large Description Text */}
          <p
            className="mt-4 text-sm leading-relaxed font-normal text-slate-600 sm:text-base lg:text-lg"
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
    <section className="w-full bg-slate-50/60 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col px-6 lg:px-12">
        {/* Top Split Section */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:gap-8 lg:mb-10 lg:grid-cols-12 lg:items-stretch">
          {/* Header Info Banner */}
          <Reveal className="flex flex-col justify-center pr-0 lg:col-span-5 lg:pr-6">
            <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-bold text-indigo-700">
              <Briefcase className="h-4 w-4" />
              Service Scope
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:mt-6 sm:text-4xl lg:text-5xl">
              What the workflow covers.
            </h2>
            <p
              className="mt-4 text-base leading-relaxed font-normal text-slate-600 sm:mt-5 sm:text-lg lg:text-xl"
            >
              Give your team dependable front-end support that reduces avoidable
              rework, improves documentation, and keeps eligibility work visible.
            </p>
          </Reveal>

          {/* Top 2 Large Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:col-span-7">
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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