"use client";

import React, { useState } from "react";
import { GetInTouchModal } from "@/app/(index)/_components/get-in-touch-modal";
import { add_appointment_service } from "@/app/_services/booking-services";

export const EMPTY_FORM = { name: "", email: "", phone: "", notes: "" };

export function validate(values) {
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

export default function GetInTouch() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (values) => {
    await add_appointment_service({
      name: values.name,
      email: values.email,
      notes: values.notes,
      phone: values.phone,
    });
  };

  return (
    <div className="flex items-center justify-center p-8">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="rounded-full bg-[#5150e0] px-8 py-3 font-semibold text-white shadow-xl transition-all hover:bg-[#615EFC] hover:shadow-2xl"
      >
        Get in Touch
      </button>

      <GetInTouchModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
