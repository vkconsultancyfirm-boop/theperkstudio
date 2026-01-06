import React from "react";
import Image from "next/image";
import { Dot, Globe } from "lucide-react";
import Link from "next/link";

const Kia = () => {
  return (
    <div>
      <div className="mt-[50px]">
        <div className="text-[32px] font-bold">KIA</div>
        <div className="text-[20px] md:text-[24px] font-medium text-[#BDC3C7]">
          Web Development
        </div>
      </div>
      <div className="mt-[20px] text-[20px] flex flex-col gap-4">
        <div>
          KIA Motors Corporation, commonly known as KIA, is a South Korean multinational automotive manufacturer headquartered in Seoul. The project involved translating Figma designs provided by the client into functional modules, adhering closely to client's coding style. Our scope included implementing animations and interactions to enhance user experience.
        </div>
      </div>
    </div>
  );
};

export default Kia;
