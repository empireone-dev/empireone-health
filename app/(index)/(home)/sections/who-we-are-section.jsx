"use client";

import React from "react";
import { motion } from "motion/react";
import { Activity, ArrowUpRight, Stethoscope } from "lucide-react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

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

export default function WhoWeAreSection() {
  return (
    <section className="relative flex items-center overflow-hidden py-20 sm:py-24 lg:min-h-[calc(100vh-124px)] lg:py-0">
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-teal-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-red-100/40 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-24 lg:px-12">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-200/60 to-cyan-100/40 blur-xl" />
          <div className="group relative overflow-hidden rounded-[1.75rem] border border-white shadow-xl shadow-slate-900/5">
            <img
              src="/images/empireonegroup.webp"
              alt="EmpireOne Health Team at work"
              className="h-full w-full scale-100 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:-bottom-8 sm:left-8"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
              <motion.span className="absolute h-10 w-10 rounded-full bg-teal-300/60" />
              <Activity className="relative h-5 w-5 text-teal-600" />
            </span>
            <div>
              <p className="text-sm font-semibold text-blue-950">
                Patient-first, always
              </p>
              <p className="text-xs text-gray-500">Care behind every claim</p>
            </div>
          </motion.div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700">
              <Stethoscope className="h-3.5 w-3.5" />
              Who we are
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Your Trusted Healthcare Operations &amp; RCM Support Partner
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p
              className={`${spaceGrotesk.className} mt-5 max-w-lg text-base leading-relaxed text-gray-600`}
            >
              EmpireOne Health empowers providers and payers with reliable,
              AI-enhanced healthcare operations and revenue cycle management for
              measurable, accountable results.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <a
              href="about-us"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-blue-900 px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/30"
            >
              About Us
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
