import Heading from '@/components/Heading'
import Subheading from '@/components/Subheading'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import FAQImage from "../../public/faq-image.png"

const FAQPage = () => {
  return (
    <div className="about w-full h-auto flex justify-center items-start">
      <div className="w-full px-3 sm:w-[85%]  h-auto flex md:flex-row flex-col justify-end items-center md:gap-3 gap-6 ">
        <div className="right  md:w-[50%] w-full h-auto space-y-3 flex-col flex justify-center ">
          <Subheading text="FAQs" textColor="[#007BFF]"/>
          <Heading text="Have Questions? We’ve Got Answers" textColor="[#4B5563]" />
          <p className="font-normal txet-sm md:text-[16px] sm:tracking-wide text-[#4B5563]">
           Hear from those who’ve partnered with us:
          </p>
          <div className="leading flex flex-col gap-3 py-3">
            <div className="font-normal flex flex-col gap-2 ">
             <h3 className='pl-4 text-3xl font-semibold text-[#007BFF]'> 1. How long does a project take?</h3>
              <h5 className='text-xl pl-1 text-[#4B5563]'>Timelines vary depending on scope; most projects are completed within 4-6 weeks.</h5>
            </div>
            <div className="font-normal flex flex-col gap-2 ">
             <h3 className='pl-4 text-3xl font-semibold text-[#007BFF]'> 2. What industries do you work with?</h3>
              <h5 className='text-xl pl-1 text-[#4B5563]'>We’ve worked with a wide range of industries including retail, tech, healthcare, and more.</h5>
            </div>
            <div className="font-normal flex flex-col gap-2 ">
             <h3 className='pl-4 text-3xl font-semibold text-[#007BFF]'> 3. Do you offer post-launch support?</h3>
              <h5 className='text-xl pl-1 text-[#4B5563]'>Yes! All our packages include ongoing support.</h5>
            </div>
            
          </div>
          <div>
            <Button className=" max-sm:px-4 max-sm:py-4 py-6 px-8 rounded-lg text-white bg-[#007BFF] font-semibold text-[16px] max-sm:text-sm hover:bg-[#1B1F3B] hover:scale-x-90">
              View All FAQs
            </Button>
          </div>
        </div>
        <div className="left md:w-[50%] w-full h-auto flex justify-center items-center ">
          <Image
            src={FAQImage}
            title="Digital Agency"
            alt="Digital Agency"
          />
        </div>
        
      </div>
    </div>
  )
}

export default FAQPage
