import React from "react";
import dynamic from "next/dynamic";
import ContactForm from "./contactForm/ContactForm";
import { BsLinkedin } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import {GrInstagram} from "react-icons/gr";
import {Accordion } from "flowbite-react";
import Image from "next/image";
import Growmain from "../../../assets/ui/growmain.svg"
import grow1 from "../../../assets/ui/grow1.svg"
import grow3 from "../../../assets/ui/grow3.svg"
import grow2 from "../../../assets/ui/growg.svg"

const Contact = () => {
  return (
    <>
      <ContactForm />
      <div className="pt-24">
         <div className="container px-4 sm:px-6 mx-auto">
              <div className="text-center">
                   <h1 className='font-jakarta text-[36px] font-bold pb-3'>Need more information?</h1>
                   <p className='font-jakarta text-[#69697b]'>
                        If you want to reach out directly, feel free to get in touch using the contact information below.
                   </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 pt-20 border-b-[1px] border-[#D6DDDA] pb-24">
                    <div className="shadow-xl p-7 py-5 rounded-lg">
                           <h3 className='font-jakarta text-[27px] font-bold mb-5'>Phone</h3>
                           <div>
                                <h4 className='font-jakarta uppercase text-[17px] font-semibold text-[#3434ff] '>Sanfransicisco</h4>
                                <h4 className='font-jakarta text-[23px] font-semibold '>(415)701 - 3234</h4>
                           </div>
                           <div className="mt-8">
                                <h4 className='font-jakarta uppercase text-[17px] font-semibold text-[#3434ff]'>New york</h4>
                                <h4 className='font-jakarta text-[23px] font-semibold '>(415)701 - 3234</h4>
                           </div>
                    </div>
                    <div className="shadow-xl p-7 py-5 rounded-lg">
                           <h3 className='font-jakarta text-[27px] font-bold mb-5'>Phone</h3>
                           <div>
                                <h4 className='font-jakarta uppercase text-[17px] font-semibold text-[#3434ff] '>Sanfransicisco</h4>
                                <h4 className='font-jakarta text-[23px] font-semibold '>(415)701 - 3234</h4>
                           </div>
                           <div className="mt-8">
                                <h4 className='font-jakarta uppercase text-[17px] font-semibold text-[#3434ff]'>New york</h4>
                                <h4 className='font-jakarta text-[23px] font-semibold '>(415)701 - 3234</h4>
                           </div>
                    </div>
                    <div className="shadow-xl p-7 py-5 rounded-lg">
                           <h3 className='font-jakarta text-[25px] font-bold mb-5'>Social Media</h3>
                           <div>
                                <div className="flex items-center gap-2 mb-5">
                                      <div className="bg-[#3434ff] w-7 h-7 rounded-full flex items-center justify-center">
                                           <FaFacebookF className="text-lg text-white"/>
                                      </div>
                                      <div>
                                           <h4 className='font-jakarta text-[20px] font-semibold'>Academy</h4>
                                      </div>
                                </div>
                                <div  className="flex items-center gap-2 mb-5">
                                     <div className="bg-[#3434ff] w-7 h-7 rounded-full flex items-center justify-center">
                                           <BsLinkedin className="text-sm text-white"/>
                                      </div>
                                      <div>
                                           <h4 className='font-jakarta text-[20px] font-semibold'>Academy</h4>
                                      </div>
                                </div>
                                <div  className="flex items-center gap-2 mb-5">
                                     <div className="bg-[#3434ff] w-7 h-7 rounded-full flex items-center justify-center">
                                           <GrTwitter className="text-sm text-white"/>
                                      </div>
                                      <div>
                                           <h4 className='font-jakarta text-[20px] font-semibold'>Academy</h4>
                                      </div>
                                </div>
                                <div  className="flex items-center gap-2 mb-5">
                                     <div className="bg-[#3434ff] w-7 h-7 rounded-full flex items-center justify-center">
                                           <GrInstagram className="text-sm text-white"/>
                                      </div>
                                      <div>
                                           <h4 className='font-jakarta text-[20px] font-semibold'>Academy</h4>
                                      </div>
                                </div>
                           </div>
                    </div>
              </div>
              <div>
                    <div className="text-center pt-20 border-b-[1px] border-[#D6DDDA] pb-14">
                          <h1 className='font-jakarta text-[35px] font-bold pb-3'>Frequently Asked Question</h1>
                    </div>
                    <div className="pt-14">
                          <Accordion alwaysOpen flush={true}>
                              <Accordion.Panel>
                                      <Accordion.Title className="text-[#6132fd] font-semibold font-jakarta text-[25x]">
                                          <h2 className="font-bold  text-lg">What are the course payment methods?</h2>
                                      </Accordion.Title>
                                      <Accordion.Content> 
                                           <p className='font-jakarta text-[#69697b]'>If you want to reach out directly, feel free to get in touch using the contact information below.</p>
                                      </Accordion.Content>
                               </Accordion.Panel>
                           </Accordion>
                    </div>
                    <div className="pt-8">
                          <Accordion alwaysOpen flush={true}>
                              <Accordion.Panel>
                                      <Accordion.Title className="text-[#6132fd] font-semibold font-jakarta text-[25x]">
                                          <h2 className="font-bold  text-lg">What are the course payment methods?</h2>
                                      </Accordion.Title>
                                      <Accordion.Content> 
                                           <p className='font-jakarta text-[#69697b]'>If you want to reach out directly, feel free to get in touch using the contact information below.</p>
                                      </Accordion.Content>
                               </Accordion.Panel>
                           </Accordion>
                    </div>
                    <div className="pt-8">
                          <Accordion alwaysOpen flush={true}>
                              <Accordion.Panel>
                                      <Accordion.Title className="text-[#6132fd] font-semibold font-jakarta text-[25x]">
                                          <h2 className="font-bold  text-lg mb-2">What are the course payment methods?</h2>
                                      </Accordion.Title>
                                      <Accordion.Content> 
                                           <p className='font-jakarta text-[#69697b]'>If you want to reach out directly, feel free to get in touch using the contact information below.</p>
                                      </Accordion.Content>
                               </Accordion.Panel>
                           </Accordion>
                    </div>
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
    </>
  );
};

export default Contact;
