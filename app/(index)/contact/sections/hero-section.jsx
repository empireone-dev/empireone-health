"use client";
import React from "react";
import { motion } from "motion/react";
import { BookOpen, Phone } from "lucide-react";
import BookFormSection from "../../_sections/book-form-section";
import ContactDetailSection from "./contact-detail-section";
export default function HeroSection() {
  return (
    <div className="relative bg-white">
      <section className="relative w-full overflow-hidden min-h-100  flex items-center">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img
            src="/images/contact-background.webp"
            alt="Healthcare professionals team"
            className="w-full h-full object-cover object-[65%_center] sm:object-right md:object-center"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-linear-to-b from-white/95 via-white/85 to-white/60 sm:hidden" />

        <div className="w-full px-8 py-16 sm:px-16 md:px-24 lg:px-28 lg:py-24">
          <div className="mx-auto w-full max-w-7xl">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative z-20 flex max-w-xl flex-col items-start space-y-7 lg:max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 border border-indigo-200">
                <Phone className="h-3.5 w-3.5" />
                Contact
              </span>

              <h1 className="text-3xl font-bold leading-[1.1] tracking-wide text-[#0f172a] sm:text-4xl lg:text-[42px]">
                <span className="bg-linear-to-r from-blue-700 to-fuchsia-600 bg-clip-text text-transparent">
                  Discover{" "}
                </span>
                what is possible
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
                Tell us where you want to go. We’ll build the right mix of
                people, processes, and technology to help you get there.
              </p>
            </motion.div>
          </div>
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
