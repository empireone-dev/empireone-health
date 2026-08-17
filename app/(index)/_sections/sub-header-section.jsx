import React from "react";
import { Mail, Phone } from "lucide-react";

export default function SubHeaderSection() {
  return (
    <div className="hidden bg-[#615EFC] text-white sm:block">
      <div className="mx-auto flex w-full flex-col items-center gap-1.5 px-4 py-2 sm:h-11 sm:flex-row sm:justify-between sm:gap-0 sm:px-6 sm:py-0 lg:px-16 xl:px-20">
        <a
          href="mailto:info@empireonehealth.com"
          className="group flex items-center gap-2 text-xs font-medium text-white/90 transition-colors duration-200 hover:text-white sm:text-sm"
        >
          <Mail className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110 sm:h-4 sm:w-4" />
          <span className="truncate font-semibold">info@empireonehealth.com</span>
        </a>

        <a
          href="tel:+18332006002"
          className="group flex items-center gap-2 text-xs font-medium text-white/90 transition-colors duration-200 hover:text-white sm:text-sm"
        >
          <Phone className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110 sm:h-4 sm:w-4" />
          <span className="font-semibold">+1 (833) 200-6002</span>
        </a>
      </div>
    </div>
  );
}