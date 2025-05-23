import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Subheading from "@/components/Subheading";
import Heading from "@/components/Heading";
import { Globe, Megaphone, PenTool, Store } from "lucide-react";
import { IoMegaphoneOutline } from "react-icons/io5";

const ServicePage = () => {
  let service_data = [
    {
      service_title: "Web Development & Design",
      service_description:
        "Creating visually stunning, high-performing websites that captivate and convert.",
    },
    {
      service_title: "Digital Marketing",
      service_description:
        "Amplify your reach with SEO, PPC, content marketing, and social media strategies.",
    },
    {
      service_title: "Branding & Identity",
      service_description:
        "Build a powerful brand with logo design, color schemes, and messaging.",
    },
    {
      service_title: "E-commerce Solutions",
      service_description:
        "Seamless online store creation with top-notch UX and secure payment systems.",
    },
  ];
  return (
    <div className="services mb-0 w-full h-auto flex justify-center overflow-x-hidden items-start pt-6 bg-[#007BFF] text-white">
      <div className="w-full p-2 lg:w-[98%] h-auto flex flex-col justify-center items-center gap-6">
        <div className="up lg:w-[50%] flex justify-center items-center flex-col w-full h-auto space-y-5">
          <Subheading text="Services" textColor="[#FFFFFF]" />
          <Heading text="What We Offer" textColor="[#FFFFFF]" />
          <p className="font-normal txet-sm md:text-[16px] sm:tracking-wide  text-center">
            Transform your business with our expert services designed to drive
            growth and innovation.
          </p>
        </div>
        <div className="down w-full h-auto flex md:flex-wrap justify-center items-center py-6 gap-4">
          <Carousel className="md:hidden max-md:block  w-full">
            <CarouselContent>
              <CarouselItem>
                <Card className=" bg-[#F6F6F6] rounded-lg space-y-4 w-[260px] h-[328px] relative">
                  <CardHeader>
                    <CardTitle className="text-[#4B5563] opacity-25 text-4xl ">
                      01
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="font-bold text-3xl text-[#007BFF]">
                      Web Development & Design
                    </h3>
                    <p className=" text-sm  sm:tracking-wide">
                      Creating visually stunning, high-performing websites that
                      captivate and convert.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="rounded-full absolute -bottom-4 -right-4 flex justify-center items-center h-28 w-28 bg-[#007BFF] text-white">
                      <Globe size={50} />
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className=" bg-[#F6F6F6] rounded-lg space-y-4 w-[260px] h-[328px] relative">
                  <CardHeader>
                    <CardTitle className="text-[#4B5563] opacity-25 text-4xl ">
                      02
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="font-bold text-3xl text-[#007BFF]">
                      Digital Marketing
                    </h3>
                    <p className=" text-sm  sm:tracking-wide">
                      Amplify your reach with SEO, PPC, content marketing, and
                      social media strategies.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="rounded-full absolute -bottom-4 -right-4 flex justify-center items-center h-28 w-28 bg-[#007BFF] text-white">
                      <IoMegaphoneOutline size={50} />
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className=" bg-[#F6F6F6] rounded-lg space-y-4 w-[260px] h-[328px] relative">
                  <CardHeader>
                    <CardTitle className="text-[#4B5563] opacity-25 text-4xl ">
                      03
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="font-bold text-3xl text-[#007BFF]">
                      Branding & Identity
                    </h3>
                    <p className=" text-sm  sm:tracking-wide">
                      Build a powerful brand with logo design, color schemes,
                      and messaging.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="rounded-full absolute -bottom-4 -right-4 flex justify-center items-center h-28 w-28 bg-[#007BFF] text-white">
                      <PenTool size={50} />
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className=" bg-[#F6F6F6] rounded-lg space-y-4 w-[260px] h-[328px] relative">
                  <CardHeader>
                    <CardTitle className="text-[#4B5563] opacity-25 text-4xl ">
                      04
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <h3 className="font-bold text-3xl text-[#007BFF]">
                      E-commerce Solutions
                    </h3>
                    <p className=" text-sm  sm:tracking-wide">
                      Seamless online store creation with top-notch UX and
                      secure payment systems.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="rounded-full absolute -bottom-4 -right-4 flex justify-center items-center h-28 w-28 bg-[#007BFF] text-white">
                      <Store size={50} />
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {service_data &&
            service_data.map(
              ({ service_title, service_description, service_icon }, index) => (
                <Card
                  key={index}
                  className="md:block hidden bg-[#F6F6F6] rounded-lg space-y-4 w-[260px] h-[328px] relative group overflow-hidden transition-colors duration-500"
                >
                  {/* Expanding BG Circle (behind everything) */}
                  <div className="absolute -bottom-7 -right-7 h-28 w-28 bg-[#007BFF] rounded-full z-0 group-hover:scale-[10] transition-transform duration-700 ease-in-out" />

                  {/* Content */}
                  <div className="relative z-10">
                    <CardHeader>
                      <CardTitle className="text-[#4B5563] group-hover:text-white group-hover:opacity-70 opacity-25 text-4xl">
                        0{index + 1}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <h3 className="font-bold text-3xl text-[#007BFF] group-hover:text-white transition-colors">
                        {service_title}
                      </h3>
                      <p className="text-sm sm:tracking-wide text-black group-hover:text-white transition-colors">
                        {service_description}
                      </p>
                    </CardContent>
                  </div>

                  {/* Icon on Top */}
                  <CardFooter className="relative z-20">
                    <div className="rounded-full absolute -bottom-28 -right-7 flex justify-center items-center h-28 w-28 bg-[#007BFF] group-hover:bg-white group-hover:text-[#007BFF] text-white transition-colors duration-300">
                      {(index === 0 && <Globe size={50} />) ||
                        (index === 1 && <Megaphone size={50} />) ||
                        (index === 2 && <PenTool size={50} />) ||
                        (index === 3 && <Store size={50} />)}
                    </div>
                  </CardFooter>
                </Card>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
