"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Calendar as CalendarIcon,
  Clock,
  PartyPopper,
  Heart,
  Sparkles,
} from "lucide-react";
import { Syne, Space_Grotesk } from "next/font/google";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

const TIME_SLOTS = [
  "09:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "01:00 pm",
  "02:00 pm",
  "03:00 pm",
  "04:00 pm",
  "05:00 pm",
];

function buildCalendar(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];

  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return cells;
}

const today = new Date();

export default function AppointmentBooking() {
  const [cursor, setCursor] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const [selectedDate, setSelectedDate] = useState(12);
  const [selectedTime, setSelectedTime] = useState("10:00 am");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const cells = buildCalendar(cursor.year, cursor.month);
  const isCurrentMonth =
    cursor.year === today.getFullYear() && cursor.month === today.getMonth();

  const goPrevMonth = () => {
    setCursor((prev) => {
      const month = prev.month === 0 ? 11 : prev.month - 1;
      const year = prev.month === 0 ? prev.year - 1 : prev.year;
      return { year, month };
    });
  };

  const goNextMonth = () => {
    setCursor((prev) => {
      const month = prev.month === 11 ? 0 : prev.month + 1;
      const year = prev.month === 11 ? prev.year + 1 : prev.year;
      return { year, month };
    });
  };

  const selectedWeekday =
    selectedDate != null
      ? new Date(cursor.year, cursor.month, selectedDate)
          .toLocaleDateString("en-US", { weekday: "short" })
          .toUpperCase()
      : null;

  const selectedDateLabel =
    selectedDate != null
      ? new Date(cursor.year, cursor.month, selectedDate).toLocaleDateString(
          "en-US",
          { month: "short", day: "numeric" },
        )
      : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 2200);
    console.log({
      date: selectedDate
        ? `${cursor.year}-${cursor.month + 1}-${selectedDate}`
        : null,
      time: selectedTime,
      email,
    });
  };

  return (
    <div
      className={`${spaceGrotesk.className} flex items-center justify-center p-2 sm:p-4 lg:p-6`}
    >
      <div className="w-full max-w-[1200px] mt-4">
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-6 -top-14 z-20 hidden w-44 -rotate-[10deg] rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_18px_40px_-12px_rgba(30,41,59,0.35)] lg:-left-10 lg:-top-16 lg:block lg:w-56"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <PartyPopper className="h-5 w-5" />
              </span>
              <Heart className="h-3.5 w-3.5 fill-rose-300 text-rose-300" />
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            </div>
            <p
              className="mt-3 text-xs font-extrabold leading-tight text-slate-900"
            >
              Congratulations!
            </p>
            <p className="text-xs font-medium leading-snug text-slate-400">
              You have an appointment
            </p>
            <div className="mt-3 space-y-1.5">
              <div className="h-1.5 w-4/5 rounded-full bg-slate-100" />
              <div className="h-1.5 w-3/5 rounded-full bg-slate-100" />
            </div>
          </div>

          <div className="relative z-10 mt-6 overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_25px_70px_-15px_rgba(30,41,59,0.3)] sm:mt-8 sm:rounded-[32px] lg:mt-10">
            {/* Accent bar */}
            <div className="h-2 w-full" />

            <div className="px-4 py-5 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
              {/* Header */}
              <div className="mb-5 text-center sm:mb-6">
                <h1
                  className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl"
                >
                  Book Your 30 Minute Call
                </h1>
                <p className="mt-2 text-sm text-slate-500 sm:text-base">
                  Pick a date and time that works for you.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-10"
              >
                <div>
                  <label className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
                    <CalendarIcon className="h-4 w-4" />
                    Select date
                  </label>

                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-3 sm:p-4">
                    {/* Month navigation */}
                    <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-slate-100 sm:px-4 sm:py-2.5">
                      <button
                        type="button"
                        onClick={goPrevMonth}
                        aria-label="Previous month"
                        className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 sm:h-8 sm:w-8"
                      >
                        <ChevronLeft className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                      </button>

                      <span className="text-sm font-bold text-slate-800 sm:text-base">
                        {MONTHS[cursor.month]} {cursor.year}
                      </span>

                      <button
                        type="button"
                        onClick={goNextMonth}
                        aria-label="Next month"
                        className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 sm:h-8 sm:w-8"
                      >
                        <ChevronRight className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                      </button>
                    </div>

                    {/* Day labels */}
                    <div className="mt-3 grid grid-cols-7 text-center text-xs font-bold text-slate-400">
                      {DAY_LABELS.map((d, i) => (
                        <span key={i}>{d}</span>
                      ))}
                    </div>

                    {/* Days grid */}
                    <div className="mt-1 grid grid-cols-7 gap-y-1 text-center">
                      {cells.map((day, idx) => {
                        const isSelected = day === selectedDate;
                        const isToday =
                          isCurrentMonth && day === today.getDate();
                        const formattedDay = day
                          ? String(day).padStart(2, "0")
                          : "";

                        return (
                          <div
                            key={idx}
                            className="flex items-center justify-center py-0.5"
                          >
                            {day ? (
                              <button
                                type="button"
                                onClick={() => setSelectedDate(day)}
                                className={`relative flex h-8 w-8 flex-col items-center justify-center rounded-lg text-xs font-semibold transition-all duration-150 sm:h-9 sm:w-9 sm:text-sm ${
                                  isSelected
                                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                                    : "text-slate-600 hover:bg-white hover:shadow-sm"
                                }`}
                              >
                                <span className={isSelected ? "font-bold" : ""}>
                                  {formattedDay}
                                </span>
                                {isSelected && (
                                  <span className="text-[8px] font-semibold uppercase leading-none tracking-wide text-indigo-100">
                                    {selectedWeekday}
                                  </span>
                                )}
                                {isToday && !isSelected && (
                                  <span className="absolute bottom-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                                )}
                              </button>
                            ) : (
                              <div className="h-8 w-8 sm:h-9 sm:w-9" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* RIGHT: Email + Time */}
                <div className="flex flex-col">
                  <div className="mb-5">
                    <label className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
                      <Mail className="h-4 w-4" />
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100 sm:px-4 sm:py-2.5 sm:text-base"
                    />
                  </div>

                  <label className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
                    <Clock className="h-4 w-4" />
                    Select time
                  </label>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = slot === selectedTime;
                      return (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setSelectedTime(slot)}
                          className={`rounded-xl border py-2 text-xs font-semibold transition-all duration-150 sm:py-2.5 sm:text-sm ${
                            isSelected
                              ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-200"
                              : "border-slate-200 bg-slate-50/70 text-slate-600 hover:border-indigo-200 hover:bg-white"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>

                  {selectedDate != null && (
                    <p className="mt-4 text-sm font-medium text-slate-500">
                      You're booking{" "}
                      <span className="font-bold text-slate-800">
                        {selectedDateLabel}
                      </span>{" "}
                      at{" "}
                      <span className="font-bold text-slate-800">
                        {selectedTime}
                      </span>
                      .
                    </p>
                  )}
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="mx-auto flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all duration-150 hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-[0.99] sm:w-auto sm:px-10 sm:py-3 sm:text-base"
                  >
                    {submitted ? "Appointment booked ✓" : "Get Appointment"}
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
