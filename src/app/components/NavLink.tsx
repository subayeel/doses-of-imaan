"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function NavLink() {
  const pathname = usePathname();
  return (
    <>
      <Link
        style={pathname === "/daily-dose/" ? { fontWeight: "900" } : {}}
        className="sideLink"
        href="/daily-dose"
        aria-label="Providers Page"
      >
        Daily Dose
      </Link>
      <Link
        style={pathname === "/primary-dose/" ? { fontWeight: "900" } : {}}
        className="sideLink"
        href="/primary-dose"
        aria-label="Patients Page"
      >
        Primary Dose
      </Link>
      <Link
        style={pathname === "/religious-dose/" ? { fontWeight: "900" } : {}}
        className="sideLink"
        href="/religious-dose"
        aria-label="Patients Page"
      >
        Primary Dose
      </Link>
      <a href="https://app.curus.co.in">Enroll</a>
    </>
  );
}

export default NavLink;
