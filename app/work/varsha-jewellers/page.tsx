import React from "react";
import Image from "next/image";
import { Dot, Globe } from "lucide-react";
import Link from "next/link";

const Varshajewel = () => {
  return (
    <div>
      <div className="mt-[100px]">
        <div className="text-[32px] font-bold">Project Title</div>
      </div>
      <div className="mt-[20px] text-[20px] flex flex-col gap-4">
        <div>About Company in 3-4 lines</div>
        <div>Project Overview in 3-4 lines</div>
        <div className="">
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-medium underline text-blue-600"
          >
            <Dot className="text-green-400 animate-pulse" size={60} />
            Live Demo
          </Link>
        </div>
        <div>Techstack / Tools</div>
        <div className="flex items-center gap-4">
          <div>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              width={35}
              height={35}
              alt="HTML"
            />
          </div>
          <div>
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              width={35}
              height={35}
              alt="CSS"
            />
          </div>
        </div>
      </div>
      <div className="mt-[50px] hidden lg:block">
        <Image
          src="/testimonial.gif"
          alt="Testimonials"
          width={1235}
          height={697}
        />
      </div>
    </div>
  );
};

export default Varshajewel;
