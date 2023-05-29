import React,{useEffect} from "react";
import { BsLinkedin } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import {GrInstagram} from "react-icons/gr"
import Link from "next/link";
import msgIcon from "../../assets/ui/msg.svg"
import stripe from "../../assets/ui/stripe.svg"
import paypal from "../../assets/ui/paypal.svg"
import Image from "next/image";
import {Accordion } from "flowbite-react";
import Aos from "aos"


const Footer = () => {
  useEffect(() => {
       Aos.init();
     }, [])   
  return (
    <>
       <div className="my-9 overflow-hidden px-4 sm:px-6">
           <div className="container mx-auto border-[#D6DDDA] border-t-2 pt-16">
                {
                    //responsive mobile accoridan
                }
                     <div className="lg:hidden block mb-8">
                           <Accordion alwaysOpen flush={true}>
                              <Accordion.Panel>
                                      <Accordion.Title className="text-[#6132fd] font-semibold font-jakarta text-[25x]">
                                          <h2 className="font-semibold">PAGES</h2>
                                      </Accordion.Title>
                                      <Accordion.Content> 
                                         <ul className="text-[#69697b] font-semibold">
                                              <li className="mb-3">Sales Home</li>
                                              <li className="mb-3">Home</li>
                                              <li className="mb-3">About</li>
                                              <li className="mb-3" >Courses</li>
                                              <li className="mb-3">Individual Course</li>
                                              <li className="mb-3">Video Page</li>
                                         </ul>
                                         <ul className="text-[#69697b] font-semibold">
                                             <li className="mb-3">Resource Center</li>
                                             <li className="mb-3">Blog Post</li>
                                             <li className="mb-3">Events</li>
                                             <li className="mb-3">Individual Event</li>
                                             <li className="mb-3">Teachers</li>
                                         </ul>
                                          <ul className="text-[#69697b] font-semibold">
                                                  <li className="mb-3">Indivdual Teacher</li>
                                                  <li className="mb-3">Contact</li>
                                          </ul>
                                      </Accordion.Content>
                               </Accordion.Panel>
                           </Accordion>

                           <Accordion alwaysOpen flush={true}>
                              <Accordion.Panel>
                                      <Accordion.Title className="text-[#6132fd] font-semibold font-jakarta text-[25x]">
                                          <h2 className="font-semibold uppercase">Utility pages</h2>
                                      </Accordion.Title>
                                      <Accordion.Content> 
                                        <ul className="text-[#69697b] font-semibold">
                                            <li  className="mb-3">Styleguide</li>
                                            <li  className="mb-3">404 Not Found </li>
                                            <li  className="mb-3">Password protected</li>
                                            <li  className="mb-3">Lienses</li>
                                            <li  className="mb-3">Start Here</li>
                                            <li  className="mb-3">Changelog</li>
                                        </ul>
                                      </Accordion.Content>
                               </Accordion.Panel>
                           </Accordion>
                     </div>
                {
                    //responsive mobile accoridan
                }
                <div className="grid grid-cols-12">
                     <div className="col-span-12 text-center lg:text-left lg:col-span-3">
                         <div data-aos-delay="5000" data-aos="fade-down">
                               <h2 className="font-jakarta font-bold text-2xl">ilearnaskill</h2>
                               <div className="flex gap-5 justify-center lg:justify-start mt-4">
                                    <div className="border-[#ececf4] p-[6px] rounded-full border-2">
                                         <FaFacebookF className="text-[#69697b] text-[18px] "/>
                                    </div>
                                    <div className="border-[#ececf4] p-[6px] rounded-full border-2">
                                         <GrInstagram className="text-[#69697b] text-[18px]"/>
                                    </div>
                                    <div className="border-[#ececf4] p-[6px] rounded-full border-2">
                                         <GrTwitter className="text-[#69697b] text-[18px]" />
                                    </div>
                                    <div className="border-[#ececf4] p-[6px] rounded-full border-2">
                                         <BsLinkedin className="text-[#69697b] text-[18px]" />
                                    </div>
                               </div>
                         </div>
                     </div>
                  
                     <div data-aos-delay="5000" data-aos="fade-right" className="col-span-6 lg:block hidden">
                          <h2 className="font-jakarta font-semibold pb-4 text-[#3434ff] uppercase">Pages</h2>
                           <div className="grid grid-cols-3">
                                   <ul className="text-[#69697b] font-semibold">
                                      <li className="mb-3 cursor-pointer hover:text-blue-800"><Link href={"/"}>Home</Link></li>
                                      <li className="mb-3  cursor-pointer hover:text-blue-800"><Link href={"/about"}>About</Link></li>
                                      <li className="mb-3 cursor-pointer hover:text-blue-800"><Link href={"/about"}>Courses</Link></li>
                                      <li className="mb-3 cursor-pointer hover:text-blue-800" >FAQ</li>
                                      <li className="mb-3 cursor-pointer hover:text-blue-800">Become a Partner</li>
                                  </ul>
                                  <ul className="text-[#69697b] font-semibold">
                                      <li className="mb-3 cursor-pointer hover:text-blue-800">Resource Center</li>
                                      <li className="mb-3 cursor-pointer hover:text-blue-800">Careers</li>
                                      <li className="mb-3 cursor-pointer hover:text-blue-800">Instructors</li>
                                      <li className="mb-3 cursor-pointer hover:text-blue-800">Individual Event</li>
                                      <li className="mb-3 cursor-pointer hover:text-blue-800">Teachers</li>
                                  </ul>
                                  <ul className="text-[#69697b] font-semibold">
                                          <li className="mb-3 cursor-pointer hover:text-blue-800">Community</li>
                                          <li className="mb-3 cursor-pointer hover:text-blue-800">Learners</li>
                                          <li className="mb-3 cursor-pointer hover:text-blue-800">Partners</li>
                                          <li className="mb-3 cursor-pointer hover:text-blue-800">Blog</li>
                                  </ul>
                           </div>
                     </div>
                     <div data-aos-delay="5000" data-aos="fade-right" className="col-span-3 ml-auto hidden lg:block">
                          <h2 className="font-jakarta font-semibold pb-4 text-[#3434ff] uppercase">Legal</h2>
                          <ul className="text-[#69697b] font-semibold">
                              <li  className="mb-3 cursor-pointer hover:text-blue-800">Privacy Policy</li>
                              <li  className="mb-3 cursor-pointer hover:text-blue-800">Cookie Policy</li>
                              <li  className="mb-3 cursor-pointer hover:text-blue-800">Password protected</li>
                              <li  className="mb-3 cursor-pointer hover:text-blue-800">Terms of Service</li>
                              <li  className="mb-3 cursor-pointer hover:text-blue-800">Help</li>
                              <li  className="mb-3 cursor-pointer hover:text-blue-800">Accessiblity</li>
                          </ul>
                     </div>
                </div>
                <div data-aos-delay="5000" data-aos="fade-down" className="lg:mt-24 mt-8  border-[#ececf4] border-b-2 pb-11">
                    <div className="flex justify-between flex-col lg:flex-row items-center">
                         <div className="flex mb-6 lg:mb-0 flex-col lg:flex-row justify-center items-center gap-3">
                              <div className="shadow-xl pl-[5px] border-2  w-[70px] h-[70px]  flex items-center justify-center rounded-full">
                                   <Image src={msgIcon} width={"40px"} height={"40px"} alt="msg" className="relative left-[5px]"/>
                              </div>
                              <div className="text-center lg:text-left">
                                   <h2 className="font-jakarta font-semibold text-2xl mb-2">Join our newsletter</h2>
                                   <p className="text-[#69697b] font-jakarta font-medium">Lorem ipsum dolor sit amet, consectetur adi.</p>
                              </div>
                         </div>
                         <div className="flex gap-4 flex-col sm:flex-row">
                              <input type="text" placeholder="Enter your email" className="py-3  text-[#69697b] sm:w-[21rem] rounded border-[#cfcfdb]"/>
                               <a className="bg-[#3434ff] cursor-pointer font-semibold px-10  rounded text-[#ffffff] py-4">Subscribe</a>
                         </div>
                    </div>
                </div>
                <div data-aos-delay="5000" data-aos="fade-down" className="pt-20">
                    <div className="flex justify-between flex-col lg:flex-row">
                         <div className="text-center">
                              <p className="text-[#69697b] font-jakarta text-[16px] mb-3 lg:mb-0 md:text-lg font-medium">Copyright © ilearnaskill</p>
                         </div>
                         <div className="flex order-1 items-center gap-5 justify-center lg:gap-4 lg:justify-between">
                              <div>
                                   <Image src={stripe}/>
                              </div>
                              <div>
                                   <Image src={paypal}/>
                              </div>
                         </div>
                    </div>
                </div>
           </div>
       </div>
    </>
  );
};

export default Footer;
