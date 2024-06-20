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
    <div className="relative h-screen w-full flex items-center justify-center text-center">
      <Image
        alt="Picture of the author"
        src={heroImg}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      <div className="relative z-20 flex flex-col items-center justify-center px-4">
        <div className="text-8xl text-white font-coachella font-bold flex flex-col items-center">
          <div className="flex items-center justify-center">
            <span>Build</span>
            <span className="text-center ml-2" style={{ width: "6ch" }}>
              <FlipWords
                words={words}
                className="text-white inline-block text-6xl"
              />
            </span>
          </div>
          <h2 className="text-4xl text-white font-coachella font-bold mt-4">
            With Rooftop Solutions
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
