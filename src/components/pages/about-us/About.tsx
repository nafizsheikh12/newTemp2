import React from 'react';
import Image from "next/image";
import aboutimg1 from "../../../assets/ui/aboutimg1.jpg"
import aboutimg2 from "../../../assets/ui/aboutimg2.jpeg"
import aboutimg3 from "../../../assets/ui/aboutimg3.jpeg"
import aboutimg4 from "../../../assets/ui/aboutimg4.jpeg";
import about from "../../../assets/ui/mainabout.jpeg";
import study from "../../../assets/ui/study.svg";
import circle from "../../../assets/ui/1.svg";
import sanfransico from "../../../assets/ui/sanfransico.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import {AiOutlinePhone} from "react-icons/ai"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {CiLocationOn} from "react-icons/ci";
import Growmain from "../../../assets/ui/growmain.svg"
import grow1 from "../../../assets/ui/grow1.svg"
import grow3 from "../../../assets/ui/grow3.svg"
import grow2 from "../../../assets/ui/growg.svg"
import avatar from "../../../assets/ui/avatar1.jpg";

// import required modules
import { Navigation,Pagination } from "swiper";

const About = () => {
  return (
    <div className='mt-20'>
         <div>
               <div className='mb-5'>
                        <div className='text-center sm:px-28 xl:px-64 2xl:px-[31rem]'>
                              <h1 className="text-[#0b0b2c] text-[52px] lg:text-[74px] font-bold font-jakarta leading-[58px] lg:leading-[85px]">The mission behind <span className="text-[#3434ff]">Academy.</span></h1>
                              <p className="text-[#69697b] text-[18px] font-normal leading-[1.667em] mb-9 font-jakarta my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique laoreet ut elementum cras cursus. Morbi morbi at diam.</p>
                              <button className="border-[#3434ff] hover:bg-[#3434ff] transition hover:-translate-y-3 hover:text-white text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-medium text-[16px]">our story</button>
                        </div>
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 xl:px-24 mt-24 pb-5'>
                              <div className='flex items-end'>
                                   <Image src={aboutimg1}  className='rounded-2xl'/>
                              </div>
                              <div className='flex items-end'>
                                   <Image src={aboutimg2} className='rounded-2xl'/>
                              </div>
                              <div className='flex items-end'>
                                   <Image src={aboutimg3}  className='rounded-2xl'/>
                              </div>
                              <div className='flex items-start lg:items-end'>
                                   <Image src={aboutimg4}  className='rounded-2xl'/>
                              </div>
                        </div>
               </div>
               <div className='bg-[#fafafa] py-20'>
                    <div className='container mx-auto sm:px-6 px-4'>
                         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                                 <div className='flex justify-center flex-col items-center'>
                                       <h2 className="text-[#0b0b2c] text-[52px] lg:text-[44px] font-bold font-jakarta leading-[58px] lg:leading-[80px] flex items-center">7,000 <span className='text-[#3434ff]'>+</span></h2>
                                       <p className='uppercase text-[#3434ff] font-jakarta font-semibold'>Students</p>
                                 </div>
                                 <div  className='flex justify-center flex-col items-center'>
                                       <h2  className="text-[#0b0b2c] text-[52px] lg:text-[44px] font-bold font-jakarta leading-[58px] lg:leading-[80px] flex items-center">200<span className='text-[#3434ff]'>+</span></h2>
                                       <p className='uppercase text-[#3434ff] font-jakarta font-semibold'>courses</p>
                                 </div>
                                 <div  className='flex justify-center flex-col items-center'>
                                       <h2  className="text-[#0b0b2c] text-[52px] lg:text-[44px] font-bold font-jakarta leading-[58px] lg:leading-[80px] flex items-center">8,000 <span className='text-[#3434ff]'>+</span></h2>
                                       <p className='uppercase text-[#3434ff] font-jakarta font-semibold'>5-Star reviews</p>
                                 </div>
                                 <div  className='flex justify-center flex-col items-center'>
                                       <h2  className="text-[#0b0b2c] text-[52px] lg:text-[44px] font-bold font-jakarta leading-[58px] lg:leading-[80px] flex items-center">75<span className='text-[#3434ff]'>+</span></h2>
                                       <p className='uppercase text-[#3434ff] font-jakarta font-semibold'>teachers</p>
                                 </div>
                         </div>
                    </div>
               </div>
               <div>
                   <div className='container  mx-auto px-4 sm:px-6 pt-28 pb-24 border-b-[1px] border-[#D6DDDA]'>
                          <div className='flex relative flex-col lg:flex-row gap-16  items-center'>
                              <div className=' order-1 lg:order-2'>
                                   <div className=''>
                                       <Image src={about} className='rounded-3xl w-full shadow'/>
                                   </div>
                                   <div className='absolute top-[-11rem] left-[-21rem]'>
                                       <Image src={circle} />
                                   </div>
                              </div>
                              <div className=' lg:order-1 z-20'>
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
               <div className='py-20 '>
                    <div className='container mx-auto px-4 sm:px-6 border-b-[1px] border-[#D6DDDA] pb-24'>
                          <div className='text-center'>
                                <h1 className='font-jakarta text-[35px] leading-[40px] font-semibold'>The Mission<br/> Behind Academy</h1> 
                          </div>
                          <div className='bg-[#F5F7FF] rounded-2xl mt-14 sm:mx-12'>
                              <Swiper
                                   pagination={{
                                    dynamicBullets: true,
                                  }}
                                  modules={[Navigation]}
                                  className="mySwiper "
                                >
                                     <SwiperSlide>
                                        <div className='text-center md:py-16 px-6 lg:px-28 py-16 '>
                                                <div>
                                                     <div>
                                                          <Image src={study}/>
                                                     </div>
                                                     <div>
                                                         <h2 className='font-jakarta text-[30px] font-semibold'>1. Help you Grow</h2>
                                                     </div>
                                                </div>
                                                <div>
                                                    <p className='text-[#69697B] font-jakarta mt-2 mb-5'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blandit vitae ut volutpat nunc nascetur varius. Sit felis sed sem duis.
                                                    </p>
                                                </div>
                                        </div>
                                     </SwiperSlide>
                                     <SwiperSlide>
                                        <div className='text-center md:py-16 px-6 lg:px-28 '>
                                                <div>
                                                     <div>
                                                          <Image src={study}/>
                                                     </div>
                                                     <div>
                                                         <h2 className='font-jakarta text-[30px] font-semibold'>2.Make Education Acessible</h2>
                                                     </div>
                                                </div>
                                                <div>
                                                    <p className='text-[#69697B] font-jakarta mt-2 mb-5'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis cursus turpis in habitant sagittis amet dolor malesuada ut. Volutpat nunc id blandit vitae ut volutpat nunc nascetur varius. Sit felis sed sem duis.
                                                    </p>
                                                </div>
                                        </div>
                                     </SwiperSlide>
                                     
                               </Swiper>
                          </div>
                    </div>
               </div>
               <div className='px-4 sm:px-6'>
                    <div className='container mx-auto mb-4'>
                         <div className='text-center'>
                              <h1 className='font-jakarta text-[35px] pb-1 leading-[40px] font-semibold'>Come and Visit Us</h1>
                              <p className='text-[#69697B] font-jakarta mt-2 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat feugiat congue viverra facilisis. Mauris, volutpat mi libero tellus donec amet netus.</p> 
                         </div>
                         <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 mb-10'>
                             <div className='shadow-xl rounded-xl'>
                                  <div>
                                       <Image src={sanfransico} className='rounded-t-xl'/>
                                  </div>
                                  <div className='p-5'>
                                        <h2  className='font-jakarta text-[26px] pb-1 leading-[40px] font-semibold'>Academy San Fransico</h2>
                                        <div className='flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center'>
                                             <div className='flex  gap-2 items-center'>
                                                    <div>
                                                       <CiLocationOn className='text-[#3434ff] text-[30px]'/>
                                                    </div>
                                                    <div>
                                                       <p className='text-[#69697B] font-jakarta mt-2 mb-5'>216 Eddy St, San Francisco, California (CA), 94102</p>
                                                    </div>
                                             </div>
                                             <div className='flex  gap-2 items-center'>
                                                   <div>
                                                       <AiOutlinePhone className='text-[#3434ff] text-[30px]' />
                                                   </div>
                                                   <div>
                                                      <p className='text-[#69697B] font-jakarta mt-2 mb-5'>(153)5334-2343</p>
                                                   </div>
                                             </div>
                                        </div>
                                  </div>
                             </div>
                             <div className='shadow-xl rounded-xl'>
                                  <div>
                                       <Image src={sanfransico} className='rounded-t-xl'/>
                                  </div>
                                  <div className='p-5'>
                                        <h2  className='font-jakarta text-[26px] pb-1 leading-[40px] font-semibold'>Academy San Fransico</h2>
                                        <div className='flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center'>
                                             <div className='flex gap-2 items-center'>
                                                    <div>
                                                       <CiLocationOn className='text-[#3434ff] text-[30px]'/>
                                                    </div>
                                                    <div>
                                                       <p className='text-[#69697B] font-jakarta mt-2 mb-5'>216 Eddy St, San Francisco, California (CA), 94102</p>
                                                    </div>
                                             </div>
                                             <div className='flex gap-2 items-center'>
                                                   <div>
                                                       <AiOutlinePhone className='text-[#3434ff] text-[30px]' />
                                                   </div>
                                                   <div>
                                                      <p className='text-[#69697B] font-jakarta mt-2 mb-5'>(153)5334-2343</p>
                                                   </div>
                                             </div>
                                        </div>
                                  </div>
                             </div>
                         </div>
                         <div className='flex justify-center'>
                                       <button 
                                           className="bg-[#3434ff] hover:bg-[#2e2e94] hover:text-white hover:-translate-y-2 cursor-pointer transition-all text-[#ffffff] border-2 py-4 uppercase px-8 rounded-lg font-semibold mt-5 text-[16px]"
                                         >
                                                   Our courses
                                         </button>
                         </div>
                    </div>
               </div>
               <div>
                   <div className="my-12 px-4 sm:px-6 md:my-20  pb-10 bg-[#3434ff] ">
                        <div className="relative container  mx-auto flex-col lg:flex-row text-center lg:text-left flex justify-between pt-24 pb-24 gap-14 ">
                             <div className="text-center mb-20 lg:mb-0 lg:text-left">
                                    <h2 className="text-white font-bold font-jakarta text-[35px]">Grow your career!<br/>Start learning with us.</h2>
                                    <p className="text-[#DFDFDF] text-[18px] font-jakarta py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit mattis.</p>
                                    <button className="bg-white text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-semibold mt-5 text-[16px] hover:bg-[#3434ff] hover:text-white hover:-translate-y-2 cursor-pointer transition-all">Our courses</button>
                             </div>
                             <div className="">
                                  <div className="lg:w-[94%] 1xl:w-[100%]">
                                      <Image src={Growmain}/>
                                  </div>
                                 <div className="lg:top-[12%] top-[60%] right-[-3%] w-[31%] lg:w-[13%] lg:right-[-1%]   absolute 1xl:right-[-5%] 1xl:top-[7%] ">
                                      <Image src={grow1}/>
                                 </div>
                                 <div className="w-[16%] right-[83%] top-[74%] absolute 1xl:w-[12%] lg:w-[10%] lg:top-[37%] lg:right-[30%] 1xl:top-[43%] 1xl:right-[30%]">
                                        <Image src={grow2}/>
                                 </div>
                                 <div className="w-[41%] right-[-3%] top-[82%] absolute lg:w-[17%] lg:top-[54%] lg:right-[0%] 1xl:right-[-3%] 1xl:top-[60%]">
                                       <Image src={grow3}/>
                                 </div> 
                             </div>
                        </div>
                    </div>
               </div>
               <div className='px-4 sm:px-6'>
                     <div className='container mx-auto'>
                           <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
                                <div>
                                     <h2  className='font-jakarta text-[38px] pb-1 leading-[40px] font-bold'>Meet Our Teachers</h2>
                                     <p className='text-[#69697B] font-jakarta mt-2 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate</p>
                                </div>
                                <div>
                                     <button className="border-[#3434ff] hover:bg-[#3434ff] transition hover:-translate-y-3 hover:text-white text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-medium text-[16px]">
                                          All Teachers
                                     </button>
                                </div>
                           </div>
                           <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-5 gap-8'>
                                <div className='shadow-xl rounded-xl'>
                                    <div className='p-10 text-center'>
                                         <div>
                                              <Image src={avatar} className='rounded-full hover:-scale-x-105 cursor-pointer transition-all' width={"120px"} height={"120px"}/>
                                         </div>
                                         <div>
                                              <h2 className='font-jakarta text-[22px] pb-1 leading-[40px] font-bold'>John Carter</h2>
                                              <span className='uppercase text-[#3434ff] font-jakarta font-semibold'>Digital marketer</span>
                                              <p className='text-[#69697B] font-jakarta mt-2 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate</p>
                                         </div>
                                         <div>
                                                <button className="border-[#3434ff] hover:bg-[#3434ff] transition hover:-translate-y-3 hover:text-white text-[#3434ff] border-2 py-3 uppercase px-6 rounded font-medium text-[16px]">
                                                     view profile
                                                </button>
                                         </div>
                                    </div>
                                </div>
                                <div className='shadow-xl rounded-xl'>
                                    <div className='p-10 text-center'>
                                         <div>
                                              <Image src={avatar} className='rounded-full hover:-scale-x-105 cursor-pointer transition-all' width={"120px"} height={"120px"}/>
                                         </div>
                                         <div>
                                              <h2 className='font-jakarta text-[22px] pb-1 leading-[40px] font-bold'>John Carter</h2>
                                              <span className='uppercase text-[#3434ff] font-jakarta font-semibold'>Digital marketer</span>
                                              <p className='text-[#69697B] font-jakarta mt-2 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate</p>
                                         </div>
                                         <div>
                                                <button className="border-[#3434ff] hover:bg-[#3434ff] transition hover:-translate-y-3 hover:text-white text-[#3434ff] border-2 py-3 uppercase px-6 rounded font-medium text-[16px]">
                                                     view profile
                                                </button>
                                         </div>
                                    </div>
                                </div>
                                <div className='shadow-xl rounded-xl'>
                                    <div className='p-10 text-center'>
                                         <div>
                                              <Image src={avatar} className='rounded-full hover:-scale-x-105 cursor-pointer transition-all' width={"120px"} height={"120px"}/>
                                         </div>
                                         <div>
                                              <h2 className='font-jakarta text-[22px] pb-1 leading-[40px] font-bold'>John Carter</h2>
                                              <span className='uppercase text-[#3434ff] font-jakarta font-semibold'>Digital marketer</span>
                                              <p className='text-[#69697B] font-jakarta mt-2 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate</p>
                                         </div>
                                         <div>
                                                <button className="border-[#3434ff] hover:bg-[#3434ff] transition hover:-translate-y-3 hover:text-white text-[#3434ff] border-2 py-3 uppercase px-6 rounded font-medium text-[16px]">
                                                     view profile
                                                </button>
                                         </div>
                                    </div>
                                </div>
                           </div>
                     </div>
               </div>

         </div>
    </div>
  )
}

export default About