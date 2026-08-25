"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import BookCalendarSection from "./book-calendar-section";

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden bg-[#eaf0ff] py-16 lg:py-24">
      {/* Background Image Container */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: "url('/images/header.webp')",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Main Heading */}
          <div className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Appointment
          </div>

          {/* Breadcrumb Navigation */}
          <nav className="mt-4 flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-700 sm:text-sm">
            <Link href="/" className="text-slate-600 hover:text-[#0f2d9e] hover:underline">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#0f2d9e] underline">
              Appoinment
            </span>
          </nav>
        </motion.div>
      </div>
      <BookCalendarSection />
    </div>
  );
}