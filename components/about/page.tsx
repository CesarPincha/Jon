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
          At Rooftop Solutions, our primary goal is to provide top-tier roofing
          services that exceed customer expectations. We strive to deliver
          quality craftsmanship and exceptional service in every project we
          undertake, ensuring durability and satisfaction. Our dedication to
          excellence drives us to continually innovate and adopt the latest
          industry practices, making us a leader in the roofing sector.
        </p>
        <p className="p-4 text-start ">
          Our company culture is built on the pillars of integrity, teamwork,
          and continuous improvement. We believe in fostering a collaborative
          environment where every team member is valued and empowered to
          contribute their best. This collective effort ensures that we not only
          meet but exceed the standards of quality and safety in our work,
          creating roofs that stand the test of time.
        </p>
        <p className="p-4 text-start ">
          Rooftop Solutions is committed to sustainability and community
          involvement. We use eco-friendly materials and practices to minimize
          our environmental footprint, and we actively participate in local
          initiatives to give back to the community. Our mission is to build
          strong, lasting relationships with our clients and partners, grounded
          in trust and mutual respect.
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
