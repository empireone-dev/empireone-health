"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

function ServiceCard({ icon: Icon, title, desc, href, delay = 0 }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 lg:p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-100 hover:shadow-2xl hover:shadow-teal-500/10">
        <div>
          {/* Render Icon if passed */}
          {Icon && (
            <div className="mb-6 inline-flex rounded-2xl bg-teal-50 p-4 text-teal-600 border border-teal-100">
              <Icon className="h-8 w-8" />
            </div>
          )}

          {/* Card Title - Scaled Up */}
          <h3 className="text-xl font-bold text-slate-900 sm:text-2xl leading-snug">
            {title}
          </h3>

          {/* Card Body - Scaled Up */}
          <p
            className={`${spaceGrotesk.className} mt-4 text-base sm:text-lg leading-relaxed text-gray-600 font-normal`}
          >
            {desc}
          </p>
        </div>

        {/* Action Link - Scaled Up */}
        <a
          href={href}
          className="mt-8 inline-flex items-center gap-2 text-base font-bold text-slate-900 transition-colors group-hover:text-teal-600"
        >
          <span>Read the Case study</span>
          <ArrowUpRight className="h-5 w-5 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </Reveal>
  );
}

export default function FeatureWorkSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 sm:py-28 lg:px-12">
      <div className="mb-12 lg:mb-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
      
        <Reveal className="lg:col-span-6 xl:col-span-5">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-indigo-50 px-5 py-2 text-sm font-bold text-indigo-700 border border-indigo-200">
            <Briefcase className="h-4 w-4" />
            Featured Work   
          </span>
          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 sm:text-5xl lg:text-6xl leading-[1.15] tracking-tight">
            Healthcare BPO case studies.
          </h2>
          <p
            className={`${spaceGrotesk.className} mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-gray-600 font-normal`}
          >
            These case studies will highlight practical workflow improvements
            across patient access, revenue cycle, payer operations, and
            healthcare administrative support.
          </p>
        </Reveal>

        {/* Right Column: First 2 Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-6 xl:col-span-7">
          <ServiceCard
            title="Client Success Story - Self-Pay Revenue Optimization"
            desc="Our revenue cycle leadership team worked with a multi-site healthcare provider to redesign its self-pay collections strategy, improving financial performance while enhancing the patient financial experience.

"
            href="self-pay-revenue-optimization"
            delay={80}
          />
          <ServiceCard
            title="Client Success Story - Third-Party Healthcare Collections Transformation
"
            desc="A healthcare organization engaged our executive revenue cycle leadership to improve commercial payer recoveries while creating a scalable operating model focused on sustainable financial performance.

."
            href="third-party-healthcare-collections-transformation"
            delay={160}
          />
        </div>
      </div>
    </section>
  );
}
