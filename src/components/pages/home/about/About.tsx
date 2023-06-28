import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import circle from "../../../../assets/ui/1.svg";
import aboutbg from "../../../../assets/ui/aboutbg.jpg";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <div className="container  mx-auto px-4 sm:px-6 pt-28 pb-24 border-b-[1px] border-[#D6DDDA]">
        <div className="flex flex-col  lg:grid lg:grid-cols-12 relative  gap-16  items-center">
          <div className=" lg:col-span-7 order-1 lg:order-2">
            <div data-aos-duration="1" data-aos="fade-down">
              <Image src={aboutbg} className="rounded-3xl w-full" />
            </div>
            <div className="absolute top-[-11rem] left-[-21rem]">
              <Image src={circle} />
            </div>
          </div>
          <div
            data-aos-delay="5000"
            data-aos="fade-down"
            className=" lg:order-2  lg:col-span-5 "
          >
            <h1
              className="font-jakarta text-[36px] font-semibold"
              data-aos-duration="1"
              data-aos="fade-down"
            >
              About Academy
            </h1>
            <div>
              <p
                className="text-[#69697B] font-jakarta mt-3 mb-5"
                data-aos-duration="1"
                data-aos="fade-down"
              >
                Founded with a vision to make skill learning accessible for all,
                iLearnASkill is more than just a platform - it's a community of
                lifelong learners.
              </p>
              <p
                className="text-[#69697B]  font-jakarta mb-12"
                data-aos-duration="1"
                data-aos="fade-down"
              >
                Our team is dedicated to curating the best learning resources
                and creating a supportive environment where anyone, regardless
                of their background or previous experience, can learn a new
                skill.
              </p>
            </div>
            <button className="border-[#3434ff] hover:bg-[#3434ff] transition hover:-translate-y-3 hover:text-white text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-medium text-[16px]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
