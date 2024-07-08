"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/images/logo/logoDef.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex z-20 w-full items-center text-white fixed">
      <div className="absolute inset-0 bg-slate-700 bg-opacity-45"></div>
      <div className="flex-1">
        <Image
          className="h-[70px] w-[90px] ml-4 z-60 relative"
          src={logo}
          alt="LOGO"
          priority={true}
        />
      </div>
      <div className="flex-1 flex justify-end">
        <div className="block md:hidden pr-4 z-50">
          {!menuOpen && (
            <button onClick={() => setMenuOpen(true)}>
              <AiOutlineMenu size={24} />
            </button>
          )}
        </div>
        <ul
          className={`flex flex-col md:flex-row gap-4 pr-4 text-[20px] font-Quicksand font-light fixed  md:relative pl-4 right-0 top-0 h-full md:h-auto bg-slate-700 bg-opacity-45 md:bg-transparent transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          {menuOpen && (
            <div className="block md:hidden absolute top-4 right-4 z-50 ">
              <button onClick={() => setMenuOpen(false)}>
                <AiOutlineClose size={24} />
              </button>
            </div>
          )}
          <li className="mt-12 md:mt-0  font-regular">
            <a
              onClick={() => {
                scrollToSection("home");
                setMenuOpen(false);
              }}
              className="cursor-pointer "
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToSection("about");
                setMenuOpen(false);
              }}
              className="cursor-pointer"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToSection("gallery");
                setMenuOpen(false);
              }}
              className="cursor-pointer"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollToSection("contact");
                setMenuOpen(false);
              }}
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
