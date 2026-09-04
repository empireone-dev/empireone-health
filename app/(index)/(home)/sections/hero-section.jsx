"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Activity } from "lucide-react";
import CertificationBadges from "./certification-badges";

const STATS = [
  {
    icon: "/images/dollar.webp",
    value: "15%+",
    label: "Patient Collections",
  },
  {
    icon: "/images/time.webp",
    value: "30%+",
    label: "Faster Insurance Collections",
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
        lg:h-[calc(100svh-80px)]
        lg:min-h-[600px]
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
          sm:px-8
          sm:py-10
          lg:px-12
          lg:py-0
          xl:px-16
          2xl:px-20
        "
      >
        <div
          className="
            relative
            flex
            flex-col
            gap-6
            sm:gap-8
            lg:block
            lg:h-full
            lg:gap-0
            lg:ml-6
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

              lg:absolute
              lg:left-0
              lg:top-[43%]
              lg:w-[60%]
              lg:-translate-y-1/2

              xl:w-[58%]
            "
          >
            <div
              className="
                mx-auto
                max-w-[760px]
                text-center
                lg:ml-16
                lg:mx-0
                lg:text-left
                xl:ml-20
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
            
              <div
               className="text-4xl font-extrabold  leading-[1.2] tracking-tight text-[#0a1b39] md:text-5xl xl:text-6xl mt-4"
                style={{
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <span className="text-shadow-purple-900">
                  We Know Both Sides
                  <br />
                  of{" "}
                  <span className="bg-linear-to-r from-blue-700 to-fuchsia-600 bg-clip-text text-transparent">
                    Healthcare
                  </span>
                </span>
              </div>

              {/* Subtitle */}
              <p
                className="
                  mt-4
                  max-w-[650px]
                  text-base
                  font-semibold
                  leading-relaxed
                  text-blue-600
                  sm:text-lg
                  lg:text-xl
                  xl:text-2xl
                "
              >
                Payer Administration + Provider Revenue Cycle Services
              </p>

              {/* Description */}
              <p
                className="
                  mt-3
                  max-w-[620px]
                  text-base
                  leading-relaxed
                  text-slate-800
                  sm:text-lg
                  lg:text-lg
                  xl:text-xl
                "
              >
                Our experience across payer and provider operations gives us a
                broader understanding of healthcare administration helping our
                teams deliver smarter processes and a better experience for the
                organizations, members and patients we serve.
              </p>

              {/* Certifications */}
              <div className="mt-5 sm:mt-6">
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
              hidden
              aspect-[5625/4566]
              h-[42vh]
              w-full
              max-w-[520px]

              sm:h-[46vh]

              lg:absolute
              lg:right-[-1%]
              lg:top-[-7%]
              lg:mx-0
              lg:block
              lg:h-[94%]
              lg:w-[51%]
              lg:max-w-none

              xl:right-[0%]
              xl:top-[-7%]
              xl:h-[96%]
              xl:w-[50%]

              2xl:right-[1%]
              2xl:top-[-6%]
              2xl:h-[97%]
              2xl:w-[49%]
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
              src="/images/Hero-Image-Nurse001.png"
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

          {/* =================================
              STATS BAR
          ================================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="
              relative
              z-40

              grid
              grid-cols-2
              gap-3

              rounded-2xl
              bg-white/95

              px-4
              py-4

              shadow-xl
              shadow-slate-900/10
              ring-1
              ring-slate-900/5
              backdrop-blur-md

              sm:grid-cols-4
              sm:gap-5
              sm:px-7
              sm:py-5

              lg:absolute
              lg:bottom-8
              lg:left-0
              lg:right-0
              lg:gap-6
              lg:px-8
              lg:py-5

              xl:bottom-10
              xl:px-10
              xl:py-5
            "
          >
            {STATS.map(({ icon, value, label }) => (
              <div
                key={label}
                className="
                  flex
                  items-center
                  gap-3
                  sm:gap-4
                  lg:gap-5
                "
              >
                {/* Icon */}
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center

                    sm:h-11
                    sm:w-11

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
                      h-8
                      w-8
                      object-contain

                      sm:h-10
                      sm:w-10

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
                      text-xl
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
                      text-xs
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
      </div>
    </section>
  );
}
