"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Activity, ArrowUpRight } from "lucide-react";
import CertificationBadges from "./certification-badges";
import BookCallButtonSection from "../../_sections/book-call-button-section";
import Button from "@/app/_components/button";

const STATS = [
  { icon: "/images/dollar.webp", value: "15%+", label: "Patient Collections" },
  { icon: "/images/time.webp", value: "20%", label: "Reduction in AR days" },
  { icon: "/images/arrowdown.webp", value: "25%+", label: "Reduction in Denials" },
  { icon: "/images/stats.webp", value: "15%+", label: "Increase in Net Revenue" },
];

// const SERVICE_BADGES = [
//   {
//     label: "Member Services",
//     href: "/payer-services/member-services",
//     icon: "/images/Member Services.webp",
//     position: { left: "7%", top: "7.7%", width: "25.5%", height: "14%" },
//     mobilePosition: { side: "left", row: "first" },
//   },
//   {
//     label: "Eligibility & Benefits",
//     href: "/provider-services/benefits-verification-eligibility",
//     icon: "/images/Eligibility-Benefits.webp",
//     position: { left: "68%", top: "7.7%", width: "27%", height: "14.5%" },
//     mobilePosition: { side: "right", row: "first" },
//   },
//   {
//     label: "Member Enrollment",
//     href: "/payer-services/enrollment-support",
//     icon: "/images/Member Enrollment.webp",
//     position: { left: "0.2%", top: "33%", width: "26%", height: "14%" },
//     mobilePosition: { side: "left", row: "second" },
//   },
//   {
//     label: "Prior Authorization",
//     href: "/provider-services/prior-authorization-management",
//     icon: "/images/Prior Authorization.webp",
//     position: { left: "74%", top: "33%", width: "25.5%", height: "14%" },
//     mobilePosition: { side: "right", row: "second" },
//   },
//   {
//     label: "Prior Authorization Intake",
//     href: "/provider-services/prior-authorization-management",
//     icon: "/images/Prior Authorization Intake.webp",
//     position: { left: "1.8%", top: "58.5%", width: "26%", height: "14%" },
//     mobilePosition: { side: "left", row: "third" },
//   },
//   {
//     label: "Collections",
//     href: "/provider-services/patient-self-pay-collections",
//     icon: "/images/Collections.webp",
//     position: { left: "73.5%", top: "58.5%", width: "25%", height: "14%" },
//     mobilePosition: { side: "right", row: "third" },
//   },
//   {
//     label: "Provider Services",
//     href: "/provider-services",
//     icon: "/images/Provider Services.webp",
//     position: { left: "12.5%", top: "81.5%", width: "23.7%", height: "13.5%" },
//     mobilePosition: { side: "left", row: "fourth" },
//   },
//   {
//     label: "Claims & Denials",
//     href: "/provider-services/denial-management",
//     icon: "/images/Claims-Denials.webp",
//     iconWidth: "25%",
//     labelLines: ["Claims &", "Denials"],
//     position: { left: "63.7%", top: "81.5%", width: "24.2%", height: "13.5%" },
//     mobilePosition: { side: "right", row: "fourth" },
//   },
// ];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden xl:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/home-banner.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover object-top"
        />
      </div>

      {/* ── Main Container — matches all other sections ── */}
    <div className="relative mx-auto h-full w-full max-w-screen-2xl px-6 pt-28 pb-8 sm:pt-32 sm:pb-10 lg:px-12 lg:pt-8 lg:pb-0 mt-8">
        <div className="relative flex flex-col gap-6 sm:gap-8 xl:block xl:h-155 xl:gap-0 xl:py-10 2xl:h-155">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative z-20 w-full xl:absolute xl:left-0 xl:top-[43%] xl:w-[52%] xl:-translate-y-1/2 2xl:w-[52%]"
          >
            <div className="mx-auto max-w-[760px] text-center xl:mx-0 xl:max-w-140 xl:text-left 2xl:max-w-190">
              {/* Brand */}
              {/* <div className="inline-flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" aria-hidden="true" />
                <span className="text-base font-semibold tracking-wide text-slate-600 sm:text-lg">
                  EmpireOne Health
                </span>
              </div> */}

              {/* Heading */}
              <div className="mt-4 text-[clamp(2rem,7vw,3rem)] font-bold leading-[1.2] tracking-tight text-[#0a1b39] sm:text-5xl 2xl:text-6xl">
                <h1>
                  <span className="text-shadow-purple-900">
                    We Know Both Sides
                    <br className="hidden sm:block" />
                    of{" "}
                    <span className="bg-linear-to-r from-blue-700 to-fuchsia-600 bg-clip-text text-transparent">
                      Healthcare
                    </span>
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="mt-4 max-w-[1000px] text-base font-semibold leading-relaxed text-blue-600 sm:text-lg xl:text-lg 2xl:text-2xl">
                Payer Administration + Provider Revenue Cycle Services
              </p>

              {/* Description */}
              <p className="mt-3 max-w-[1000px] text-base leading-relaxed text-slate-800 lg:text-base xl:text-base 2xl:text-xl">
                Our experience across payer and provider operations gives us a
                broader understanding of healthcare administration helping our
                teams deliver smarter processes and a better experience for the
                organizations, members and patients we serve.
              </p>

              {/* CTAs */}
              <div className="mx-auto flex max-w-[599px] flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center xl:mx-0 xl:flex-nowrap xl:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full sm:mt-8 sm:w-auto"
                >
                  <BookCallButtonSection />
                </motion.div>

                <motion.a
                  href="#book-form-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("book-form-section")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="mt-0 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#0b1b68] bg-white px-7 py-3.5 text-sm font-semibold text-[#0b1b68] shadow-md transition-all duration-200 hover:bg-[#0b1b68] hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0b1b68] focus:ring-offset-2 sm:mt-8 sm:w-auto"
                >
                  Build your team
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                </motion.a>
              </div>

              {/* Certifications */}
              <div className="mt-5 sm:mt-10 xl:mt-6">
                <CertificationBadges />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE / DOCTOR IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative z-10 mx-auto mt-0 block aspect-[1439/1093] w-full max-w-[440px] sm:max-w-[560px] xl:absolute xl:bottom-6 xl:right-[2%] xl:mx-0 xl:w-[46%] xl:max-w-none 2xl:right-[2%] 2xl:w-[46%]"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-[8%] inset-y-[7%] -z-10 rounded-full bg-purple-200/40 blur-3xl"
            />

            <Image
              src="/images/Hero-Image-Nurse001.png"
              alt=""
              aria-hidden="true"
              fill
              priority
              quality={85}
              sizes="(max-width: 640px) calc(100vw - 2rem), (max-width: 1024px) 65vw, (max-width: 1536px) 58vw, 1000px"
              className="pointer-events-none object-contain object-bottom"
            />

            {/* {SERVICE_BADGES.map(({ label, href, icon, iconWidth, labelLines, position, mobilePosition }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                data-mobile-side={mobilePosition.side}
                data-mobile-row={mobilePosition.row}
                style={{
                  "--badge-left": position.left,
                  "--badge-top": position.top,
                  "--badge-width": position.width,
                  "--badge-height": position.height,
                }}
                className="hero-service-badge absolute z-30 flex min-h-11 items-center justify-start gap-[3%] overflow-hidden rounded-2xl border border-blue-300 bg-white px-[3%] py-0 text-left text-[clamp(0.625rem,2.8vw,0.75rem)] font-bold leading-tight text-[#10113e] shadow-[0_2px_5px_rgba(37,99,235,0.2)] transition duration-200 hover:scale-[1.03] hover:bg-blue-50 hover:shadow-lg focus-visible:z-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:gap-[7%] sm:px-[5%] sm:py-1 sm:text-[clamp(0.7rem,1.05vw,1rem)]"
              >
                <Image
                  src={icon}
                  alt=""
                  aria-hidden="true"
                  width={64}
                  height={64}
                  style={{ width: iconWidth ?? "30%" }}
                  className="h-[72%] w-[28%] shrink-0 object-contain sm:ml-[-2%] sm:h-[80%] sm:w-[33%]"
                />
                <span className="min-w-0">
                  {labelLines ? (
                    <>{labelLines[0]}<br />{labelLines[1]}</>
                  ) : (
                    label
                  )}
                </span>
              </Link>
            ))} */}
          </motion.div>
        </div>

        {/* STATS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="relative z-15 mt-0 grid grid-cols-2 gap-2 rounded-2xl bg-white/95 px-3 py-4 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5 backdrop-blur-md sm:grid-cols-4 sm:gap-5 sm:px-7 sm:py-5 xl:-mt-10 xl:gap-6 xl:px-8 xl:py-6 2xl:-mt-10 2xl:px-10 2xl:py-4"
        >
          {STATS.map(({ icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 py-1 text-center sm:flex-row sm:gap-3 sm:py-3 sm:text-left lg:gap-5"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center sm:h-9 sm:w-9 lg:h-13 lg:w-13">
                <Image
                  src={icon}
                  alt=""
                  width={28}
                  height={28}
                  className="h-6 w-6 object-contain sm:h-8 sm:w-8 lg:h-12 lg:w-12"
                />
              </span>
              <span className="min-w-0">
                <span className="block text-base font-extrabold leading-none text-slate-900 sm:text-2xl lg:text-[26px]">
                  {value}
                </span>
                <span className="mt-1 block text-[10px] text-purple-500 sm:text-sm">
                  {label}
                </span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}