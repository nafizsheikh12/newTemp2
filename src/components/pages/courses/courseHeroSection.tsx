import { gsap } from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import cir1 from "../../../assets/ui/1.svg";
import cir2 from "../../../assets/ui/2.svg";
import circle1 from "../../../assets/ui/circle1.svg";
import circle2 from "../../../assets/ui/circle2.svg";
import courseBg from "../../../assets/ui/collgue.jpg";

const CourseHeroSection = () => {
  const app = useRef<any>();
  const circle = useRef<any>();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.to(".courses", {
        y: 0,
        ease: "power4.out",
        delay: 0.1,
        skewY: 0,
        stagger: 0.01,
        duration: 2,
        opacity: 1,
      });
      // or refs
      gsap.to(circle.current, {
        y: 0,
        ease: "power4.out",
        delay: 0.1,
        skewY: 0,
        scale: 1,
        stagger: 0.01,
        duration: 2,
        opacity: 1,
      });
    }, app);

    return () => ctx.revert();
  });

  return (
    <>
      <div
        className="pt-[82px] px-4 sm:px-6 lg:pb-[112px] overflow-hidden"
        ref={app}
      >
        <div className="container px-4  mx-auto relative">
          <div className="grid grid-cols-12 lg:grid-cols-12 gap-4 lg:gap-[100px] items-center relative pb-10 ">
            <div className="opacity-0 courses translate-y-[-200px] col-span-12 z-20 mb-14 lg:mb-0 lg:col-span-5 text-center lg:text-left">
              <h1
                data-aos-delay="5000"
                data-aos="fade-down"
                className="text-[#0b0b2c] text-[52px] lg:text-[70px]  font-black font-jakarta leading-[35px]"
              >
                Courses
              </h1>
              <p
                data-aos-delay="5000"
                data-aos="fade-down"
                className="text-[#69697b] text-[18px] font-normal leading-[1.667em] mb-12 font-jakarta my-6"
              >
                Master New Skills, Anywhere, Anytime. Experience expert-led,
                flexible learning with iLearnASkill – your gateway to success is
                just a click away.
              </p>
              <a href="#course">
                <button className="bg-[#3434ff] px-8 py-5 rounded uppercase font-bold tracking-[1px] text-white text-[18px]  font-jakarta cursor-pointer z-10 hover:-translate-y-3	 hover:!bg-[#20228b] transition-all">
                  View Courses
                </button>
              </a>
            </div>

            <div className="col-span-12 lg:col-span-7 text-center">
              <div ref={circle} className="h-full opacity-0   scale-[0.7]">
                <Image src={courseBg} alt="d" className="rounded-3xl " />
              </div>
              <div className="absolute left-[-121px] top-[-80px]">
                <Image
                  src={circle1}
                  className="absolute left-[-255px] bottom-[-133px] -z-10"
                />
              </div>
              <div className="absolute left-[-224px] top-[246px]">
                <Image src={cir2} className="absolute 2" />
              </div>
              <div className="absolute top-[-9.5rem] right-[16rem] ">
                <Image src={cir1} className="absolute c1 -z-10" />
              </div>
              <div
                data-aos-delay="5000"
                data-aos="fade-down"
                className="absolute top-[12rem] left-[38rem]"
              >
                <Image src={circle2} className="absolute c2 -z-10" />
              </div>
              <div
                data-aos-delay="5000"
                data-aos="fade-down"
                className="absolute top-[-7rem] right-[-14rem] c33"
              >
                <Image src={circle2} className="absolute c3 -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseHeroSection;
