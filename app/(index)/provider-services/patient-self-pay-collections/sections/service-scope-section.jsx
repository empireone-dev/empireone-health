"use client";

import { motion } from "motion/react";

const TOP_CARDS = [
  {
    badge: "Review",
    title: "Account Queue Review",
    desc: "Review self-pay balances, patient responsibility, aging status, payer follow-up notes, and account readiness for outreach.",
  },
  {
    badge: "Outreach",
    title: "Patient Communication",
    desc: "Support call, message, or client-approved outreach workflows with clear scripting and documented communication attempts.",
  },
];

const FOUNDATION_CARDS = [
  {
    badge: "Resolve",
    title: "Payment Coordination",
    desc: "Route payments, payment-plan requests, financial assistance questions, and account resolution steps according to client rules.",
  },
  {
    badge: "Notes",
    title: "Documentation Standards",
    desc: "Maintain clean account notes, call outcomes, follow-up dates, patient responses, and next-action ownership.",
  },
  {
    badge: "Escalate",
    title: "Exception Routing",
    desc: "Escalate disputes, billing questions, hardship concerns, insurance updates, and accounts needing internal review.",
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

function ServiceCard({ badge, title, desc, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group relative flex h-full flex-col justify-between rounded-3xl border-2 border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/15 focus-within:ring-4 focus-within:ring-indigo-500/20 sm:p-8 lg:p-10">
        <div>
          {/* Badge Header */}
          {badge && (
            <div className="mb-6">
              <span className="inline-flex items-center rounded-lg bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-700 border border-indigo-100/80 lg:text-sm">
                {badge}
              </span>
            </div>
          )}

          {/* Large Card Title */}
          <h3 className="text-xl font-bold leading-tight tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
            {title}
          </h3>

          {/* Expanded Clear Text */}
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
        
        {/* Top Split Header Section */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:gap-8 lg:mb-10 lg:grid-cols-12 lg:items-stretch">
          
          {/* Section Header */}
          <Reveal className="flex flex-col justify-center pr-0 lg:col-span-5 lg:pr-6">
            <span className="inline-flex w-fit items-center rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-bold text-indigo-700">
              Service Scope
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:mt-6 sm:text-4xl lg:text-5xl">
              What the workflow covers.
            </h2>
            <p
              className="mt-4 max-w-2xl text-base leading-relaxed font-normal text-slate-600 sm:mt-5 sm:text-lg lg:text-xl"
            >
              Patient collections works best when it is organized, documented,
              and sensitive to the patient experience. EmpireOneHealth helps
              keep balance outreach consistent while protecting account
              visibility.
            </p>
          </Reveal>

          {/* Top 2 Cards */}
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

        {/* Foundation Grid: Expanded 3 Column Layout */}
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