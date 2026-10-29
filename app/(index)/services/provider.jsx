"use client";
import React from "react";

import { motion } from "motion/react";
import { HeartHandshake, BadgeCheck } from "lucide-react";
import BookACallSection from "../_sections/book-a-call-section";
import ProviderFoundationServiceSection from "../provider-services/sections/provider-foundation-service-section";
import ProviderHowWeWorkSection from "../provider-services/sections/provider-how-we-work-section";
import BookCallButtonSection from "../_sections/book-call-button-section";

export default function Provider() {
  return (
    <div className="bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe]">
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24 mt-10">
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: "url('/images/bg-med.webp')" }}
        />
        <div className="absolute inset-0 bg-purple-50/50" />

        <div className="relative z-10 mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-10 px-6 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:px-12">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="flex flex-col items-start space-y-5 sm:space-y-7"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 border border-indigo-200  ">
              <BadgeCheck className="h-3.5 w-3.5" />
              Provider Services
            </span>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#0f172a] sm:text-4xl lg:text-[42px]">
              <span className="bg-linear-to-r from-blue-700 to-fuchsia-600 bg-clip-text text-transparent">
                Provider
              </span>{" "}
              operations support built for access, authorization, and revenue.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              Focused healthcare BPO support for core provider workflows ready
              for outsourcing.
            </p>

            <BookCallButtonSection />
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

            <div className="absolute -bottom-5 left-3 flex max-w-[calc(100%-1.5rem)] items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-3 py-3 shadow-lg backdrop-blur sm:-bottom-6 sm:left-6 sm:max-w-none sm:px-4">
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50">
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
