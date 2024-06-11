import Image from "next/image";
import React from "react";
import heroImg from "@/public/images/heroImg.jpg";

function Hero() {
  return (
    <div className="relative h-screen w-full">
      <Image
        alt="Picture of the author"
        src={heroImg}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-15"></div>
    </div>
  );
}

export default Hero;
