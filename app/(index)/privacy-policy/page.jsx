"use client";
import React, { useEffect, useRef, useState } from "react";

import { motion } from "motion/react";
import {
  Database,
  Settings2,
  ShieldAlert,
  Users,
  Mail,
  ArrowUpRight,
  HeartPlus,
} from "lucide-react";

const SECTIONS = [
  {
    id: "collect",
    label: "Information We Collect",
    icon: Database,
    body: "We may collect your name, company name, email address, phone number, workflow interests, source page, message details, and chat feedback when you choose to submit them.",
  },
  {
    id: "use",
    label: "How We Use Information",
    icon: Settings2,
    body: "We use submitted information to respond to inquiries, route requests to the right team, improve website experience, monitor service quality, and support sales or customer follow-up.",
  },
  {
    id: "sensitive",
    label: "Sensitive Information",
    icon: ShieldAlert,
    flag: true,
    body: "Please do not submit protected health information, patient details, payment card data, or other sensitive records through website forms or AI chat.",
  },
  {
    id: "providers",
    label: "Service Providers",
    icon: Users,
    body: "We may use trusted service providers for email delivery, lead routing, website hosting, analytics, and AI chat support. These providers process information only as needed to support our website and business operations.",
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
    body: "For privacy questions or data requests, contact us at info@empireonehealth.com.",
  },
];

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Page() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [emailCopied, setEmailCopied] = useState(false);
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.dataset.id);
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );
    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    refs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText("info@empireonehealth.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {}
  };

  const activeIndex = SECTIONS.findIndex((s) => s.id === active);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="relative overflow-hidden border-b border-slate-200 px-6 pt-16 pb-12 sm:px-10 sm:pt-20 sm:pb-16 lg:px-16 lg:pt-28 lg:pb-20 xl:px-24">
        {/* Background Layer (Positioned to bottom) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url(/images/empireone-background.webp)] bg-cover bg-bottom opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/80 via-indigo-50/40 to-white" />
        </div>
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl sm:h-[28rem] sm:w-[28rem]" />

        <div className="relative z-10 mx-auto max-w-360">
          <Reveal>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/90 px-4 py-1.5 shadow-md backdrop-blur sm:mb-6 sm:px-5 sm:py-2"
            >
              <HeartPlus className="h-4 w-4 animate-pulse text-teal-600 sm:h-5 sm:w-5" />
              <span className="text-xs font-semibold tracking-wide text-slate-700 sm:text-base">
                EmpireOne Health
              </span>
            </motion.div>

            <h1 className="mb-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Privacy Policy
            </h1>

            <p className="mb-8 max-w-5xl text-lg leading-relaxed text-slate-900">
              EmpireOne Health respects your privacy. This policy explains how
              we handle information submitted through our website forms,
              newsletter signup, and Ask Ava chat experience.
            </p>

            <div className="inline-flex items-baseline gap-2.5 rounded border border-slate-300 bg-white px-5 py-3 text-sm">
              <span className="text-slate-700">LAST UPDATED</span>
              <span className="font-semibold text-slate-900">
                JULY 27, 2026
              </span>
            </div>
          </Reveal>
        </div>
      </header>

      <nav className="flex gap-2 overflow-x-auto border-b border-slate-200 px-5 py-4 sm:px-8 md:hidden">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`flex-shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] transition-colors duration-200 ${
              active === s.id
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <div className="mx-auto flex max-w-360 flex-col gap-12 px-6 py-14 sm:px-10 sm:py-16 md:flex-row md:gap-20 lg:px-16 lg:py-24 xl:px-24">
        {/* Sidebar index (desktop) */}
        <aside className="hidden flex-shrink-0 md:sticky md:top-10 md:block md:w-64 md:self-start">
          <p className="mb-6 text-xs uppercase text-slate-400">On this page</p>
          <div className="relative pl-6">
            <div className="absolute left-1 top-1.5 bottom-1.5 w-px bg-slate-200" />
            <div
              className="absolute left-1 top-1.5 w-px bg-blue-600 transition-all duration-500 ease-out"
              style={{
                height: `${(activeIndex / (SECTIONS.length - 1)) * 100}%`,
              }}
            />
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="group relative block w-full pb-7 text-left text-base last:pb-0"
              >
                <span
                  className={`absolute -left-6 top-[3px] h-2.5 w-2.5 rounded-full border-[1.5px] bg-white transition-all duration-300 ${
                    active === s.id
                      ? "border-blue-600 bg-blue-600 ring-4 ring-blue-100"
                      : "border-slate-300 group-hover:border-slate-400"
                  }`}
                />
                <span
                  className={`transition-colors duration-200 ${
                    active === s.id
                      ? "font-semibold text-slate-900"
                      : "text-slate-500 group-hover:text-slate-700"
                  }`}
                >
                  {s.label}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Content */}
        <main className="min-w-0 flex-1">
          <Reveal className="mb-12 border-b border-slate-200 pb-12">
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
              This page covers what we collect, why we collect it, and who we
              share it with. Jump to any section using the index, or read
              straight through.
            </p>
          </Reveal>

          {SECTIONS.map((s, i) => {
            const Icon = s.icon;
            const isContact = s.id === "contact";
            const isFlag = s.flag;

            return (
              <Reveal key={s.id} className="mb-10 last:mb-0">
                <section
                  id={s.id}
                  data-id={s.id}
                  ref={(el) => (refs.current[s.id] = el)}
                  className={
                    isContact
                      ? "rounded-2xl bg-blue-500 p-8 text-white transition-transform duration-300 hover:-translate-y-0.5 sm:p-10"
                      : isFlag
                        ? "rounded-2xl border border-amber-200 bg-amber-50 p-8 transition-transform duration-300 hover:-translate-y-0.5 sm:p-10"
                        : "border-b border-slate-200 pb-12"
                  }
                >
                  {isContact ? (
                    <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                      <div>
                        <div className="mb-3 flex items-center gap-3">
                          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-indigo-200">
                            <Icon size={18} />
                          </span>
                          <h2 className="text-3xl font-semibold tracking-tight">
                            {s.label}
                          </h2>
                        </div>
                        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                          {s.body}
                        </p>
                      </div>
                      <a
                        href="mailto:info@empireonehealth.com"
                        onClick={handleEmailClick}
                        className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-white px-5 py-3 text-base font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-100"
                      >
                        {emailCopied ? "Copied!" : "Email us"}{" "}
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  ) : (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border ${
                            isFlag
                              ? "border-amber-200 bg-amber-100 text-amber-700"
                              : "border-slate-200 bg-slate-50 text-blue-600"
                          }`}
                        >
                          <Icon size={18} />
                        </span>
                        <span className="text-sm text-blue-600/80">
                          0{i + 1}
                        </span>
                        <h2
                          className={`text-2xl font-semibold tracking-tight sm:text-3xl ${
                            isFlag ? "text-amber-900" : "text-slate-900"
                          }`}
                        >
                          {s.label}
                        </h2>
                      </div>
                      <p
                        className={`max-w-3xl text-base leading-relaxed sm:text-lg ${
                          isFlag ? "text-amber-800" : "text-slate-600"
                        }`}
                      >
                        {s.body}
                      </p>
                    </>
                  )}
                </section>
              </Reveal>
            );
          })}
        </main>
      </div>
    </div>
  );
}
