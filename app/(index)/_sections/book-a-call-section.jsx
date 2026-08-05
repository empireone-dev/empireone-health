"use client";

import React from "react";

import { motion, useReducedMotion } from "framer-motion";

export default function BookACallSection() {
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <section className="p-8"> 
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-r from-[#6366f1] via-[#5b5bd6] to-[#4f46e5] p-10 text-center shadow-2xl">
        
          <div
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/images/network-pattern.webp')" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative z-10 max-w-3xl"
          >
            <span className="mx-auto inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-white/95 border border-white/20">
              The Perfect Partnership
            </span>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight">
              Smarter Healthcare Operations.
              <br />
              Better Patient Experiences.
            </h2>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#book-call"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 }}
            whileHover={{ y: -3, scale: 1.01 }}
            className="group relative z-10 mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#0f2d9e] shadow-2xl hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5b5bd6]"
          >
            <span>Book a 30 Minute Call</span>
          </motion.a>
        </div>
      </section>
    </div>
  );
}
