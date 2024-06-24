"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";
import car1 from "@/public/images/car1.jpg";
import car2 from "@/public/images/car2.jpg";
import car7 from "@/public/images/car7.jpeg";
import car6 from "@/public/images/car6.jpeg";
import car5 from "@/public/images/car5.jpeg";
import Image from "next/image";

export function ParallaxScrollDemo() {
  return (
    <div
      id="gallery"
      className=" gallery flex flex-col lg:flex-row h-screen pb-4"
    >
      <div className="flex-1 flex text-center justify-center items-center p-4">
        <div className="mt-[80px]">
          <h1 className="p-4 text-2xl lg:text-6xl font-coachella font-bold">
            ROOFING
          </h1>
          <p className="text-balance text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Eaque facere dignissimos delectus
            voluptas alias maiores rerum obcaecati nobis quam aspernatur. Fuga
            dolorum voluptate minima, maxime explicabo unde sed eveniet dolorem!
          </p>
        </div>
      </div>
      <div className="flex-1 h-[50vw] justify-start my-auto">
        <ParallaxScroll images={images} />
      </div>
    </div>
  );
}

const images = [
  car6.src,
  car5.src,
  car2.src,
  car7.src,
  car6.src,
  car2.src,
  car7.src,
  car1.src,
  car6.src,
  car5.src,
  car7.src,
  car2.src,
  car1.src,
  car6.src,
  car5.src,
  car1.src,
  car2.src,
  car5.src,
];
