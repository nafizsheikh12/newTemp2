import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import circle from "../../../../assets/ui/1.svg";
import aboutbg from "../../../../assets/ui/aboutbg.jpg";

const About = () => {
  const app = useRef<any>(null);
  const imganim = useRef<any>(null);
  const textanim = useRef<any>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      imganim.current,
      {
        opacity: 0,
      },
      {
        ease: "power4.out",
        delay: 0.1,
        skewY: 0,
        scale: 1,
        stagger: 0.01,
        duration: 3,
        opacity: 1,
        scrollTrigger: {
          trigger: app.current,
          start: "top center bottom",
        },
      }
    );

    const pin2 = gsap.fromTo(
      textanim.current,
      {
        opacity: 0,
      },
      {
        ease: "power4.out",
        delay: 0.1,
        skewY: 0,
        y: 0,
        scale: 1,
        stagger: 0.05,
        duration: 3,
        opacity: 1,
        scrollTrigger: {
          trigger: app.current,
          start: "top center bottom",
        },
      }
    );

    return () => {
      pin2.kill();
      pin.kill();
    };
  });

  return (
    <div ref={app}>
      <div className="container  mx-auto px-4 sm:px-6 pt-28 pb-24 border-b-[1px] border-[#D6DDDA]">
        <div className="flex flex-col  lg:grid lg:grid-cols-12 relative  gap-16  items-center">
          <div className=" lg:col-span-7 order-1 lg:order-2">
            <div ref={imganim} className="scale-[0.8] opacity-0">
              <Image src={aboutbg} className="rounded-3xl w-full" />
            </div>
            <div className="absolute top-[-11rem] left-[-21rem]">
              <Image src={circle} />
            </div>
          </div>
          <div
            className=" lg:order-2 translate-y-[200px] opacity-1 lg:col-span-5"
            ref={textanim}
          >
            <h1 className="font-jakarta text-[36px] font-semibold">
              About iLearnASkill
            </h1>
            <div>
              <p className="text-[#69697B] font-jakarta mt-3 mb-5">
                Founded with a vision to make skill learning accessible for all,
                iLearnASkill is more than just a platform - it's a community of
                lifelong learners.
              </p>
              <p className="text-[#69697B]  font-jakarta mb-12">
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
