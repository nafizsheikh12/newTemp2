import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import sanfransico from "../../../assets/business/hands-close-up-with-pen.jpg";
import sanfransico2 from "../../../assets/business/virtual-classroom-study-space.jpg";
import circle from "../../../assets/ui/1.svg";
import aboutimg1 from "../../../assets/ui/aboutimg1.jpg";
import aboutimg2 from "../../../assets/ui/aboutimg2.jpeg";
import aboutimg3 from "../../../assets/ui/aboutimg3.jpeg";
import aboutimg4 from "../../../assets/ui/aboutimg4.jpeg";
import about from "../../../assets/ui/collgue.jpg";
import study from "../../../assets/ui/study.svg";
// Import Swiper styles
import { CiLocationOn } from "react-icons/ci";
import "swiper/css";
import "swiper/css/pagination";
import avatar from "../../../assets/ui/avatar1.jpg";
import avatar2 from "../../../assets/ui/girl.jpg";
import grow1 from "../../../assets/ui/grow1.svg";
import grow3 from "../../../assets/ui/grow3.svg";
import grow2 from "../../../assets/ui/growg.svg";
import Growmain from "../../../assets/ui/growmain.svg";
import avatar3 from "../../../assets/ui/guy.jpg";

// import required modules
import { Navigation } from "swiper";

const About = () => {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="mt-20">
      <div>
        <div className="mb-5">
          <div className="text-center sm:px-28 xl:px-64 2xl:px-[31rem]">
            <h1
              data-aos-duration="10000"
              data-aos="fade-down"
              className="text-[#0b0b2c] text-[52px] lg:text-[74px] font-bold font-jakarta leading-[58px] lg:leading-[85px]"
            >
              Our Guiding
              <br /> <span className="text-[#3434ff]">Mission.</span>
            </h1>
            <p
              data-aos-duration="10000"
              data-aos="fade-down"
              className="text-[#69697b] text-[18px] font-normal leading-[1.667em] mb-9 font-jakarta my-6"
            >
              Our mission is to make learning accessible and enjoyable for all.
              We aim to empower individuals through knowledge, fostering
              lifelong learning and personal growth.
            </p>
            <button
              data-aos-duration="10000"
              data-aos="fade-down"
              className="border-[#3434ff] hover:bg-[#3434ff] tracking-[1px] transition hover:-translate-y-3 hover:text-white text-[#3434ff] border-[1px] py-5 uppercase px-11 rounded font-medium text-[17px]"
            >
              our story
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 xl:px-24 mt-24 pb-5">
            <div
              data-aos-duration="10000"
              data-aos="fade-down"
              className="flex items-end"
            >
              <Image src={aboutimg1} className="rounded-2xl" />
            </div>
            <div
              data-aos-duration="10000"
              data-aos="fade-down"
              className="flex items-end"
            >
              <Image src={aboutimg2} className="rounded-2xl" />
            </div>
            <div
              data-aos-duration="10000"
              data-aos="fade-down"
              className="flex items-end"
            >
              <Image src={aboutimg3} className="rounded-2xl" />
            </div>
            <div
              data-aos-duration="10000"
              data-aos="fade-down"
              className="flex items-start lg:items-end"
            >
              <Image src={aboutimg4} className="rounded-2xl" />
            </div>
          </div>
        </div>
        <div className="bg-[#fafafa] py-20">
          <div className="container mx-auto sm:px-6 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div
                data-aos-duration="10000"
                data-aos="fade-down"
                className="flex justify-center flex-col items-center"
              >
                <h2 className="text-[#0b0b2c] text-[52px] lg:text-[44px] font-bold font-jakarta leading-[58px] lg:leading-[80px] flex items-center">
                  7,000 <span className="text-[#3434ff]">+</span>
                </h2>
                <p className="uppercase text-[#3434ff] text-[20px] tracking-[.1rem] font-jakarta font-semibold">
                  Students
                </p>
              </div>
              <div
                data-aos-duration="10000"
                data-aos="fade-down"
                className="flex justify-center flex-col items-center"
              >
                <h2 className="text-[#0b0b2c] text-[52px] lg:text-[44px] font-bold font-jakarta leading-[58px] lg:leading-[80px] flex items-center">
                  200<span className="text-[#3434ff]">+</span>
                </h2>
                <p className="uppercase text-[20px] tracking-[.1rem] text-[#3434ff] font-jakarta font-semibold">
                  courses
                </p>
              </div>
              <div
                data-aos-duration="10000"
                data-aos="fade-down"
                className="flex justify-center flex-col items-center"
              >
                <h2 className="text-[#0b0b2c] text-[52px] lg:text-[44px] font-bold font-jakarta leading-[58px] lg:leading-[80px] flex items-center">
                  8,000 <span className="text-[#3434ff]">+</span>
                </h2>
                <p className="uppercase text-[20px] tracking-[.1rem] text-[#3434ff] font-jakarta font-semibold">
                  5-Star reviews
                </p>
              </div>
              <div
                data-aos-duration="10000"
                data-aos="fade-down"
                className="flex justify-center flex-col items-center"
              >
                <h2 className="text-[#0b0b2c] text-[52px] lg:text-[44px] font-bold font-jakarta leading-[58px] lg:leading-[80px] flex items-center">
                  75<span className="text-[#3434ff]">+</span>
                </h2>
                <p className="uppercase text-[20px] tracking-[.1rem] text-[#3434ff] font-jakarta font-semibold">
                  teachers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container  mx-auto px-4 sm:px-6 pt-28 pb-28 border-b-[1px] border-[#D6DDDA]">
            <div className="flex relative flex-col lg:flex-row gap-16  items-center">
              <div
                data-aos-duration="10000"
                data-aos="fade-down"
                className=" order-1 lg:order-2"
              >
                <div className="">
                  <Image src={about} className="rounded-3xl w-full shadow" />
                </div>
                <div className="absolute top-[-11rem] left-[-21rem]">
                  <Image src={circle} />
                </div>
              </div>
              <div
                data-aos-duration="10000"
                data-aos="fade-down"
                className=" lg:order-1 z-20"
              >
                <h1 className="font-jakarta text-[36px] font-semibold">
                  About ilearnaskill
                </h1>
                <div>
                  <p className="text-[#69697B] text-[18px] font-jakarta mt-3 mb-5">
                    Founded with a vision to make skill learning accessible for
                    all, iLearnASkill is more than just a platform - it's a
                    community of lifelong learners.
                  </p>
                  <p className="text-[#69697B] text-[18px] font-jakarta mb-12">
                    Our team is dedicated to curating the best learning
                    resources and creating a supportive environment where
                    anyone, regardless of their background or previous
                    experience, can learn a new skill.
                  </p>
                </div>
                <button className="border-[#3434ff] hover:bg-[#3434ff] transition hover:-translate-y-3 hover:text-white text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-medium text-[16px]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20 ">
          <div className="container mx-auto px-4 sm:px-6 border-b-[1px] border-[#D6DDDA] pb-24">
            <div
              data-aos-duration="10000"
              data-aos="fade-down"
              className="text-center"
            >
              <h1 className="font-jakarta text-[35px] leading-[40px] font-semibold">
                The Vission of iLearnASkill
              </h1>
            </div>
            <div
              data-aos-duration="10000"
              data-aos="fade-down"
              className="bg-[#F5F7FF] rounded-2xl mt-14 sm:mx-12"
            >
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Navigation]}
                className="mySwiper "
              >
                <SwiperSlide>
                  <div className="text-center md:py-16 px-6 lg:px-28 py-16 ">
                    <div>
                      <div>
                        <Image src={study} />
                      </div>
                      <div>
                        <h2 className="font-jakarta text-[30px] font-semibold">
                          1. Empowering Education Equity
                        </h2>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#69697B] font-jakarta mt-2 mb-5">
                        Enabling education for the less privileged by breaking
                        down barriers and providing equal opportunities for
                        learning, empowering individuals to overcome
                        socio-coconomic challenges through knowledge.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="text-center md:py-16 px-6 lg:px-28 ">
                    <div>
                      <div>
                        <Image src={study} />
                      </div>
                      <div>
                        <h2 className="font-jakarta text-[30px] font-semibold">
                          2.Accessible Education for All
                        </h2>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#69697B] font-jakarta mt-2 mb-5">
                        Making education universally accessible by removing
                        barriers of location, affordability, and background,
                        fostering inclusivity and empowering individuals from
                        diverse communities to unlock their full potential
                        through
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-6">
          <div className="container mx-auto mb-4">
            <div className="text-center">
              <h1
                data-aos-duration="10000"
                data-aos="fade-down"
                className="font-jakarta text-[35px] pb-1 leading-[40px] font-semibold"
              >
                Explore Our Platform
              </h1>
              <p
                data-aos-duration="10000"
                data-aos="fade-down"
                className="text-[#69697B] font-jakarta mt-2 mb-5"
              >
                Dive into iLearnASkill online! Explore our digital platform,
                engage with our dedicated instructors, join our vibrant online
                community, and experience the transformative power of learning,
                all at your fingertips.
              </p>
            </div>
            <div
              data-aos-duration="10000"
              data-aos="fade-down"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 mb-10"
            >
              <div className="shadow-xl rounded-xl">
                <div>
                  <Image src={sanfransico} className="rounded-t-xl" />
                </div>
                <div className="p-5">
                  <h2 className="font-jakarta text-[26px] pb-1 leading-[40px] font-semibold">
                    ilearnaskill USA
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center">
                    <div className="flex  gap-2 items-center">
                      <div>
                        <CiLocationOn className="text-[#3434ff] text-[30px]" />
                      </div>
                      <div>
                        <p className="text-[#69697B] font-jakarta mt-2 mb-5">
                          216 Eddy St, San Francisco, California (CA), 94102
                        </p>
                      </div>
                    </div>
                    <div className="flex  gap-2 items-center">
                      <div>
                        <AiOutlinePhone className="text-[#3434ff] text-[30px]" />
                      </div>
                      <div>
                        <p className="text-[#69697B] font-jakarta mt-2 mb-5">
                          (153)5334-2343
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-xl rounded-xl">
                <div>
                  <Image src={sanfransico2} className="rounded-t-xl" />
                </div>
                <div className="p-5">
                  <h2 className="font-jakarta text-[26px] pb-1 leading-[40px] font-semibold">
                    ilearnaskill Africa
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center">
                    <div className="flex gap-2 items-center">
                      <div>
                        <CiLocationOn className="text-[#3434ff] text-[30px]" />
                      </div>
                      <div>
                        <p className="text-[#69697B] font-jakarta mt-2 mb-5">
                          216 Eddy St, Africa, zimbo (CA), 94102
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div>
                        <AiOutlinePhone className="text-[#3434ff] text-[30px]" />
                      </div>
                      <div>
                        <p className="text-[#69697B] font-jakarta mt-2 mb-5">
                          (153)5334-2343
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos-duration="10000"
              data-aos="fade-down"
              className="flex justify-center"
            >
              <button className="bg-[#3434ff] hover:bg-[#2e2e94] hover:text-white hover:-translate-y-2 cursor-pointer transition-all text-[#ffffff]  py-5 uppercase px-10 rounded font-semibold mt-5 text-[16px]">
                Our courses
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="my-12 px-4 sm:px-6 md:my-20  pb-10 bg-[#3434ff] ">
            <div className="relative container  mx-auto  text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 pt-24 pb-24 gap-14 ">
              <div className="text-center mb-20 lg:mb-0 lg:text-left">
                <h2
                  data-aos-delay="5000"
                  data-aos="fade-down"
                  className="text-white font-bold tracking-[2px] font-jakarta text-[38px] leading-[43px]"
                >
                  Grow your career!
                  <br />
                  Start learning with us.
                </h2>
                <p
                  data-aos-delay="5000"
                  data-aos="fade-down"
                  className="text-[#fff] text-[18px] font-jakarta py-5"
                >
                  Transform your career prospects with iLearnASkill! Start your
                  journey with us and unlock unparalleled learning experiences
                  that drive your professional growth and open new
                  opportunities.
                </p>
                <button
                  data-aos-delay="5000"
                  data-aos="fade-down"
                  className="bg-white text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-semibold mt-5 text-[16px] hover:bg-[#3434ff] hover:text-white hover:-translate-y-2 cursor-pointer transition-all"
                >
                  Our courses
                </button>
              </div>
              <div className="text-center">
                <div className="lg:w-[94%] 1xl:w-[100%]">
                  <Image src={Growmain} />
                </div>
                <div
                  data-aos-delay="10000"
                  data-aos="fade-down"
                  className="lg:top-[12%] sm:top-[47%] sm:right-[-2%] top-[60%] right-[-3%] w-[31%] lg:w-[13%] lg:right-[-1%]   absolute 1xl:right-[2%] 1xl:top-[7%] "
                >
                  <Image src={grow1} />
                </div>
                <div
                  data-aos-duration="10000"
                  data-aos="fade-down"
                  className="w-[20%] right-[83%] md:right-[71%] md:top-[59%] sm:top-[70%] sm:right-[82%] top-[79%] absolute 1xl:w-[12%] lg:w-[10%] lg:top-[37%] lg:right-[40%] 1xl:top-[39%] 1xl:right-[36%]"
                >
                  <Image src={grow2} />
                </div>
                <div
                  data-aos-duration="10000"
                  data-aos="fade-down"
                  className="w-[41%] right-[2%] top-[82%] sm:right-[-2%] absolute lg:w-[17%] lg:top-[54%] lg:right-[0%] 1xl:right-[-3%] 1xl:top-[60%]"
                >
                  <Image src={grow3} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
              <div>
                <h2
                  data-aos-duration="10000"
                  data-aos="fade-down"
                  className="font-jakarta text-[38px] pb-1 leading-[40px] font-bold"
                >
                  Meet Our Instructors
                </h2>
                <p
                  data-aos-duration="10000"
                  data-aos="fade-down"
                  className="text-[#69697B] text-lg font-jakarta mt-2 mb-5"
                >
                  Meet our passionate educators, committed to your learning
                  journey and success.
                </p>
              </div>
              <div>
                <button
                  data-aos-duration="10000"
                  data-aos="fade-down"
                  className="border-[#3434ff] hover:bg-[#3434ff] transition hover:-translate-y-3 hover:text-white text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-medium text-[16px]"
                >
                  All Instructors
                </button>
              </div>
            </div>
            <div
              data-aos-duration="10000"
              data-aos="fade-down"
              className="pb-[8rem] border-b-[1px] border-[#69697b29] grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-7 gap-8"
            >
              <div className="shadow-xl rounded-2xl">
                <div className="p-10 text-center">
                  <div>
                    <Image
                      src={avatar3}
                      className="rounded-full hover:-scale-x-105 cursor-pointer transition-all"
                      width={"120px"}
                      height={"120px"}
                    />
                  </div>
                  <div>
                    <h2 className="font-jakarta text-[22px] pb-1 leading-[40px] font-bold">
                      Jane Smith
                    </h2>
                    <span className="uppercase text-[#3434ff] font-jakarta font-semibold">
                      Introduction to Cybersecurity
                    </span>
                    <p className="text-[#69697B] font-jakarta mt-2 mb-5">
                      Jane demystifies cybersecurity concepts with engaging
                      teaching methods.
                    </p>
                  </div>
                  <div>
                    <button className="border-[#3434ff] hover:bg-[#3434ff] transition hover:-translate-y-3 hover:text-white text-[#3434ff] border-2 py-3 uppercase px-6 rounded font-medium text-[16px]">
                      view profile
                    </button>
                  </div>
                </div>
              </div>
              <div className="shadow-xl rounded-2xl">
                <div className="p-10 text-center">
                  <div>
                    <Image
                      src={avatar}
                      className="rounded-full hover:-scale-x-105 cursor-pointer transition-all"
                      width={"120px"}
                      height={"120px"}
                    />
                  </div>
                  <div>
                    <h2 className="font-jakarta text-[22px] pb-1 leading-[40px] font-bold">
                      Michael Johnson
                    </h2>
                    <span className="uppercase text-[#3434ff] font-jakarta font-semibold">
                      Web Programming
                    </span>
                    <p className="text-[#69697B] font-jakarta mt-2 mb-5">
                      Michael combines theory and practice to teach advanced
                      cybersecurity.
                    </p>
                  </div>
                  <div>
                    <button className="border-[#3434ff] hover:bg-[#3434ff] transition hover:-translate-y-3 hover:text-white text-[#3434ff] border-2 py-3 uppercase px-6 rounded font-medium text-[16px]">
                      view profile
                    </button>
                  </div>
                </div>
              </div>
              <div className="shadow-xl rounded-2xl">
                <div className="p-10 text-center">
                  <div>
                    <Image
                      src={avatar2}
                      className="rounded-full hover:-scale-x-105 cursor-pointer transition-all"
                      width={"120px"}
                      height={"120px"}
                    />
                  </div>
                  <div>
                    <h2 className="font-jakarta text-[22px] pb-1 leading-[40px] font-bold">
                      Lisa Williams
                    </h2>
                    <span className="uppercase text-[#3434ff] font-jakarta font-semibold">
                      Python
                    </span>
                    <p className="text-[#69697B] font-jakarta mt-2 mb-5">
                      Lisa brings a practical, hands-on approach to Python
                      programming, simplifying complex concepts.
                    </p>
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
  );
};

export default About;
