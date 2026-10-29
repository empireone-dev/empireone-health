"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import BookCalendarSection from "./book-calendar-section";

export default function HeroSection() {
  return (
    <div className="relative mt-16 w-full overflow-hidden bg-[#eaf0ff] py-8 sm:py-10 lg:py-12">
      {/* Background Image Container */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/images/header.webp')",
        }}
      />

      <div className="relative mx-auto w-full max-w-screen-2xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
            Appointment
          </div>

          {/* Breadcrumb Navigation */}
          <nav className="mt-2 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-xs font-semibold text-slate-700 sm:text-sm">
            <Link href="/" className="text-slate-600 hover:text-[#0f2d9e] hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#0f2d9e] underline">
              Appointment
            </span>
          </nav>
        </motion.div>
      </div>
      <div className="mx-auto mt-8 w-full max-w-screen-2xl px-6 sm:mt-10 lg:px-12">
        <BookCalendarSection />
      </div>
    </div>
  );
}