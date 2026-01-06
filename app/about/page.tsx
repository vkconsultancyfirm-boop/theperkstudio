import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, BadgeCheckIcon, CupSoda } from "lucide-react";
import Testimonials from "@/components/Testimonials";

const About = () => {
  return (
    <div>
      <div className="mt-[100px] text-[32px] md:text-[48px] font-bold">
        Every
        <span className="inline-flex flex-col overflow-hidden h-[45px] md:h-[60px] mx-3">
          <ul className="block animate-text-slide text-center leading-tight [&_li]:block">
            <li className="text-[#F1C40F]">line</li>
            <li className="text-[#1ABC9C]">pixel</li>
            <li className="text-[#3498DB]">idea</li>
            <li aria-hidden="true" className="text-[#F1C40F]">
              line
            </li>
          </ul>
        </span>
        is infused with a passion for perfection and a commitment to excellence
      </div>
      <div className="hidden md:flex w-full flex-col animate-bounce mt-[200px] justify-center items-center">
        <ArrowDown />
        <div>Scroll down</div>
      </div>
      <div className="mt-[100px]">
        <Image
          src="/client_logo_intros.gif"
          className="mx-auto"
          alt="Our Clients"
          width={1000}
          height={599}
        />
      </div>
      <div className="text-[20px] md:text-[24px] md:text-center mt-[100px] md:leading-10">
        "Welcome to <strong>ThePerkStudio</strong>, where your brand's full
        potential awaits discovery. In the fast-paced world of branding, it's
        easy for essential elements to slip through the cracks, leaving your
        brand feeling incomplete or lacking that certain je ne sais quoi (I
        don’t know what). But fear not, because at ThePerkStudio, we specialise
        in uncovering those hidden gems and adding that extra 'perk' that
        transforms good brands into unforgettable ones. Let us help you unlock
        the true essence of your brand and elevate it to new heights of
        success."
      </div>

      <div className="flex mt-[200px] items-center gap-10 flex-wrap-reverse md:flex-nowrap">
        <div>
          <div className="text-[24px] md:text-[36px] font-bold">
            Power of Perks
          </div>
          <div className="text-[20px] md:text-[24px] md:leading-10 mt-[20px]">
            We believe in the power of perks - those extra touches, unexpected
            delights, and moments of brilliance that set us apart from the rest.
            From the sleek elegance of a user interface to the seamless
            functionality of a website, we infused every project with the
            essence of "perk" - that special something that makes all the
            difference.
          </div>
        </div>
        <div className="relative w-full h-[350px] -z-10">
          <Image
            src="/about/power.png"
            alt="Power of Perks"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-10 mt-[200px] flex-wrap md:flex-nowrap">
        <div className="relative w-full h-[350px] -z-10">
          <Image
            src="/about/collab.png"
            alt="Power of Perks"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div>
          <div className="text-[24px] md:text-[36px] font-bold">
            It's not just the Design
          </div>
          <div className="text-[20px] md:text-[24px] md:leading-10 mt-[20px]">
            Our journey isn't just about creating beautiful designs. It is about
            forging meaningful connections. We listen, we collaborate, and we
            understand our clients' dreams and aspirations. And together, we
            transform visions into realities, ideas into experiences, and brands
            into legacies.
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-[200px] items-center justify-around">
        <div className="flex flex-col items-center justify-center">
          <div className="text-[32px] md:text-[48px] font-bold">60+ </div>
          <div className="text-[20px] md:text-[24px]">Clients</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-[32px] md:text-[48px] font-bold"> 90+ </div>
          <div className="text-[20px] md:text-[24px]">Projects</div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="text-[32px] md:text-[48px] font-bold">100+ </div>
          <div className="text-[20px] md:text-[24px]">Cups of Coffee</div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default About;
