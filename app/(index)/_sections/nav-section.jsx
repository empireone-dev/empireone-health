"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";

export default function NavSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  return (
    <nav className="relative bg-white border-b border-gray-100">
      <div className="w-full flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-16 xl:px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <img
            src="/images/empireone-health.png"
            alt="EmpireOne Health Logo"
            className="h-8 w-auto sm:h-11"
          />
        </Link>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-12 text-[17px] font-medium text-[#1b2559]">
          <Link
            href="/"
            className="hover:text-[#0c3895] transition-colors duration-200"
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className="hover:text-[#0c3895] transition-colors duration-200"
          >
            About Us
          </Link>

          {/* Service Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#0c3895] transition-colors duration-200">
              <span>Service</span>
              <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 top-full mt-3 w-56 rounded-xl border border-gray-200 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
              <Link
                href="/provider"
                className="block px-5 py-3 text-[15px] hover:bg-blue-50 hover:text-[#0c3895] transition"
              >
                Provider
              </Link>

              <Link
                href="/payer"
                className="block px-5 py-3 text-[15px] hover:bg-blue-50 hover:text-[#0c3895] transition"
              >
                Payer
              </Link>
            </div>
          </div>

          <Link
            href="/case-study"
            className="hover:text-[#0c3895] transition-colors duration-200"
          >
            Case Study
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#0c3895] transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-[#12379D] px-5 py-2.5 text-sm text-white font-semibold hover:bg-[#0f2f87] transition-colors duration-200 sm:inline-flex lg:px-7 lg:py-3 lg:text-base"
        >
          <span>Get in touch</span>
          <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1b2559] hover:bg-blue-50 lg:hidden"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-6 pt-2 shadow-lg lg:hidden">
          <div className="flex flex-col gap-1 text-[16px] font-medium text-[#1b2559]">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 hover:bg-blue-50 hover:text-[#0c3895]"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 hover:bg-blue-50 hover:text-[#0c3895]"
            >
              About Us
            </Link>

            <button
              type="button"
              onClick={() => setIsServiceOpen((prev) => !prev)}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-left hover:bg-blue-50 hover:text-[#0c3895]"
            >
              <span>Service</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${isServiceOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isServiceOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-gray-100 pl-3">
                <Link
                  href="/provider"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] hover:bg-blue-50 hover:text-[#0c3895]"
                >
                  Provider
                </Link>
                <Link
                  href="/payer"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] hover:bg-blue-50 hover:text-[#0c3895]"
                >
                  Payer
                </Link>
              </div>
            )}

            <Link
              href="/case-study"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 hover:bg-blue-50 hover:text-[#0c3895]"
            >
              Case Study
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 hover:bg-blue-50 hover:text-[#0c3895]"
            >
              Contact
            </Link>
          </div>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#12379D] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0f2f87] transition-colors duration-200 sm:hidden"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </nav>
  );
}
