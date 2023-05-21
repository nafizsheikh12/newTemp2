import React from 'react';
import pathBg from "../../../../assets/ui/pathsvg.svg";
import Image from "next/image"

const PathSection = () => {
  return (
    <div>
        <div>
              <div className='container mx-auto text-center'>
                   <h2 className='text-[40px] font-jakarta font-semibold'>Choose Your Path</h2>
                   <p className='text-[#69697B] text-[18px] font-jakarta'>Choose how would you like to learn on Academy. You can study full or part-time <br/> in our local programs, or remotely with our online courses.</p>
              </div>
              <div className='container mx-auto py-14'>
                   <div className='grid grid-cols-3 gap-9'>
                         <div className='text-center'>
                             <div>
                                    <Image src={pathBg}/>
                             </div>
                             <div className='text-center'>
                                <h3 className='text-[26px] font-jakarta font-semibold'>Full-Time</h3>
                                <p className='text-[#69697B] font-jakarta py-3'>Lorem ipsum dolor sit amet, consectere <br/> adipiscing elit. Feugiat feuigiat congue viverra facilicsis lorem ipsum</p>
                             </div>
                             <div className='mt-8'>
                                 <a className="border-[#3434ff] text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-medium text-[16px]">Learn More</a>
                             </div> 
                         </div>
                         <div className='text-center'>
                             <div>
                                    <Image src={pathBg}/>
                             </div>
                             <div className='text-center'>
                                <h3 className='text-[26px] font-jakarta font-semibold'>Full-Time</h3>
                                <p className='text-[#69697B] font-jakarta py-3'>Lorem ipsum dolor sit amet, consectere <br/> adipiscing elit. Feugiat feuigiat congue viverra facilicsis lorem ipsum</p>
                             </div>
                             <div className='mt-8'>
                                 <a className="border-[#3434ff] text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-medium text-[16px]">Learn More</a>
                             </div> 
                         </div>
                         <div className='text-center'>
                             <div>
                                    <Image src={pathBg}/>
                             </div>
                             <div className='text-center'>
                                <h3 className='text-[26px] font-jakarta font-semibold'>Full-Time</h3>
                                <p className='text-[#69697B] font-jakarta py-3'>Lorem ipsum dolor sit amet, consectere <br/> adipiscing elit. Feugiat feuigiat congue viverra facilicsis lorem ipsum</p>
                             </div>
                             <div className='mt-8'>
                                 <a className="border-[#3434ff] text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-medium text-[16px]">Learn More</a>
                             </div> 
                         </div>
                   </div>
              </div>
        </div>
    </div>
  )
}

export default PathSection