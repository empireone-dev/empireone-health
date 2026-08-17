"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  UserRoundPlus,
  LineChart,
  ShieldCheck,
  Users,
  Search,
  Activity,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";
import CardSection from "./sections/card-section";
import BookACallSection from "../_sections/book-a-call-section";
import Link from "next/link";

const highlights = [
  { icon: UserRoundPlus, label: "Reduce Administrative Burden" },
  { icon: LineChart, label: "Improve Financial Performance" },
  { icon: ShieldCheck, label: "Ensure Accuracy & Compliance" },
  { icon: Users, label: "Elevate Member & Patient Experience" },
];
const cards = [
  {
    title: "Dedicated Team Design",
    bgColor: "bg-[#e9e3ff]", // soft purple tint
    icon: Users,
    image: "/images/empireonecx-team.webp",
    imageAlt: "Dedicated Team",
    points: [
      "Workflow volume planning",
      "Systems access planning",
      "Clear daily responsibilities",
    ],
  },
  {
    title: "Quality Visibility",
    bgColor: "bg-[#dbeafe]",
    icon: LineChart,
    image: "/images/quality-assuarance.webp",
    imageAlt: "Quality Visibility Dashboard",
    points: [
      "QA expectations",
      "Sampling and escalation paths",
      "KPI reporting",
    ],
  },
  {
    title: "Compliance-Conscious",
    bgColor: "bg-[#e8e5ff]",
    icon: ShieldCheck,
    image: "/images/complaince-logos.webp",
    imageAlt: "Compliance Badges",
    points: [
      "Role-based access",
      "Sensitive data handling expectations",
      "Documented controls",
    ],
  },
];

export default function AboutSection() {
  return (
    <div className="bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe]">
      <section className="relative overflow-hidden px-8 py-16 sm:px-16 md:px-24 lg:px-28 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/images/about-us-bg.png')" }}
        />
        <div className="absolute inset-0 bg-white/70" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left copy */}{" "}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col items-start space-y-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 border border-indigo-200  ">
              <Search className="h-3.5 w-3.5" />
              About Us
            </span>

            <h1 className="text-3xl font-bold leading-[1.2] tracking-tight text-[#0f172a] sm:text-4xl lg:text-[42px]">
              Healthcare operations support built for measurable outcomes.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              EmpireOneHealth helps provider and payer organizations strengthen
              revenue cycle execution with dedicated teams, clear QA, secure
              workflows, and accountable reporting.
            </p>
            <Link
              href="appointment"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0f2d9e] px-7 py-3.5 text-sm font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#0b2278] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0f2d9e] focus:ring-offset-2 focus:ring-offset-white"
            >
              <span>Book a 30-Min Call</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="relative w-full"
          >
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <img
                src="/images/empireone-background.webp"
                alt="EmpireOne Team"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>

<<<<<<< HEAD
            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:-bottom-8 sm:left-8">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
                <HeartHandshake className="relative h-5 w-5 text-teal-600" />
              </span>
              <div>
                <p className="text-sm font-semibold text-blue-950">
                  Precision in Every Process
                </p>
                <p className="text-xs text-gray-500">
                  Supporting better outcomes through every claim.
                </p>
              </div>
            </div>
=======
            
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
          </motion.div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-8 py-12 sm:px-16 lg:px-2">
          <div className="grid grid-cols-1 gap-y-10 divide-y divide-slate-200 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-y-0">
            {highlights.map(({ icon: Icon, label }, index) => (
              <div
                key={index}
                className="flex flex-col items-center px-4 pt-8 text-center first:pt-0 sm:px-6 lg:pt-0"
              >
                <Icon
                  className="mb-4 h-9 w-9 text-[#0f2d9e]"
                  strokeWidth={1.5}
                />
                <p className="max-w-[12rem] text-sm font-semibold text-[#0f2d9e]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe] mt-2">
        <CardSection />
      </div>

      <section className="w-full bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center text-3xl font-bold leading-[1.2] tracking-tight text-[#0f172a] sm:text-4xl lg:text-[42px] mb-12"
          >
            Human-led delivery with practical AI-assisted visibility.
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                role="group"
                aria-labelledby={`card-title-${idx}`}
                tabIndex={0}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className={`${card.bgColor} rounded-2xl p-6 lg:p-8 flex flex-col shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0f2d9e]`}
              >
                {/* Card Header (icon + title) */}
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/60 text-[#0f2d9e] ring-1 ring-white/60">
                    {card.icon ? <card.icon className="h-5 w-5" /> : null}
                  </span>
                  <h2
                    id={`card-title-${idx}`}
                    className="text-xl font-bold text-slate-900"
                  >
                    {card.title}
                  </h2>
                </div>

                <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-slate-200 border border-slate-300/40">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover border border-blue-500 rounded-md"
                  />
                </div>

                <ul className="mt-auto space-y-4">
                  {card.points.map((point, pointIdx) => (
                    <li key={pointIdx} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-4 w-4 text-[#0f2d9e]" />
                      <span className="text-slate-800 font-medium text-sm sm:text-base leading-snug">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <BookACallSection />
    </div>
  );
}
