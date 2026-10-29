"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import GetInTouchModal from "../_components/get-in-touch-modal";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
];

const serviceLinks = [
  { label: "Provider", href: "/provider-services" },
  { label: "Payer", href: "/payer-services" },
];

const secondaryLinks = [
  { label: "Case Study", href: "/case-study" },
  { label: "Contact", href: "/contact" },
];

const desktopLinkClass =
  "relative transition-colors duration-200 hover:text-[#0c3895] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#0c3895] after:transition-all after:duration-300 hover:after:w-full";

const mobileLinkClass =
  "group flex items-center justify-between rounded-xl px-3 py-4 transition-colors duration-150 hover:bg-[#0c3895]/10 hover:text-[#0c3895] active:bg-[#0c3895]/15";

export default function NavSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Full-width glass bar: edge to edge, square corners */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-out ${
          scrolled
            ? "border-white/60 bg-white/65 shadow-[0_8px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl backdrop-saturate-150"
            : "border-gray-100 bg-white"
        }`}
      >
        <nav className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-6 sm:h-[72px] lg:h-20 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
            <Image
              src="/images/E1HLogoV1.png"
              alt="EmpireOne Health Logo"
              width={180}
              height={44}
              priority
              className="h-7 w-auto sm:h-8"
              style={{ width: "auto" }}
            />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-8 text-[16px] font-medium text-[#1b2559] lg:flex xl:gap-12 xl:text-[17px]">
            {primaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className={desktopLinkClass}>
                {link.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div className="group relative">
              <button
                type="button"
                aria-haspopup="menu"
                className="flex items-center gap-1 transition-colors duration-200 hover:text-[#0c3895] group-focus-within:text-[#0c3895]"
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-300 ease-out group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>

              <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 -translate-y-1 scale-95 pt-4 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-1.5 shadow-[0_20px_50px_rgba(15,23,42,0.15)] backdrop-blur-xl backdrop-saturate-150">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-xl px-4 py-2.5 text-[15px] transition-colors duration-150 hover:bg-[#0c3895]/10 hover:text-[#0c3895]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {secondaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className={desktopLinkClass}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <GetInTouchModal />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl text-[#1b2559] transition-colors duration-200 hover:bg-white/50 active:bg-white/70 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] bg-white/75 backdrop-blur-2xl backdrop-saturate-150 transition-opacity duration-300 ease-in-out lg:hidden ${
          isOpen ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-6 sm:h-[72px]">
            <Link href="/" className="flex shrink-0 items-center" onClick={closeMenu}>
              <Image
                src="/images/E1HLogoV1.png"
                alt="EmpireOne Health Logo"
                width={180}
                height={44}
                loading="eager"
                className="h-7 w-auto"
                style={{ width: "auto" }}
              />
            </Link>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl text-[#1b2559] transition-colors duration-200 hover:bg-white/60 active:bg-white/80"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="h-px w-full bg-[#1b2559]/10" />

          <div className="flex flex-1 flex-col overflow-y-auto">
            <div
              className={`flex flex-1 flex-col justify-between px-6 py-6 transition-all duration-300 ease-out ${
                isOpen ? "translate-y-0 opacity-100 delay-100" : "translate-y-4 opacity-0"
              }`}
            >
              <div className="flex flex-col text-[19px] font-medium text-[#1b2559] sm:text-[21px]">
                {primaryLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={closeMenu} className={mobileLinkClass}>
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 -translate-x-1 text-gray-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:text-[#0c3895] group-hover:opacity-100" />
                  </Link>
                ))}

                <button
                  type="button"
                  onClick={() => setIsServiceOpen((prev) => !prev)}
                  aria-expanded={isServiceOpen}
                  className="flex items-center justify-between rounded-xl px-3 py-4 text-left transition-colors duration-150 hover:bg-[#0c3895]/10 hover:text-[#0c3895] active:bg-[#0c3895]/15"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ease-out ${
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
                    <div className="ml-6 flex flex-col gap-1 border-l border-[#1b2559]/10 py-1 pl-4 text-[16px] font-normal text-blue-950 sm:text-[17px]">
                      {serviceLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeMenu}
                          className="rounded-xl px-3 py-2.5 transition-colors duration-150 hover:bg-[#0c3895]/10 hover:text-[#0c3895] active:bg-[#0c3895]/15"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {secondaryLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={closeMenu} className={mobileLinkClass}>
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-4 w-4 -translate-x-1 text-gray-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:text-[#0c3895] group-hover:opacity-100" />
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <div className="mb-6 h-px w-full bg-[#1b2559]/10" />
                <GetInTouchModal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}