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
import image from "../../public/story1.jpg";
import image2 from "../../public/story2.jpg";
import image3 from "../../public/story3.jpg";
import { Button } from "@/components/ui/button";

const StoriesPage = () => {
  let stories_data = [
    {
      story_title: "Project Alpha:",
      story_description:
        "Revamped a retail website, increasing online sales by 40%.",
      story_image: image,
    },
    {
      story_title: "Brand Beta:",
      story_description:
        "Designed a brand identity that grew social engagement by 65%.",
      story_image: image2,
    },
    {
      story_title: "Tech Gamma:",
      story_description:
        "Developed a custom app that streamlined operations by 30%.",
      story_image: image3,
    },
  ];
  return (
    <div className="services mb-0 w-full h-auto flex justify-center overflow-x-hidden items-center ">
      <div className="w-full p-2 lg:w-[90%] h-auto flex flex-col justify-center items-center gap-6">
        <div className="up flex justify-center items-start flex-col w-full h-auto space-y-3">
          <Subheading text="Case Study" textColor="[#007BFF]" />
          <Heading text="Proven Success Stories" textColor="[#4B5563]" />
          <p className="font-normal txet-sm md:text-lg sm:tracking-wide  opacity-75">
            Explore how we’ve helped businesses achieve remarkable milestones.
          </p>
        </div>
        <div className="down w-full h-auto flex md:flex-wrap justify-center md:justify-start items-center py-3 gap-4">
          {/* <Carousel className="md:hidden max-md:block  w-full">
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
          </Carousel> */}

          {stories_data &&
            stories_data.map(
              ({ story_title, story_description, story_image }, index) => (
                <Card
                  key={index}
                  className="md:block hidden rounded-lg space-y-4 max-w-[430px] h-[280px] relative  bg-cover bg-center text-white"
                  //   className="md:block hidden rounded-lg space-y-4 w-[260px] h-[328px] relative group overflow-hidden transition-colors duration-500"
                  style={{ backgroundImage: `url(${story_image.src})` }}
                >
                  {/* Expanding BG Circle (behind everything) */}
                  <div className="absolute top-0 left-0 h-full w-full bg-black opacity-15 rounded-lg z-10 " />

                  {/* Content */}
                  <div className="relative h-[240px] flex items-end  z-20 ">
                    <CardContent className="space-y-2 flex flex-col">
                      <h3 className="font-bold text-3xl  group-hover:text-white transition-colors">
                        {story_title}
                      </h3>
                      <p className="text-[16px] sm:tracking-wide group-hover:text-white transition-colors">
                        {story_description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              )
            )}
        </div>
        <Button className=" max-sm:px-4 max-sm:py-4 py-6 px-8 rounded-lg tracking-wide text-white bg-[#007BFF] font-semibold text-[16px] max-sm:text-sm hover:bg-[#1B1F3B] hover:scale-x-90">
        View More Stories
        </Button>
      </div>
    </div>
  );
};

export default StoriesPage;
