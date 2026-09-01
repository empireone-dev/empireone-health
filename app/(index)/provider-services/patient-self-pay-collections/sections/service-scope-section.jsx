"use client";

import { motion } from "motion/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <div className="group relative flex h-full flex-col justify-between rounded-3xl border-2 border-slate-200/80 bg-white p-8 lg:p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-500/15 focus-within:ring-4 focus-within:ring-indigo-500/20">
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
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 leading-tight lg:text-3xl">
            {title}
          </h3>

          {/* Expanded Clear Text */}
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
    <section className="min-h-screen w-full bg-slate-50/60 py-12 lg:py-20 flex flex-col justify-center items-center">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12 flex flex-col justify-between h-full">
        
        {/* Top Split Header Section */}
        <div className="mb-8 lg:mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          
          {/* Section Header */}
          <Reveal className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-6">
            <span className="inline-flex w-fit items-center rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-bold text-indigo-700">
              Service Scope
            </span>
            <h2 className="mt-6 text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              What the workflow covers.
            </h2>
            <p
              className={`${inter.className} mt-6 text-lg lg:text-xl leading-relaxed text-slate-600 font-normal max-w-2xl`}
            >
              Patient collections works best when it is organized, documented,
              and sensitive to the patient experience. EmpireOneHealth helps
              keep balance outreach consistent while protecting account
              visibility.
            </p>
          </Reveal>

          {/* Top 2 Cards */}
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