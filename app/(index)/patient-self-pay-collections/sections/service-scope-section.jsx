"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

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
      transition={{ duration: 0.7, delay: delay / 1000, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

function ServiceCard({ badge, title, desc, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="group flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/10">
        <div>
          {badge && (
            <span className="mb-3 inline-block rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold text-indigo-700 border border-indigo-100">
              {badge}
            </span>
          )}
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          <p
            className={`${spaceGrotesk.className} mt-2 text-xs leading-relaxed text-gray-600`}
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
    <div className="relative overflow-hidden bg-blue-100">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-12">
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700">
              <Briefcase className="h-3.5 w-3.5" />
              Service Scope
            </span>
            <h2 className="mt-3 text-4xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              What the workflow covers.
            </h2>
            <p
              className={`${spaceGrotesk.className} mt-5 max-w-md text-md leading-relaxed text-gray-600`}
            >
              Patient collections works best when it is organized, documented,
              and sensitive to the patient experience. EmpireOneHealth helps
              keep balance outreach consistent while protecting account
              visibility.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <ServiceCard
              badge="Review"
              title="Account Queue Review"
              desc="Review self-pay balances, patient responsibility, aging status, payer follow-up notes, and account readiness for outreach."
              delay={80}
            />
            <ServiceCard
              badge="Outreach"
              title="Patient Communication"
              desc="Support call, message, or client-approved outreach workflows with clear scripting and documented communication attempts."
              delay={160}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FOUNDATION_CARDS.map((card, i) => (
            <ServiceCard
              key={card.title}
              badge={card.badge}
              title={card.title}
              desc={card.desc}
              delay={i * 90}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
