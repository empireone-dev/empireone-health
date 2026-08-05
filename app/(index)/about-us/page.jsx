import React from "react";
import {
  ArrowUpRight,
  UserRoundPlus,
  LineChart,
  ShieldCheck,
  Users,
  Search,
  Activity,
  HeartHandshake,
} from "lucide-react";
import CardSection from "./sections/card-section";

const highlights = [
  { icon: UserRoundPlus, label: "Reduce Administrative Burden" },
  { icon: LineChart, label: "Improve Financial Performance" },
  { icon: ShieldCheck, label: "Ensure Accuracy & Compliance" },
  { icon: Users, label: "Elevate Member & Patient Experience" },
];

export default function AboutSection() {
  return (
    <>
      <section className="relative overflow-hidden px-8 py-16 sm:px-16 md:px-24 lg:px-28 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/images/about-us-bg.png')" }}
        />
        <div className="absolute inset-0 bg-white/70" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left copy */}
          <div className="flex flex-col items-start space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700">
              <Search className="h-3.5 w-3.5" />
              About Us
            </span>

            <h1 className="text-3xl font-bold leading-[1.2] tracking-tight text-[#0f172a] sm:text-4xl lg:text-[42px]">
              Healthcare operations support built for measurable outcomes.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              EmpireOneHealth helps provider and payer organizations strengthen
              revenue cycle execution with dedicated teams, clear QA, secure
              workflows, and accountable reporting.
            </p>

            <a
              href="#book-call"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0f2d9e] px-7 py-3.5 text-sm font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#0b2278] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0f2d9e] focus:ring-offset-2 focus:ring-offset-white"
            >
              <span>Book a 30-Min Call</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Right image */}
          <div className="relative w-full">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              <img
                src="/images/empireone-background.jpg"
                alt="EmpireOne Team"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:-bottom-8 sm:left-8">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
                <HeartHandshake className="relative h-5 w-5 text-teal-600" />
              </span>
              <div>
                <p className="text-sm font-semibold text-blue-950">
                  Precision in Every Process
                </p>
                <p className="text-xs text-gray-500">
                  Supporting better outcomes through every claim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-7xl px-8 py-12 sm:px-16 lg:px-2">
          <div className="grid grid-cols-1 gap-y-10 divide-y divide-slate-200 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-y-0">
            {highlights.map(({ icon: Icon, label }, index) => (
              <div
                key={index}
                className="flex flex-col items-center px-4 pt-8 text-center first:pt-0 sm:px-6 lg:pt-0"
              >
                <Icon
                  className="mb-4 h-9 w-9 text-[#0f2d9e]"
                  strokeWidth={1.5}
                />
                <p className="max-w-[12rem] text-sm font-semibold text-[#0f2d9e]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe]">
        <CardSection />
      </div>
    </>
  );
}
