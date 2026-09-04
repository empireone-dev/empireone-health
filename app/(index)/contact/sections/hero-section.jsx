"use client";
import React from "react";
import { motion } from "motion/react";
import { BookOpen, Phone } from "lucide-react";
import BookFormSection from "../../_sections/book-form-section";
import ContactDetailSection from "./contact-detail-section";
export default function HeroSection() {
  return (
    <div className="relative bg-white">
      <section className="relative w-full overflow-hidden min-h-105 sm:min-h-110 md:min-h-120 lg:min-h-130 flex items-center">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img
            src="/images/contact-background.webp"
            alt="Healthcare professionals team"
            className="w-full h-full object-cover object-[65%_center] sm:object-right md:object-center"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-linear-to-b from-white/95 via-white/85 to-white/60 sm:hidden" />

        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-12 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 mx-auto flex max-w-xl flex-col items-center space-y-4 text-center sm:mx-0 sm:items-start sm:space-y-5 sm:text-left lg:max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-[12px] font-semibold text-indigo-700 ">
              <Phone className="h-3.5 w-3.5 shrink-0" />
              Contact
            </span>

            <h1 className="text-xl font-bold leading-tight tracking-tight text-[#0a1b39] sm:text-2xl sm:leading-[1.2] md:text-4xl lg:text-5xl">
              Discover What is{" "}
              <span className="bg-linear-to-r from-blue-700 to-fuchsia-600 bg-clip-text text-transparent">
                Possible
              </span>
            </h1>

            <p
              className="
                  mt-3
                  max-w-[620px]
                  text-sm
                  leading-relaxed
                  text-slate-800
                  sm:text-base
                  lg:text-base
                  xl:text-lg
                "
            >
              Tell us where you want to go. We’ll build the right mix of people,
              processes, and technology to help you get there.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="w-full bg-slate-50 py-10 lg:py-14">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex lg:col-span-7"
            >
              <BookFormSection compact />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="flex lg:col-span-5"
            >
              <ContactDetailSection />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
