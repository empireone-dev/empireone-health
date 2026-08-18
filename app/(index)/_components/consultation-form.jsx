import React from 'react'
import Link from "next/link";
import Input from "@/app/_components/input";
import Select from "@/app/_components/select";
export default function ConsultationForm() {
  return (
    <div>
         <div >
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
                    <Link href="#" className="underline hover:text-white">
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
  )
}
