import React from "react";
import Image from "next/image";
import heroImg from "@/public/images/heroImg.jpg";
import { FlipWords } from "@/components/ui/flip-words";
import { Anton } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
});

function Hero() {
  const words = ["Affordable", "Reliable", "Flexible"];

  return (
    <div className="relative h-screen w-full items-center justify-center text-center">
      <Image
        alt="Picture of the author"
        src={heroImg}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      <div className="h-[50rem] flex justify-center items-center px-4">
        <div
          className={`${anton.className} text-7xl z-10 font-normal text-white w-[50vw]`}
        >
          Build
          <FlipWords words={words} className="text-white" />
          <br />
          <h2
            className="font-1xl quicksand text-white"
            style={{
              fontSize: "3rem",
              fontFamily: "quicksand",
              fontWeight: "light",
            }}
          >
            With Rooftop Solutions
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
