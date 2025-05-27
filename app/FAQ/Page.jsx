import Heading from '@/components/Heading'
import Subheading from '@/components/Subheading'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import FAQImage from "../../public/faq-image.png"

const FAQPage = () => {
  return (
    <div className="about w-full h-auto flex justify-center items-start sm:px-0 px-2" >
      <div className="w-full px-3 sm:w-[85%]  h-auto flex lg:flex-row flex-col justify-end items-center md:gap-3 gap-6 ">
        <div className="right  lg:w-[50%] w-full h-auto space-y-3 flex-col flex justify-center ">
          <Subheading text="FAQs" textColor="[#007BFF]"/>
          <Heading text="Have Questions? We’ve Got Answers" textColor="[#4B5563]" />
          <p className="font-normal txet-sm md:text-[16px] sm:tracking-wide text-[#4B5563]">
           Hear from those who’ve partnered with us:
          </p>
          <div className="leading flex flex-col gap-3 py-3">
            <div className="font-normal flex flex-col gap-2 ">
             <h3 className='lg:pl-4 md:pl-2 lg:text-3xl sm:text-2xl xs:text-xl  font-semibold text-[#007BFF]'> 1. How long does a project take?</h3>
              <h5 className='lg:text-xl text-lg pl-1 text-[#4B5563]'>Timelines vary depending on scope; most projects are completed within 4-6 weeks.</h5>
            </div>
            <div className="font-normal flex flex-col gap-2 ">
             <h3 className='lg:pl-4 md:pl-2 lg:text-3xl sm:text-2xl xs:text-xl font-semibold text-[#007BFF]'> 2. What industries do you work with?</h3>
              <h5 className='lg:text-xl text-lg pl-1 text-[#4B5563]'>We’ve worked with a wide range of industries including retail, tech, healthcare, and more.</h5>
            </div>
            <div className="font-normal flex flex-col gap-2 ">
             <h3 className='lg:pl-4 md:pl-2 lg:text-3xl sm:text-2xl xs:text-xl font-semibold text-[#007BFF]'> 3. Do you offer post-launch support?</h3>
              <h5 className='lg:text-xl text-lg pl-1 text-[#4B5563]'>Yes! All our packages include ongoing support.</h5>
            </div>
            
          </div>
          <div>
            <Button className=" max-sm:px-4 max-sm:py-4 py-6 px-8 rounded-lg text-white bg-[#007BFF] font-semibold text-[16px] max-sm:text-sm hover:bg-[#1B1F3B] hover:scale-x-90">
              View All FAQs
            </Button>
          </div>
        </div>
        <div className="left lg:w-[50%] w-full h-auto flex justify-center items-center ">
          <Image
            src={FAQImage}
            title="Digital Agency"
            alt="Digital Agency"
            className='lg:min-w-[800px] md:min-w-[650px] sm:min-w-[500px] '
          />
        </div>
        
      </div>
    </div>
  )
}

export default FAQPage
