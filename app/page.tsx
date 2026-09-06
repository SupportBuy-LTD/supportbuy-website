"use client";

import AskConfidently from "@/components/AskConfidently";
import PersonalHeader from "@/components/PersonalHeader";
import DesktopNavBar from "@/components/shared/DesktopNavBar";
import MobileNavBar from "@/components/shared/MobileNavBar";
import SupportBuyEmpowers from "@/components/SupportBuyEmpowers";
import FooterCTA from "@/components/FooterCTA";
import GetSuppportSteps from "@/components/GetSuppportSteps/GetSuppportSteps";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { FooterSwitch } from "@/components/FooterSwitch";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { usePathname } from "next/navigation";
import PersonalUserFaq from "@/components/PersonalUserFaq";

export default function Home() {
  const pathname = usePathname();

  return (
    <>
      <MobileNavBar />
      <DesktopNavBar />
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
          <PersonalHeader />
          <main className="px-6 md:px-10 lg:px-20 bg-sb-white-one ">
            <ScrollReveal
              staggerChildren={0.15}
            >
              <GetSuppportSteps />
            </ScrollReveal>
            <ScrollReveal>
              <AskConfidently />
            </ScrollReveal>
            <ScrollReveal
              staggerChildren={0.15}
            >
              <SupportBuyEmpowers />
            </ScrollReveal>
            <ScrollReveal>
              <PersonalUserFaq />
            </ScrollReveal>
          </main>
        </motion.div>
      </AnimatePresence>
      <ScrollReveal>
        <FooterCTA />
      </ScrollReveal>
      <FooterSwitch />
    </>
  );
}
