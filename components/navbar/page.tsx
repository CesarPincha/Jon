import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo/logo.jpeg";

const page = () => {
  return (
    <div className="flex z-20 absolute w-full items-center text-white">
      <div className="flex-1">
        <Image className="h-[70px] w-[70px]" src={logo} alt="LOGO" />
      </div>
      <div className="flex-1 flex justify-end">
        <ul className="flex flex-row gap-4 pr-4 text-[20px]">
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default page;
