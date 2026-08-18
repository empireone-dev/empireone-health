"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

import ConsultationForm from "@/app/(index)/_components/consultation-form";
export default function HeaderSection() {
  return (
    <div className="relative w-full overflow-hidden bg-[#eaf0ff] py-12 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/images/header.webp')",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Hero Text Content */}
          <div className="flex flex-col items-start lg:col-span-6 xl:col-span-7">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-700 sm:text-sm">
              <a href="/" className="text-[#0f2d9e] hover:underline">
                Home
              </a>
              <span className="text-slate-400">/</span>
              <a
                href="/payer-services"
                className="text-[#0f2d9e] hover:underline"
              >
                Payer Services
              </a>
              <span className="text-slate-400">/</span>
              <span className="text-[#0b132b]">Enrollment Support</span>
            </nav>

            {/* Main Heading */}
            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#0b132b]">
              Enrollment Support for accurate member records and cleaner queues.
            </h1>

            {/* Description Text */}
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-800 sm:text-base">
              Assist enrollment workflows, application review, member updates,
              documentation routing, status tracking, and exception handling
              with a trained payer operations team.
            </p>

            <a
              href="#book-call"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b1b68] px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#071142] focus:outline-none focus:ring-2 focus:ring-[#0b1b68] focus:ring-offset-2"
            >
              <span>Book a 30 Minute Call</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Right Column: Free Consultation Form Card */}
          {/* Right Column: Free Consultation Form Card */}
          <div className="w-full lg:col-span-6 xl:col-span-5">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
