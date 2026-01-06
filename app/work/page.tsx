import Image from "next/image";
import Link from "next/link";
import React from "react";
const projects = [
  {
    href: "/work/hyundai",
    imgSrc: "/tiles/hyundai_1.png",
    imgAlt: "Hyundai",
    title: "Hyundai",
    description: "Web Development",
  },
  {
    href: "/work/ecotone-ny",
    imgSrc: "/tiles/ecotone.png",
    imgAlt: "Ecotone NewYork",
    title: "Ecotone NewYork",
    description: "Branding",
  },
  {
    href: "/work/amsi",
    imgSrc: "/tiles/amsi.png",
    imgAlt: "AMSI",
    title: "AMSI",
    description: "UI/UX Mobile App",
  },
  {
    href: "/work/parklane",
    imgSrc: "/tiles/parklane.png",
    imgAlt: "Parklane",
    title: "Parklane",
    description: "Brand Identity / Logo",
  },
  {
    href: "/work/kia",
    imgSrc: "/tiles/kia_1.png",
    imgAlt: "KIA",
    title: "KIA",
    description: "Web Development",
  },
  {
    href: "/work/pepsico",
    imgSrc: "/tiles/pepsico_1.png",
    imgAlt: "Pepsico",
    title: "Pepsico",
    description: "Web Development",
  },
  {
    href: "/work/dr-rohit-gupta",
    imgSrc: "/tiles/drrohit.png",
    imgAlt: "Dr. Rohit Gupta",
    title: "Dr. Rohit Gupta",
    description: "Branding",
  },
  {
    href: "/work/fatpos-global",
    imgSrc: "/tiles/fatpos.png",
    imgAlt: "Fatpos Global",
    title: "Fatpos Global",
    description: "Brand Identity / Logo",
  },
  {
    href: "/work/kunal-gamerz",
    imgSrc: "/tiles/kunalgamer.png",
    imgAlt: "Kunal Gamerz",
    title: "Kunal Gamerz",
    description: "Brand Identity / Logo",
  },
  {
    href: "/work/marveta",
    imgSrc: "/tiles/marveta.png",
    imgAlt: "Marveta",
    title: "Marveta",
    description: "Branding / Social Media",
  },
  {
    href: "/work/varsha-jewellers",
    imgSrc: "/tiles/varsha.png",
    imgAlt: "Varsha Jewellers",
    title: "Varsha Jewellers",
    description: "Brand Identity",
  },
  {
    href: "/work/noble-pathlabs",
    imgSrc: "/tiles/noblepathlab.png",
    imgAlt: "Noble Pathlabs",
    title: "Noble Pathlabs",
    description: "Branding",
  },
];

const Work = () => {
  return (
    <div>
      <div className="mt-[100px] text-[32px] md:text-[48px] font-bold">
        Crafting Brands with an <br className="hidden md:block" /> Extra{" "}
        <span className="inline-flex flex-col overflow-hidden h-[45px] md:h-[60px]">
          <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
            <li className="text-[#F1C40F]">Perk-fection</li>
            <li className="text-[#1ABC9C]">Perk-sonality</li>
            <li className="text-[#3498DB]">Perk-spective</li>
            <li aria-hidden="true" className="text-[#F1C40F]">
              Perk-fection
            </li>
          </ul>
        </span>
      </div>
      <div className="w-full flex mt-[100px] justify-center lg:justify-between flex-wrap gap-y-24 gap-x-10">
        {projects.map((project) => (
          <Link
            href={project.href}
            className="hover:scale-105 transition-all"
            key={project.imgSrc}
          >
            <Image
              src={project.imgSrc}
              alt={project.imgAlt}
              width={305}
              height={305}
            />
            <div className="mt-[30px] text-[24px] md:text-[36px] font-bold">
              {project.title}
            </div>
            <div className="text-[20px] md:text-[24px] font-medium text-[#BDC3C7]">
              {project.description}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Work;
