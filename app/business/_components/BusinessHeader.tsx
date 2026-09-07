"use client";
import Image from "next/image";
import React, { memo } from "react";
import { Button } from "@heroui/button";
import ReactPlayer from "react-player";
import useWindowSize from "@/hooks/useWindowSize";
import HeroAnimation from "./HeroAnimation";
import ButtonLink from "@/components/shared/ButtonLink";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@heroui/modal";
import { HEROVIDEOBUSINESS } from "@/utils/constants";

const valPrep = [
  "Increase your reach",
  "Simplify payments",
  "Grow your business",
];
const mvalPrep = [
  "Increase your reach",
  "Grow your business",
];

function ValueList() {
  return (
    <ul className="flex  items-center text-sm gap-[10px] text-sb-tertiary lg:text-base">
      {valPrep.map((item, index) => (
        <li
          key={index}
          className="inline-flex items-center"
        >
          {index > 0 && (
            <span className="mr-2 w-2 h-2 bg-sb-secondary rounded-full inline-block"></span>
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}

function MValueList() {
  return (
    <ul className="flex  items-center text-sm gap-[10px] text-sb-tertiary lg:text-base">
      {mvalPrep.map((item, index) => (
        <li
          key={index}
          className="inline-flex items-center"
        >
          {index > 0 && (
            <span className="mr-2 w-2 h-2 bg-sb-secondary rounded-full inline-block"></span>
          )}
          {item}
        </li>
      ))}
    </ul>
  );
}

function BusinessHeader() {
  const {
    isOpen,
    onOpen,
    onOpenChange,
  } = useDisclosure();
  const { isMobile } = useWindowSize();
  return (
    <>
      <header className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 sm:gap-6 md:gap-8 lg:gap-14 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 lg:pb-16 bg-sb-primary">
        <div className="w-full sm:w-[50%] lg:w-[48%] xl:w-[50%] max-w-[720px] flex-shrink-0">
          <div className="mb-4">
            {!isMobile ? (
              <ValueList />
            ) : (
              <MValueList />
            )}
          </div>
          <h1 className="text-[36px] min-[400px]:text-[42px] min-[480px]:text-[46px] sm:text-[44px] md:text-[54px] lg:text-[64px] xl:text-[76px] 2xl:text-[84px] text-sb-white-two font-[700] leading-[108%] tracking-[-3%]">
            Unlock new
            <br /> sales channels
            <br />
            <span className="text-sb-secondary">
              effortlessly
            </span>
          </h1>
          <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[21px] mt-6 text-sb-white-two leading-[135%] max-w-[580px]">
            SupportBuy connects your products and services with customers who get community-backed funding — and you get paid directly, every time, the moment a campaign is funded.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 flex-wrap w-full sm:w-fit">
            <ButtonLink
              href="https://app.supportbuy.com/signup?u=BUSINESS&m=STANDARD"
              className="flex items-center justify-center whitespace-nowrap shrink-0 hover:bg-[#ccf546f1] w-full sm:w-fit px-7 rounded-[50px] bg-sb-secondary text-[16px] sm:text-[17px] text-sb-primary font-medium h-[52px]"
            >
              List Your Products
            </ButtonLink>
            <ButtonLink
              onClick={onOpen}
              href="#"
              className="flex items-center justify-center whitespace-nowrap shrink-0 hover:bg-[#144419ee] w-full sm:w-fit px-7 rounded-[50px] bg-sb-primary text-[16px] sm:text-[17px] text-sb-secondary text-center h-[52px] border border-sb-secondary"
            >
              See How It Works
            </ButtonLink>
          </div>
        </div>
        {/* Desktop / Tablet Image & Animations (600px+) */}
        <div className="hidden sm:flex flex-1 relative justify-end min-w-0 pt-2 sm:pt-4">
          <div className="relative w-full max-w-[440px] md:max-w-[500px] lg:max-w-[560px] xl:max-w-[620px]">
            <Image
              src="/peopleBuying-heroImage.png"
              width={526}
              height={359}
              alt="Unlock new sales channels effortlessly"
              className="w-full h-auto rounded-[16px]"
              priority
            />
            <HeroAnimation />
          </div>
        </div>

        {/* Mobile Image & Animations (< 600px) */}
        <div className="sm:hidden mt-8 mb-20 relative w-full max-w-full mx-auto">
          <Image
            src="/peopleBuying-image-mobile.png"
            width={480}
            height={340}
            alt="Unlock new sales channels effortlessly"
            className="w-full max-w-full h-auto rounded-[12px]"
            priority
          />
          <HeroAnimation />
        </div>
      </header>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop:
            "bg-sb-primary/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-sb-primary dark:bg-[#19172c] text-[#a8b0d3]",
        }}
        radius="lg"
      >
        <ModalContent>
          <>
            <ModalBody>
              <ReactPlayer
                src={HEROVIDEOBUSINESS}
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "16/9",
                  borderRadius: "24px",
                  marginTop: "24px",
                }}
              />
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}

export default memo(BusinessHeader);
