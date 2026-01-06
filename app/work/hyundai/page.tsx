import React from "react";
import Image from "next/image";
import { Dot, Globe } from "lucide-react";
import Link from "next/link";

const Hyundai = () => {
  return (
    <div>
      <div className="mt-[50px]">
        <div className="text-[32px] font-bold">Hyundai</div>
        <div className="text-[20px] md:text-[24px] font-medium text-[#BDC3C7]">
          Web Development
        </div>
      </div>
      <div className="mt-[20px] text-[20px] flex flex-col gap-4">
        <div>
          The Hyundai Motor Company, often referred to as Hyundai Motors, and
          commonly known as Hyundai, is a South Korean multinational automotive
          manufacturer. The project involved translating Figma designs provided
          by the client into functional modules, adhering closely to client's
          coding style. Our scope included implementing animations and
          interactions to enhance user experience.
        </div>
      </div>
    </div>
  );
};

export default Hyundai;
