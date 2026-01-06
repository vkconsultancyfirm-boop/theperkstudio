import React from "react";
import Image from "next/image";
import { Dot, Globe } from "lucide-react";
import Link from "next/link";

const Marveta = () => {
  return (
    <div>
      <div className="mt-[100px]">
        <div className="text-[32px] font-bold">Marveta</div>
        <div className="text-[20px] md:text-[24px] font-medium text-[#BDC3C7]">
          Branding / Social Media
        </div>
      </div>
      <div className="mt-[20px] text-[20px] flex flex-col gap-4">
        <div>
        Marveta is a comprehensive SaaS digital marketing agency, dedicated to helping businesses establish a robust online presence through effective use of the internet and technology. They excel in digital marketing strategies to guarantee business success in the ever-evolving digital landscape.
        </div>
      </div>
    </div>
  );
};

export default Marveta;
