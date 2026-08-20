"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import ConsultationForm from "@/app/(index)/_components/consultation-form";
import BookCallButtonSection from "@/app/(index)/_sections/book-call-button-section";

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
                href="/provider-services"
                className="text-[#0f2d9e] hover:underline"
              >
                Provider Services
              </a>
              <span className="text-slate-400">/</span>
              <span className="text-[#0b132b]">
                Prior Authorization Management
              </span>
            </nav>
            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#0b132b]">
              Prior Authorization Management that keeps care moving.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-800 sm:text-base">
              Support authorization intake, documentation review, payer
              submission, status tracking, and escalation workflows with a
              trained healthcare operations team built for consistency and
              visibility.
            </p>

           <BookCallButtonSection />
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
