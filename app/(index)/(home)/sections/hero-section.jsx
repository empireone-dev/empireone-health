"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Activity } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  HeartPlus,
  ShieldCheck,
  UserCheck,
  Mail,
  Phone,
  HeartHandshake,
} from "lucide-react";

const badgeContainer = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};

const badgeItem = {
  hidden: { opacity: 0, y: 6, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
  },
};

const badgeDetails = [
  {
    label: "HIPAA Ready",
    img: "/images/hippa.webp",
    title: "HIPAA",
    desc: "As a HIPAA-compliant organization, we adhere to the highest federal standards for the protection of Protected Health Information (PHI). This certification signifies that we have implemented rigorous safeguards to ensure the confidentiality, integrity, and availability of sensitive healthcare data.",
  },
  {
    label: "ISO Certified",
    img: "/images/iso.webp",
    title: "ISO 27001:2022",
    desc: "The ISO 27001:2022 badge is an internationally recognized certification that confirms our organization operates a world-class Information Security Management System (ISMS). This standard proves that we don't just use security tools—we have a comprehensive, board-led culture of risk management.",
  },
  {
    label: "GDPR Compliant",
    img: "/images/gdpr.webp",
    title: "GDPR",
    desc: "The GDPR badge signifies our adherence to the most stringent data protection framework in the world. Beyond mere security, GDPR compliance demonstrates our commitment to Data Privacy as a Human Right, ensuring that every individual's personal information is handled with transparency, purpose, and absolute care.",
  },
  {
    label: "SOC 2 Type II",
    img: "/images/soc2.webp",
    title: "SOC2 TYPE2",
    desc: 'The SOC 2 Type 2 badge is the gold standard for service organizations, representing a rigorous, independent audit of our internal controls. Unlike a "snapshot" audit, the Type 2 certification proves that our security protocols have been followed consistently and effectively over an extended period.',
  },
  {
    label: "PCI DSS Certified",
    img: "/images/pci.webp",
    title: "PCI DSS",
    desc: "The PCI DSS badge signifies that our organization meets the rigorous security standards established by the world's leading financial institutions. This compliance ensures that every credit card transaction and financial record processed through our systems is handled with maximum security to prevent fraud and data theft.",
  },
  {
    label: "BBB Accredited",
    img: "/images/bbb.webp",
    title: "BBB ACCREDITED BUSINESSES",
    desc: "The BBB Accredited Business seal is more than a rating; it is a public declaration of our commitment to ethical business practices. Accreditation signifies that we have been independently vetted and have pledged to uphold the BBB Standards for Trust—a comprehensive set of best practices for how businesses should treat their clients and the public.",
  },
];

function CertificationBadges() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <motion.div
      variants={badgeContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3 justify-center lg:justify-start"
    >
      {badgeDetails.map((badge, i) => (
        <div
          key={badge.title}
          className="relative"
          onMouseEnter={() => setActiveIndex(i)}
          onMouseLeave={() => setActiveIndex(null)}
          onFocus={() => setActiveIndex(i)}
          onBlur={() => setActiveIndex(null)}
        >
          <motion.img
            variants={badgeItem}
            whileHover={{ scale: 1.06 }}
            src={badge.img}
            alt={badge.label}
            width={64}
            height={64}
            tabIndex={0}
            className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto opacity-95 cursor-pointer outline-none"
          />

          <AnimatePresence>
            {activeIndex === i && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.96 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-full left-1/2 z-50 mb-3 w-64 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-3 text-left shadow-xl sm:w-72"
              >
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-teal-600">
                  {badge.title}
                </p>
                <p className="text-[11px] leading-relaxed text-slate-600 sm:text-xs">
                  {badge.desc}
                </p>
                <div className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-slate-200 bg-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
}
export default function HeroSection() {
  return (
    <div>
      {/* Hero Main Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home-banner.jpeg"
            alt=""
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
            quality={75}
          />
        </div>

        <div className="relative mx-auto flex min-h-svh max-w-[1600px] flex-col justify-center px-4 py-8 sm:min-h-0 sm:px-10 sm:py-20 lg:px-20 lg:py-0 xl:px-28">
          <div className="grid min-h-0 grid-cols-1 items-center gap-6 sm:gap-10 lg:min-h-[calc(100vh-124px)] lg:grid-cols-2 lg:gap-16">
            <div className="order-1 text-center lg:order-1 lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 px-4 py-2 shadow-sm backdrop-blur-md sm:rounded-none sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:backdrop-blur-none"
              >
                <Activity className="h-4 w-4 text-blue-600 sm:h-6 sm:w-6 text-bold" />
                <span className="text-sm font-semibold tracking-wide text-slate-600 sm:text-xl">
                  EmpireOne Health
                </span>
              </motion.div>

              <motion.h1
                initial={{ y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ fontFamily: "Arial, sans-serif" }}
                className="max-w-3xl text-3xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.05] lg:text-6xl lg:leading-18 lg:tracking-[-0.04em]"
              >
                Better Patient Experiences.{" "}
                <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  Smarter
                </span>{" "}
                Healthcare Operations.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-900 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl lg:mx-0"
              >
                We deliver human-led, AI-assisted support to streamline patient
                access, optimize revenue workflows, and align payers and
                providers for better healthcare outcomes.
              </motion.p>

              <CertificationBadges />
            </div>

            {/* Right Column Media Content - Aligned to bottom */}
            <div className="order-2 flex justify-center lg:order-2 lg:justify-end lg:self-end">
              <div className="relative">
                <div className="absolute inset-x-6 inset-y-2 -z-10 rounded-full bg-gradient-to-br from-teal-200/50 to-cyan-200/40 blur-2xl sm:inset-x-8 sm:inset-y-auto sm:bottom-4 sm:top-16 sm:bg-teal-200/40 sm:blur-3xl" />
                <motion.div
                  initial={{   y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative mx-auto aspect-square w-full max-w-[300px] overflow-hidden rounded-full ring-4 ring-white/80 shadow-2xl xs:max-w-[320px] sm:mx-0 sm:aspect-auto sm:max-w-md sm:overflow-visible sm:rounded-none sm:ring-0 sm:shadow-none md:max-w-lg lg:max-w-xl xl:max-w-2xl"
                >
                  <Image
                    src="/images/doctor-image.webp"
                    alt="Doctor reviewing patient information"
                    width={600}
                    height={720}
                    priority
                    className="h-full w-full object-cover sm:h-auto block"
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 500px, 600px"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}