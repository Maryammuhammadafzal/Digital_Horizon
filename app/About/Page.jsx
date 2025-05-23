import Heading from "@/components/Heading";
import React from "react";
import AboutImage from "../../public/about-image.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Subheading from "@/components/Subheading";
const AboutPage = () => {
  return (
    <div className="about w-full h-auto flex justify-center items-start">
      <div className="w-full sm:w-[85%]  h-auto flex justify-center items-center md:gap-3 gap-6">
        <div className="left md:w-[50%] w-full h-auto flex justify-center items-center">
          <Image
            src={AboutImage}
            title="Digital Agency"
            alt="Digital Agency"
            // className="md:max-w-[200px] max-w-[160px] h-[50px] object-fill"
          />
        </div>
        <div className="right mr-20 md:w-[50%] w-full h-auto space-y-3 flex-col flex justify-center">
          <Subheading text="About Us" />
          <Heading text="Who We Are" textColor="[#007BFF]" />
          <p className="font-normal text-[16px] tracking-wide text-[#4B5563]">
            At DigitalHorizon, we’re more than a digital agency—we’re your
            growth partners. With a team of creative thinkers, tech experts, and
            marketing strategists, we deliver transformative solutions that set
            your business apart.
          </p>
          <div className="leading flex flex-col gap-2 py-3">
            <p className="font-normal flex gap-2 text-[16px] tracking-wide text-[#4B5563]">
              <h3 className="text-[#007BFF] text-xl font-bold">Mission: </h3>
              To empower businesses by blending creativity with technology.
            </p>
            <p className="font-normal flex gap-2 text-[16px] tracking-wide text-[#4B5563]">
              <h3 className="text-[#007BFF] text-xl font-bold">Vision: </h3>
              To shape the future of digital innovation.
            </p>
          </div>
          <div>
            <Button className="py-6 px-8 rounded-lg text-white bg-[#007BFF] font-semibold text-[16px] hover:bg-[#1B1F3B] hover:scale-x-90">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
