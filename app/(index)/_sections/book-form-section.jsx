"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import Input from "../../_components/input";
import Select from "../../_components/select";
import { add_appointment_service, add_booking30_min_call_service } from "../../_services/booking-services";

const fieldClassName =
    "!rounded-full !border-white/40 !bg-white/10 !text-white placeholder:!text-white/60 focus:!ring-white/70 focus:!border-white";

export default function BookFormSection({ compact = false }) {
    const [submitError, setSubmitError] = useState(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        reset,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        setSubmitError(null);

        const person = {
            name: data.fullName,
            email: [
                {
                    "value": data.email,
                    "primary": true,
                    "label": "work"
                }
            ],//done
            phone: [
                {
                    "value": data.contactNumber,
                    "primary": true,
                    "label": "work"
                }
            ],//done
            notes: data.message,//done
        }
        const organization = {
            name: data.companyName,//done
            field_name: data.companyName,
            field_type: "text",
            custom_fields: {
                service: data.lookingToBuild
            }
        }
        const leads = {
            title: "EmpireOneHealth",
            origin_id: data.source,

            // label_ids: [data.lookingToBuild]
        }
        try {
            await add_booking30_min_call_service({
                person: person,
                organization: organization,
                lead: leads,
                // source: data.source, //done
                // looking_for: data.lookingToBuild //pending,
            });

            reset();
            setSubmitSuccess(true);
        } catch (err) {
            console.error("Booking submission error:", err);
            setSubmitError("Failed to submit. Please try again.");
        }
    };

    if (submitSuccess) {
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
                            ? "relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#615eff] bg-cover bg-center p-6 shadow-lg sm:p-8"
                            : "bg-linear-to-br from-[#6a69f7] to-[#5150e0] w-full max-w-7xl rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl ring-1 ring-white/10 flex flex-col items-center justify-center text-center"
                    }
                    style={{ backgroundImage: "url('/images/book-bg.webp')" }}
                >
                    <div className="absolute inset-0 bg-[#615eff]/90 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col items-center gap-4 py-12">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                            <svg
                                className="h-8 w-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-white">Thank You!</h2>
                        <p className="text-white/80">
                            We&apos;ve received your booking request and will be in touch
                            shortly.
                        </p>
                        <button
                            onClick={() => setSubmitSuccess(false)}
                            className="mt-4 rounded-full bg-white px-8 py-2.5 font-bold text-[#5c5bf4] shadow-md transition-all hover:bg-gray-100"
                        >
                            Book Another
                        </button>
                    </div>
                </div>
            </div>
        );
    }

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
                    className={
                        compact ? "relative z-10 space-y-3.5" : "relative z-10 space-y-6"
                    }
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {/* Top Grid: 3 columns on large screens, 1 on small */}
                    <div
                        className={
                            compact
                                ? "grid grid-cols-1 gap-3 md:grid-cols-3"
                                : "grid grid-cols-1 md:grid-cols-3 gap-5"
                        }
                    >
                        <Input
                            label="Full Name *"
                            type="text"
                            className={fieldClassName}
                            error={errors.fullName?.message}
                            {...register("fullName", { required: "Full name is required" })}
                        />

                        <Input
                            label="Company Name"
                            type="text"
                            className={fieldClassName}
                            {...register("companyName")}
                        />

                        <Input
                            label="Email Address *"
                            type="email"
                            className={fieldClassName}
                            error={errors.email?.message}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address",
                                },
                            })}
                        />


                        {/* <Input
                            label="Verify Email *"
                            type="email"
                            className={fieldClassName}
                            error={errors.verifyEmail?.message}
                            {...register("verifyEmail", {
                                required: "Please verify your email",
                                validate: (val) =>
                                    val === getValues("email") || "Emails do not match",
                            })}
                        /> */}


                    </div>
                    <div
                        className={
                            compact
                                ? "grid grid-cols-1 gap-2 md:grid-cols-2"
                                : "grid grid-cols-1 md:grid-cols-2 gap-5"
                        }
                    >

                        <Input
                            label="Contact Number *"
                            type="tel"
                            className={fieldClassName}
                            error={errors.contactNumber?.message}
                            {...register("contactNumber", {
                                required: "Contact number is required",
                            })}
                        />
                        <Controller
                            name="source"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Source"
                                    options={[
                                        { value: "google", label: "Google" },
                                        { value: "chatgpt", label: "ChatGPT" },
                                        { value: "referral", label: "Referral" },
                                        { value: "linkedin", label: "LinkedIn" },
                                        { value: "website", label: "Website" },
                                        { value: "other", label: "Other" },
                                    ]}
                                    className={fieldClassName}
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                    </div>
                    {/* Build Dropdown */}
                    <Controller
                        name="lookingToBuild"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="What are you looking to build?"
                                options={[
                                    {
                                        value: "Benefits Verification & Eligibility",
                                        label: "Benefits Verification & Eligibility",
                                    },
                                    {
                                        value: "Prior Authorization Management",
                                        label: "Prior Authorization Management",
                                    },
                                    {
                                        value: "Appointment Scheduling & Referral Management",
                                        label: "Appointment Scheduling & Referral Management",
                                    },
                                    { value: "Denial Management", label: "Denial Management" },
                                    {
                                        value: "Patient / Self-Pay Collections",
                                        label: "Patient / Self-Pay Collections",
                                    },
                                    { value: "Member Services", label: "Member Services" },
                                    { value: "Enrollment Support", label: "Enrollment Support" },
                                    { value: "Provider Data Management", label: "Provider Data Management" },
                                    { value: "Other", label: "Other" },
                                ]}
                                className={fieldClassName}
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />

                    {/* Message Textarea */}
                    <div className="flex flex-col">
                        <label className="mb-1.5 text-sm font-medium text-white">
                            Message
                        </label>
                        <textarea
                            rows={compact ? 3 : 5}
                            placeholder="Tell us about your workflow goals. Do not include sensitive healthcare information."
                            className="w-full resize-none rounded-2xl border border-white/40 bg-white/10 px-5 py-3 text-white placeholder-white/60 transition-all focus:border-white focus:ring-2 focus:ring-white/70 focus:outline-none"
                            {...register("message")}
                        ></textarea>
                    </div>

                    {/* Checkbox and Privacy Policy */}
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                id="privacy"
                                className="w-4 h-4 mt-0.5 rounded border-white/60 bg-transparent accent-white focus:ring-2 focus:ring-white/80"
                                {...register("privacy_policy_agreed", {
                                    required: "You must agree to the Privacy Policy",
                                })}
                            />
                            <label htmlFor="privacy" className="text-white text-sm">
                                By ticking this box I agree that I have read the{" "}
                                <Link
                                    href="/privacy-policy"
                                    className="underline hover:text-white/80"
                                >
                                    Privacy Policy
                                </Link>
                                .
                            </label>
                        </div>
                        {errors.privacy_policy_agreed && (
                            <p className="text-red-300 text-xs pl-7">
                                {errors.privacy_policy_agreed.message}
                            </p>
                        )}
                    </div>

                    {submitError && (
                        <p className="text-center text-sm text-red-300">{submitError}</p>
                    )}

                    <div
                        className={
                            compact ? "flex justify-center pt-2" : "flex justify-center mt-8"
                        }
                    >
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={
                                compact
                                    ? "rounded-full bg-white px-10 py-2.5 text-base font-bold text-[#5c5bf4] shadow-md transition-all hover:scale-[1.02] hover:bg-gray-100 active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed"
                                    : "bg-white text-[#5c5bf4] font-bold text-lg px-12 py-3 rounded-full hover:bg-gray-100 hover:scale-[1.02] active:scale-100 transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                            }
                        >
                            {isSubmitting ? "Sending..." : "Send"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
