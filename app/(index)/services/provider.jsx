"use client";
import React from "react";

import { motion } from "motion/react";
import { ArrowUpRight, HeartHandshake, BadgeCheck } from "lucide-react";
import BookACallSection from "../_sections/book-a-call-section";
import ProviderFoundationServiceSection from "../provider-services/sections/provider-foundation-service-section";
import ProviderHowWeWorkSection from "../provider-services/sections/provider-how-we-work-section";
import Link from "next/link";

export default function Provider() {
  return (
    <div className="bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe]">
      <section className="relative overflow-hidden px-8 py-16 sm:px-16 md:px-24 lg:px-28 lg:py-24">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/images/bg-med.webp')" }}
        />
        <div className="absolute inset-0 bg-purple-50/50" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col items-start space-y-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 border border-indigo-200  ">
              <BadgeCheck className="h-3.5 w-3.5" />
              Provider Services
            </span>

            <h1 className="text-3xl font-bold leading-[1.2] tracking-tight text-[#0f172a] sm:text-4xl lg:text-[42px]">
              <span className="bg-linear-to-r from-blue-700 to-fuchsia-600 bg-clip-text text-transparent">
                Provider
              </span>{" "}
              operations support built for access, authorization, and revenue.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              Focused healthcare BPO support for core provider workflows ready
              for outsourcing.
            </p>

            <Link
              href="/appointment"
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
                src="/images/02.webp"
                alt="EmpireOne Team"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:-bottom-8 sm:left-8">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
                <HeartHandshake className="relative h-5 w-5 text-teal-600" />
              </span>
              <div>
                <p className="text-sm font-semibold text-blue-950">
                  Provider Excellence
                </p>
                <p className="text-xs text-gray-500">
                  Empowering seamless access, authorization, and care
                  coordination.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ProviderFoundationServiceSection />
      <ProviderHowWeWorkSection />
      <BookACallSection />
    </div>
  );
}
