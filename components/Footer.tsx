import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="mt-[150px] flex justify-center items-center flex-col text-[32px] md:text-[48px] font-bold">
        <div className="text-center">Ready to start a project?</div>
        <div className="underline mt-[20px] hover:text-blue-800">
          <Link href="/contact">
            Get in touch
          </Link>
        </div>
      </div>
      <div className="flex justify-between mb-[18px] gap-y-2 items-center mt-[200px] flex-wrap-reverse ">
        <div className="mb-2 md:mb-0 hidden md:block">
          <Image
            src="/logo.svg"
            alt="The Perk Studio"
            width={128}
            height={13}
          />
        </div>
        <div className="text-[14px] md:text-[16px]">
          © Copyright 2024 | All Rights Reserved
        </div>
        <Link
          href="/"
          className="text-[14px] md:text-[16px] hover:text-blue-800 hover:underline"
        >
          Privacy Policy
        </Link>
      </div>
      <Link
        href="https://calendly.com/theperkstudio/introduction-call"
        target="_blank"
        className="fixed bottom-20 right-0 mt-[40px] bg-[#E67E22] text-white p-2 w-[60px] md:w-[180px] hover:scale-105 transition-all"
      >
        <div className="flex gap-[10px] justify-center items-center">
          <Phone />
          <div className="hidden md:block">Book a Call Now</div>
        </div>
      </Link>
    </div>
  );
};

export default Footer;
