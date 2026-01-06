import React from "react";
import Image from "next/image";
import { Dot, Globe } from "lucide-react";
import Link from "next/link";

const Kunalgamerz = () => {
  return (
    <div>
      <div className="mt-[50px]">
        <div className="text-[32px] font-bold">Kunal Gamerz</div>
        <div className="text-[20px] md:text-[24px] font-medium text-[#BDC3C7]">
          Brand Identity / Logo{" "}
        </div>
      </div>
      <div className="mt-[20px] text-[20px] flex flex-col gap-4">
        <div>
          Kunal is a Youtuber interested in gaming. He streams playing games, we
          have helped him a logo design as per his vision and requirements.
        </div>
      </div>
    </div>
  );
};

export default Kunalgamerz;
