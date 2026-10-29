"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Building } from "lucide-react";
import Link from "next/link";

const FOUNDATION_CARDS = [
  {
    title: "Member Services",
    desc: "Support member inquiries, coverage questions, benefit navigation, routing, service requests, and consistent member communication.",
    href: "/payer-services/member-services",
  },
  {
    title: "Enrollment Support",
    desc: "Assist enrollment workflows, application review, member updates, status tracking, documentation routing, and administrative queue support.",
    href: "/payer-services/enrollment-support",
  },
  {
    title: "Provider Data Management",
    desc: "Support provider record updates, data validation, directory maintenance, change requests, and structured provider data quality workflows.",
    href: "/payer-services/provider-data-management",
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
      <div className="group flex h-full min-h-[17rem] flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-500/10 sm:p-8 lg:p-10">
        <div>
          <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">{title}</h3>
          <p
            className={`mt-4 text-base leading-relaxed text-gray-600`}
          >
            {desc}
          </p>
        </div>
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-1 text-base font-bold text-slate-900 transition-colors group-hover:text-teal-600"
        >
          View service
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </Reveal>
  );
}

export default function PayerFoundationServiceSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-12">
        <div className="mb-8 grid grid-cols-1 gap-6 sm:mb-10 sm:gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700">
              <Building className="h-3.5 w-3.5" />
              Foundation Services
            </span>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Core payer services.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
              Build reliable payer operations capacity around member services,
              enrollment support, and provider data management.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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
      </div>
    </section>
  );
}
