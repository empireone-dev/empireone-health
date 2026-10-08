"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Activity, ArrowUpRight } from "lucide-react";
import CertificationBadges from "./certification-badges";
import BookCallButtonSection from "../../_sections/book-call-button-section";
import Button from "@/app/_components/button";

const STATS = [
  {
    icon: "/images/dollar.webp",
    value: "15%+",
    label: "Patient Collections",
  },
  {
    icon: "/images/time.webp",
    value: "20%",
    label: "Reduction in AR days",
  },
  {
    icon: "/images/arrowdown.webp",
    value: "25%+",
    label: "Reduction in Denials",
  },
  {
    icon: "/images/stats.webp",
    value: "15%+",
    label: "Increase in Net Revenue",
  },
];

export default function HeroSection() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        xl:py-24
      "
    >
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

      {/* Main Container */}
      <div
        className="
          relative
          mx-auto
          h-full
          w-full
          max-w-[1900px]
          px-4
          py-8
          sm:px-6
          sm:py-10
          md:px-8
          lg:px-16
          lg:py-0
          xl:px-20
        "
      >
        <div
          className="
            relative
            flex
            flex-col
            gap-6
            sm:gap-8
            xl:block
            xl:h-155
            xl:gap-0
            xl:py-10

            2xl:h-155
          "
        >
          {/* =================================
              LEFT CONTENT
          ================================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
              relative
              z-20
              w-full

              xl:absolute
              xl:left-0
              xl:top-[43%]
              xl:w-[52%]
              xl:-translate-y-1/2

              2xl:w-[52%]
            "
          >
            <div
              className="
                mx-auto
                max-w-[760px]
                text-center
                xl:ml-16
                xl:mx-0
                xl:max-w-140
                xl:text-left
                2xl:ml-20
                2xl:max-w-190
              "
            >
              {/* Brand */}
              <div className="inline-flex items-center gap-2">
                <Activity
                  className="
                    h-5
                    w-5
                    text-blue-600
                    sm:h-6
                    sm:w-6
                  "
                  aria-hidden="true"
                />

                <span
                  className="
                    text-base
                    font-semibold
                    tracking-wide
                    text-slate-600
                    sm:text-lg
                  "
                >
                  EmpireOne Health
                </span>
              </div>

              {/* Heading */}
              <div className="text-4xl font-bold  leading-[1.2] tracking-tight text-[#0a1b39] md:text-5xl 2xl:text-6xl mt-4">
                <h1>
                  <span className="text-shadow-purple-900">
                    We Know Both Sides
                    <br />
                    of{" "}
                    <span className="bg-linear-to-r from-blue-700 to-fuchsia-600 bg-clip-text text-transparent">
                      Healthcare
                    </span>
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p
                className="
                  mt-4
                  max-w-[1000px]
                  text-base
                  font-semibold
                  leading-relaxed
                  text-blue-600
                  sm:text-lg
                  lg:text-lg
                  xl:text-lg
                  2xl:text-2xl
                "
              >
                Payer Administration + Provider Revenue Cycle Services
              </p>

              {/* Description */}
              <p
                className="
                  mt-3
                  max-w-[1000px]
                  text-base
                  leading-relaxed
                  text-slate-800
                  sm:text-lg
                  lg:text-base
                  xl:text-base
                  2xl:text-xl
                "
              >
                Our experience across payer and provider operations gives us a
                broader understanding of healthcare administration helping our
                teams deliver smarter processes and a better experience for the
                organizations, members and patients we serve.
              </p>
              <div className="flex flex-col gap-4 max-w-[599px] mx-auto xl:mx-0 sm:flex-row sm:flex-wrap sm:justify-center xl:flex-nowrap xl:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto mt-6 sm:mt-8"
                >
                  <BookCallButtonSection />
                </motion.div>

                <motion.a
                  href="#book-form-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("book-form-section")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="w-full sm:w-auto mt-0 sm:mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-[#0b1b68] bg-white px-7 py-3.5 text-sm font-semibold text-[#0b1b68] shadow-md transition-all duration-200 hover:bg-[#0b1b68] hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0b1b68] focus:ring-offset-2"
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

          {/* =================================
              RIGHT SIDE / DOCTOR IMAGE
          ================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="
              pointer-events-none
              relative
              z-10
              mx-auto
              block
              aspect-[5625/4566]
              h-[42vh]
              w-full
              max-w-[440px]
              mt-8

              sm:h-[52vh]
              sm:max-w-[560px]

              xl:absolute
              xl:right-[2%]
              xl:top-[-7%]
              xl:mx-0
              xl:h-[94%]
              xl:w-[46%]
              xl:max-w-none

              2xl:right-[2%]
              2xl:top-[-6%]
              2xl:h-[97%]
              2xl:w-[46%]
            "
          >
            {/* Glow */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-x-[8%]
                inset-y-[7%]
                -z-10
                rounded-full
                bg-purple-200/40
                blur-3xl
              "
            />

            <Image
              src="/images/hero-badge-image.webp"
              alt="Doctor reviewing patient information"
              fill
              priority
              quality={85}
              sizes="
                (max-width: 640px) 95vw,
                (max-width: 1024px) 65vw,
                (max-width: 1536px) 58vw,
                1000px
              "
              className="
                object-contain
                object-bottom
                -translate-y-[6%]
              "
            />
          </motion.div>
        </div>

        {/* =================================
            STATS BAR
        ================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="
              relative
              z-15

              grid
              grid-cols-4
              gap-2

              rounded-2xl
              bg-white/95

              px-3
              py-4

              shadow-xl
              shadow-slate-900/10
              ring-1
              ring-slate-900/5
              backdrop-blur-md

              sm:grid-cols-4
              sm:gap-5
              sm:-mt-8
              sm:px-7
              sm:py-5

              xl:mt-1
              xl:gap-6
              xl:px-8
              xl:py-6

              2xl:mt-1
              2xl:px-10
              2xl:py-4
            "
        >
          {STATS.map(({ icon, value, label }) => (
            <div
              key={label}
              className="
                  flex
                  flex-col
                  items-center
                  gap-1
                  text-center
                  py-1

                  sm:flex-row
                  sm:gap-3
                  sm:text-left
                  sm:py-3
                  lg:gap-5
                "
            >
              {/* Icon */}
              <span
                className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center

                    sm:h-9
                    sm:w-9

                    lg:h-13
                    lg:w-13
                  "
              >
                <Image
                  src={icon}
                  alt=""
                  width={28}
                  height={28}
                  className="
                      h-6
                      w-6
                      object-contain

                      sm:h-8
                      sm:w-8

                      lg:h-12
                      lg:w-12
                    "
                />
              </span>

              {/* Stats Text */}
              <span className="min-w-0">
                <span
                  className="
                      block
                      text-base
                      font-extrabold
                      leading-none
                      text-slate-900

                      sm:text-2xl
                      lg:text-[26px]
                    "
                >
                  {value}
                </span>

                <span
                  className="
                      mt-1
                      block
                      text-[10px]
                      text-purple-500

                      sm:text-sm
                    "
                >
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
