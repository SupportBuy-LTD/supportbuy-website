"use client";

import {
  useEffect,
  useState,
} from "react";
import MobileFooter from "@/components/shared/MobileFooter";
import DeskTopFooter from "@/components/shared/DeskTopFooter";

export const FooterSwitch = () => {
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
    <MobileFooter />
  ) : (
    <DeskTopFooter />
  );
};
