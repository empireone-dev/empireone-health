import Link from "next/link";
import Image from "next/image";

export default function SubFooterSection() {
  return (
    <footer className="w-full bg-gradient-to-b from-blue-200 via-[#f0f9ff] to-[#e0f2fe] py-12 text-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-2 lg:grid-cols-6">

          {/* Brand & Badges — spans 2 cols on desktop */}
          <div className="space-y-4 lg:col-span-2">
            <Image
              src="/images/E1HLogoV1.png"
              alt="EmpireOne Health Logo"
              width={180}
              height={44}
              loading="eager"
              className="h-7 w-auto sm:h-8"
              style={{ width: "auto" }}
            />
            <p className="max-w-sm text-xs leading-relaxed text-slate-600">
              Your trusted healthcare partner for accessible, quality, and
              compassionate medical services. Caring for you and your
              family—anytime, every step of the way.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {[
                { src: "/images/hippa.webp", alt: "HIPAA Compliant" },
                { src: "/images/soc2.webp", alt: "SOC 2 Type 2" },
                { src: "/images/pci.webp", alt: "PCI DSS" },
                { src: "/images/gdpr.webp", alt: "GDPR" },
                { src: "/images/iso.webp", alt: "ISO 27001:2022" },
                { src: "/images/bbb.webp", alt: "BBB Accredited" },
              ].map((badge) => (
                <img
                  key={badge.alt}
                  src={badge.src}
                  alt={badge.alt}
                  className="h-9 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
                />
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-900">Company</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/about-us" className="transition-colors hover:text-slate-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="transition-colors hover:text-slate-900">
                  Book A Call
                </Link>
              </li>
              <li>
                <Link href="https://careers.empireonecx.com/" className="transition-colors hover:text-slate-900">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-900">Services</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/provider-services" className="transition-colors hover:text-slate-900">
                  Provider Services
                </Link>
              </li>
              <li>
                <Link href="/payer-services" className="transition-colors hover:text-slate-900">
                  Payer Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Delivery Model */}
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-900">Delivery Model</h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>Human-Led, AI-Assisted Delivery</li>
              <li>HIPAA-Conscious Workflows</li>
              <li>BAA-Ready Engagement</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-slate-900">Contact Info</h3>
            <div className="space-y-2 text-xs leading-relaxed text-slate-600">
              <p>250 Consumers Rd suite 810, Toronto, ON M2J 4V6</p>
              <p>
                <a href="tel:+18332006002" className="transition-colors hover:text-slate-900">
                  +1 (833) 200-6002
                </a>
              </p>
              <p>
                <a href="mailto:info@empireonehealth.com" className="break-words transition-colors hover:text-slate-900">
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