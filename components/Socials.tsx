import Link from "next/link";
import React from "react";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="w-full flex mt-[100px] justify-center lg:justify-between flex-wrap gap-y-24">
      <Link
        href="https://www.instagram.com/the_perkstudio/"
        className="hover:scale-105 transition-all"
      >
        <Image
          src="/instagram.gif"
          alt="placeholder image for a project tile"
          width={522}
          height={522}
          priority={true}
        />
      </Link>
      <div>
        <Image
          src="/services.png"
          alt="placeholder image for a project tile"
          width={522}
          height={522}
        />
      </div>
    </div>
  );
};

export default Socials;
