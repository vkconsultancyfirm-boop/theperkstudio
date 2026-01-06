import { ArrowRightIcon, MailCheckIcon, Phone, PhoneIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <div className="mt-[100px] text-[32px] md:text-[48px] font-bold">
        Elevating Brands with our <br className="hidden lg:block" />
        <span className="inline-flex flex-col overflow-hidden h-[45px] md:h-[60px] mr-3">
          <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
            <li className="text-[#F1C40F]">Perk-fect</li>
            <li className="text-[#1ABC9C]">Perk-sonal</li>
            <li className="text-[#3498DB]">Perk-tastic</li>
            <li aria-hidden="true" className="text-[#F1C40F]">
              Perk-fect
            </li>
          </ul>
        </span>
        Touch
      </div>
      <div className="mt-[60px] text-[20px] md:text-[24px] font-bold">
        <div className="flex gap-[10px] items-center hover:text-blue-800">
          <MailCheckIcon />
          <div className="underline">
            <Link href="mailto:theperkstudio@gmail.com">theperkstudio@gmail.com</Link>
          </div>
        </div>
        <div className="flex mt-[20px] gap-[10px] items-center hover:text-blue-800">
          <PhoneIcon />
          <div className="underline">
            <Link href="https://calendly.com/theperkstudio/introduction-call" target="_blank">Schedule a Call Now</Link>
          </div>
        </div>
      </div>
      <div className="w-full flex mt-[100px] justify-center lg:justify-between flex-wrap gap-y-24">
        <Link
          href="https://www.instagram.com/the_perkstudio/"
          className="hover:scale-105 transition-all"
        >
          <Image
            src="/instagram.gif"
            alt="placeholder image for a project tile"
            width={522}
            height={522}
          />
        </Link>
        <div>
          <Image
            src="/services.png"
            alt="placeholder image for a project tile"
            width={522}
            height={522}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
