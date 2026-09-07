"use client";
import Image from "next/image";
import React, { memo } from "react";
import ReactPlayer from "react-player";
import ButtonLink from "./shared/ButtonLink";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@heroui/modal";
import { HEROVIDEO } from "@/utils/constants";

function PersonalHeader() {
  const {
    isOpen,
    onOpen,
    onOpenChange,
  } = useDisclosure();
  // pt-28 sm:pt-32 lg:pt-36 xl:pt-40
  return (
    <>
      <header className="flex flex-col sm:flex-row sm:items-start justify-between gap-8 sm:gap-6 md:gap-8 lg:gap-14 px-6 sm:px-10 md:px-14 lg:px-16 xl:px-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 lg:pb-16 bg-sb-white-one">
        <div className="w-full sm:w-[50%] lg:w-[48%] xl:w-[50%] max-w-[720px] flex-shrink-0">
          <h1 className="text-[36px] mt-10 lg:mt-20 min-[400px]:text-[42px] min-[480px]:text-[46px] sm:text-[44px] md:text-[54px] lg:text-[64px] xl:text-[76px] 2xl:text-[84px] text-sb-primary font-bold leading-[108%] tracking-[-3%]">
            Get support with
            <br /> confidence. <br />
            <span className="custom-header-light font-light">
              Give with full trust.
            </span>
          </h1>
          <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] xl:text-[21px] mt-6 text-sb-dark-one leading-[135%] max-w-[580px]">
            SupportBuy lets your community help pay your bills, fees, and needs directly — no cash handovers, and no doubts about how it was spent.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 flex-wrap w-full sm:w-fit">
            <ButtonLink
              href="https://app.supportbuy.com/signup?u=CUSTOMER&m=STANDARD"
              className="flex items-center justify-center whitespace-nowrap shrink-0 hover:bg-[#144419ee] w-full sm:w-fit px-7 rounded-[50px] bg-sb-primary text-[16px] sm:text-[17px] text-sb-secondary text-center h-[52px]"
            >
              Get Started Free
            </ButtonLink>
            <Button
              onPress={onOpen}
              className="flex items-center justify-center whitespace-nowrap shrink-0 hover:bg-[#ccf546f1] w-full sm:w-fit px-7 rounded-[50px] bg-sb-secondary cursor-pointer text-[16px] sm:text-[17px] text-sb-primary h-[52px]"
            >
              <IconPlayerPlayFilled size={18} className="shrink-0 mr-1" />{" "}
              <span className="whitespace-nowrap">
                See How It Works
              </span>
            </Button>
          </div>
        </div>
        {/* Desktop / Tablet Image Container (600px+) */}
        <div className="hidden sm:flex flex-1 relative justify-end items-start min-w-0">
          <Image
            src="/personal_hero_illustration.svg"
            width={546}
            height={788}
            alt="SupportBuy Community"
            className="w-full max-w-[480px] md:max-w-[540px] lg:max-w-[620px] xl:max-w-[700px] 2xl:max-w-[760px] h-auto object-contain object-right"
            priority
          />
        </div>
        {/* Mobile Image Container (< 600px) */}
        <div className="sm:hidden mt-8 flex justify-center w-full">
          <Image
            src="/mobile_hero_illustration.svg"
            width={400}
            height={480}
            alt="SupportBuy Community"
            className="w-full max-w-full h-auto mx-auto"
            priority
          />
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
                src={HEROVIDEO}
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

export default memo(PersonalHeader);
