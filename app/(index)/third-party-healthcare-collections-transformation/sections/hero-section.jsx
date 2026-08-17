"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { BookOpen, CheckCircle } from "lucide-react";
import BookACallSection from "../../_sections/book-a-call-section";

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

export default function CaseStudyPage() {
  return (
    <>
      {/* Centered Header Section */}
      <div className="relative w-full overflow-hidden bg-[#eaf0ff] py-12 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/images/header.webp')",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-center text-center"
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700">
              <BookOpen className="h-3.5 w-3.5" />
              Client Success Story
            </span>

            {/* Breadcrumb Navigation */}
            <nav className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-700 sm:text-sm">
              <Link href="/" className="text-[#0f2d9e] hover:underline">
                Home
              </Link>
              <span className="text-slate-400">/</span>
              <Link
                href="/case-study"
                className="text-[#0f2d9e] hover:underline"
              >
                Case Studies
              </Link>
              <span className="text-slate-400">/</span>
              <span className="text-[#0b132b]">
                Third-Party Healthcare Collections Transformation
              </span>
            </nav>

            {/* Main Heading */}
            <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-[#0b132b] sm:text-4xl lg:text-5xl">
              Third-Party Healthcare Collections Transformation
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Executive Summary & Business Environment (White Background) */}
      <section className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-10">
            {/* Executive Summary */}
            <Reveal className="space-y-2.5 sm:space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-[#0b132b] sm:text-3xl">
                Executive Summary
              </h2>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Our revenue cycle leadership team worked with a multi-site
                healthcare provider to redesign its self-pay collections
                strategy, improving financial performance while enhancing the
                patient financial experience.
              </p>
            </Reveal>

            {/* Business Environment */}
            <Reveal delay={100} className="space-y-2.5 sm:space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-[#0b132b] sm:text-3xl">
                Business Environment
              </h2>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                The existing model relied heavily on high-volume outbound
                calling, resulting in unnecessary labor costs, inconsistent
                collections, and inefficient patient outreach.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Strategic Actions & Measured Outcomes (Light Blue Background) */}
      <section className="w-full bg-[#f2f5ff] py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10 xl:gap-12">
            {/* Left Column: Image */}
            <Reveal className="w-full lg:col-span-5">
              <div className="relative h-56 w-full overflow-hidden rounded-xl shadow-md sm:h-72 md:h-80 lg:h-[420px]">
                <Image
                  src="/images/10.webp"
                  alt="Surgical Team at Work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Reveal>

            {/* Right Column: Actions & Outcomes List */}
            <div className="space-y-6 sm:space-y-8 lg:col-span-7">
              {/* Strategic Actions */}
              <Reveal delay={100}>
                <h3 className="text-xl font-bold text-[#0b132b] sm:text-2xl">
                  Strategic Actions
                </h3>
                <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
                  {[
                    "Built and scaled a specialized collections team based on performance milestones.",
                    "Implemented payer-specific specialization to improve expertise and efficiency.",
                    "Standardized contract-based underpayment validation.",
                    "Introduced KPI-driven quality and productivity management.",
                    "Established continuous coaching tied to financial outcomes.",
                  ].map((action, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#0f2d9e] sm:h-5 sm:w-5" />
                      <span className="text-sm font-bold text-slate-800 sm:text-base">
                        {action}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Measured Outcomes */}
              <Reveal delay={200}>
                <h3 className="text-xl font-bold text-[#0b132b] sm:text-2xl">
                  Measured Outcomes
                </h3>
                <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
                  {[
                    "30% increase in cash collections within one year.",
                    "Higher recovery accuracy for underpaid claims.",
                    "Quality performance consistently exceeded established targets.",
                    "Maintained productivity despite operational constraints.",
                  ].map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#0f2d9e] sm:h-5 sm:w-5" />
                      <span className="text-sm font-bold text-slate-800 sm:text-base">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Value Delivered (White Background) */}
      <section className="w-full bg-white py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="space-y-2.5 sm:space-y-3">
            <h2 className="text-2xl font-bold tracking-tight text-[#0b132b] sm:text-3xl">
              Strategic Value Delivered
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              The engagement demonstrated how leadership, process design, and
              accountability can substantially improve revenue recovery without
              significant technology investment.
            </p>
          </Reveal>
        </div>
        <BookACallSection />
      </section>
    </>
  );
}
