import React from "react";
import Subheading from "./Subheading";
import { Button } from "./ui/button";
import Heading from "./Heading";

const Footer = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center my-20">
      <div className="w-[90%] h-auto flex flex-col items-center justify-center ">
        <div className="contact w-full h-auto flex md:flex-row flex-col justify-center items-center gap-5 p-3 bg-[#007BFF] text-white rounded-xl">
          <div className="md:w-[70%] w-[95%] h-auto flex flex-col gap-3 justify-center items-start">
            <Subheading text="Contact Us" textColor="[#FFFFFF]" />
            <Heading
              text="Let’s Create Something Amazing"
              textColor="[#FFFFFF]"
            />
            <p className="font-normal txet-sm md:text-lg sm:tracking-wide  opacity-75">
              DigitalHorizon is ready to take your brand to the next level. Get
              in touch to discuss your goals and start your digital journey with
              us.
            </p>
          </div>
          <div className="w-[25%] h-auto flex justify-center items-center">
            <Button className=" max-sm:px-4 max-sm:py-4 py-6 px-8 rounded-lg tracking-wide text-[#007BFF] bg-white font-semibold text-[16px] max-sm:text-sm hover:bg-[#d8e0f7] hover:scale-x-90">
              View More Stories
            </Button>
          </div>
        </div>
        <footer></footer>
      </div>
    </div>
  );
};

export default Footer;
