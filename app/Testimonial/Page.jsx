import React from 'react'
import TestimonialImage from "../../public/testimonial-image.png"
import ClientImage1 from "../../public/client-image1.png"
import ClientImage2 from "../../public/client-image2.png"
import ClientImage3 from "../../public/client-image3.png"
import Subheading from '@/components/Subheading'
import Heading from '@/components/Heading'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const TestimonialPage = () => {
  return (
    <div className="about w-full h-auto flex justify-center items-start sm:px-0 px-2">
      <div className="w-full px-3 sm:w-[85%]  h-auto flex md:flex-row flex-col justify-center items-center md:gap-3 gap-6">
        <div className="left md:w-[50%] w-full h-auto flex justify-center items-center md:order-1 order-2">
          <Image
            src={TestimonialImage}
            title="Digital Agency"
            alt="Digital Agency"
            // className="md:max-w-[200px] max-w-[160px] h-[50px] object-fill"
          />
        </div>
        <div className="right lg:mr-0 xl:mr-20 md:w-[50%] w-full h-auto space-y-3 flex-col flex justify-center md:order-2 order-1">
          <Subheading text="Testimonials" textColor="[#007BFF]"/>
          <Heading text="What Our Client Say" textColor="[#4B5563]" />
          <p className="font-normal txet-sm md:text-[16px] sm:tracking-wide text-[#4B5563]">
           Hear from those who’ve partnered with us:
          </p>
          <div className="leading flex flex-col gap-3 py-3">
            <div className="font-normal flex gap-4 text-sm md:text-[16px]  tracking-wide text-[#4B5563] items-end">
              <Image 
              src={ClientImage1}
              alt="client"
              className='rounded-full h-12 w-12'/>
              <div>“DigitalHorizon transformed our online presence. Highly recommend!” – <span className='text-[#007BFF]'>[Client Name]</span></div>
            </div>
            <div className="font-normal flex gap-4 text-sm md:text-[16px]  tracking-wide text-[#4B5563] items-end">
              <Image 
              src={ClientImage2}
              alt="client"
              className='rounded-full h-12 w-12'/>
              <div>“Their creativity and attention to detail are unmatched.” – <span className='text-[#007BFF]'>[Client Name]</span></div>
            </div>
            <div className="font-normal flex gap-4 text-sm md:text-[16px]  tracking-wide text-[#4B5563] items-end">
              <Image 
              src={ClientImage3}
              alt="client"
              className='rounded-full h-12 w-12'/>
              <div>“Exceptional service and amazing results!” – <span className='text-[#007BFF]'>[Client Name]</span></div>
            </div>
            
          </div>
          <div>
            <Button className=" max-sm:px-4 max-sm:py-4 py-6 px-8 rounded-lg text-white bg-[#007BFF] font-semibold text-[16px] max-sm:text-sm hover:bg-[#1B1F3B] hover:scale-x-90">
              View All Reviews
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialPage
