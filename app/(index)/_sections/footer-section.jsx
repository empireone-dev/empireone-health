import React from "react";

export default function FooterSection() {
  return (
    <footer className="flex w-full justify-center gap-14 bg-blue-700 text-white py-4 px-4 text-center font-medium text-xs sm:text-sm">
      <p>© 2026 EmpireOne Health. All Rights Reserved.</p>
      <div className="flex gap-2 items-center">
        <a href="/privacy-policy" className="text-white hover:underline">
          Privacy Policy
        </a>
        {/* <p>|</p>
        <a href="/terms-of-use" className="text-white hover:underline">
          Terms of Use
        </a> */}
      </div>
    </footer>
  );
}
