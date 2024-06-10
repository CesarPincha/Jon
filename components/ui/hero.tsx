import Image from "next/image";
import React from "react";
import heroImg from "@/public/images/heroImg.jpg";

function hero() {
  return (
    <div className="h-screen">
      <Image
        alt="Picture of the author"
        src={heroImg}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
}

export default hero;
