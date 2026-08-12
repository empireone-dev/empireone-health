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
import { Space_Grotesk } from "next/font/google";
import Card from "../../../_components/card";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const FOUNDATION_CARDS = [
  {
    icon: ShieldCheck,
    title: "Eligibility & Benefits",
    desc: "Accurate and timely verification of patient eligibility and benefits, reducing billing errors and ensuring smooth patient onboarding.",
    href: "eligibility-benefits-verification",
  },
  {
    icon: ClipboardCheck,
    title: "Prior Authorization",
    desc: "Streamlined prior authorization management to accelerate approvals, minimize delays, and enhance patient access to care.",
    href: "prior-authorization-management",
  },
  {
    icon: FileWarning,
    title: "Denial Management",
    desc: "Proactive denial management strategies to maximize reimbursement, reduce appeals, and resolve issues swiftly.",
    href: "denial-management",
  },
  {
    icon: CreditCard,
    title: "Patient Collections",
    desc: "Patient-friendly collections approach that improves account resolution while preserving patient relationships and satisfaction.",
    href: "patient-self-pay-collections",
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
        padding="p-6"
        className="group flex h-full flex-col justify-between rounded-2xl! border-gray-100 hover:-translate-y-1! hover:border-teal-100! hover:shadow-xl! hover:shadow-teal-500/10! transition-all! duration-300! ease-out!"
      >
        <div>
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          <p
            className={`${spaceGrotesk.className} mt-2 text-xs leading-relaxed text-gray-600`}
          >
            {desc}
          </p>
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 transition-colors duration-300 group-hover:text-teal-600">
          Learn More
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </Card>
    </Reveal>
  );
}

export default function FoundationServicesSection() {
  return (
    <section className="mx-auto max-w-screen-2xl px-6 py-20 sm:py-28">
      <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700">
            <Building className="h-3.5 w-3.5" />
            Foundation Services{" "}
          </span>
          <h2 className="mt-4 text-5xl font-bold text-slate-900 ">
            Core healthcare operations services ready for outsourcing
          </h2>
          <p
            className={`${spaceGrotesk.className} mt-6 max-w-md text-xl leading-relaxed font-semibold text-gslate-700`}
          >
            We streamline provider and payer workflows, ensuring a seamless
            outsourcing transition and rapid operational improvements.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <ServiceCard
            icon={UserCheck}
            title="Provider Services"
            desc="Comprehensive support for providers, improving patient care coordination and operational efficiency through specialized teams, advanced QA, and full transparency."
            href="provider"
            delay={80}
          />
          <ServiceCard
            icon={Activity}
            title="Payer Services"
            desc="Tailored solutions for payers, enhancing claim accuracy, turnaround times, and compliance with expert teams and transparent performance metrics."
            href="payer"
            delay={160}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
