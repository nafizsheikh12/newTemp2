import React from 'react';
import Image from "next/image"
import msgicon from "../../../../assets/ui/msgIcon.svg"

const ContactForm = () => {
  return (
    <div>
         <div className='container px-4 sm:px-6 mx-auto'>
              <div className='shadow-2xl p-16 rounded-xl mt-16 lg:mx-52 border-[#D6DDDA] border-t-[0.5px]'>
                     <div className='flex flex-col lg:flex-row justify-center lg:justify-between gap-4 border-b-[1px] border-[#D6DDDA] pb-12'>
                            <div className='text-center lg:text-left order-1 '>
                                 <h1 className='font-jakarta text-[37px] font-bold '>Contact Us</h1>
                                 <p className='font-jakarta text-[#69697b]'>
                                     If you have any questions about Academy, please fill the form below. We will get back to you within 24 hours.
                                 </p>
                            </div>
                            <div className='lg:order-2 shadow-xl m-auto flex justify-center items-center w-[90px] h-[78px] rounded-full'>
                                  <Image src={msgicon}/>
                            </div>
                     </div>
                     <div className='pt-10'>
                          <form>
                                    <div className='mb-5 flex gap-8'> 
                                            <div className='mb-5 w-full pb-3'>
                                                 <label className='font-jakarta font-semibold '>Email</label>
                                                 <input type='email' className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' placeholder='Enter email'/>
                                            </div>
                                            <div className='w-full'>
                                                 <label className='font-jakarta font-semibold'>Password</label>
                                                 <input className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='password' placeholder='Enter password'/>
                                            </div>
                                    </div>
                                    <div className='mb-5 flex gap-8'> 
                                            <div className='mb-5 w-full pb-3'>
                                                 <label className='font-jakarta font-semibold '>Email</label>
                                                 <input type='email' className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' placeholder='Enter email'/>
                                            </div>
                                            <div className='w-full'>
                                                 <label className='font-jakarta font-semibold'>Password</label>
                                                 <input className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4' type='password' placeholder='Enter password'/>
                                            </div>
                                    </div>
                                    <div>
                                           <div className='w-full'>
                                                 <label className='font-jakarta font-semibold'>Password</label>
                                                 <textarea className='w-full px-3 mt-2 border-[#CED4DA] rounded-md py-4'  placeholder='Enter password'/>
                                            </div>
                                    </div>
                                    <div className='pt-8'>
                                    <button className="bg-[#3434ff] px-12 py-5 rounded uppercase text-white text-[18px] font-m font-jakarta cursor-pointer z-10 hover:-translate-y-3	 hover:!bg-[#20228b] transition-all">Send message</button>
                                    </div>
                          </form>
                     </div>
              </div>
         </div>
    </div>
  )
}

export default ContactForm