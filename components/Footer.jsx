import React from "react";
import Subheading from "./Subheading";
import { Button } from "./ui/button";
import Heading from "./Heading";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.svg";
import { Input } from "@/components/ui/input";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CiFacebook , CiLinkedin , CiInstagram } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center my-20">
      <div className="md:w-[85%] w-[95%] h-auto flex flex-col items-center justify-center ">
        <div className="contact w-full h-auto flex md:flex-row flex-col justify-center items-center md:gap-5 gap-7 p-5 lg:p-7 bg-[#007BFF] text-white rounded-xl">
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
          <div className="md:w-[25%] w-[95%] h-auto flex justify-start md:justify-center items-center">
            <Button className=" max-sm:px-4 max-sm:py-4 py-6 px-8 rounded-lg tracking-wide text-[#007BFF] bg-white font-semibold text-[16px] max-sm:text-sm hover:bg-[#d8e0f7] hover:scale-x-90">
              View More Stories
            </Button>
          </div>
        </div>
        <div className="footer w-full h-auto flex flex-col justify-center items-center md:gap-10 gap-10 p-5 lg:p-7 bg-neutral-100 rounded-xl">
          <div className="logo w-full h-auto flex  justify-center items-center">
            <Link href="/" className="w-auto h-auto">
              <Image
                src={Logo}
                title="Digital Horizon"
                alt="Digital Horizon"
                className="md:max-w-[300px] max-w-[300px] h-[80px]"
              />
            </Link>
          </div>
          <div className="links w-full h-auto  flex max-lg:flex-wrap gap-7 justify-between items-start xl:px-5">
            <div className="quick-links flex flex-col gap-2">
              <Subheading text="Quick Links" textColor="[#007BFF]" />
              <ul className="flex flex-col gap-1 text-neutral-500 font-medium text-sm">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Services</Link>
                </li>
                <li>
                  <Link href="/">Blogs</Link>
                </li>
                <li>
                  <Link href="/">Testimonial</Link>
                </li>
                <li>
                  <Link href="/">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="services flex flex-col gap-2">
              <Subheading text="Services" textColor="[#007BFF]" />
              <ul className="flex flex-col gap-1 text-neutral-500 font-medium  text-sm">
                <li>
                  <Link href="/">Web Development & Design</Link>
                </li>
                <li>
                  <Link href="/">Digital Marketing</Link>
                </li>
                <li>
                  <Link href="/">Branding & Identity</Link>
                </li>
                <li>
                  <Link href="/">E-commerce Solutions</Link>
                </li>
                <li>
                  <Link href="/">Custom Software Development</Link>
                </li>
              </ul>
            </div>
            <div className="contact flex flex-col gap-2">
              <Subheading text="Contact Us" textColor="[#007BFF]" />
              <ul className="flex flex-col gap-1 text-neutral-500 font-medium text-sm">
                <li>
                  <span>Phone:</span> (123) 456-7890
                </li>
                <li>
                  <span>Email:</span> contact@digitalhorizon.com
                </li>
                <li>
                  <span>Address:</span> 123 Innovation Lane, <br /> Tech City, SC, USA
                </li>
              </ul>
            </div>
            <div className="newsletter flex flex-col gap-2">
              <Subheading text="Newsletter" textColor="[#007BFF]" />
              <div className="flex flex-col gap-5 text-neutral-500 font-medium">
                <div className="flex w-full max-w-sm items-center">
                  <Input
                    type="email"
                    placeholder="@gmail.com"
                    className="send-mail"
                  />
                  <Button
                    type="submit"
                    className="send-btn rounded-none max-sm:px-4 max-sm:py-1 py-1 px-4 bg-[#007BFF] text-white text-sm "
                  >
                    Send
                  </Button>
                </div>
                <div className="flex justify-start items-center gap-3 px-3">
                  <IoLogoWhatsapp size={25} className="text-[#007BFF]" />
                  <CiFacebook size={25} className="text-[#007BFF]" />
                  <CiInstagram  size={25} className="text-[#007BFF]" />
                  <CiLinkedin size={25} className="text-[#007BFF]" />
                </div>
              </div>
            </div>
          </div>

          <div className="copyright max-h-[50px] w-full flex justify-center items-center gap-1 text-xs sm:text-sm md:text-base">
            © 2025 Elite Escape All Rights Reserved by{" "}
            <span className="company-name text-[#007BFF]"> Rootletsolutions.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
