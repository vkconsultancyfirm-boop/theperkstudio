import React from "react";
import Image from "next/image";
import { Dot, Globe } from "lucide-react";
import Link from "next/link";

const Ecotone = () => {
  return (
    <div>
      <div className="mt-[50px]">
        <div className="text-[32px] font-bold">Ecotone NewYork</div>
        <div className="text-[20px] md:text-[24px] font-medium text-[#BDC3C7]">
          Branding
        </div>
      </div>
      <div className="mt-[20px] text-[20px] flex flex-col gap-4">
        <div>
          Ecotone design and build luxury Spas and public spaces. During
          construction, they run an apprentice training program, teaching young
          people how to design and build while gaining on the job experience.
          They wanted to show the combination of professional construction and
          apprentice training. The first image a visitor to website should see
          is a combination of work and our apprentice training program. There
          had to be some bits of graphic design to give the image a wow factor.
        </div>
        <div className="">
          <Link
            href="https://ecotoneny.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-medium underline text-blue-600"
          >
            <Dot className="text-green-400 animate-pulse" size={60} />
            Website
          </Link>
        </div>
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

export default Ecotone;
