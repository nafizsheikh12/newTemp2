import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import msgIcon from "../../assets/ui/msg.svg"
import stripe from "../../assets/ui/stripe.svg"
import paypal from "../../assets/ui/paypal.svg"
import Image from "next/image"


const Footer = () => {
  return (
    <>
       <div className="my-9">
           <div className="container mx-auto border-[#D6DDDA] border-t-2 pt-16">
                <div className="grid grid-cols-12">
                     <div className="col-span-3">
                         <div>
                               <h2 className="font-jakarta font-bold text-2xl">Academy</h2>
                               <div className="flex gap-5 mt-4">
                                    <div className="border-[#ececf4] p-[6px] rounded-full border-2">
                                         <FaFacebookF className="text-[#69697b] text-[18px] "/>
                                    </div>
                                    <div className="border-[#ececf4] p-[6px] rounded-full border-2">
                                         <FaFacebookF className="text-[#69697b] text-[18px]"/>
                                    </div>
                                    <div className="border-[#ececf4] p-[6px] rounded-full border-2">
                                         <FaFacebookF className="text-[#69697b] text-[18px]" />
                                    </div>
                               </div>
                         </div>
                     </div>
                     <div className="col-span-6">
                          <h2 className="font-jakarta font-semibold pb-4 text-[#3434ff] uppercase">Pages</h2>
                           <div className="grid grid-cols-3">
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
                           </div>
                     </div>
                     <div className="col-span-3 ml-auto">
                          <h2 className="font-jakarta font-semibold pb-4 text-[#3434ff] uppercase">Utility pages</h2>
                          <ul className="text-[#69697b] font-semibold">
                              <li  className="mb-3">Styleguide</li>
                              <li  className="mb-3">404 Not Found </li>
                              <li  className="mb-3">Password protected</li>
                              <li  className="mb-3">Lienses</li>
                              <li  className="mb-3">Start Here</li>
                              <li  className="mb-3">Changelog</li>
                          </ul>
                     </div>
                </div>
                <div className="mt-24 border-[#ececf4] border-b-2 pb-11">
                    <div className="flex justify-between items-center">
                         <div className="flex items-center gap-3">
                              <div className="shadow border-2 border-black w-[70px] h-[70px]  flex items-center justify-center rounded-full">
                                   <Image src={msgIcon} alt="msg" className="relative left-[2px]"/>
                              </div>
                              <div>
                                   <h2 className="font-jakarta font-semibold text-2xl">Join our newsletter</h2>
                                   <p className="text-[#69697b] font-jakarta font-medium">Lorem ipsum dolor sit amet, consectetur adi.</p>
                              </div>
                         </div>
                         <div className="flex gap-4">
                              <input type="text" placeholder="Enter your email" className="py-3 text-[#69697b] w-[21rem] rounded border-[#cfcfdb]"/>
                               <a className="bg-[#3434ff] font-semibold px-10  rounded text-[#ffffff] py-4">Subscribe</a>
                         </div>
                    </div>
                </div>
                <div className="pt-20">
                    <div className="flex justify-between">
                         <div>
                              <p className="text-[#69697b] font-jakarta text-lg font-medium">Copyright © Academy | Designed by <span className="text-[#3434ff]">BRIX Templates</span> - Powered by <span className="text-[#3434ff]">Webflow</span></p>
                         </div>
                         <div className="flex items-center justify-between">
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
