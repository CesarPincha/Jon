import React from "react";
import Image from "next/image";
import aboutPic from "../../public/images/aboutPic.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="about flex lg:flex-row flex-col min-h-screen pt-16 items-center justify-center"
    >
      <div className="flex-1 flex flex-col justify-center items-center text-center m-4 lg:max-w-[50vw]">
        <h1 className="p-4 sm:text-2xl lg:text-6xl font-coachella font-bold">
          RoofTop Solutions
        </h1>
        <p className="p-4  text-start">
          An old Irish Proverb reads “May the roof above us never fall in. And
          may us friends gathered below it never fall out.” We at RoofTop
          Solutions believe we make sure your roof never falls in, and we are
          positive that your experience with us will make us life long friends.
          I’m Brian Olagues, a lifelong Louisiana resident, born and raised in
          Lockport, graduated from Jesuit High School, and played college
          baseball at Loyola University in New Orleans.
        </p>
        <p className="p-4 text-start ">
          With over 18 years of experience in the roofing industry that
          followed, I know the challenges Louisiana homeowners face. No, it’s
          not weather events or hurricanes. Those things we cannot control, but
          we know are possible. The biggest issue facing Louisiana homeowners is
          who are they going to select to be my roofer and are they qualified to
          do the job that should be the standard? It’s not an easy question to
          answer because there are so many “roofers“ in Louisiana because it is
          so easy to become one, per state laws and licensures. Throw in some
          fancy websites, smooth talking sales rep, and a marketing campaign,
          and you have your overnight “roofer.” That’s not us. In fact those
          companies only intensify how hard it is for a homeowner to understand
          who really has their best interest in mind and who’s trying to make a
          quick buck.
        </p>
        <p className="p-4 text-start ">
          At RoofTop Solutions, we combine experience with integrity. If we
          wouldn’t do it on our own house, we wouldn’t do it on yours. We have
          to sleep at night, and sleeping at night is knowing that we did the
          right thing for our homeowners, we didn’t half ass anything or cut any
          corners, and that we gave you our best because only the best is good
          enough.
        </p>
      </div>
      {/* <div className="flex-1 flex justify-center items-center text-center p-4 rounded-md">
        <Image
          className="rounded-md shadow-lg shadow-black"
          alt="Picture of the author"
          src={aboutPic}
          quality={100}
          layout="intrinsic"
          width={500}
          height={600}
        />
      </div> */}
    </div>
  );
};

export default About;
