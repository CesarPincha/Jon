"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";
import car1 from "@/public/images/car1.jpg";
import car2 from "@/public/images/car2.jpg";
import car3 from "@/public/images/car3.jpg";
import car4 from "@/public/images/car4.jpeg";
import Image from "next/image";

export function ParallaxScrollDemo() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="flex-1 h-[60vw] justify-center my-auto">
        <ParallaxScroll images={images} />
      </div>
      <div className="flex-1 flex text-center justify-center items-center p-4">
        <div>
          <h1 className="p-4">ROOFING</h1>
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
    </div>
  );
}

const images = [
  car1.src,
  car2.src,
  car3.src,
  car4.src,
  car3.src,
  car2.src,
  car1.src,
  car4.src,
  car3.src,
  car2.src,
  car1.src,
  car4.src,
  car1.src,
  car2.src,
];
