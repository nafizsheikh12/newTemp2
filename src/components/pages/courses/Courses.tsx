import React from 'react'
import Hero from "./courseHeroSection";
import CourseCard  from "../bootcamps/bootCampsCard/BootCampsCard";
import CardImage1 from "../../../assets/ui/cardbg.png";

const Courses = () => {
  return (
    <div>
          <Hero />
          <div className='px-4 sm:px-6 container mx-auto mt-16 pb-11'>
               <div className='text-center mb-20 '>
                    <h1 className="text-[#0b0b2c] text-[39px] lg:text-[39px] font-bold font-jakarta leading-[18px] lg:leading-[15px]">Courses</h1>
               </div>
               <div className='!grid !grid-cols-12 gap-7'>
                  <CourseCard  level="Beginner" description="Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis." name={"Brand & Identity Design for Marketers"} price={500} imgSrc={CardImage1}/>
                  <CourseCard  level="Beginner" description="Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis." name={"Brand & Identity Design for Marketers"} price={500} imgSrc={CardImage1}/>
               </div>
          </div>
    </div>
  )
}

export default Courses