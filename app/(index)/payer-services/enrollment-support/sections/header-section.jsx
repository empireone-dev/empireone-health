"use client";
import React from "react";
import Link from "next/link";
import ConsultationForm from "@/app/(index)/_components/consultation-form";
import BookCallButtonSection from "@/app/(index)/_sections/book-call-button-section";
export default function HeaderSection() {
  return (
    <div className="relative w-full overflow-hidden bg-[#eaf0ff] py-10 sm:py-12 lg:py-16 mt-16">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/images/header.webp')",
        }}
      />

      <div className="relative mx-auto w-full max-w-screen-2xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Hero Text Content */}
          <div className="flex flex-col items-start lg:col-span-6 xl:col-span-7">
            {/* Breadcrumb Navigation */}
            <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-slate-700 sm:text-sm">
              <Link href="/" className="text-[#0f2d9e] hover:underline">
                Home
              </Link>
              <span className="text-slate-400">/</span>
              <Link
                href="/payer-services"
                className="text-[#0f2d9e] hover:underline"
              >
                Payer Services
              </Link>
              <span className="text-slate-400">/</span>
              <span className="text-[#0b132b]">Enrollment Support</span>
            </nav>

            {/* Main Heading */}
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#0b132b] sm:mt-6 sm:text-4xl lg:text-[42px]">
              Enrollment Support for accurate member records and cleaner queues.
            </h1>

            {/* Description Text */}
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 sm:mt-5 sm:text-lg">
              Assist enrollment workflows, application review, member updates,
              documentation routing, status tracking, and exception handling
              with a trained payer operations team.
            </p>
            <div className="mt-5 sm:mt-6">
              <BookCallButtonSection />
            </div>
          </div>

          {/* Right Column: Free Consultation Form Card */}
          {/* Right Column: Free Consultation Form Card */}
          <div className="w-full min-w-0 lg:col-span-6 xl:col-span-5">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
