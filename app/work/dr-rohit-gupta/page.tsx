import React from "react";
import Image from "next/image";
import { Dot, Globe } from "lucide-react";
import Link from "next/link";

const Drrohitgupta = () => {
  return (
    <div>
      <div className="mt-[50px]">
        <div className="text-[32px] font-bold">Dr Rohit Gupta</div>
        <div className="text-[20px] md:text-[24px] font-medium text-[#BDC3C7]">
          Branding
        </div>
      </div>
      <div className="mt-[20px] text-[20px] flex flex-col gap-4">
        <div>
          Dr. Rohit Gupta is an MBBS, MD Dermatologist and Cosmetologist and his
          areas of interest include dermatosurgery & aesthetic practice. We
          worked with him in creating banners, posters, pamphlets and other
          branding materials.
        </div>
      </div>
    </div>
  );
};

export default Drrohitgupta;
