"use client";
import React from "react";
import Image from "next/image";
import heroImg from "@/public/images/heroImg.jpg";
import atlasLogo from "@/public/images/logo/atlasLogo.jpg";
import landLogo from "@/public/images/logo/landmarkPro.png";
import { FlipWords } from "@/components/ui/flip-words";
import { Anton } from "next/font/google";
import logo from "@/public/images/logo/logoDef.png";
import HeroImg2 from "@/public/images/fortified-logo-roof.png";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

function Hero() {
  const words = ["Affordable", "Reliable", "Flexible"];
  const router = useRouter();

  return (
    <div
      id="home"
      className="relative h-screen w-full flex  justify-center text-center"
    >
      <Image alt="Picture of the author" src={heroImg} fill quality={100} />
      <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      <div className="relative  flex flex-col w-full ">
        <div className="flex self-start w-full">
          <Image
            className="h-[200px] w-[280px]  items-center justify-center mt-8 ml-8"
            src={logo}
            alt="LOGO"
            priority={true}
          />
        </div>
        <div className="lg:text-8xl text-white font-coachella font-bold flex flex-col items-center text-center justify-center w-full ">
          {/* <div className="flex items-center justify-center h-full w-full">
            <span className="lg:text-[70px] sm:tracking-widest text-2xl">
              Build
            </span>
            <div className="lg:w-[5ch] w-[12ch] flex lg: justify-center ml-2">
              <FlipWords
                words={words}
                className="text-white text-[18px] text-left lg:text-4xl font-coachella font-bold"
              />
            </div>
          </div>
          <h2 className="text-2xl text-white font-coachella font-bold p-4">
            With <br />
          </h2> */}
          <h3 className="text-2xl">SUPERIOR SERVICES</h3>
          <div className="flex justify-center items-center gap-2">
            <FaPhone className="text-2xl" />
            <h3 className="text-lg my-4">(504)-377-8683</h3>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FaMapMarkerAlt className="text-2xl" />
            <h3 className="text-lg my-4">
              327 Red Maple Dr Mandeville, LA 70448
            </h3>
          </div>
          <Image src={HeroImg2} alt="foto" className="h-40 w-80 m-4" />
          <div>
            <Link href="#contact">
              <Button className="text-2xl bg-transparent my-4 border border-white-1 px-4">
                CONTACT US FOR A QUOTE
              </Button>
            </Link>
          </div>
          <div className="flex overflow-hidden space-x-16 gap-4">
            <div className="flex animate-loop-sroll gap-4 w-screen">
              <Image
                className="h-[100px] w-[180px]  items-center justify-center mt-8 ml-8"
                src={atlasLogo}
                alt="LOGO"
                priority={true}
              />
              <Image
                className="h-[100px] w-[180px]  items-center justify-center mt-8 ml-8"
                src={landLogo}
                alt="LOGO"
                priority={true}
              />
              <Image
                className="h-[100px] w-[180px]  items-center justify-center mt-8 ml-8"
                src={atlasLogo}
                alt="LOGO"
                priority={true}
              />
              <Image
                src={landLogo}
                className="h-[100px] w-[180px]  items-center justify-center mt-8 ml-8"
                alt="LOGO"
                priority={true}
              />
            </div>
            <div className="flex animate-loop-sroll gap-4">
              <Image
                className="h-[100px] w-[180px]  items-center justify-center mt-8 ml-8"
                src={atlasLogo}
                alt="LOGO"
                priority={true}
              />
              <Image
                className="h-[100px] w-[180px]  items-center justify-center mt-8 ml-8"
                src={landLogo}
                alt="LOGO"
                priority={true}
              />
              <Image
                className="h-[100px] w-[180px]  items-center justify-center mt-8 ml-8"
                src={atlasLogo}
                alt="LOGO"
                priority={true}
              />
              <Image
                className="h-[100px] w-[180px]  items-center justify-center mt-8 ml-8"
                src={landLogo}
                alt="LOGO"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
