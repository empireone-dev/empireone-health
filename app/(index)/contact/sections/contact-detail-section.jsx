import React from "react";
import { Building2, MapPin, Mail, Phone } from "lucide-react";

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
    <div className="flex h-full w-full flex-col rounded-2xl border border-white/70 bg-linear-to-br from-[#edf4ff] to-[#dbe9ff] p-6 text-[#171a3c] shadow-[0_8px_24px_-8px_rgba(30,41,59,0.25)] sm:p-8">
      {/* Subtitle */}
      <h2 className="text-sm font-bold uppercase tracking-wide text-[#171a3c]">
        Contact Details
      </h2>

      {/* Locations List */}
      <div className="mt-4 space-y-3">
        {locations.map((loc, idx) => (
          <div key={loc.title} className="flex items-start gap-3 border-b border-indigo-200/60 pb-3 last:border-none">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/60 text-indigo-800">
              {idx === 0 ? <Building2 aria-hidden="true" className="h-5 w-5" /> : <MapPin aria-hidden="true" className="h-5 w-5" />}
            </span>
            <div>
            <h3 className="text-base font-bold tracking-tight">{loc.title}</h3>
            <p className="mt-1 text-sm font-normal leading-relaxed text-slate-700">
              {loc.address}
            </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Info (Email & Phone) */}
      <div className="mt-3 space-y-2 pt-1">
        <div className="flex items-center gap-3">
          <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-indigo-700" />
          <a
            href="mailto:info@empireonehealth.com"
            className="break-all text-sm font-semibold text-[#171a3c] hover:underline"
          >
            info@empireonehealth.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-indigo-700" />
          <a
            href="tel:+18332006002"
            className="text-sm font-semibold text-[#171a3c] hover:underline"
          >
            +1 (833) 200-6002
          </a>
        </div>
      </div>
    </div>
  );
}
