"use client";

import type { ReactNode } from "react";

import DeskTopFooter from "@/components/shared/DeskTopFooter";
import DesktopNavBar from "@/components/shared/DesktopNavBar";
import MobileFooter from "@/components/shared/MobileFooter";
import MobileNavBar from "@/components/shared/MobileNavBar";
import useWindowSize from "@/hooks/useWindowSize";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export default function PageShell({
  children,
  className,
}: PageShellProps) {
  const { isMobile } = useWindowSize();

  return (
    <>
      {isMobile ? (
        <MobileNavBar />
      ) : (
        <DesktopNavBar />
      )}
      <main className={className}>
        {children}
      </main>
      {isMobile ? (
        <MobileFooter />
      ) : (
        <DeskTopFooter />
      )}
    </>
  );
}
