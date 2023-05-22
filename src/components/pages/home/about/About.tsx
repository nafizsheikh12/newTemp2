import React from 'react';
import aboutbg from "../../../../assets/ui/aboutbg.jpg";
import circle from "../../../../assets/ui/1.svg";
import Image from "next/image"

const About = () => {
  return (
    <div className=''>
        <div className='container  mx-auto px-4 sm:px-6 pt-28 pb-24 border-b-[1px] border-[#D6DDDA]'>
             <div className='flex relative flex-col lg:flex-row gap-16  items-center'>
                 <div className=' order-1 lg:order-2'>
                      <div className=''>
                          <Image src={aboutbg} className='rounded-3xl w-full shadow'/>
                      </div>
                      <div className='absolute top-[-11rem] left-[-21rem]'>
                          <Image src={circle} />
                      </div>
                 </div>
                 <div className=' lg:order-2'>
                      <h1 className='font-jakarta text-[35px] font-semibold'>About Academy</h1>
                      <div>
                          <p className='text-[#69697B] font-jakarta mt-2 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat feugiat congue viverra facilisis. Mauris, volutpat mi libero tellus donec amet netus.</p>
                          <p className='text-[#69697B] font-jakarta mb-12'>Sapien magna purus, maecenas arcu, enim pretium. Tempor sit amet nunc sit amet in ac.</p>
                      </div>
                      <button className="border-[#3434ff] hover:bg-[#3434ff] transition hover:-translate-y-3 hover:text-white text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-medium text-[16px]">Learn More</button>
                 </div>
             </div>
        </div>
    </div>
  )
}

export default About