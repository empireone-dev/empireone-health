import { HeartPlus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SubFooterSection() {
  return (
    <footer className="w-full bg-gradient-to-b from-blue-200 via-[#f0f9ff] to-[#e0f2fe] text-slate-800 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 text-sm">
          {/* Brand & Badges Column (Spans 2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-semibold text-xl">
              <HeartPlus className="h-6 w-6 text-red-500" />
              <span>EmpireOne Health</span>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              Your trusted healthcare partner for accessible, quality, and
              compassionate medical services. Caring for you and your
              family—anytime, every step of the way.
            </p>

            {/* Certification Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <img
<<<<<<< HEAD
=======
                src="/images/hippa.webp"
                alt="HIPAA Compliant"
                className="h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
              <img
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
                src="/images/soc2.webp"
                alt="SOC 2 Type 2"
                className="h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/pci.webp"
                alt="PCI DSS"
                className="h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
<<<<<<< HEAD
              <img
                src="/images/hippa.webp"
                alt="HIPAA Compliant"
                className="h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
=======

>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
              <img
                src="/images/gdpr.webp"
                alt="GDPR"
                className="h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/iso.webp"
                alt="ISO 27001:2022"
                className="h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/bbb.webp"
                alt="BBB Accredited"
                className="h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-slate-900">Company</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <Link
                  href="about-us"
                  className="hover:text-slate-900 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="appointment"
                  className="hover:text-slate-900 transition-colors"
                >
                  Book A Call
                </Link>
              </li>
              <li>
                <Link
                  href="https://careers.empireonecx.com/"
                  className="hover:text-slate-900 transition-colors"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-900">Services</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
<<<<<<< HEAD
                <a
=======
                <Link
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
                  href="provider"
                  className="hover:text-slate-900 transition-colors"
                >
                  Provider Services
<<<<<<< HEAD
                </a>
              </li>
              <li>
                <a
=======
                </Link>
              </li>
              <li>
                <Link
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
                  href="payer"
                  className="hover:text-slate-900 transition-colors"
                >
                  Payer Services
<<<<<<< HEAD
                </a>
=======
                </Link>
>>>>>>> 257cc616607f813026a1c2d8451e9dcaa91939d6
              </li>
            </ul>
          </div>

          {/* Column 3: Delivery Model */}
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-900">Delivery Model</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <a>Human-Led, AI-Assisted Delivery</a>
              </li>
              <li>
                <a>HIPAA-Conscious Workflows</a>
              </li>
              <li>
                <a>BAA-Ready Engagement</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-900">Contact Info</h3>
            <div className="space-y-2 text-slate-600 text-sm leading-relaxed">
              <p>250 Consumers Rd suite 810, Toronto, ON M2J 4V6</p>
              <p>
                <a
                  href="tel:+18332006002"
                  className="hover:text-slate-900 transition-colors"
                >
                  +1 (833) 200-6002
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@empireonehealth.com"
                  className="hover:text-slate-900 transition-colors break-words"
                >
                  info@empireonehealth.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
