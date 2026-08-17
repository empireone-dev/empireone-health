import React from "react";

const CARD_DATA = [
  {
    title: "Denial Management",
    description:
      "Review denied claims, denial codes, payer remarks, claim history, documentation gaps, and next-action requirements.",
  },
  {
    title: "Appeal Preparation",
    description:
      "Support appeal packet assembly, corrected claim routing, payer-specific rework, and medical necessity documentation follow-up.",
  },
  {
    title: "Prevention Visibility",
    description:
      "Track denial reasons, recurring patterns, timely filing risk, payer trends, and reporting needed to reduce repeat denials.",
  },
];

export default function BodySection() {
  return (
    <section className="w-full bg-[#f8fafc] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px] ">
        <div className="rounded-2xl border border-slate-200 bg-white p-10 lg:p-14 shadow-xl shadow-slate-200/30">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {CARD_DATA.map((item, index) => (
              <div
                key={item.title}
                className={`flex min-h-[160px] flex-col justify-center ${
                  index === 0
                    ? "pb-8 md:pb-0 md:pr-10"
                    : index === 1
                    ? "py-8 md:py-0 md:px-10"
                    : "pt-8 md:pt-0 md:pl-10"
                }`}
              >
                <h3 className="text-2xl font-bold text-[#0b132b]">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-600">
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