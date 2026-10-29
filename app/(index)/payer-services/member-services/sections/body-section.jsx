import React from "react";

const CARD_DATA = [
  {
    title: "Benefit Navigation",
    description:
      "Help members understand coverage, plan benefits, cost-share basics, eligibility status, and next steps.",
  },
  {
    title: "Claims & EOB Support",
    description:
      "Route questions about claim status, explanation of benefits, patient responsibility, and payer communication needs.",
  },
  {
    title: "Service Request Routing",
    description:
      "Document member needs, route service requests, escalate exceptions, and maintain status visibility across queues.",
  },
];

export default function BodySection() {
  return (
    <section className="w-full bg-[#f8fafc] py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/30 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 divide-y divide-slate-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {CARD_DATA.map((item, index) => (
              <div
                key={item.title}
                className={`flex min-h-[140px] flex-col justify-center ${
                  index === 0
                    ? "pb-6 lg:pb-0 lg:pr-8"
                    : index === 1
                    ? "py-6 lg:py-0 lg:px-8"
                    : "pt-6 lg:pt-0 lg:pl-8"
                }`}
              >
                <h3 className="text-xl font-bold text-[#0b132b] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}