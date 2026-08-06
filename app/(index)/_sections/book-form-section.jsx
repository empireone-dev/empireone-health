import React from 'react';
import Link from 'next/link';
import Input from '../../_components/input';
import Select from '../../_components/select';

const fieldClassName =
  "!rounded-full !border-white/40 !bg-white/10 !text-white placeholder:!text-white/60 focus:!ring-white/70 focus:!border-white";

export default function BookFormSection({ compact = false }) {
  return (
    <div
      className={
        compact
          ? "flex h-full w-full flex-col font-sans"
          : "min-h-screen flex items-center justify-center p-6 font-sans"
      }
    >
      <div
        className={
          compact
            ? "relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-[#615eff] bg-cover bg-center p-6 shadow-lg sm:p-8"
            : "bg-linear-to-br from-[#6a69f7] to-[#5150e0] w-full max-w-7xl rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl ring-1 ring-white/10 bg-cover bg-center"
        }
        style={{ backgroundImage: "url('/images/book-bg.webp')" }}
      >
        {compact && (
          <div className="absolute inset-0 bg-[#615eff]/90 pointer-events-none"></div>
        )}
        {!compact && (
          <>
            {/* Color overlay to keep form content readable over the background image */}
            <div className="absolute inset-0 bg-linear-to-br from-[#6a69f7]/90 to-[#5150e0]/90 pointer-events-none"></div>

            {/* Faint Background graphics placeholder */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-20 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>
          </>
        )}

        <h2
          className={
            compact
              ? "relative z-10 mb-1.5 text-center text-xl font-bold text-white sm:text-2xl"
              : "text-white text-3xl sm:text-4xl font-bold text-center mb-2 relative z-10"
          }
        >
          Book Your 30 Minute Call
        </h2>
        <p
          className={
            compact
              ? "relative z-10 mb-5 text-center text-sm text-white/70"
              : "text-white/70 text-center mb-10 relative z-10"
          }
        >
          Tell us a bit about you and we&apos;ll get back to you shortly.
        </p>

        <form
          className={compact ? "relative z-10 space-y-3.5" : "relative z-10 space-y-6"}
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Top Grid: 3 columns on large screens, 1 on small */}
          <div className={compact ? "grid grid-cols-1 gap-3 md:grid-cols-3" : "grid grid-cols-1 md:grid-cols-3 gap-5"}>
            <Input
              label="Full Name *"
              name="fullName"
              required
              className={fieldClassName}
            />

            <Input
              label="Company Name"
              name="companyName"
              className={fieldClassName}
            />

            <Input
              label="Email Address *"
              name="email"
              type="email"
              required
              className={fieldClassName}
            />

            <Input
              label="Contact Number *"
              name="contactNumber"
              type="tel"
              required
              className={fieldClassName}
            />

            <Input
              label="Verify Email *"
              name="verifyEmail"
              type="email"
              required
              className={fieldClassName}
            />

            <Select
              label="Source"
              name="source"
              options={[
                { value: "google", label: "Google" },
                { value: "chatgpt", label: "ChatGPT" },
                { value: "referral", label: "Referral" },
                { value: "linkedin", label: "LinkedIn" },
                { value: "website", label: "Website" },
                { value: "other", label: "Other" },
              ]}
              className={fieldClassName}
            />
          </div>

          {/* Build Dropdown */}
          <Select
            label="What are you looking to build?"
            name="lookingToBuild"
            options={[
              { value: "benefits", label: "Benefits Verification & Eligibility" },
              { value: "prior_auth", label: "Prior Authorization Management" },
              { value: "appointment", label: "Appointment Scheduling & Referral Management" },
              { value: "denial", label: "Denial Management" },
              { value: "patient_collections", label: "Patient / Self-Pay Collections" },
              { value: "member_services", label: "Member Services" },
              { value: "enrollment", label: "Enrollment Support" },
              { value: "provider_data", label: "Provider Data Management" },
              { value: "other", label: "Other" },
            ]}
            className={fieldClassName}
          />

          {/* Message Textarea */}
          <div className="flex flex-col">
            <label className="mb-1.5 text-sm font-medium text-white">Message</label>
            <textarea
              rows={compact ? 3 : 5}
              placeholder="Tell us about your workflow goals. Do not include sensitive healthcare information."
              className="w-full resize-none rounded-2xl border border-white/40 bg-white/10 px-5 py-3 text-white placeholder-white/60 transition-all focus:border-white focus:ring-2 focus:ring-white/70 focus:outline-none"
            ></textarea>
          </div>

          {/* Checkbox and Privacy Policy */}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="privacy"
              className="w-4 h-4 mt-0.5 rounded border-white/60 bg-transparent accent-white focus:ring-2 focus:ring-white/80"
              required
            />
            <label htmlFor="privacy" className="text-white text-sm">
              By ticking this box I agree that I have read the <Link href="/privacy-policy" className="underline hover:text-white/80">privacy policy</Link>.
            </label>
          </div>

          <div className={compact ? "flex justify-center pt-2" : "flex justify-center mt-8"}>
            <button
              type="submit"
              className={
                compact
                  ? "rounded-full bg-white px-10 py-2.5 text-base font-bold text-[#5c5bf4] shadow-md transition-all hover:scale-[1.02] hover:bg-gray-100 active:scale-100"
                  : "bg-white text-[#5c5bf4] font-bold text-lg px-12 py-3 rounded-full hover:bg-gray-100 hover:scale-[1.02] active:scale-100 transition-all shadow-md"
              }
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}