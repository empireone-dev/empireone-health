"use client";

import React from "react";
import { motion } from "motion/react";
import WhoWeAreSection from "./sections/who-we-are-section";
import FoundationServicesSection from "./sections/foundation-services-section";
import WhyChooseUsSection from "./sections/why-choose-us-section";
import HeroSection from "./sections/hero-section";
import BookFormSection from "../_sections/book-form-section";

function HeartbeatDivider() {
  return (
    <div className="mx-auto max-w-screen-2xl px-6 py-2 lg:px-12">
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

      <section className="relative min-h-[420px] overflow-hidden flex items-center sm:min-h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat mask-[linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
          style={{
            backgroundImage: "url('/images/empireone-background.webp')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-white via-white/75 to-white" />

        <div className="relative mx-auto w-full px-4 py-10 sm:px-6 sm:py-0 lg:px-8">
          <FoundationServicesSection />
        </div>
      </section>
      <div className=" bg-blue-100 p-6">
        <WhyChooseUsSection />
      </div>

      <BookFormSection />
    </div>
  );
}
