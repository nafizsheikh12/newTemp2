import Aos from "aos";
import { Accordion } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram, GrTwitter } from "react-icons/gr";
import msgIcon from "../../assets/ui/msg.svg";
import paypal from "../../assets/ui/paypal.svg";
import stripe from "../../assets/ui/stripe.svg";

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="my-9 overflow-hidden px-4 sm:px-6 pt-8">
        <div className="container mx-auto">
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
                    <li className="mb-3">Courses</li>
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
                    <li className="mb-3">Styleguide</li>
                    <li className="mb-3">404 Not Found </li>
                    <li className="mb-3">Password protected</li>
                    <li className="mb-3">Lienses</li>
                    <li className="mb-3">Start Here</li>
                    <li className="mb-3">Changelog</li>
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
                <h2 className="font-jakarta font-bold text-2xl">
                  ilearnaskill
                </h2>
                <div className="flex gap-5 justify-center lg:justify-start mt-4">
                  <div className="border-[#ececf4] hover:bg-[#3434ff] cursor-pointer hover:!text-[#fff] transition-all p-[6px] rounded-full border-2">
                    <a
                      href="https://www.facebook.com/profile.php?id=100094306640217"
                      target="_blank"
                    >
                      <FaFacebookF className="text-[#69697b] hover:text-[#fff]  text-[18px] " />
                    </a>
                  </div>
                  <div className="border-[#ececf4] hover:bg-[#3434ff] cursor-pointer hover:!text-[#fff] transition-all p-[6px] rounded-full border-2">
                    <a
                      href="https://www.instagram.com/ilearnaskill"
                      target="_blank"
                    >
                      <GrInstagram className="text-[#69697b] hover:text-[#fff] text-[18px]" />
                    </a>
                  </div>
                  <div className="border-[#ececf4] hover:bg-[#3434ff] cursor-pointer hover:!text-[#fff] transition-all p-[6px] rounded-full border-2">
                    <a href="https://twitter.com/ilearnaskill" target="_blank">
                      <GrTwitter className="text-[#69697b] hover:text-[#fff] text-[18px]" />
                    </a>
                  </div>
                  <div className="border-[#ececf4] hover:bg-[#3434ff] cursor-pointer hover:!text-[#fff] transition-all p-[6px] rounded-full border-2">
                    <a
                      href="https://www.linkedin.com/in/ilearn-askill-068b58282/"
                      target="_blank"
                    >
                      <BsLinkedin className="text-[#69697b] hover:text-[#fff] text-[18px]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-aos-delay="5000"
              data-aos="fade-right"
              className="col-span-6 lg:block hidden"
            >
              <h2 className="font-jakarta font-semibold pb-4 text-[#3434ff] uppercase">
                Pages
              </h2>
              <div className="grid grid-cols-3">
                <ul className="text-[#69697b] font-semibold">
                  <li className="mb-3 cursor-pointer hover:text-blue-800">
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li className="mb-3  cursor-pointer hover:text-blue-800">
                    <Link href={"/about"}>About</Link>
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-blue-800">
                    <Link href={"/about"}>Courses</Link>
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-blue-800">
                    FAQ
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-blue-800">
                    Become a Partner
                  </li>
                </ul>
                <ul className="text-[#69697b] font-semibold">
                  <li className="mb-3 cursor-pointer hover:text-blue-800">
                    Resource Center
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-blue-800">
                    Careers
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-blue-800">
                    Instructors
                  </li>
                </ul>
                <ul className="text-[#69697b] font-semibold">
                  <li className="mb-3 cursor-pointer hover:text-blue-800">
                    Community
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-blue-800">
                    Learners
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-blue-800">
                    Partners
                  </li>
                  <li className="mb-3 cursor-pointer hover:text-blue-800">
                    Blog
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-aos-delay="5000"
              data-aos="fade-right"
              className="col-span-3 ml-auto hidden lg:block"
            >
              <h2 className="font-jakarta font-semibold pb-4 text-[#3434ff] uppercase">
                Legal
              </h2>
              <ul className="text-[#69697b] font-semibold">
                <li className="mb-3 cursor-pointer hover:text-blue-800">
                  Privacy Policy
                </li>
                <li className="mb-3 cursor-pointer hover:text-blue-800">
                  Cookie Policy
                </li>
                <li className="mb-3 cursor-pointer hover:text-blue-800">
                  Terms of Service
                </li>
                <li className="mb-3 cursor-pointer hover:text-blue-800">
                  Help
                </li>
                <li className="mb-3 cursor-pointer hover:text-blue-800">
                  Accessiblity
                </li>
              </ul>
            </div>
          </div>
          <div
            data-aos-delay="5000"
            data-aos="fade-down"
            className="lg:mt-24 mt-8  border-[#ececf4] border-b-2 pb-11"
          >
            <div className="flex justify-between flex-col lg:flex-row items-center">
              <div className="flex mb-6 lg:mb-0 flex-col lg:flex-row justify-center items-center gap-3">
                <div className="shrink-0 shadow-xl pl-[5px] border-2  w-[70px] h-[70px]  flex items-center justify-center rounded-full">
                  <Image
                    src={msgIcon}
                    width={"40px"}
                    height={"40px"}
                    alt="msg"
                    className="relative left-[5px]"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="font-jakarta font-semibold text-2xl mb-2">
                    Stay Connected with iLearnASkill
                  </h2>
                  <p className="text-[#69697b] font-jakarta font-medium">
                    Join our newsletter and stay up-to-date with the latest
                    learning resources, course updates, and exclusive offers
                    from iLearnASkill. Don't miss out on the opportunities to
                    enhance your skills and knowledge!
                  </p>
                </div>
              </div>
              <div className="flex gap-4 flex-col lg:flex-row w-full lg:w-min">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="py-3  lg:w-[21rem] text-[#69697b]  rounded border-[#cfcfdb]"
                />
                <a className="bg-[#3434ff] cursor-pointer text-center font-semibold px-10 uppercase rounded text-[#ffffff] py-4">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos-delay="5000"
            data-aos="fade-down"
            className="pt-10 lg:pt-12"
          >
            <div className="flex justify-between flex-col lg:flex-row">
              <div className="text-center">
                <p className="text-[#69697b] font-jakarta text-[16px] mb-3 lg:mb-0 md:text-lg font-medium">
                  Copyright © ilearnaskill
                </p>
              </div>
              <div className="flex order-1 items-center gap-5 justify-center lg:gap-4 lg:justify-between">
                <div>
                  <Image src={stripe} />
                </div>
                <div>
                  <Image src={paypal} />
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
