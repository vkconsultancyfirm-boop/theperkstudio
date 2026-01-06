"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => path === pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { href: "/", text: "Home" },
    { href: "/work", text: "Our Work" },
    { href: "/about", text: "About" },
    { href: "/blog", text: "Blog" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <div>
      <div className="flex mt-[50px] justify-between items-center">
        <div>
          <Image
            src="/logo.svg"
            alt="The Perk Studio"
            width={208}
            height={98}
          />
        </div>
        <div className="flex lg:hidden items-center cursor-pointer">
          {isMenuOpen ? (
            <X onClick={toggleMenu} size={35} />
          ) : (
            <Menu onClick={toggleMenu} size={35} />
          )}
        </div>
        <div className="hidden lg:flex text-[24px] justify-center gap-[43px] text-primary">
          {links.map((link) => (
            <div
              key={link.href}
              className={cn(
                isActive(link.href)
                  ? "underline font-bold"
                  : "hover:underline hover:font-bold"
              )}
            >
              <Link href={link.href}>{link.text}</Link>
            </div>
          ))}
        </div>
      </div>
      <div
        className={cn(
          isMenuOpen ? "" : "hidden",
          "lg:hidden left-0 top-[100px]"
        )}
      >
        <div className="flex flex-col gap-10 py-10 text-[20px]">
          {links.map((link) => (
            <div
              key={link.href}
              className={cn(
                isActive(link.href)
                  ? "underline font-bold"
                  : "hover:underline hover:font-bold"
              )}
              onClick={toggleMenu}
            >
              <Link href={link.href}>{link.text}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
