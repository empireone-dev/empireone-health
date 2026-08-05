import React from 'react';
import { motion } from 'framer-motion';
import { HeartPlus, ShieldCheck, UserCheck, Mail, Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <div>
      

      {/* Hero Main Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-500 via-white to-red-700">
        <div className="absolute inset-0">
          <img
            src="/images/home-page.jpg"
            alt=""
            className="h-full w-full object-cover opacity-[0.6] mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        <motion.div
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1E3A8A 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          animate={{ opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-24 top-10 h-48 w-48 rounded-full bg-teal-200/30 blur-3xl sm:h-72 sm:w-72"
          animate={{ x: [0, 18, 0], y: [0, -14, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl sm:h-96 sm:w-96"
          animate={{ x: [0, -18, 0], y: [0, 14, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <img
          src="/images/Caduceus .png"
          alt=""
          className="pointer-events-none absolute bottom-0 h-44 w-auto select-none opacity-[0.15] sm:h-72 sm:opacity-[0.2] 2xl:h-96"
        />

        <div className="relative mx-auto flex min-h-svh max-w-[1600px] flex-col justify-center px-4 py-8 sm:min-h-0 sm:px-10 sm:py-20 lg:px-20 lg:py-0 xl:px-28">
          <div className="grid min-h-0 grid-cols-1 items-center gap-6 sm:gap-10 lg:min-h-[calc(100vh-124px)] lg:grid-cols-2 lg:gap-16">
        
            <div className="order-1 text-center lg:order-1 lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/90 px-4 py-1.5 shadow-md backdrop-blur sm:mb-6 sm:px-5 sm:py-2"
              >
                <HeartPlus className="h-4 w-4 animate-pulse text-teal-600 sm:h-5 sm:w-5" />
                <span className="text-xs font-semibold tracking-wide text-slate-700 sm:text-base">
                  EmpireOne Health
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                style={{ fontFamily: "Arial, sans-serif" }}
                className="max-w-3xl text-3xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.05] lg:text-6xl lg:leading-18 lg:tracking-[-0.04em]"
              >
                Better Patient Experiences.{" "}
                <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
                  Smarter
                </span>{" "}
                Healthcare Operations.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-900 sm:mt-8 sm:text-lg sm:leading-8 md:text-xl lg:mx-0"
              >
                We deliver human-led, AI-assisted support to streamline patient
                access, optimize revenue workflows, and align payers and
                providers for better healthcare outcomes.
              </motion.p>
            </div>

            {/* Right Column Media Content */}
            <div className="order-2 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative">
                <div className="absolute inset-x-6 inset-y-2 -z-10 rounded-full bg-gradient-to-br from-teal-200/50 to-cyan-200/40 blur-2xl sm:inset-x-8 sm:inset-y-auto sm:bottom-4 sm:top-16 sm:bg-teal-200/40 sm:blur-3xl" />
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative mx-auto mt-8 aspect-square w-full max-w-[300px] overflow-hidden rounded-full ring-4 ring-white/80 shadow-2xl xs:max-w-[320px] sm:mx-0 sm:mt-16 sm:aspect-auto sm:max-w-md sm:overflow-visible sm:rounded-none sm:ring-0 sm:shadow-none md:max-w-lg lg:mt-30 lg:max-w-xl xl:max-w-2xl"
                >
                  <img
                    src="/images/doctor-image.webp"
                    alt="Doctor reviewing patient information"
                    className="h-full w-full object-cover sm:h-auto"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-20 bg-gradient-to-t from-white via-white/70 to-transparent sm:block sm:h-26" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -left-3 top-4 origin-top-left scale-90 sm:-left-10 sm:top-8 sm:bottom-auto sm:mt-10 sm:origin-top-left sm:scale-100 lg:-left-16"
                >
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center gap-2 rounded-2xl bg-white/90 px-3 py-2 shadow-lg ring-1 ring-black/5 backdrop-blur sm:gap-3 sm:px-4 sm:py-3"
                  >
                    <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-teal-50 sm:h-9 sm:w-9">
                      <motion.span
                        animate={{ scale: [0.7, 2.4], opacity: [0.55, 0] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
                        className="absolute h-7 w-7 rounded-full bg-teal-300/60 sm:h-9 sm:w-9"
                      />
                      <ShieldCheck className="relative h-3.5 w-3.5 text-teal-600 sm:h-5 sm:w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold text-blue-950 sm:text-sm">
                        HIPAA Compliant
                      </p>
                      <p className="text-[10px] text-gray-500 sm:text-xs">
                        Secure by design
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -right-2 bottom-4 origin-bottom-right scale-90 sm:-right-10 sm:bottom-10 sm:scale-100 lg:-right-16"
                >
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4,
                    }}
                    className="flex items-center gap-2 rounded-2xl bg-white/90 px-3 py-2 shadow-lg ring-1 ring-black/5 backdrop-blur sm:gap-3 sm:px-4 sm:py-3"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 sm:h-9 sm:w-9">
                      <UserCheck className="h-3.5 w-3.5 text-blue-600 sm:h-5 sm:w-5" />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold text-blue-950 sm:text-sm">
                        Care team of 850+
                      </p>
                      <p className="text-[10px] text-gray-500 sm:text-xs">
                        Always by your side
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}