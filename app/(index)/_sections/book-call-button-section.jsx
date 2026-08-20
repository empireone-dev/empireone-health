import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BookCallButtonSection() {
  return (
    <div>
      <Link
        href="/appointment"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b1b68] px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#071142] focus:outline-none focus:ring-2 focus:ring-[#0b1b68] focus:ring-offset-2"
      >
        <span>Book a 30 Minute Call</span>
        <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
      </Link>
    </div>
  );
}