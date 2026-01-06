import Socials from "@/components/Socials";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    href: "/work/hyundai",
    imgSrc: "/tiles/hyundai_1.png",
    imgAlt: "Hyundai ",
    title: "Hyundai",
    description: "Web Development",
    priority: true,
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
];

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <div className="mt-[100px] text-[32px] md:text-[48px] font-bold">
        Unlocking Your Brand's Hidden <br className="hidden md:block" />
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
      <div className="w-full flex mt-[100px] justify-center lg:justify-between flex-wrap gap-y-24">
        {projects.map((project) => (
          <Link
            href={project.href}
            className="hover:scale-105 transition-all"
            key={project.imgSrc}
          >
            <Image
              src={project.imgSrc}
              alt={project.imgAlt}
              width={522}
              height={522}
              priority={project.priority || false}
            />
            <div className="mt-[30px] text-[24px] md:text-[36px] font-bold">
              {project.title}
            </div>
            <div className="text-[20px] md:text-[32px] font-medium text-[#BDC3C7]">
              {project.description}
            </div>
          </Link>
        ))}
      </div>
      <div className="my-[100px] flex justify-center">
        <Link
          href="/work"
          className="underline text-[32px] md:text-[48px] font-medium hover:text-blue-800"
        >
          See all projects
        </Link>
      </div>
      <Testimonials />
      <Socials />
    </main>
  );
}
