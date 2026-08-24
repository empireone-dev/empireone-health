"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

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

export default function CertificationBadges() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:justify-start">
      {badgeDetails.map((badge, index) => (
        <div
          key={badge.title}
          className="relative"
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() =>
              setActiveIndex(
                activeIndex === index ? null : index
              )
            }
            className="cursor-pointer"
            aria-label={badge.title}
          >
            <Image
              src={badge.img}
              alt={badge.label}
              width={64}
              height={64}
              loading="lazy"
              quality={70}
              className="h-8 w-auto opacity-95 sm:h-10 md:h-12 lg:h-16"
            />
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.15 }}
                className="
                  absolute
                  bottom-full
                  left-1/2
                  z-50
                  mb-3
                  w-64
                  -translate-x-1/2
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  p-3
                  text-left
                  shadow-xl
                  sm:w-72
                "
              >
                <p className="mb-1 text-xs font-bold uppercase tracking-wide text-teal-600">
                  {badge.title}
                </p>

                <p className="text-[11px] leading-relaxed text-slate-600 sm:text-xs">
                  {badge.desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}