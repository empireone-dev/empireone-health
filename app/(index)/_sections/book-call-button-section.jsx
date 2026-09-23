import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BookCallButtonSection() {
  return (
    <div>
      <Link
        href="/appointment"
         className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0f2d9e] px-7 py-3.5 text-sm font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#0b2278] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#0f2d9e] focus:ring-offset-2 focus:ring-offset-white"
      >
        <span>Book a 30 Minute Call</span>
        <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
      </Link>
    </div>
  );
}