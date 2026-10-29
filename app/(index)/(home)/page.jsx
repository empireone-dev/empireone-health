"use client";

import React from "react";
import { motion } from "motion/react";
import WhoWeAreSection from "./sections/who-we-are-section";
import FoundationServicesSection from "./sections/foundation-services-section";
import WhyChooseUsSection from "./sections/why-choose-us-section";
import HeroSection from "./sections/hero-section";

function HeartbeatDivider() {
  return (
    <div className="mx-auto max-w-screen-2xl px-6 lg:px-12 pb-3">
      <svg
        viewBox="0 0 1200 60"
        className="h-8 w-full text-teal-400 sm:h-20"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 30 H430 L467 30 L474 0 L494 60 L504 30 L520 30 H1200"
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

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
          style={{
            backgroundImage: "url('/images/empireone-background.webp')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-white via-white/75 to-white" />

        <div className="relative mx-auto w-full">
          <FoundationServicesSection />
        </div>
      </section>
      <div className=" bg-white">
        <WhyChooseUsSection />
      </div>
    </div>
  );
}
