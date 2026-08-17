"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Building } from "lucide-react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const FOUNDATION_CARDS = [
  {
    title: "Appointment Scheduling & Referral Management",
    desc: "Coordinate scheduling, rescheduling, reminders, referral intake, referral tracking, and follow-up requirements.",
    href: "appointment-scheduling-referral",
  },
  {
    title: "Denial Management",
    desc: "Work denial queues, appeal preparation, payer-specific rework, status tracking, and denial trend reporting.",
    href: "denial-management",
  },
  {
    title: "Patient / Self-Pay Collections",
    desc: "Support patient balance outreach, self-pay follow-up, payment coordination, and account resolution workflows.",
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
      <div className="group flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 lg:p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-100 hover:shadow-2xl hover:shadow-teal-500/10">
        <div>
          {/* Render Icon if passed */}
          {Icon && (
            <div className="mb-6 inline-flex rounded-2xl bg-teal-50 p-4 text-teal-600 border border-teal-100">
              <Icon className="h-8 w-8" />
            </div>
          )}

          {/* Card Title - Scaled Up */}
          <h3 className="text-xl font-bold text-slate-900 sm:text-2xl leading-snug">
            {title}
          </h3>

          {/* Card Body - Scaled Up */}
          <p
            className={`${spaceGrotesk.className} mt-4 text-base sm:text-lg leading-relaxed text-gray-600 font-normal`}
          >
            {desc}
          </p>
        </div>

        {/* Action Link - Scaled Up */}
        <a
          href={href}
          className="mt-8 inline-flex items-center gap-2 text-base font-bold text-slate-900 transition-colors group-hover:text-teal-600"
        >
          <span>View Services</span>
          <ArrowUpRight className="h-5 w-5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </Reveal>
  );
}

export default function ProviderFoundationServiceSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 sm:py-28 lg:px-12">
      <div className="mb-12 lg:mb-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
        
        {/* Left Column: Heading & Intro */}
        <Reveal className="lg:col-span-6 xl:col-span-5">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-indigo-50 px-5 py-2 text-sm font-bold text-indigo-700 border border-indigo-200">
            <Building className="h-4 w-4" />
            Foundation Services
          </span>
          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
            Core provider services.
          </h2>
          <p
            className={`${spaceGrotesk.className} mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-gray-600 font-normal`}
          >
            Build reliable front-end and revenue cycle support around benefits
            verification, prior authorization, scheduling, referrals, denial
            recovery, underpayments, and patient collections.
          </p>
        </Reveal>

        {/* Right Column: First 2 Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-6 xl:col-span-7">
          <ServiceCard
            title="Benefits Verification & Eligibility"
            desc="Confirm coverage, benefits, eligibility status, patient responsibility, and payer-specific requirements before care is delivered."
            href="eligibility-benefits-verification"
            delay={80}
          />
          <ServiceCard
            title="Prior Authorization Management"
            desc="Support authorization intake, documentation checks, payer follow-up, status tracking, and approval workflows."
            href="prior-authorization-management"
            delay={160}
          />
        </div>
      </div>

      {/* Bottom Row: Remaining 3 Cards */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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