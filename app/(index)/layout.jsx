import Link from "next/link";
import React from "react";
import SubHeaderSection from "./_sections/sub-header-section";
import NavSection from "./_sections/nav-section";
import FooterSection from "./_sections/footer-section";
import SubFooterSection from "./_sections/sub-footer-section";

export default function Layout({ children }) {
  return (
    <>
      <div className="sticky top-0 z-50">
        {/* <SubHeaderSection /> */}
        <NavSection />
      </div>
      {children}
      <SubFooterSection />
      <FooterSection />
    </>
  );
} 
