"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import Modal from "@/app/_components/modal";
import Input from "@/app/_components/input";
import { add_appointment_service } from "@/app/_services/booking-services";

const INPUT_PROPS = {
  textColor: "#ffffff",
  labelBg: "transparent",
  accentColor: "#ffffff",
};

export function GetInTouchModal({ isOpen, onClose }) {
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleModalClose = () => {
    setSubmitSuccess(false);
    setSubmitError(null);
    reset();
    onClose();
  };

  const onSubmit = async (data) => {
    setSubmitError(null);

    try {
      await add_appointment_service(data);

      // Clear the form
      reset();

      // Show success message
      setSubmitSuccess(true);
    } catch (err) {
      console.error("Appointment submission error:", err);
      setSubmitError("Failed to submit. Please try again.");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleModalClose}
      hideCloseButton
      maxWidth="max-w-md"
    >
      <div className="relative">
        {/* Close button */}
        <button
          type="button"
          onClick={handleModalClose}
          aria-label="Close modal"
          className="absolute -top-1 -right-1 rounded-full p-1.5 text-white transition-colors mt-1 hover:bg-white/50 hover:text-slate-600"
        >
          <X size={18} strokeWidth={2} />
        </button>

        {submitSuccess ? (
          /* Success Message */
          <div className="animate-pop-in flex flex-col items-center justify-center py-10 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
              <CheckCircle2
                size={40}
                strokeWidth={2}
                className="animate-check-bounce text-green-400"
              />
            </div>

            <h2 className="text-3xl font-bold text-white">
              Request Submitted!
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
              Thank you for reaching out. We have received your request and will
              get back to you shortly.
            </p>

            <button
              type="button"
              onClick={handleModalClose}
              className="mt-7 rounded-full bg-[#12379D] px-8 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0f2f87] hover:shadow-lg active:translate-y-0"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Title */}
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold text-white">Book a Call</h2>

              <p className="mt-1.5 text-sm text-white">
                Fill in the details below to schedule your conversation.
              </p>
            </div>

            <form
              className="space-y-5"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <Input
                label="Name *"
                placeholder="e.g. John Doe"
                error={errors.name}
                {...INPUT_PROPS}
                {...register("name", {
                  required: "Name is required",
                })}
              />

              <Input
                type="email"
                label="Email Address *"
                placeholder="e.g. name@company.com"
                error={errors.email}
                {...INPUT_PROPS}
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />

              <Input
                type="tel"
                label="Phone Number *"
                placeholder="e.g. +1 (555) 000-0000"
                error={errors.phone}
                {...INPUT_PROPS}
                {...register("phone", {
                  required: "Phone number is required",
                })}
              />

              <Input
                className="h-32"
                type="textarea"
                label="Notes"
                placeholder="Tell us a little about what you need help with..."
                {...INPUT_PROPS}
                {...register("notes")}
              />

              {submitError && (
                <p className="text-center text-sm text-red-400">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-[#12379D] py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0f2f87] hover:shadow-lg active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Submitting…" : "Request a Callback"}
              </button>
            </form>
          </>
        )}
      </div>
    </Modal>
  );
}

export default function GetInTouchButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="hidden items-center gap-2 rounded-full bg-[#12379D] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0f2f87] hover:shadow-lg active:translate-y-0 lg:inline-flex xl:px-7 xl:py-3 xl:text-base"
      >
        <span>Get in touch</span>
        <ArrowUpRight className="h-4 w-4 xl:h-5 xl:w-5" />
      </button>

      <GetInTouchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
