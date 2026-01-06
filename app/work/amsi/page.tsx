import React from "react";
import Image from "next/image";
import { Dot, Globe } from "lucide-react";
import Link from "next/link";

const Amsi = () => {
  return (
    <div>
      <div className="mt-[50px]">
        <div className="text-[32px] font-bold">AMSI</div>
        <div className="text-[20px] md:text-[24px] font-medium text-[#BDC3C7]">
          UI/UX Mobile App
        </div>
      </div>
      <div className="mt-[20px] text-[20px] flex flex-col gap-4">
        <div>
          AMSI is a mobile which on a regular basis, will remind users to
          actively participate in their day-to-day steps to achieve their health
          and fitness goals. Created by Irish Taylor with technology in
          Artificial Intelligence (AI) / Machine Learning (ML) language experts,
          and data analysis. The project was to design a complete user
          experience journey as per the requirements of the client. It's a UI/UX
          design task to create an integrative health app to assist an
          individual in their own health and wellness.
        </div>
        {/* <div>
          <Link
            href="https://www.amsi.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-medium underline text-blue-600"
          >
            <Dot className="text-green-400 animate-pulse" size={60} />
            Website
          </Link>
        </div> */}
        <div>Techstack / Tools</div>
        <div className="flex items-center gap-4">
          <div>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              width={35}
              height={35}
              alt="Figma"
            />
          </div>
          <div>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg"
              width={35}
              height={35}
              alt="Adobe Illustrator"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amsi;
