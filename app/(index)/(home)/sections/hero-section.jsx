import Image from "next/image";
import {
  Activity,
  Users,
  ClipboardList,
  Search,
  FileCheck2,
  ShieldCheck,
  BarChart3,
  Receipt,
  CreditCard,
  Coins,
  Timer,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import CertificationBadges from "./certification-badges";
import BadgeCardComponent from "@/app/_components/badge-card-component";

const orbitBadges = [
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    description: "Real-time Insights, Performance Optimization",
    className: "top-[9%] left-[20%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: Users,
    title: "Patient Access",
    description: "Insurance Verification, Eligibility & Benefits",
    className: "top-[9%] left-[80%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: Receipt,
    title: "Patient Billing",
    description: "Clear Communication, Payment Plans",
    className: "top-[32%] left-[6%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: ClipboardList,
    title: "Registration",
    description: "Accurate Demographics, Data Validation",
    className: "top-[32%] left-[94%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: CreditCard,
    title: "Payment Posting",
    description: "Accurate Posting, Reconciliation",
    className: "top-[68%] left-[6%] -translate-x-1/2 -translate-y-1/1",
  },
  {
    icon: Search,
    title: "Charge Capture",
    description: "Complete & Accurate, Coding Alignment",
    className: "top-[68%] left-[94%] -translate-x-1/2 -translate-y-1/1",
  },
  {
    icon: ShieldCheck,
    title: "Denial Management",
    description: "Denial Prevention, Appeals & Resolution",
    className: "top-[91%] left-[20%] -translate-x-1/2 -translate-y-1/1",
  },
  {
    icon: FileCheck2,
    title: "Claims Submission",
    description: "Timely & Compliant, Clean Claim Record",
    className: "top-[91%] left-[80%] -translate-x-1/2 -translate-y-1/1",
  },
];

const stats = [
  { icon: Coins, value: "98%+", label: "Clean Claim Rate" },
  { icon: Timer, value: "30%+", label: "Faster Collections" },
  { icon: TrendingDown, value: "25%+", label: "Reduction in Denials" },
  { icon: TrendingUp, value: "15%+", label: "Increase in Net Revenue" },
];

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-linear-to-b from-sky-50 via-white to-blue-50">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1600px] px-4 pt-6 sm:px-10 sm:pt-10 lg:px-20 lg:py-0 xl:px-28">
        <div className="flex min-h-[calc(100svh-64px)] flex-col items-center gap-8 lg:grid lg:min-h-[calc(108vh-124px)] lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="text-center lg:text-left p-2">
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
              WE KNOW BOTH SIDES OF{" "}
              <span className="bg-linear-to-r from-blue-400 to-fuchsia-300 bg-clip-text text-transparent">
                HEALTHCARE
              </span>
            </h1>
            <h2 className="mt-6 text-xl font-semibold text-slate-700 sm:text-2xl">
              Payer Administration + Provider Revenue Cycle Services
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-800 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl lg:mx-0">
              Our experience across payer and provider operations gives us a
              broader understanding of healthcare administration—helping our
              teams deliver smarter processes and a better experience for the
              organizations, members and patients we serve.
            </p>

            <CertificationBadges />
          </div>

          {/* Doctor Image */}
          <div className="mt-auto flex justify-center lg:mt-0 lg:justify-end lg:self-center">
            <div className="relative mx-auto mt-6 aspect-square w-full max-w-125 sm:mt-10 sm:max-w-155">
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

              {/* Soft circular glow behind the badges */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-[-20%] -z-10 rounded-full bg-blue-100/50 blur-2xl"
              />

              {/* Dashed circular line connecting the badges */}
              <svg
                aria-hidden="true"
                viewBox="0 0 100 100"
                className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="rgb(147 197 253)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              </svg>

              <Image
                src="/images/nursepicture.png"
                alt="Nurse reviewing patient information"
                fill
                preload
                quality={70}
                className="object-contain object-bottom"
              />

              {orbitBadges.map((badge) => (
                <BadgeCardComponent
                  key={badge.title}
                  icon={badge.icon}
                  title={badge.title}
                  description={badge.description}
                  className={badge.className}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 -mt-10 mb-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-blue-100/60 shadow-xl ring-1 ring-blue-100 sm:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-white px-4 py-5 sm:px-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-xl font-extrabold text-blue-700 sm:text-2xl">
                  {value}
                </span>
                <span className="block text-xs text-slate-500 sm:text-sm">
                  {label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
