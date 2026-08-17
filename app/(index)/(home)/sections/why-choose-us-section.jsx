"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { PhoneCall, ShieldCheck } from "lucide-react";
import { Space_Grotesk } from "next/font/google";
import { GetInTouchModal } from "../../_components/get-in-touch-modal";


const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

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
    <section className="flex items-center py-10 sm:py-20 lg:min-h-[calc(100vh-124px)] lg:py-0 mb-4">
      <div className="mx-auto w-full max-w-[1700px] lg:px-10">
        <div
          className="relative rounded-[28px] bg-cover bg-center bg-no-repeat px-6 py-8 overflow-hidden sm:rounded-[32px] sm:px-8 sm:py-10 lg:px-20 lg:py-16"
        
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-500/60 to-blue-500 pointer-events-none" />

          <div className="relative z-10 grid items-stretch gap-10 sm:gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div className="max-w-2xl">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700 border border-indigo-100">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Why Choose Us
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h2 className="mt-5 text-3xl font-bold leading-tight text-white lg:text-5xl">
                  Why Healthcare Teams
                  <br />
                  Choose Us
                </h2>
              </Reveal>

              <Reveal delay={140}>
                <p
                  className={`${spaceGrotesk.className} mt-5 max-w-xl text-base leading-7 text-slate-200`}
                >
                  Our dedicated teams, HIPAA-conscious approach, advanced AI
                  workflows, and strong payer-provider alignment set us apart in
                  healthcare operations.
                </p>
              </Reveal>

              <div className="mt-8 space-y-4 sm:mt-10">
                {WHY_CHOOSE_ITEMS.map((item, i) => (
                  <Reveal key={item.title} delay={200 + i * 90}>
                    <div className="group flex items-start gap-4 rounded-2xl p-2.5 transition-all duration-300 hover:translate-x-1.5 hover:bg-white/10 sm:gap-5 sm:p-3">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-md sm:h-16 sm:w-16">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white sm:text-xl">
                          {item.title}
                        </h3>
                        <p
                          className={`${spaceGrotesk.className} mt-1 text-sm leading-6 text-white sm:text-base sm:leading-7`}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal
              delay={120}
              className="relative flex justify-center lg:items-stretch lg:justify-end"
            >
              <div className="relative min-h-[440px] w-full max-w-[650px] sm:min-h-[500px] lg:h-full">
                <div
                  className="absolute inset-0 overflow-hidden rounded-[26px] bg-cover bg-center shadow-2xl backdrop-blur-md sm:rounded-[30px]"
                  style={{ backgroundImage: "url('/images/logo-doc.webp')" }}
                />
                <div className="relative z-10 flex h-full min-h-[440px] flex-col rounded-[26px] p-6 text-white sm:min-h-[500px] sm:p-10 sm:rounded-[30px]">
                  <h3 className="text-3xl font-bold sm:text-5xl">Ready?</h3>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 flex-col items-center justify-center sm:h-16 sm:w-16">
                      <img
                        src="/images/hours.webp"
                        alt="24/7 Support"
                        className="mb-6 h-10 w-10 object-contain sm:h-12 sm:w-12"
                      />
                    </div>
                    <span className="mb-7 text-3xl font-bold sm:text-4xl">
                      24/7
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsGetInTouchOpen(true)}
                    className="group relative z-10 mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-500 hover:text-white sm:mt-8"
                  >
                    <PhoneCall className="h-4 w-4" />
                    Get in Touch
                  </button>
                </div>

                <img
                  src="/images/doctor-1.webp"
                  alt="Doctor"
                  className="pointer-events-none absolute bottom-0 right-0 z-0 h-full w-auto max-w-[55%] select-none object-contain object-bottom sm:max-w-none"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <GetInTouchModal isOpen={isGetInTouchOpen} onClose={() => setIsGetInTouchOpen(false)} />
    </section>
  );
}
