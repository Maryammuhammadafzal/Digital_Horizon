"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "../../public/hero-image.png";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
const Homepage = () => {
  return (
    <div className="home mb-0 w-full h-auto lg:h-[80vh] flex justify-center items-start pt-6">
      <div className="w-full p-2 md:p-0 md:w-[95%] lg:w-[85%]  h-auto flex md:flex-row flex-col justify-center items-center md:gap-3 gap-6">
        <div className="left md:w-[50%] w-full h-auto space-y-5">
          <h1 className="font-semibold 2xl:text-7xl 2xl:leading-20 xl:text-6xl lg:text-5xl md:text-5xl min-[768px]:text-4xl text-6xl xl:leading-16 lg:leading-14 max-sm:text-5xl max-xs:text-4xl">
            <span className="text-[#007BFF]">DigitalHorizon </span> - Elevate
            Your &nbsp;
            <span className="text-[#007BFF]">
              <Typewriter
                className="text-[#007BFF]"
                words={[
                  "Digital Prescence",
                  "Web Developer",
                  "Digital Merketing",
                  "Branding",
                ]}
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
                cursor
                cursorStyle="_"
                loop={true}
              />
            </span>
          </h1>
          <p className="font-normal md:text-sm text-[16px] tracking-wide text-[#4B5563] max-xs:text-xs maxx-sm:text-sm">
            Welcome to DigitalHorizon, where innovation meets strategy to craft
            exceptional digital experiences. Empower your brand with
            cutting-edge solutions tailored to your success.
          </p>
          <div className="leading flex gap-12 max-sm:gap-5 py-3 max-xs:py-0">
            <div className="flex flex-col font-semibold">
              <h2 className="text-5xl md:text-4xl max-xs:text-2xl font-semibold text-[#007BFF]">+50</h2>
              <p className="text-xl md:text-lg max-xs:text-sm text-[#4B5563] font-semibold pl-2">
                Success ful Projects
              </p>
            </div>
            <div className="flex flex-col font-semibold">
              <h2 className="text-5xl md:text-4xl max-xs:text-2xl font-semibold text-[#007BFF]">+20</h2>
              <p className="text-xl md:text-lg max-xs:text-sm text-[#4B5563] font-semibold pl-2">
                Happy Customers
              </p>
            </div>
          </div>
          <Button className=" max-sm:px-4 max-sm:py-4 py-6 px-8 rounded-lg text-white bg-[#007BFF] font-semibold text-[16px] max-sm:text-sm hover:bg-[#1B1F3B] hover:scale-x-90">
            Get Started Now
          </Button>
        </div>
        <div className="right md:w-[50%] w-full h-auto flex justify-center items-center">
          <Image
            src={HeroImage}
            title="Digital Agency"
            alt="Digital Agency"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
