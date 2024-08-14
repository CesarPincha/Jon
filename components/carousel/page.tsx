"use client";
import { ParallaxScroll } from "../ui/parallax-scroll";

import p2 from "@/public/images/p2.jpeg";
import p3 from "@/public/images/p3.jpeg";
import p4 from "@/public/images/p4.jpeg";
import p5 from "@/public/images/p5.jpeg";
import p6 from "@/public/images/p6.jpeg";
import p7 from "@/public/images/p7.jpeg";
import p8 from "@/public/images/p8.jpeg";
import p9 from "@/public/images/p9.jpeg";
import p10 from "@/public/images/p10.jpeg";
import p11 from "@/public/images/p11.jpeg";
import Image from "next/image";

export function ParallaxScrollDemo() {
  return (
    <div id="gallery" className="gallery flex flex-col h-screen pb-4">
      <div className="lg:h-screen h-screen w-screen mb-4 bg-slate-300">
        <h1 className="justify-center text-center lg:pt-16 lg:mt-0 text-2xl lg:text-6xl font-coachella font-bold">
          GALLERY
        </h1>
        <ParallaxScroll images={images} />
      </div>
    </div>
  );
}

const images = [
  p2.src,
  p3.src,
  p4.src,
  p5.src,
  p6.src,
  p7.src,
  p8.src,
  p9.src,
  p10.src,
  p11.src,
  p6.src,
  p3.src,
];
