import Image from "next/image";
import { Activity } from "lucide-react";
import CertificationBadges from "./certification-badges";

const STATS = [
  { icon: "/images/dollar.webp", value: "98%+", label: "Clean Claim Rate" },
  { icon: "/images/time.webp", value: "30%+", label: "Faster Collections" },
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
        lg:h-[calc(100svh-76px)]
        lg:min-h-[680px]  
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
          <div
            className="
              relative
              z-20
              w-full

              lg:absolute
              lg:left-0
              lg:top-[43%]
              lg:w-[46%]
              lg:-translate-y-1/2

              xl:w-[45%]
            "
          >
            <div
              className="
                mx-auto
                max-w-[680px]
                text-center
                lg:ml-5
                lg:mx-0
                lg:text-left
                xl:ml-7
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
                    lg:h-7
                    lg:w-7
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
                    lg:text-xl
                    xl:text-2xl
                  "
                >
                  EmpireOne Health
                </span>
              </div>

              {/* Heading */}
              <div
                className="
                  mt-4
                  max-w-[680px]
                  text-3xl
                  font-extrabold
                  leading-[1.1]
                  tracking-[-0.03em]
                  text-slate-900
                  sm:text-5xl
                  sm:tracking-[-0.045em]
                  lg:text-[56px]
                  xl:text-[64px]
                  2xl:text-[70px]
                "
                style={{
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <span className="text-shadow-purple-900">
                  WE KNOW BOTH SIDES OF
                </span>{" "}
                <span className="bg-linear-to-r from-blue-700 to-fuchsia-600 bg-clip-text text-transparent">
                  HEALTHCARE
                </span>
              </div>

              {/* Subtitle */}
              <p
                className="
                  mt-5
                  max-w-[650px]
                  text-sm
                  font-semibold
                  leading-relaxed
                  text-slate-700
                  sm:text-base
                  lg:text-lg
                  xl:text-xl
                "
              >
                Payer Administration + Provider Revenue Cycle Services
              </p>

              {/* Description */}
              <p
                className="
                  mt-3
                  max-w-[620px]
                  text-sm
                  leading-relaxed
                  text-slate-800
                  sm:text-base
                  lg:text-base
                  xl:text-lg
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
          </div>

          {/* =================================
              RIGHT SIDE / DOCTOR IMAGE
          ================================= */}
          <div
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
              lg:w-[57%]
              lg:max-w-none

              xl:right-[0%]
              xl:top-[-7%]
              xl:h-[96%]
              xl:w-[56%]

              2xl:right-[1%]
              2xl:top-[-6%]
              2xl:h-[97%]
              2xl:w-[55%]
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
              src="/images/Untitled design (16).png"
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
          </div>

          {/* =================================
              STATS BAR
          ================================= */}
          <div
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
              lg:bottom-12
              lg:left-0
              lg:right-0
              lg:gap-6
              lg:px-8
              lg:py-5

              xl:bottom-14
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
          </div>
        </div>
      </div>
    </section>
  );
}
