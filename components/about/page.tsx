import React from "react";
import Image from "next/image";
import aboutPic from "../../public/images/aboutPic.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="about flex lg:flex-row flex-col min-h-screen pt-16"
    >
      <div className="flex-1 flex flex-col justify-center items-center text-center m-4">
        <h1 className="p-4 sm:text-2xl lg:text-6xl font-coachella font-bold">
          Rooftop Solutions
        </h1>
        <p className="p-4  text-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit iure eveniet cum expedita iusto accusamus possimus
          itaque, eligendi dolorum, neque nemo commodi et, ratione quas minus
          aut architecto cumque ea ut recusandae consectetur natus? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Quae est, nemo harum
          suscipit quibusdam facilis corporis deleniti incidunt asperiores
          officiis!
        </p>
        <p className="p-4 text-start ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          ratione ducimus impedit corrupti est quos modi cumque in recusandae
          voluptas! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Cupiditate aliquid, reprehenderit ducimus harum doloribus deleniti
          iste quam voluptates et officia explicabo necessitatibus inventore?
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center text-center p-4 rounded-md">
        <Image
          className="rounded-md shadow-lg shadow-black"
          alt="Picture of the author"
          src={aboutPic}
          quality={100}
          layout="intrinsic"
          width={500}
          height={600}
        />
      </div>
    </div>
  );
};

export default About;
