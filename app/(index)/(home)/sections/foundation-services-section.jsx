"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Activity,
  ArrowUpRight,
  Building,
  ClipboardCheck,
  CreditCard,
  FileWarning,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Card from "../../../_components/card";

const FOUNDATION_CARDS = [
  {
    icon: ShieldCheck,
    title: "Eligibility & Benefits",
    desc: "Accurate and timely verification of patient eligibility and benefits, reducing billing errors and ensuring smooth patient onboarding.",
    href: "/provider-services/benefits-verification-eligibility",
  },
  {
    icon: ClipboardCheck,
    title: "Prior Authorization",
    desc: "Streamlined prior authorization management to accelerate approvals, minimize delays, and enhance patient access to care.",
    href: "/provider-services/prior-authorization-management",
  },
  {
    icon: FileWarning,
    title: "Denial Management",
    desc: "Proactive denial management strategies to maximize reimbursement, reduce appeals, and resolve issues swiftly.",
    href: "/provider-services/denial-management",
  },
  {
    icon: CreditCard,
    title: "Patient Collections",
    desc: "Patient-friendly collections approach that improves account resolution while preserving patient relationships and satisfaction.",
    href: "/provider-services/patient-self-pay-collections",
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
    <Reveal delay={delay} className="h-full">
      <Card
        href={href}
        padding="p-8"
        className="group flex h-full flex-col justify-between rounded-2xl! border-gray-100 transition-all! duration-300! ease-out! hover:-translate-y-1! hover:border-teal-100! hover:shadow-xl! hover:shadow-teal-500/10!"
      >
        <div>
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">{desc}</p>
        </div>
        <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors duration-300 group-hover:text-teal-600">
          Learn More
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </Card>
    </Reveal>
  );
}

export default function FoundationServicesSection() {
  return (
    <section className="mx-auto max-w-screen-2xl px-6 py-8 sm:py-10 lg:px-12">
      {/* Original layout: heading left, 2 cards right */}
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-stretch">
        <Reveal className="flex flex-col justify-center">
          <span className="inline-flex self-start items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700">
            <Building className="h-3.5 w-3.5" />
            Foundation Services
          </span>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Core{" "}
            <span className="bg-linear-to-r from-blue-700 to-fuchsia-600 bg-clip-text text-transparent">
              healthcare
            </span>{" "}
            operations services ready for outsourcing
          </h2>
          <p className="mt-4 max-w-md text-base font-semibold leading-relaxed text-slate-700 sm:mt-6 sm:text-lg lg:text-xl">
            We streamline provider and payer workflows, ensuring a seamless
            outsourcing transition and rapid operational improvements.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ServiceCard
            icon={UserCheck}
            title="Provider Services"
            desc="Comprehensive support for providers, improving patient care coordination and operational efficiency through specialized teams, advanced QA, and full transparency."
            href="/provider-services"
            delay={80}
          />
          <ServiceCard
            icon={Activity}
            title="Payer Services"
            desc="Tailored solutions for payers, enhancing claim accuracy, turnaround times, and compliance with expert teams and transparent performance metrics."
            href="/payer-services"
            delay={160}
          />
        </div>
      </div>

      {/* Bottom 4 cards — same height as top 2 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FOUNDATION_CARDS.map((card, i) => (
          <ServiceCard
            key={card.title}
            icon={card.icon}
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
