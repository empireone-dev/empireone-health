"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./button";
import { FaXmark } from "react-icons/fa6";

const CONSENT_KEY = "cookie-consent";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function handleChoice(value) {
    window.localStorage.setItem(CONSENT_KEY, value);
    window.dispatchEvent(
      new CustomEvent("cookie-consent-change", { detail: value }),
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-xl border border-gray-200 bg-white p-5 shadow-xl sm:flex-row sm:items-center sm:justify-between">
        <p className="text-md text-gray-600">
          We use cookies to improve your experience and analyze site traffic. By
          clicking &quot;Accept&quot;, you agree to our use of cookies. See our{" "}
          <Link
            href="/privacy-policy"
            className="font-medium text-blue-600 underline hover:text-blue-700"
          >
            Privacy Policy
          </Link>{" "}
          for details.
        </p>
        <div className="flex shrink-0 gap-9 self-end sm:self-auto">
          <Button
            variant="primary"
            size="md"
            onClick={() => handleChoice("accepted")}
          >
            Accept
          </Button>
          <button className="hover:text-gray-500 text-gray-600 text-lg" onClick={() => handleChoice("declined")} type="button">
            <FaXmark />
          </button>
        </div>
      </div>
    </div>
  );
}
