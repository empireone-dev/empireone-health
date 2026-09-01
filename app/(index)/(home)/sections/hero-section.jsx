import Image from "next/image";
import { Activity } from "lucide-react";
import CertificationBadges from "./certification-badges";
export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/home-banner.webp"
          alt=""
          fill
          loading="eager"
          sizes="100vw"
          quality={60}
          className="object-cover object-top"
        />
      </div>

      <div className="mx-auto max-w-[1600px] px-4 pt-10 sm:px-10 sm:pt-16 lg:px-20 lg:py-0 xl:px-28">
        <div className="flex min-h-[calc(100svh-64px)] flex-col items-center gap-8 lg:grid lg:min-h-[calc(105vh-124px)] lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <Activity
                className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6"
                aria-hidden="true"
              />

              <span className="text-base font-semibold tracking-wide text-slate-600 sm:text-xl">
                EmpireOne Health
              </span>
            </div>

            <h1
              className="
                mx-auto
                mt-4
                max-w-3xl
                text-3xl
                font-extrabold
                leading-tight
                tracking-tight
                text-slate-900
                sm:text-5xl
                sm:leading-[1.25]
                lg:mx-0
                lg:text-6xl
                lg:tracking-[-0.04em]
              "
              style={{
                fontFamily: "Arial, sans-serif",
              }}
            >
              Better Patient Experiences.{" "}
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Smarter
              </span>{" "}
              Healthcare Operations.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-800 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl lg:mx-0">
              We deliver human-led, AI-assisted support to streamline patient
              access, optimize revenue workflows, and align payers and
              providers for better healthcare outcomes.
            </p>

            <CertificationBadges />
          </div>

          {/* Doctor Image */}
          <div className="mt-auto flex justify-center lg:mt-0 lg:justify-end lg:self-end">
            <div className="relative">
              {/* Decorative background */}
              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-x-6
                  bottom-4
                  top-16
                  -z-10
                  rounded-full
                  bg-teal-200/30
                  blur-3xl
                "
              />

              <Image
                src="/images/hero-doctor-img.webp"
                alt="Doctor reviewing patient information"
                width={600}
                height={720}
                preload
                quality={70}
                className="
                  block
                  h-auto
                  w-[280px]
                  object-contain
                  sm:w-[350px]
                  md:w-[420px]
                  lg:w-[480px]
                  xl:w-[520px]
                  2xl:w-[600px]
                "
                sizes="
                  (max-width: 640px) 280px,
                  (max-width: 768px) 350px,
                  (max-width: 1024px) 420px,
                  (max-width: 1280px) 480px,
                  600px
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}