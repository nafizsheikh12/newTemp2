import React from 'react';
import {FiCheck} from "react-icons/fi"

const Success = () => {
  return (
    <div>
           <div className='container mx-auto'>
                <div className='bg-[#6132fd] w-[100px] m-auto h-[100px] rounded-full flex items-center justify-center'>
                      <FiCheck className='text-[45px] text-white font-bold'/>
                </div>
                <div className='text-center mt-7'>
                     <h2 className='font-jakarta font-semibold text-xl mb-3'>Your information has been submitted successfully.</h2>
                     <p className='text-[#878A99]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                </div>
           </div>
    </div>
  )
}

export default Success