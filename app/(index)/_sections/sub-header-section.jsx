import React from "react";
import { Mail, Phone } from "lucide-react";

export default function SubHeaderSection() {
  return (
    <div className="bg-blue-500 text-white min-h-11 flex items-center px-4 py-2 sm:px-6 sm:py-0 lg:px-16 xl:px-20">
      <div className="w-full flex flex-col items-center gap-1.5 sm:flex-row sm:justify-between sm:gap-0">
        <a
          href="mailto:info@empireonehealth.com"
          className="flex items-center gap-2 text-xs font-medium hover:opacity-80 transition sm:text-sm"
        >
          <Mail className="w-3.5 h-3.5 shrink-0 sm:w-4 sm:h-4" />
          <span className="font-semibold truncate">info@empireonehealth.com</span>
        </a>

        <a
          href="tel:+18332006002"
          className="flex items-center gap-2 text-xs font-medium hover:opacity-80 transition sm:text-sm"
        >
          <Phone className="w-3.5 h-3.5 shrink-0 sm:w-4 sm:h-4" />
          <span className="font-semibold">+1 (833) 200-6002</span>
        </a>
      </div>
    </div>
  );
}