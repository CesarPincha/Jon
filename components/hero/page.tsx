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
    <div
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-center"
    >
      <Image alt="Picture of the author" src={heroImg} fill quality={100} />
      <div className="absolute inset-0 bg-black bg-opacity-45"></div>
      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="lg:text-8xl text-white font-coachella font-bold flex flex-col items-center text-center justify-center w-full">
          <div className="flex items-center justify-center h-full w-full">
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
          </h2>
          <h2>Rooftop Solutions</h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
