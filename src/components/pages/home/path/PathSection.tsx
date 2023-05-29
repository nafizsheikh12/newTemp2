import React from 'react';
import pathBg from "../../../../assets/ui/pathsvg.svg";
import parttime from "../../../../assets/ui/parttime.svg";
import online from "../../../../assets/ui/online.svg";
import Image from "next/image"

const PathSection = () => {
  return (
    <div>
        <div className='px-4 sm:px-6 '>
              <div className='container mx-auto text-center'>
                   <h2 data-aos-delay="5000" data-aos="fade-down" className='text-[35px] mb-3 lg:text-[40px] font-jakarta font-semibold'>Choose Your Path</h2>
                   <p data-aos-delay="5000" data-aos="fade-down" className='text-[#69697B] text-[18px] font-jakarta'>Choose how would you like to learn on Academy. You can study full or part-time <br/> in our local programs, or remotely with our online courses.</p>
              </div>
              <div className='container mx-auto py-14'>
                   <div data-aos-delay="5000" data-aos="fade-down" className='grid grid-cols-1 lg:grid-cols-3 gap-9'>
                         <div className='text-center'>
                             <div>
                                    <Image src={pathBg}/>
                             </div>
                             <div className='text-center'>
                                <h3 className='text-[26px] font-jakarta font-semibold'>Instructor-led</h3>
                                <p className='text-[#69697B] font-jakarta py-3'>Lorem ipsum dolor sit amet, consectere <br/> adipiscing elit. Feugiat feuigiat congue viverra facilicsis lorem ipsum</p>
                             </div>
                             <div className='mt-8'>
                                 <a className="border-[#3434ff] text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-medium text-[16px] hover:bg-[#3434ff] hover:text-white hover:-translate-y-2 transition-all cursor-pointer">Learn More</a>
                             </div> 
                         </div>
                         <div className='text-center'>
                             <div>
                                    <Image src={parttime}/>
                             </div>
                             <div className='text-center'>
                                <h3 className='text-[26px] font-jakarta font-semibold'>Self-Paced</h3>
                                <p className='text-[#69697B] font-jakarta py-3'>Lorem ipsum dolor sit amet, consectere <br/> adipiscing elit. Feugiat feuigiat congue viverra facilicsis lorem ipsum</p>
                             </div>
                             <div className='mt-8'>
                                 <a className="border-[#3434ff]  text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-medium text-[16px] hover:bg-[#3434ff] hover:text-white hover:-translate-y-2 cursor-pointer transition-all">Learn More</a>
                             </div> 
                         </div>
                         <div className='text-center'>
                             <div>
                                    <Image src={online}/>
                             </div>
                             <div className='text-center'>
                                <h3 className='text-[26px] font-jakarta font-semibold'>Both</h3>
                                <p className='text-[#69697B] font-jakarta py-3'>Lorem ipsum dolor sit amet, consectere <br/> adipiscing elit. Feugiat feuigiat congue viverra facilicsis lorem ipsum</p>
                             </div>
                             <div className='mt-8'>
                                 <a className="hover:bg-[#3434ff] hover:text-white hover:-translate-y-2 transition-all cursor-pointer border-[#3434ff] text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-medium text-[16px]">Learn More</a>
                             </div> 
                         </div>
                   </div>
              </div>
        </div>
    </div>
  )
}

export default PathSection