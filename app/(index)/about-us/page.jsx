import React from "react";
import { ArrowRightIcon, Search, ShieldCheckIcon } from "lucide-react";
import WhyChooseUsSection from "../(home)/sections/why-choose-us-section";

export default function AboutSection() {
  return (
    <>
      <section className="bg-white min-h-screen flex items-center justify-center p-8 sm:p-16 md:p-24 lg:p-28 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#0f2d9e]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0f2d9e]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative">
          <div className="flex flex-col items-start space-y-8 lg:space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700">
              <Search className="h-3.5 w-3.5" />
              About us
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0f172a] leading-[1.15] tracking-tight">
              Healthcare operations support built for{" "}
              <span className="text-[#0f2d9e]">measurable outcomes.</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              EmpireOneHealth helps provider and payer organizations strengthen
              revenue cycle execution with dedicated teams, clear QA, secure
              workflows, and accountable reporting.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4">
              <a
                href="#book-call"
                className="group inline-flex items-center justify-center gap-2 bg-[#0f2d9e] hover:bg-[#0b2278] text-white text-sm font-medium px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0f2d9e] focus:ring-offset-2 focus:ring-offset-white"
              >
                <span>Book a 30-Min Call</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheckIcon className="h-4 w-4 text-[#0f2d9e]" />
                <span>HIPAA-compliant workflows</span>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <img
                src="/images/empireone-background.jpg"
                alt="EmpireOne Team"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 bg-white rounded-xl shadow-lg border border-slate-100 px-6 py-5 hidden sm:block">
              <p className="text-2xl font-bold text-[#0f2d9e] leading-none">
                98%
              </p>
              <p className="text-xs text-slate-500 mt-1.5 max-w-[9rem]">
                Claim accuracy across partner accounts
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe]">
        <WhyChooseUsSection />
      </div>
      
    </>
  );
}
