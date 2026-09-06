import { getYear } from "@/utils/getYear";
import React from "react";
import BrandIconFooter from "./BrandIconFooter";
import { BRANDNAME } from "@/utils/constants";
import Link from "next/link";
import { InstallButtonWrapper } from "@/components/InstallButtonWrapper";

function MobileFooter() {
  return (
    <footer className="px-6 py-4 bg-sb-primary text-sb-white-one text-sm md:text-base flex space-y-3 flex-col items-center ">
      <div className="flex items-center space-x-2 ">
        <BrandIconFooter />
        <p>
          &copy; {getYear} {BRANDNAME}.
          All rights reserved.
        </p>
      </div>
      <div className="flex gap-[20px] text-xs flex-wrap justify-center">
        <Link
          href="/privacy-policy"
          className="hover:text-sb-secondary"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-of-use"
          className="hover:text-sb-secondary"
        >
          Terms of Use
        </Link>
        <Link
          href="mailto:contact@supportbuy.com"
          className="hover:text-sb-secondary"
        >
          Contact us
        </Link>
      </div>
      <InstallButtonWrapper />
    </footer>
  );
}

export default MobileFooter;
