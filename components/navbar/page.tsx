"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo/logo.jpeg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const Page = () => {
  return (
    <div className="flex z-20 absolute w-full items-center text-white">
      <div className="flex-1">
        <Image className="h-[70px] w-[70px]" src={logo} alt="LOGO" />
      </div>
      <div className="flex-1 flex justify-end">
        <ul className="flex flex-row gap-4 pr-4 text-[20px]">
          <li>Home</li>
          <li>
            <a
              onClick={() => scrollToSection("about")}
              className="cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("gallery")}
              className="cursor-pointer"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
