"use client";

import React from "react";
import { motion } from "motion/react";
import { HeartPlus, ShieldCheck, UserCheck } from "lucide-react";
import { Syne } from "next/font/google";
import BookFormSection from "../_sections/book-form-section";
import WhoWeAreSection from "./sections/who-we-are-section";
import FoundationServicesSection from "./sections/foundation-services-section";
import WhyChooseUsSection from "./sections/why-choose-us-section";

export const syne = Syne({ subsets: ["latin"] });

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
    <div className={`${syne.className} w-full bg-slate-50 text-slate-800`}>
      <section className="relative overflow-hidden bg-gradient-to-br from-red-500 via-white to-red-700">
        <div className="absolute inset-0">
          <img
            src="/images/home-page.jpg"
            alt=""
            className="h-full w-full object-cover opacity-[0.6] mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        <motion.div
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1E3A8A 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          animate={{ opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl"
          animate={{ x: [0, 18, 0], y: [0, -14, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"
          animate={{ x: [0, -18, 0], y: [0, 14, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <img
          src="/images/Caduceus .png"
          alt=""
          className="pointer-events-none absolute bottom-0 h-72 w-auto select-none opacity-[0.2] 2xl:h-96"
        />

        <div className="relative mx-auto max-w-[1600px] px-6 py-14 sm:px-10 sm:py-20 lg:px-20 lg:py-0 xl:px-28">
          <div className="grid min-h-0 grid-cols-1 items-center gap-10 lg:min-h-[calc(100vh-124px)] lg:grid-cols-2 lg:gap-16">
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/90 px-5 py-2 shadow-md backdrop-blur"
              >
                <HeartPlus className="h-5 w-5 animate-pulse text-teal-600" />
                <span className="text-sm font-semibold tracking-wide text-slate-700 sm:text-base">
                  EmpireOne Health
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: "Arial, sans-serif" }}
                className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.05] lg:text-6xl lg:leading-18 lg:tracking-[-0.04em]"
              >
                Better Patient Experiences.{" "}
                <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  Smarter
                </span>{" "}
                Healthcare Operations.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-900 md:text-xl lg:mx-0"
              >
                We deliver human-led, AI-assisted support to streamline patient
                access, optimize revenue workflows, and align payers and
                providers for better healthcare outcomes.
              </motion.p>
            </div>

            {/* Right Media */}
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative">
                <div className="absolute inset-x-8 bottom-4 top-16 -z-10 rounded-full bg-teal-200/40 blur-3xl" />
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative mt-10 w-full max-w-sm sm:mt-16 sm:max-w-md md:max-w-lg lg:mt-30 lg:max-w-xl xl:max-w-2xl"
                >
                  <img
                    src="/images/doctor-image.webp"
                    alt="Doctor reviewing patient information"
                    className="w-full"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-26 bg-gradient-to-t from-white via-white/70 to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -left-4 top-8 hidden mt-10 sm:-left-10 sm:block lg:-left-16"
                >
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center gap-2 rounded-2xl bg-white/90 px-3 py-2.5 shadow-lg ring-1 ring-black/5 backdrop-blur sm:gap-3 sm:px-4 sm:py-3"
                  >
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 sm:h-9 sm:w-9">
                      <motion.span
                        animate={{ scale: [0.7, 2.4], opacity: [0.55, 0] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
                        className="absolute h-8 w-8 rounded-full bg-teal-300/60 sm:h-9 sm:w-9"
                      />
                      <ShieldCheck className="relative h-4 w-4 text-teal-600 sm:h-5 sm:w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-blue-950 sm:text-sm">
                        HIPAA Compliant
                      </p>
                      <p className="text-[11px] text-gray-500 sm:text-xs">
                        Secure by design
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -right-4 bottom-10 hidden sm:-right-10 sm:block lg:-right-16"
                >
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4,
                    }}
                    className="flex items-center gap-2 rounded-2xl bg-white/90 px-3 py-2.5 shadow-lg ring-1 ring-black/5 backdrop-blur sm:gap-3 sm:px-4 sm:py-3"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 sm:h-9 sm:w-9">
                      <UserCheck className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-blue-950 sm:text-sm">
                        Care team of 850+
                      </p>
                      <p className="text-[11px] text-gray-500 sm:text-xs">
                        Always by your side
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
