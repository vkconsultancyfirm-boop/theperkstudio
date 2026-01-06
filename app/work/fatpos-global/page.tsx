import React from "react";
import Image from "next/image";
import { Dot, Globe } from "lucide-react";
import Link from "next/link";

const Fatpos = () => {
  return (
    <div>
      <div className="mt-[50px]">
        <div className="text-[32px] font-bold">Fatpos Global</div>
        <div className="text-[20px] md:text-[24px] font-medium text-[#BDC3C7]">
          Brand Identity / Logo
        </div>
      </div>
      <div className="mt-[20px] text-[20px] flex flex-col gap-4">
        <div>
          FATPOS Global, a reliable market research and management consulting
          company that caters to non-profits, corporations, and government
          agencies.They help organizations make the right decisions backed by
          reliable data, in order to help them meet their growth goals. Our goal
          was to present their vision and goals reflecting in their brand, we
          worked with them on their logo design and brand identity.
        </div>
        {/* <div className="">
          <Link
            href="https://www.fatposglobal.com/"
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
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg"
              width={35}
              height={35}
              alt="Illustrator"
            />
          </div>
          <div>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
              width={35}
              height={35}
              alt="Photoshop"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fatpos;
