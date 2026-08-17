"use client";

<<<<<<< HEAD
import React, { useState } from "react";
import Modal from "../../_components/modal";
=======
import React, { useState, useEffect } from "react";
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
import Button from "@/app/_components/button";

const BRAND = "#5150e0";
const BRAND_HOVER = "#4340c9";

const EMPTY_FORM = { name: "", email: "", phone: "", notes: "" };

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That email doesn't look right.";
  }

  if (values.phone && !/^[\d\s()+-]{7,}$/.test(values.phone)) {
    errors.phone = "That phone number doesn't look right.";
  }

  return errors;
}

export function GetInTouchModal({ isOpen, onClose, onSubmit }) {
  const [values, setValues] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

<<<<<<< HEAD
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the person starts fixing it
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

=======
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
  const resetAndClose = () => {
    setValues(EMPTY_FORM);
    setErrors({});
    setSubmitError("");
    setIsSubmitting(false);
    onClose();
  };

  const handleClose = () => {
<<<<<<< HEAD
    if (isSubmitting) return; // don't let them close mid-submit
    resetAndClose();
  };

=======
    if (isSubmitting) return; // Don't let them close mid-submit
    resetAndClose();
  };

  // Close modal when pressing ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isSubmitting]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setSubmitError("");
    setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(values);
      }
      resetAndClose();
    } catch (err) {
<<<<<<< HEAD
      setSubmitError(
        err?.message || "Something went wrong. Please try again.",
      );
=======
      setSubmitError(err?.message || "Something went wrong. Please try again.");
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
      setIsSubmitting(false);
    }
  };

  return (
<<<<<<< HEAD
    <Modal isOpen={isOpen} onClose={handleClose} width="max-w-md ">
      <div className="-mx-6 -mb-6 px-8 pb-8 pt-6 ">
        <h3 className="mb-6 text-center text-4xl font-bold text-black">
          Book a Call
        </h3>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-1.5 text-left">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
=======
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 transition-all duration-300 animate-in fade-in"
      onClick={handleClose}
    >
      <div
        className="
    relative w-full max-w-md
    rounded-3xl
    border border-white/30
    bg-white/10
    p-8
    shadow-[0_8px_40px_rgba(0,0,0,0.15)]
    backdrop-blur-2xl
    backdrop-saturate-150
    transition-all
    animate-in fade-in zoom-in-95 duration-200
    before:absolute before:inset-0 before:-z-10
    before:rounded-3xl
    before:bg-gradient-to-br before:from-white/20 before:via-white/20 before:to-transparent
    before:opacity-60
  "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-black/5 text-gray-700 transition-colors hover:bg-black/10 hover:text-black focus:outline-none disabled:opacity-50"
          aria-label="Close"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="mb-6 text-center">
          <h3 className="text-3xl font-extrabold tracking-tight text-white">
            Book a Call
          </h3>
          <p className="mt-1 text-xs font-medium text-gray-200">
            Fill in the details below to schedule your conversation.
          </p>
        </div>

        {/* Form Fields */}
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          {/* Name Field */}
          <div className="flex flex-col gap-1.5 text-left">
            <label
              htmlFor="name"
              className="text-xs font-semibold tracking-wide uppercase text-white"
            >
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
<<<<<<< HEAD
              className={`w-full rounded-md border px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-[#5150e0] focus:ring-[#5150e0]/20"
=======
              className={`w-full rounded-xl border bg-white/60 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 backdrop-blur-sm transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-200"
                  : "border-white/40 focus:border-[#5150e0] focus:ring-[#5150e0]/30"
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
              }`}
              required
            />
            {errors.name && (
<<<<<<< HEAD
              <span className="text-xs text-red-500">{errors.name}</span>
=======
              <span className="text-xs font-medium text-red-500">
                {errors.name}
              </span>
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
            )}
          </div>

          {/* Email Address Field */}
          <div className="flex flex-col gap-1.5 text-left">
<<<<<<< HEAD
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
=======
            <label
              htmlFor="email"
              className="text-xs font-semibold tracking-wide uppercase text-white"
            >
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="e.g. name@company.com"
<<<<<<< HEAD
              className={`w-full rounded-md border px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-[#5150e0] focus:ring-[#5150e0]/20"
=======
              className={`w-full rounded-xl border bg-white/60 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 backdrop-blur-sm transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-200"
                  : "border-white/40 focus:border-[#5150e0] focus:ring-[#5150e0]/30"
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
              }`}
              required
            />
            {errors.email && (
<<<<<<< HEAD
              <span className="text-xs text-red-500">{errors.email}</span>
=======
              <span className="text-xs font-medium text-red-500">
                {errors.email}
              </span>
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
            )}
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col gap-1.5 text-left">
<<<<<<< HEAD
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
=======
            <label
              htmlFor="phone"
              className="text-xs font-semibold tracking-wide uppercase text-white"
            >
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="e.g. +1 (555) 000-0000"
<<<<<<< HEAD
              className={`w-full rounded-md border px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-[#5150e0] focus:ring-[#5150e0]/20"
              }`}
            />
            {errors.phone && (
              <span className="text-xs text-red-500">{errors.phone}</span>
=======
              className={`w-full rounded-xl border bg-white/60 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 backdrop-blur-sm transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-red-500 focus:ring-red-200"
                  : "border-white/40 focus:border-[#5150e0] focus:ring-[#5150e0]/30"
              }`}
            />
            {errors.phone && (
              <span className="text-xs font-medium text-red-500">
                {errors.phone}
              </span>
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
            )}
          </div>

          {/* Notes Field */}
          <div className="flex flex-col gap-1.5 text-left">
<<<<<<< HEAD
            <label htmlFor="notes" className="text-sm font-medium text-gray-700">
=======
            <label
              htmlFor="notes"
              className="text-xs font-semibold tracking-wide uppercase text-white"
            >
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={values.notes}
              onChange={handleChange}
              placeholder="Tell us a little about what you need help with..."
<<<<<<< HEAD
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-[#5150e0] focus:outline-none focus:ring-2 focus:ring-[#5150e0]/20"
=======
              className="w-full rounded-xl border border-white/40 bg-white/60 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 backdrop-blur-sm transition-all focus:bg-white focus:border-[#5150e0] focus:outline-none focus:ring-2 focus:ring-[#5150e0]/30"
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
            />
          </div>

          {submitError && (
<<<<<<< HEAD
            <p className="text-center text-sm text-red-500">{submitError}</p>
          )}

          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full px-10 py-2.5 font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60"
=======
            <p className="text-center text-sm font-medium text-red-500">
              {submitError}
            </p>
          )}

          <div className="flex justify-center pt-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full py-3 font-semibold text-white shadow-lg transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60"
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
              style={{ backgroundColor: BRAND }}
              onMouseEnter={(e) => {
                if (!isSubmitting)
                  e.currentTarget.style.backgroundColor = BRAND_HOVER;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = BRAND;
              }}
            >
              {isSubmitting ? "Submitting…" : "Request a Callback"}
            </Button>
          </div>
        </form>
      </div>
<<<<<<< HEAD
    </Modal>
=======
    </div>
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
  );
}

export default function GetInTouch() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center p-8">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
<<<<<<< HEAD
        className="rounded-full bg-[#5150e0] px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-[#4340c9]"
=======
        className="rounded-full bg-[#5150e0] px-8 py-3 font-semibold text-white shadow-xl transition-all hover:bg-[#615EFC] hover:shadow-2xl"
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
      >
        Get in Touch
      </button>

      <GetInTouchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
