import React from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactDetailSection() {
  const locations = [
    {
      title: "Corporate Head Office",
      address: "250 Consumers Rd suite 810, Toronto, ON M2J 4V6",
    },
    {
      title: "Philippines Site 1",
      address: "EmpireOne Bldg Gen. Luna St Poblacion II Carcar City, Cebu 6014",
    },
    {
      title: "Philippines Site 2",
      address:
        "EmpireOne Bldg., S. Carmona St., Barangay 6, SanCarlos City, Negros Occidental, 6127",
    },
    {
      title: "Philippines Site 3",
      address:
        "Unit 806 FLB Corporate Center Bohol Avenue Cebu Business Park, Cebu City, Cebu 6000",
    },
    {
      title: "Colombia",
      address:
        "Calle 15 No. 4 - 81 Piso 10, Edificio del Cafe, Santa Marta, Magdalena.",
    },
  ];

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-[#615eff] p-6 text-white shadow-lg sm:p-8">
      {/* Subtitle */}
      <span className="text-xs font-bold uppercase tracking-wider text-indigo-200">
        Contact Details
      </span>

      {/* Locations List */}
      <div className="mt-4 space-y-3">
        {locations.map((loc, idx) => (
          <div key={idx} className="border-b border-indigo-400/40 pb-3 last:border-none">
            <h3 className="text-base font-bold tracking-tight">{loc.title}</h3>
            <p className="mt-0.5 text-sm font-normal text-indigo-100/90 leading-snug">
              {loc.address}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Info (Email & Phone) */}
      <div className="mt-3 space-y-2 pt-1">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 shrink-0 text-white" />
          <a
            href="mailto:info@empireonehealth.com"
            className="text-sm font-bold text-white hover:underline"
          >
            info@empireonehealth.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 shrink-0 text-white" />
          <a
            href="tel:+18332006002"
            className="text-sm font-bold text-white hover:underline"
          >
            +1 (833) 200-6002
          </a>
        </div>
      </div>
    </div>
  );
}