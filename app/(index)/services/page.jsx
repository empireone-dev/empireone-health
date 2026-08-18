import React from "react";
import Payer from "./payer";
import Provider from "./provider";

export const metadata = {
  title: "Our Services | EmpireOne Health | Healthcare BPO & RCM Services",
  description:
    "Explore EmpireOneHealth's payer and provider operations support, from member services to authorization, scheduling, and collections.",
};

export default function Page() {
  return (
    <div>
      <Payer />
      <Provider />
    </div>
  );
}
