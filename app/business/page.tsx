"use client";
import React from "react";
import MobileNavBar from "@/components/shared/MobileNavBar";
import FooterCTA from "./_components/FooterCTA";
import Faq from "./_components/Faq";
import GetSuppportSteps from "./_components/GetSuppportSteps/GetSuppportSteps";
import BusinessHeader from "./_components/BusinessHeader";
import TurnICantAffortItIntoSales from "./_components/TurnICantAffortItIntoSales";
import BusinessTopNavBar from "./_components/BusinessTopNavBar";
import ScrollReveal from "@/components/shared/ScrollReveal";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { FooterSwitch } from "@/components/FooterSwitch";

function Page() {
  const pathname = usePathname();
  return (
    <div className="bg-sb-primary">
      <BusinessTopNavBar />{" "}
      <MobileNavBar />
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname} // this triggers animation when route changes
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          <BusinessHeader />
          <main className="px-4 md:px-10 lg:px-20 ">
            <ScrollReveal
              staggerChildren={0.15}
            >
              <TurnICantAffortItIntoSales />
            </ScrollReveal>
            <ScrollReveal
              staggerChildren={0.15}
            >
              <GetSuppportSteps />
            </ScrollReveal>
            <ScrollReveal>
              <Faq />
            </ScrollReveal>
          </main>
        </motion.div>
      </AnimatePresence>
      <ScrollReveal>
        <FooterCTA />
      </ScrollReveal>
      <FooterSwitch />
    </div>
  );
}

export default Page;
