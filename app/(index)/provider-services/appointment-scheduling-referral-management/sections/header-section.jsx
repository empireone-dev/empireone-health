"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Input from "@/app/_components/input";
import Select from "@/app/_components/select";
import Link from "next/link";
export default function HeaderSection() {
  return (
    <div className="relative w-full overflow-hidden bg-[#eaf0ff] py-12 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/images/header.webp')",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Hero Text Content */}
          <div className="flex flex-col items-start lg:col-span-6 xl:col-span-7">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-700 sm:text-sm">
              <a href="/" className="text-[#0f2d9e] hover:underline">
                Home
              </a>
              <span className="text-slate-400">/</span>
              <a href="/provider-services" className="text-[#0f2d9e] hover:underline">
                Provider Services
              </a>
              <span className="text-slate-400">/</span>
              <span className="text-[#0b132b]">
                Appointment Scheduling & Referral Management
              </span>
            </nav>
            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#0b132b]">
              Appointment Scheduling & Referral Management built for patient access.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-800 sm:text-base">
           Coordinate scheduling, rescheduling, referral intake, reminders, follow-up, and documentation workflows with a trained healthcare operations team focused on access, accuracy, and visibility.
            </p>

            <a
              href="#book-call"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b1b68] px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#071142] focus:outline-none focus:ring-2 focus:ring-[#0b1b68] focus:ring-offset-2"
            >
              <span>Book a 30 Minute Call</span>
              <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Right Column: Free Consultation Form Card */}
          <div className="w-full lg:col-span-6 xl:col-span-5">
            <div className="relative rounded-3xl bg-[#5955f2] p-6 text-white shadow-2xl sm:p-8">
              <h2 className="mb-6 text-center text-xl font-bold tracking-tight sm:text-2xl">
                Get a Free Consultation
              </h2>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-3.5"
              >
                {/* Name & Company */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Input
                    label="Your Name"
                    name="name"
                    required
                    className="rounded-full border-white/40 bg-white/10 text-xs text-white placeholder-white/80"
                  />
                  <Input
                    label="Company"
                    name="company"
                    className="rounded-full border-white/40 bg-white/10 text-xs text-white placeholder-white/80"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Input
                    label="Email address"
                    name="email"
                    type="email"
                    required
                    className="rounded-full border-white/40 bg-white/10 text-xs text-white placeholder-white/80"
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    required
                    className="rounded-full border-white/40 bg-white/10 text-xs text-white placeholder-white/80"
                  />
                </div>

                {/* Confirm Email & Source Select */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Input
                    label="Confirm email address"
                    name="confirm_email"
                    type="email"
                    required
                    className="rounded-full border-white/40 bg-white/10 text-xs text-white placeholder-white/80"
                  />
                  <Select
                    label="Source"
                    name="source"
                    options={[
                      { value: "", label: "Source" },
                      { value: "google", label: "Google Search" },
                      { value: "chatgpt", label: "ChatGPT" },
                      { value: "linkedIn", label: "LinkedIn" },
                      { value: "referral", label: "Referral" },
                      { value: "website", label: "Website" },
                      { value: "other", label: "Other" },
                    ]}
                    className="rounded-full border-white/40 bg-white/10 text-xs text-white"
                  />
                </div>

                {/* Need Help With Select */}
                <div className="relative">
                  <Select
                    label="Need Help With?"
                    name="need_help"
                    options={[
                      { value: "", label: "Need Help With?" },
                      { value: "eligibility", label: "Eligibility & Benefits" },
                      { value: "prior-auth", label: "Prior Authorization" },
                      {
                        value: "scheduling_referrals",
                        label: "Scheduling & Referrals",
                      },
                      {
                        value: "denial_management",
                        label: "Denial Management",
                      },
                      {
                        value: "patient_collections",
                        label: "Patient Collections",
                      },
                      { value: "member_services", label: "Member Services" },
                      {
                        value: "enrollment_support",
                        label: "Enrollment Support",
                      },
                      { value: "provide_data", label: "Provide Data" },
                      { value: "other", label: "Other" },
                    ]}
                    className="rounded-full border-white/40 bg-white/10 text-xs text-white"
                  />
                </div>

                {/* Textarea */}
                <div>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your workflow goals. Do not include sensitive healthcare information."
                    className="w-full resize-none rounded-2xl border border-white/40 bg-white/10 px-4 py-2.5 text-xs text-white placeholder-white/80 outline-none transition focus:border-white focus:bg-white/20"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-2 pt-1 text-[11px] text-white/90">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-0.5 rounded border-white/40 bg-white/10 text-[#5955f2] focus:ring-0"
                  />
                  <label htmlFor="privacy" className="cursor-pointer">
                    By ticking this box I agree that I have read the{" "}
                    <Link
                      href="/privacy-policy"
                      className="underline hover:text-white"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="mx-auto block rounded-full bg-white px-8 py-2 text-xs font-bold text-[#5955f2] shadow-md transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
