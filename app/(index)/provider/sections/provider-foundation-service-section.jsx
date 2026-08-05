"use client";

import React from "react";
import { motion } from "motion/react";
import { Activity, ArrowUpRight, Building, UserCheck } from "lucide-react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const FOUNDATION_CARDS = [
  {
    title: "Benefits Verification & Eligibility",
    desc: "Confirm coverage, benefits, eligibility status, patient responsibility, and payer-specific requirements before care is delivered.",
    href: "#benefits-verification",
  },
  {
    title: "Prior Authorization Management",
    desc: "Support authorization intake, documentation checks, payer follow-up, status tracking, and approval workflows.",
    href: "#prior-authorization",
  },
  {
    title: "Appointment Scheduling & Referral Management",
    desc: "Coordinate scheduling, rescheduling, reminders, referral intake, referral tracking, and follow-up requirements.",
    href: "#appointment-scheduling",
  },
  {
    title: "Denial Management",
    desc: "Work denial queues, appeal preparation, payer-specific rework, status tracking, and denial trend reporting.",
    href: "#denial-management",
  },
  {
    title: "Patient / Self-Pay Collections",
    desc: "Support patient balance outreach, self-pay follow-up, payment coordination, and account resolution workflows.",
    href: "#patient-self-pay-collections",
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

function ServiceCard({ icon: Icon, title, desc, href, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="group flex h-full flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-500/10">
        <div>
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          <p
            className={`${spaceGrotesk.className} mt-2 text-xs leading-relaxed text-gray-600`}
          >
            {desc}
          </p>
        </div>
        <a
          href={href}
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-slate-900 transition-colors group-hover:text-teal-600"
        >
          Learn More
          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </Reveal>
  );
}

export default function ProviderFoundationServiceSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-12">
      <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 border border-indigo-200">
            <Building className="h-3.5 w-3.5" />
            Foundation Services
          </span>
          <h2 className="mt-3 text-4xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
            Core provider services.
          </h2>
          <p
            className={`${spaceGrotesk.className} mt-5 max-w-md text-lg leading-relaxed text-gray-600`}
          >
            Build reliable front-end and revenue cycle support around benefits
            verification, prior authorization, scheduling, referrals, denial
            recovery, underpayments, and patient collections.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <ServiceCard
            title="Provider Services"
            desc="Comprehensive support for providers, improving patient care coordination and operational efficiency through specialized teams, advanced QA, and full transparency."
            href="#provider-services"
            delay={80}
          />
          <ServiceCard
            title="Payer Services"
            desc="Tailored solutions for payers, enhancing claim accuracy, turnaround times, and compliance with expert teams and transparent performance metrics."
            href="#payer-services"
            delay={160}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FOUNDATION_CARDS.map((card, i) => (
          <ServiceCard
            key={card.title}
            title={card.title}
            desc={card.desc}
            href={card.href}
            delay={i * 90}
          />
        ))}
      </div>
    </section>
  );
}
