"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Calendar as CalendarIcon,
  Clock,
  Heart,
  Sparkles,
  MailIcon,
  Loader2,
} from "lucide-react";
import { Syne, Space_Grotesk } from "next/font/google";
import { add_booking_service } from "@/app/_services/booking-services";

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
  "09:30 am",
  "10:00 am",
  "10:30 am",
  "11:00 am",
  "11:30 am",
  "12:00 pm",
  "12:30 pm",
  "01:00 pm",
  "01:30 pm",
  "02:00 pm",
  "02:30 pm",
  "03:00 pm",
  "03:30 pm",
  "04:00 pm",
  "04:30 pm",
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

export default function BookCalendarSection() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      date: null,
      time: null,
    },
  });

  const selectedDate = watch("date");
  const selectedTime = watch("time");

  const [cursor, setCursor] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  // New loading state
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [monthDirection, setMonthDirection] = useState(0);

  const cells = buildCalendar(cursor.year, cursor.month);
  const isCurrentMonth =
    cursor.year === today.getFullYear() && cursor.month === today.getMonth();

  const todayStart = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );
  const twoWeeksEnd = new Date(todayStart.getTime() + 13 * 24 * 60 * 60 * 1000);

  const nextMonthYear = cursor.month === 11 ? cursor.year + 1 : cursor.year;
  const nextMonthIndex = cursor.month === 11 ? 0 : cursor.month + 1;
  const isNextMonthBeyondWindow =
    new Date(nextMonthYear, nextMonthIndex, 1) > twoWeeksEnd;

  const goPrevMonth = () => {
    setMonthDirection(-1);
    setCursor((prev) => {
      const month = prev.month === 0 ? 11 : prev.month - 1;
      const year = prev.month === 0 ? prev.year - 1 : prev.year;
      return { year, month };
    });
  };

  const goNextMonth = () => {
    setMonthDirection(1);
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

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      // 1. Parse the time string (e.g., "09:00 am") into hours and minutes
      const [timeString, modifier] = data.time.split(" ");
      let [hours, minutes] = timeString.split(":");

      if (hours === "12") hours = "00";
      if (modifier.toLowerCase() === "pm") hours = parseInt(hours, 10) + 12;

      // 2. Create Start Time Date object
      const startTime = new Date(
        cursor.year,
        cursor.month,
        data.date,
        parseInt(hours, 10),
        parseInt(minutes, 10),
      );

      // 3. Create End Time Date object (30-minute appointment)
      const endTime = new Date(startTime.getTime() + 30 * 60 * 1000);

      // 4. Prepare the payload exactly as Laravel expects it
      const payload = {
        name: data.name,
        email: data.email,
        start_time: startTime.toISOString(),
        end_time: endTime.toISOString(),
      };

      // 5. Call your API service
      await add_booking_service(payload);

      console.log("Form submitted successfully:", payload);

      setSubmitted(true);

      // 6. Reset UI after success animation
      window.setTimeout(() => {
        setSubmitted(false);
        reset(); // clears react-hook-form inputs
        setCursor({ year: today.getFullYear(), month: today.getMonth() }); // resets calendar
      }, 2500);
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Something went wrong while booking. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`${spaceGrotesk.className} flex items-center justify-center p-2 sm:p-4 lg:p-6`}
    >
      <div className="mt-4 w-full max-w-[1200px]">
        <div className="relative">
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, y: 16, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -10 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="pointer-events-none absolute -left-6 -top-14 z-20 hidden w-44 rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_18px_40px_-12px_rgba(30,41,59,0.35)] lg:-left-10 lg:-top-16 lg:block lg:w-56"
          >
            <div className="flex items-center gap-2">
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white"
              >
                <MailIcon className="h-5 w-5" />
              </motion.span>
              <Heart className="h-3.5 w-3.5 fill-rose-300 text-rose-300" />
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            </div>
            <p className="mt-3 text-xs font-extrabold leading-tight text-slate-900">
              You're One Step Away
            </p>
            <p className="text-xs font-medium leading-snug text-slate-400">
              Select a time that works best for you.
            </p>
            <div className="mt-3 space-y-1.5">
              <div className="h-1.5 w-4/5 rounded-full bg-slate-100" />
              <div className="h-1.5 w-3/5 rounded-full bg-slate-100" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-10 mt-6 overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_25px_70px_-15px_rgba(30,41,59,0.3)] sm:mt-8 sm:rounded-[32px] lg:mt-10"
          >
            <div className="h-2 w-full" />

            <div className="px-4 py-5 sm:px-8 sm:py-7 lg:px-10 lg:py-8">
              <div className="mb-5 text-center sm:mb-6">
                <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
                  Book a strategy call{" "}
                </h1>
                <p className="mt-2 text-sm text-slate-500 sm:text-base">
                  Pick a date and time that works for you.
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-10"
              >
                <div>
                  <label className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
                    <CalendarIcon className="h-4 w-4" />
                    Select date
                    {errors.date && (
                      <span className="ml-auto text-xs normal-case text-rose-500">
                        Required
                      </span>
                    )}
                  </label>

                  <input
                    type="hidden"
                    {...register("date", { required: true })}
                  />

                  <div
                    className={`rounded-2xl border bg-slate-50/70 p-3 transition-colors sm:p-4 ${errors.date ? "border-rose-300" : "border-slate-100"}`}
                  >
                    <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-slate-100 sm:px-4 sm:py-2.5">
                      <motion.button
                        type="button"
                        onClick={goPrevMonth}
                        aria-label="Previous month"
                        disabled={isCurrentMonth}
                        whileTap={{ scale: isCurrentMonth ? 1 : 0.85 }}
                        className={`flex h-7 w-7 items-center justify-center rounded-md transition sm:h-8 sm:w-8 ${isCurrentMonth ? "cursor-not-allowed text-slate-200" : "text-slate-400 hover:bg-slate-100 hover:text-slate-700"}`}
                      >
                        <ChevronLeft className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                      </motion.button>

                      <span className="relative overflow-hidden text-sm font-bold text-slate-800 sm:text-base">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.span
                            key={`${cursor.year}-${cursor.month}`}
                            initial={{ opacity: 0, x: monthDirection * 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -monthDirection * 16 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block"
                          >
                            {MONTHS[cursor.month]} {cursor.year}
                          </motion.span>
                        </AnimatePresence>
                      </span>

                      <motion.button
                        type="button"
                        onClick={goNextMonth}
                        aria-label="Next month"
                        disabled={isNextMonthBeyondWindow}
                        whileTap={{ scale: isNextMonthBeyondWindow ? 1 : 0.85 }}
                        className={`flex h-7 w-7 items-center justify-center rounded-md transition sm:h-8 sm:w-8 ${isNextMonthBeyondWindow ? "cursor-not-allowed text-slate-200" : "text-slate-400 hover:bg-slate-100 hover:text-slate-700"}`}
                      >
                        <ChevronRight className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                      </motion.button>
                    </div>

                    <div className="mt-3 grid grid-cols-7 text-center text-xs font-bold text-slate-400">
                      {DAY_LABELS.map((d, i) => (
                        <span key={i}>{d}</span>
                      ))}
                    </div>

                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={`${cursor.year}-${cursor.month}`}
                        initial={{ opacity: 0, x: monthDirection * 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -monthDirection * 24 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="mt-1 grid grid-cols-7 gap-y-1 text-center"
                      >
                        {cells.map((day, idx) => {
                          const isSelected = day === selectedDate;
                          const isToday =
                            isCurrentMonth && day === today.getDate();
                          const formattedDay = day
                            ? String(day).padStart(2, "0")
                            : "";

                          const cellDate = day
                            ? new Date(cursor.year, cursor.month, day)
                            : null;
                          const isDisabled = cellDate
                            ? cellDate < todayStart || cellDate > twoWeeksEnd
                            : false;

                          return (
                            <div
                              key={idx}
                              className="flex items-center justify-center py-0.5"
                            >
                              {day ? (
                                <motion.button
                                  type="button"
                                  disabled={isDisabled}
                                  onClick={() =>
                                    !isDisabled &&
                                    setValue("date", day, {
                                      shouldValidate: true,
                                    })
                                  }
                                  whileTap={{ scale: isDisabled ? 1 : 0.88 }}
                                  animate={{ scale: isSelected ? 1.05 : 1 }}
                                  transition={{ duration: 0.15 }}
                                  className={`relative flex h-8 w-8 flex-col items-center justify-center rounded-lg text-xs font-semibold sm:h-9 sm:w-9 sm:text-sm ${
                                    isDisabled
                                      ? "cursor-not-allowed text-slate-300"
                                      : isSelected
                                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                                        : "text-slate-600 hover:bg-white hover:shadow-sm"
                                  }`}
                                >
                                  <span
                                    className={isSelected ? "font-bold" : ""}
                                  >
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
                                </motion.button>
                              ) : (
                                <div className="h-8 w-8 sm:h-9 sm:w-9" />
                              )}
                            </div>
                          );
                        })}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="mb-5">
                    <label className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
                      <Mail className="h-4 w-4" />
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      {...register("name", { required: true })}
                      className={`w-full rounded-xl border bg-slate-50/70 px-3 py-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-indigo-100 sm:px-4 sm:py-2.5 sm:text-base ${
                        errors.name
                          ? "border-rose-400 focus:border-rose-400"
                          : "border-slate-200 focus:border-indigo-400"
                      }`}
                    />
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
                      <Mail className="h-4 w-4" />
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      {...register("email", { required: true })}
                      className={`w-full rounded-xl border bg-slate-50/70 px-3 py-2 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 focus:ring-indigo-100 sm:px-4 sm:py-2.5 sm:text-base ${
                        errors.email
                          ? "border-rose-400 focus:border-rose-400"
                          : "border-slate-200 focus:border-indigo-400"
                      }`}
                    />
                  </div>

                  <label className="mb-2 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-500">
                    <Clock className="h-4 w-4" />
                    Select time
                    {errors.time && (
                      <span className="ml-auto text-xs normal-case text-rose-500">
                        Required
                      </span>
                    )}
                  </label>

                  <input
                    type="hidden"
                    {...register("time", { required: true })}
                  />

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = slot === selectedTime;
                      return (
                        <motion.button
                          type="button"
                          key={slot}
                          onClick={() =>
                            setValue("time", slot, { shouldValidate: true })
                          }
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.92 }}
                          className={`rounded-xl border py-2 text-xs font-semibold transition-colors duration-150 sm:py-2.5 sm:text-sm ${
                            isSelected
                              ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-200"
                              : errors.time
                                ? "border-rose-200 bg-slate-50/70 text-slate-600 hover:border-rose-400 hover:bg-white"
                                : "border-slate-200 bg-slate-50/70 text-slate-600 hover:border-indigo-200 hover:bg-white"
                          }`}
                        >
                          {slot}
                        </motion.button>
                      );
                    })}
                  </div>

                  <AnimatePresence>
                    {selectedDate != null && selectedTime != null && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4 text-sm font-medium text-slate-500"
                      >
                        You're booking{" "}
                        <span className="font-bold text-slate-800">
                          {selectedDateLabel}
                        </span>{" "}
                        at{" "}
                        <span className="font-bold text-slate-800">
                          {selectedTime}
                        </span>
                        .
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="md:col-span-2">
                  <motion.button
                    type="submit"
                    disabled={isLoading || submitted}
                    whileHover={{ scale: isLoading || submitted ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading || submitted ? 1 : 0.98 }}
                    animate={submitted ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mx-auto flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-colors duration-150 hover:bg-indigo-700 hover:shadow-indigo-300 disabled:cursor-not-allowed disabled:opacity-80 disabled:hover:bg-indigo-600 sm:w-auto sm:px-10 sm:py-3 sm:text-base"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isLoading ? (
                        <motion.span
                          key="loading"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-2"
                        >
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Booking...
                        </motion.span>
                      ) : submitted ? (
                        <motion.span
                          key="booked"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                        >
                          Appointment booked ✓
                        </motion.span>
                      ) : (
                        <motion.span
                          key="book"
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.2 }}
                        >
                          Get Appointment
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
