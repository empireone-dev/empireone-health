"use client";

import React from "react";
import { motion } from "motion/react";
import { HeartPlus, ShieldCheck, UserCheck } from "lucide-react";
import { Syne } from "next/font/google";
import BookFormSection from "../_sections/book-form-section";
import WhoWeAreSection from "./sections/who-we-are-section";
import FoundationServicesSection from "./sections/foundation-services-section";
import WhyChooseUsSection from "./sections/why-choose-us-section";
import HeroSection from "./sections/hero-section";

function HeartbeatDivider() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-2 lg:px-12">
      <svg
        viewBox="0 0 1200 60"
        className="h-8 w-full text-teal-400 sm:h-10"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 30 H430 L458 30 L474 6 L494 54 L514 10 L530 30 H1200"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
        />
      </svg>
    </div>
  );
}
export default function Page() {
  return (
    <div className="w-full bg-slate-50 text-slate-800">
      <HeroSection />
      <WhoWeAreSection />

      <HeartbeatDivider />

      <FoundationServicesSection />

      <WhyChooseUsSection />

      <section
        className="relative min-h-[420px] overflow-hidden bg-cover bg-center bg-no-repeat flex items-center sm:min-h-[500px]"
        style={{
          backgroundImage: "url('/images/medbg.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/70" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-0 lg:px-8">
          <BookFormSection />
        </div>
      </section>
    </div>
  );
}
