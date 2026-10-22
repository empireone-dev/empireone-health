"use client";
import React from "react";
import { motion } from "motion/react";
import { Phone } from "lucide-react";
import BookFormSection from "../../_sections/book-form-section";
import ContactDetailSection from "./contact-detail-section";
export default function HeroSection() {
  return (
    <div className="relative bg-linear-to-r from-[#fff3ea] via-[#f2f7fc] to-[#edf5ff]">
      <section className="relative flex min-h-100 w-full items-center overflow-hidden lg:aspect-[2.83] lg:min-h-112">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img
            src="/images/contact-carcar-building.webp"
            alt="EmpireOne Carcar site"
            className="w-full h-full object-cover object-[65%_center] sm:object-right md:object-center"
          />
        </div>

        <div className="absolute inset-0 z-10 bg-linear-to-b from-white/95 via-white/85 to-white/60 sm:hidden" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t from-[#f2f7fc] to-transparent" />

        <div className="w-full px-6 pt-14 pb-24 sm:px-12 lg:px-16 lg:pt-20 lg:pb-32">
          <div className="mx-auto w-full max-w-7xl">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative z-20 flex max-w-xl flex-col items-start space-y-6 lg:max-w-[48%]">

              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 border border-indigo-200">
                <Phone className="h-3.5 w-3.5" />
                Contact
              </span>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-[#10113e] sm:text-4xl lg:text-[42px]">
                <span className="bg-linear-to-r from-blue-700 to-fuchsia-600 bg-clip-text text-transparent">
                  Discover{" "}
                </span>
                what is possible
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
                Tell us where you want to go. We’ll build the right mix of
                people, processes, and technology to help you get there.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section aria-label="Contact our team" className="relative z-20 -mt-10 w-full pb-12 lg:-mt-16 lg:pb-16">
        <div className="mx-auto w-full max-w-480 px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-stretch">
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
