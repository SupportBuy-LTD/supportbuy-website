"use client";

import type { ReactNode } from "react";
import { FooterSwitch } from "@/components/FooterSwitch";
import { NavBarSwitch } from "@/components/NavBarSwitch";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export default function PageShell({
  children,
  className,
}: PageShellProps) {
  return (
    <>
      <NavBarSwitch />
      <main className={className}>
        {children}
      </main>
      <FooterSwitch />
    </>
  );
}
