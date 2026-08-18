import React from 'react'
import Provider from '../services/provider'

export const metadata = {
  title: "Provider Services | EmpireOneHealth",
  description:
    "Provider operations support for access, authorization, scheduling, referrals, denial recovery, underpayments, and patient collections.",
};

export default function Page() {
  return <Provider />
}
