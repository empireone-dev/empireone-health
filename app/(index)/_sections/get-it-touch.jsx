"use client";

import React, { useState } from "react";
import Modal from "../../_components/modal";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the person starts fixing it
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const resetAndClose = () => {
    setValues(EMPTY_FORM);
    setErrors({});
    setSubmitError("");
    setIsSubmitting(false);
    onClose();
  };

  const handleClose = () => {
    if (isSubmitting) return; // don't let them close mid-submit
    resetAndClose();
  };

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
      setSubmitError(
        err?.message || "Something went wrong. Please try again.",
      );
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} width="max-w-md ">
      <div className="-mx-6 -mb-6 px-8 pb-8 pt-6 ">
        <h3 className="mb-6 text-center text-4xl font-bold text-black">
          Book a Call
        </h3>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col gap-1.5 text-left">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className={`w-full rounded-md border px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-[#5150e0] focus:ring-[#5150e0]/20"
              }`}
              required
            />
            {errors.name && (
              <span className="text-xs text-red-500">{errors.name}</span>
            )}
          </div>

          {/* Email Address Field */}
          <div className="flex flex-col gap-1.5 text-left">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="e.g. name@company.com"
              className={`w-full rounded-md border px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-[#5150e0] focus:ring-[#5150e0]/20"
              }`}
              required
            />
            {errors.email && (
              <span className="text-xs text-red-500">{errors.email}</span>
            )}
          </div>

          {/* Phone Number Field */}
          <div className="flex flex-col gap-1.5 text-left">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="e.g. +1 (555) 000-0000"
              className={`w-full rounded-md border px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-[#5150e0] focus:ring-[#5150e0]/20"
              }`}
            />
            {errors.phone && (
              <span className="text-xs text-red-500">{errors.phone}</span>
            )}
          </div>

          {/* Notes Field */}
          <div className="flex flex-col gap-1.5 text-left">
            <label htmlFor="notes" className="text-sm font-medium text-gray-700">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={values.notes}
              onChange={handleChange}
              placeholder="Tell us a little about what you need help with..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-[#5150e0] focus:outline-none focus:ring-2 focus:ring-[#5150e0]/20"
            />
          </div>

          {submitError && (
            <p className="text-center text-sm text-red-500">{submitError}</p>
          )}

          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full px-10 py-2.5 font-semibold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-60"
              style={{ backgroundColor: BRAND }}
              onMouseEnter={(e) => {
                if (!isSubmitting)
                  e.currentTarget.style.backgroundColor = BRAND_HOVER;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = BRAND;
              }}
            >
              {isSubmitting ? "Submitting…" : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default function GetInTouch() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center p-8">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-full bg-[#5150e0] px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-[#4340c9]"
      >
        Get in Touch
      </button>

      <GetInTouchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}