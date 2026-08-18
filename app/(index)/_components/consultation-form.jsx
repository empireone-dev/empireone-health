"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { add_consultation_service } from "@/app/_services/booking-services";
import Link from "next/link";
import Input from "@/app/_components/input";
import Select from "@/app/_components/select";

const INPUT_PROPS = {
  textColor: "#ffffff",
  labelBg: "transparent",
  accentColor: "#ffffff",
};

export default function ConsultationForm() {
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitError(null);
    try {
      await add_consultation_service(data);
      reset();
      setSubmitSuccess(true);
    } catch (err) {
      console.error("Consultation submission error:", err);
      setSubmitError("Failed to submit. Please try again.");
    }
  };

  if (submitSuccess) {
    return (
      <div className="relative rounded-3xl bg-[#5955f2] p-6 text-center text-white shadow-2xl sm:p-8">
        <h2 className="mb-4 text-xl font-bold">Thank you!</h2>
        <p className="text-white/90">We&apos;ll be in touch shortly.</p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="mt-6 rounded-full bg-white px-8 py-2 text-xs font-bold text-[#5955f2] shadow-md transition hover:bg-slate-100"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="relative rounded-3xl bg-[#5955f2] p-6 text-white shadow-2xl sm:p-8">
          <h2 className="mb-6 text-center text-xl font-bold tracking-tight sm:text-2xl">
            Get a Free Consultation
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
            {/* Name & Company */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Input
                label="Your Name"
                required
                error={errors.name}
                {...INPUT_PROPS}
                {...register("name", { required: "Name is required" })}
                className="rounded-full border-white/40 bg-white/10 text-xs text-white placeholder-white/80"
              />
              <Input
                label="Company"
                {...INPUT_PROPS}
                {...register("company")}
                className="rounded-full border-white/40 bg-white/10 text-xs text-white placeholder-white/80"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Input
                label="Email address"
                type="email"
                required
                error={errors.email}
                {...INPUT_PROPS}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
                className="rounded-full border-white/40 bg-white/10 text-xs text-white placeholder-white/80"
              />
              <Input
                label="Phone"
                type="tel"
                required
                error={errors.phone}
                {...INPUT_PROPS}
                {...register("phone", { required: "Phone is required" })}
                className="rounded-full border-white/40 bg-white/10 text-xs text-white placeholder-white/80"
              />
            </div>

            {/* Confirm Email & Source Select */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Input
                label="Confirm email address"
                type="email"
                required
                error={errors.confirm_email}
                {...INPUT_PROPS}
                {...register("confirm_email", {
                  required: "Please confirm your email",
                  validate: (val) =>
                    val === watch("email") || "Emails do not match",
                })}
                className="rounded-full border-white/40 bg-white/10 text-xs text-white placeholder-white/80"
              />
              <Controller
                name="source"
                control={control}
                render={({ field }) => (
                  <Select
                    label="Source"
                    options={[
                      { value: "", label: "Source" },
                      { value: "google", label: "Google Search" },
                      { value: "chatgpt", label: "ChatGPT" },
                      { value: "linkedIn", label: "LinkedIn" },
                      { value: "referral", label: "Referral" },
                      { value: "website", label: "Website" },
                      { value: "other", label: "Other" },
                    ]}
                    {...field}
                    className="rounded-full border-white/40 bg-white/10 text-xs text-white"
                  />
                )}
              />
            </div>

            {/* Need Help With Select */}
            <div className="relative">
              <Controller
                name="help_with"
                control={control}
                render={({ field }) => (
                  <Select
                    label="Need Help With?"
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
                    {...field}
                    className="rounded-full border-white/40 bg-white/10 text-xs text-white"
                  />
                )}
              />
            </div>

            {/* Textarea */}
            <div>
              <textarea
                rows={3}
                placeholder="Tell us about your workflow goals. Do not include sensitive healthcare information."
                {...register("message")}
                className="w-full resize-none rounded-2xl border border-white/40 bg-white/10 px-4 py-2.5 text-xs text-white placeholder-white/80 outline-none transition focus:border-white focus:bg-white/20"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-2 pt-1 text-[11px] text-white/90">
              <input
                type="checkbox"
                id="privacy"
                {...register("privacy", { required: true })}
                className="mt-0.5 rounded border-white/40 bg-white/10 text-[#5955f2] focus:ring-0"
              />
              <label htmlFor="privacy" className="cursor-pointer">
                By ticking this box I agree that I have read the{" "}
                <Link href="/privacy-policy" className="underline hover:text-white">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>
            {errors.privacy && (
              <p className="text-xs text-red-300">
                You must accept the privacy policy.
              </p>
            )}

            {/* Error message */}
            {submitError && (
              <p className="text-center text-xs text-red-300">{submitError}</p>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mx-auto block rounded-full bg-white px-8 py-2 text-xs font-bold text-[#5955f2] shadow-md transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
