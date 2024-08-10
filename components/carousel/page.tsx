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
    <div
      id="gallery"
      className=" gallery flex flex-col lg:flex-row h-screen pb-4"
    >
      <div className="flex-1 flex text-center justify-center items-center p-4">
        <div className="mt-[80px]">
          <h1 className="p-4 text-2xl lg:text-6xl font-coachella font-bold">
            ROOFING
          </h1>
          <p className="text-pretty text-center">
            At Rooftop Solutions, we take pride in our comprehensive roofing
            services, tailored to meet the unique needs of each client. Our
            expertise spans across various roofing types, including asphalt
            shingles, metal roofing, tile roofing, and flat roofs. We ensure
            that every project is executed with precision and care, using only
            high-quality materials to guarantee long-lasting results. Our team
            of skilled professionals is dedicated to providing top-notch
            service, from the initial consultation to the final installation. We
            understand that a roof is a critical component of any building,
            providing protection and enhancing its overall appearance. That’s
            why we focus on delivering solutions that combine functionality with
            aesthetic appeal. We also emphasize the importance of regular
            maintenance and timely repairs to extend the lifespan of your roof.
            Our proactive approach ensures that potential issues are addressed
            before they become major problems, saving you time and money in the
            long run. With Rooftop Solutions, you can trust that your roofing
            needs are in capable hands.
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
