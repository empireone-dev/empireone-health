"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { CheckCircle, Workflow } from "lucide-react";
import BookACallSection from "@/app/(index)/_sections/book-a-call-section";

export default function HowWeWorkSection() {
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <section className="w-full bg-[#f0f3ff] px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={
              reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -28 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm sm:aspect-[16/12] lg:col-span-6"
          >
            <Image
              src="/images/enrollment-support.webp"
              alt="EmpireOne team member"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={
              reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 28 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            className="flex flex-col items-start lg:col-span-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 border border-indigo-200">
              <Workflow className="h-3.5 w-3.5" />
              How We Work
            </span>
            <h2 className="mt-4 text-2xl font-bold leading-snug tracking-tight text-[#0b132b] sm:text-3xl lg:text-[32px]">
              A structured enrollment workflow with clear ownership.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              The support model is aligned to your enrollment rules, member
              update standards, data validation requirements, documentation
              handoffs, exception paths, and reporting cadence.
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                "Application intake and enrollment queue ownership",
                "Member update support and documentation routing",
                "Exception tracking and unresolved item escalation",
                "QA sampling, aging reports, and queue visibility",
              ].map((text, i) => (
                <motion.li
                  key={text}
                  initial={
                    reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 stroke-[2.5] text-[#0f2d9e]" />
                  <span className="text-sm font-bold text-[#0b132b] sm:text-base">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
      <BookACallSection />
    </div>
  );
}
