"use client";
import React from "react";
import { motion } from "motion/react";
import { BookOpen } from "lucide-react";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-105 sm:min-h-110 md:min-h-120 lg:min-h-130 flex items-center">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src="/images/case-studies.webp"
          alt="Healthcare professionals team"
          className="w-full h-full object-cover object-[65%_center] sm:object-right md:object-center"
        />
      </div>

      {/* Mobile-only overlay for text legibility over the image */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-white/95 via-white/85 to-white/60 sm:hidden" />

      {/* 3. Hero Content Container */}
      <div className="w-full px-8 py-16 sm:px-16 md:px-24 lg:px-28 lg:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative z-20 flex max-w-xl flex-col items-start space-y-7 lg:max-w-2xl"
          >
            {/* Pill Tag */}
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 border border-indigo-200">
              <BookOpen className="h-3.5 w-3.5" />
              Case Studies
            </span>

            {/* Main Title */}
            <h1 className="text-3xl font-bold leading-[1.1] tracking-wide text-[#0f172a] sm:text-4xl lg:text-[42px]">
              <span className="bg-linear-to-r from-blue-700 to-fuchsia-600 bg-clip-text text-transparent">
                Real healthcare
              </span>{" "}
              operations improvements, built around measurable workflow
              outcomes.
            </h1>

            {/* Description Text */}
            <p className="max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              Review focused examples of how EmpireOneHealth supports provider
              and payer teams with structured operations, QA visibility, and
              scalable execution.
            </p>

            <div className="w-full pt-2 sm:w-auto">
              <Link
                href="/appointment"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0d237d] px-5 py-3 text-xs font-medium text-white shadow-xs transition-all duration-200 hover:bg-[#091a5e] sm:w-auto md:text-sm"
              >
                <span>Book a 30 Minute Call</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-3.5 w-3.5 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
