"use client";

import {
  useEffect,
  useState,
} from "react";
import MobileNavBar from "@/components/shared/MobileNavBar";
import DesktopNavBar from "@/components/shared/DesktopNavBar";

export const NavBarSwitch = () => {
  const [isMobile, setIsMobile] =
    useState(false);
  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      setIsMobile(
        window.innerWidth < 768,
      );
    };

    handleResize();
    window.addEventListener(
      "resize",
      handleResize,
    );
    return () =>
      window.removeEventListener(
        "resize",
        handleResize,
      );
  }, []);

  if (!mounted) {
    return null;
  }

  return isMobile ? (
    <MobileNavBar />
  ) : (
    <DesktopNavBar />
  );
};
