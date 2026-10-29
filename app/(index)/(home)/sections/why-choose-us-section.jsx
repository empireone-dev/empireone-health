"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { PhoneCall, ShieldCheck } from "lucide-react";
import { GetInTouchModal } from "../../_components/get-in-touch-modal";
import BookFormSection from "../../_sections/book-form-section";

const WHY_CHOOSE_ITEMS = [
  {
    img: "/images/dedicated-healthcare-teams.webp",
    title: "Dedicated Healthcare Teams",
    desc: "Our expert teams consistently deliver exceptional results you can count on.",
  },
  {
    img: "/images/hipaa-conscious-delivery.webp",
    title: "HIPAA-Conscious Delivery",
    desc: "We safeguard patient data and ensure full regulatory compliance at every step.",
  },
  {
    img: "/images/ai-assisted-workflows.webp",
    title: "AI-Assisted Workflows",
    desc: "Leveraging AI to drive faster, more accurate processes and minimize errors.",
  },
  {
    img: "/images/payer-provider-alignment.webp",
    title: "Payer-Provider Alignment",
    desc: "Bridging the gap between payers and providers to optimize revenue cycles and collaboration.",
  },
];

function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export default function WhyChooseUsSection() {
  const [isGetInTouchOpen, setIsGetInTouchOpen] = useState(false);

  return (
    <section className="pt-12 sm:pt-16">
      <div>
        <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-12">
          <div className="lg:relative lg:overflow-hidden lg:rounded-[32px] lg:bg-purple-50 lg:px-20 lg:py-16">
            <div className="relative z-10 grid items-stretch gap-10 sm:gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
              {/* Left column */}
              <div>
                <Reveal>
                  <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Why Choose Us
                  </span>
                </Reveal>

                <Reveal delay={80}>
                  <h2 className="mt-5 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    Why Healthcare Teams Choose Us
                  </h2>
                </Reveal>

                <Reveal delay={140}>
                  <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                    Our dedicated teams, HIPAA-conscious approach, advanced AI
                    workflows, and strong payer-provider alignment set us apart
                    in healthcare operations.
                  </p>
                </Reveal>

                <div className="mt-8 space-y-2 sm:mt-10">
                  {WHY_CHOOSE_ITEMS.map((item, i) => (
                    <Reveal key={item.title} delay={200 + i * 90}>
                      <div className="group flex items-start gap-4 rounded-2xl p-3 transition-all duration-300 hover:translate-x-1.5 lg:hover:bg-white/60">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                          <img
                            src={item.img}
                            alt={item.title}
                            width={44}
                            height={44}
                            loading="lazy"
                            decoding="async"
                            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base font-bold text-black sm:text-lg">
                            {item.title}
                          </h3>
                          <p className="mt-1 w-full text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Right column — image card */}
              <Reveal
                delay={120}
                className="flex justify-center lg:items-stretch lg:justify-end"
              >
                <div
                  className="relative w-full overflow-hidden rounded-[26px] sm:rounded-[30px]"
                  style={{ minHeight: "420px" }}
                >
                  <div
                    className="absolute inset-0 rounded-[26px] bg-cover bg-center sm:rounded-[30px]"
                    style={{ backgroundImage: "url('/images/logo-doc.webp')" }}
                  />

                  <div className="relative z-10 flex h-full min-h-[420px] flex-col rounded-[26px] p-7 text-white sm:p-10 sm:rounded-[30px]">
                    <h3 className="text-4xl font-bold sm:text-5xl">Ready?</h3>

                    <div className="mt-5 flex items-center gap-3">
                      <img
                        src="/images/hours.webp"
                        alt="24/7 Support"
                        width={48}
                        height={48}
                        loading="lazy"
                        decoding="async"
                        className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                      />
                      <span className="text-3xl font-bold sm:text-4xl">
                        24/7
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsGetInTouchOpen(true)}
                      className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-500 hover:text-white sm:mt-8"
                    >
                      <PhoneCall className="h-4 w-4" />
                      Get in Touch
                    </button>
                  </div>

                  <img
                    src="/images/doctor-1.webp"
                    alt="Doctor"
                    width={400}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="pointer-events-none absolute bottom-0 right-0 z-0 h-full w-auto max-w-[55%] select-none object-contain object-bottom"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      <BookFormSection />
      </div>
      <GetInTouchModal
        isOpen={isGetInTouchOpen}
        onClose={() => setIsGetInTouchOpen(false)}
      />
    </section>
  );
}
