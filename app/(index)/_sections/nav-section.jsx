"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import GetInTouchModal from "../_components/get-in-touch-modal";
// import { GetInTouchModal } from "../_components/get-in-touch-modal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
];

export default function NavSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);` `
  const [isGetInTouchOpen, setIsGetInTouchOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="relative bg-white border-b border-gray-100">
      <div className="w-full flex h-16 items-center justify-between px-4 sm:h-18 sm:px-6 md:px-8 lg:h-20 lg:px-16 xl:px-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center shrink-0"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/images/empireone-health.webp"
            alt="EmpireOne Health Logo"
            width={180}
            height={44}
            priority
            className="h-7 w-auto transition-all duration-300 sm:h-9 lg:h-11"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-[16px] xl:text-[17px] font-medium text-[#1b2559]">
          <Link
            href="/home"
            className="relative transition-colors duration-200 hover:text-[#0c3895] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#0c3895] after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="relative transition-colors duration-200 hover:text-[#0c3895] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#0c3895] after:transition-all after:duration-300 hover:after:w-full"
          >
            About Us
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-1 transition-colors duration-200 hover:text-[#0c3895]">
              <span>Services</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-300 ease-out group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full mt-3 w-56 origin-top scale-95 rounded-xl border border-gray-200 bg-white shadow-xl opacity-0 invisible -translate-y-1 transition-all duration-200 ease-out group-hover:scale-100 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50 overflow-hidden">
              <Link
                href="/provider-services"
                className="block px-5 py-3 text-[15px] transition-colors duration-150 hover:bg-blue-600 hover:text-white"
              >
                Provider
              </Link>
              <Link
                href="/payer-services"
                className="block px-5 py-3 text-[15px] transition-colors duration-150 hover:bg-blue-600 hover:text-white"
              >
                Payer
              </Link>
            </div>
          </div>

          <Link
            href="/case-study"
            className="relative transition-colors duration-200 hover:text-[#0c3895] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#0c3895] after:transition-all after:duration-300 hover:after:w-full"
          >
            Case Study
          </Link>
          <Link
            href="/contact"
            className="relative transition-colors duration-200 hover:text-[#0c3895] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#0c3895] after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </div>

        <GetInTouchModal />

        {/* Mobile menu toggle (header bar version) */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className={`relative z-[60] flex h-11 w-11 items-center justify-center rounded-lg transition-colors duration-200 lg:hidden ${
            isOpen
              ? "text-[#1b2559]"
              : "text-[#1b2559] hover:bg-blue-50 active:bg-blue-100"
          }`}
        >
          <Menu
            className={`absolute h-6 w-6 transition-all duration-300 ease-out ${
              isOpen
                ? "opacity-0 rotate-90 scale-75"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-white transition-opacity duration-300 ease-in-out lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between px-4 sm:h-18 sm:px-6">
            <Link
              href="/"
              className="flex items-center shrink-0"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/images/empireone-health.webp"
                alt="EmpireOne Health Logo"
                width={180}
                height={44}
                priority
                className="h-7 w-auto transition-all duration-300 sm:h-9 lg:h-11"
              />
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
              className="flex h-11 w-11 items-center justify-center rounded-lg text-[#1b2559] transition-colors duration-200 hover:bg-blue-50 active:bg-blue-100"
            >
              <X
                className={`h-6 w-6 transition-all duration-300 ease-out ${
                  isOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-75"
                }`}
              />
            </button>
          </div>

          <div className="h-px w-full bg-gray-100" />

          {/* Scrollable content */}
          <div className="flex flex-1 flex-col overflow-y-auto">
            <div
              className={`flex flex-1 flex-col justify-between px-6 py-6 transition-all duration-300 ease-out ${
                isOpen
                  ? "translate-y-0 opacity-100 delay-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              {/* Links */}
              <div className="flex flex-col text-[19px] font-medium text-[#1b2559] sm:text-[21px]">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between rounded-lg px-3 py-4 transition-colors duration-150 hover:bg-blue-50 hover:text-[#0c3895] active:bg-blue-100"
                  >
                    <span className="flex items-center gap-3">
                      {link.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-gray-300 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#0c3895]" />
                  </Link>
                ))}

                <button
                  type="button"
                  onClick={() => setIsServiceOpen((prev) => !prev)}
                  aria-expanded={isServiceOpen}
                  className="flex items-center justify-between rounded-lg px-3 py-4 text-left transition-colors duration-150 hover:bg-blue-50 hover:text-[#0c3895] active:bg-blue-100"
                >
                  <span className="flex items-center gap-3">Service</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ease-out ${
                      isServiceOpen ? "rotate-180 text-[#0c3895]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                    isServiceOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="ml-12 flex flex-col gap-1 border-l border-gray-100 pl-4 py-1 text-[16px] font-normal text-blue-950 sm:text-[17px]">
                      <Link
                        href="/provider-services"
                        onClick={() => setIsOpen(false)}
                        className="rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-blue-50 hover:text-[#0c3895] active:bg-blue-100"
                      >
                        Provider
                      </Link>
                      <Link
                        href="/payer-services"
                        onClick={() => setIsOpen(false)}
                        className="rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-blue-50 hover:text-[#0c3895] active:bg-blue-100"
                      >
                        Payer
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/case-study"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between rounded-lg px-3 py-4 transition-colors duration-150 hover:bg-blue-50 hover:text-[#0c3895] active:bg-blue-100"
                >
                  <span className="flex items-center gap-3">Case Study</span>
                  <ArrowUpRight className="h-4 w-4 text-gray-300 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#0c3895]" />
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between rounded-lg px-3 py-4 transition-colors duration-150 hover:bg-blue-50 hover:text-[#0c3895] active:bg-blue-100"
                >
                  <span className="flex items-center gap-3">Contact</span>
                  <ArrowUpRight className="h-4 w-4 text-gray-300 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#0c3895]" />
                </Link>
              </div>

              <div className="mt-8">
                <div className="mb-6 h-px w-full bg-gray-100" />
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsGetInTouchOpen(true);
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#12379D] px-6 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[#0f2f87] active:scale-[0.98]"
                >
                  <span>Get in touch</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <GetInTouchModal isOpen={isGetInTouchOpen} onClose={() => setIsGetInTouchOpen(false)} /> */}
    </nav>
  );
}
