"use client";

import { InstallButton } from "@/components/InstallButton";
import {
  useEffect,
  useState,
} from "react";

export const InstallButtonWrapper =
  () => {
    const [mounted, setMounted] =
      useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) {
      return null;
    }

    return <InstallButton />;
  };
