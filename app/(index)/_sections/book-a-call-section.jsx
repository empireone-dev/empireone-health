"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion.create(Link);

export default function BookACallSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="p-4 sm:p-6 md:p-8">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-r from-[#6366f1] via-[#5b5bd6] to-[#4f46e5] p-8 text-center text-white shadow-2xl sm:p-10 md:p-14">
        
        {/* Background Pattern */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/network-pattern.webp')",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: "easeOut",
          }}
          className="relative z-10 max-w-3xl"
        >
          <span className="mx-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold text-white/95 backdrop-blur-sm">
            The Perfect Partnership
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Smarter Healthcare Operations.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Better Patient Experiences.
          </h2>
        </motion.div>

        {/* CTA Button */}
        <MotionLink
          href="/appointment"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease: "easeOut",
            delay: reduceMotion ? 0 : 0.15,
          }}
          whileHover={reduceMotion ? undefined : { y: -3, scale: 1.01 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          className="group relative z-10 mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-[#0f2d9e] shadow-2xl transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5b5bd6] sm:mt-10 sm:px-8"
        >
          Book a 30 Minute Call
        </MotionLink>
      </div>
    </section>
  );
}