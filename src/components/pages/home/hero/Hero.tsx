import "aos/dist/aos.css";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { useAppSelector } from "../../../../app/hooks";
import cir1 from "../../../../assets/ui/1.svg";
import cir2 from "../../../../assets/ui/2.svg";
import circle1 from "../../../../assets/ui/circle1.svg";
import circle2 from "../../../../assets/ui/circle2.svg";
import courseBg from "../../../../assets/ui/herobg.jpeg";

const Hero = () => {
  const { firstName } = useAppSelector((state) => state.auth.user);

  const tl = gsap.timeline();
  const app = useRef<any>();
  const circle = useRef<any>();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.to(".test", {
        y: 0,
        ease: "power4.out",
        delay: 0.1,
        skewY: 0,
        stagger: 0.01,
        duration: 3,
        opacity: 1,
      });
      // or refs
      gsap.to(circle.current, {
        y: 0,
        ease: "power4.out",
        delay: 0.1,
        skewY: 0,
        scale: 0.9,
        stagger: 0.01,
        duration: 3,
        opacity: 1,
      });
    }, app);

    return () => ctx.revert();
  });

  const test = () => {
    gsap.to(".t", {
      top: "-144px",

      ease: "power4.out",
      delay: 0.1,
      skewY: 0,
      stagger: 0.01,
      duration: 3,
      opacity: 1,
    });
  };

  const onLeave = () => {
    gsap.to(".t", {
      top: "-94px",

      ease: "power4.out",
      delay: 0.1,
      skewY: 0,
      stagger: 0.01,
      duration: 3,
      opacity: 1,
    });
  };

  const second = () => {
    gsap.to(".second", {
      left: "-94px",

      ease: "power4.out",
      delay: 0.1,
      skewY: 0,
      stagger: 0.01,
      duration: 3,
      opacity: 1,
    });
  };

  const secondLeave = () => {
    gsap.to(".second", {
      left: "-66px",
      top: "565px",
      ease: "power4.out",
      delay: 0.1,
      skewY: 0,
      stagger: 0.01,
      duration: 3,
      opacity: 1,
    });
  };

  const third = () => {
    gsap.to(".third", {
      right: "20rem",
      top: "-2rem",
      ease: "power4.out",
      delay: 0.1,
      skewY: 0,
      stagger: 0.01,
      duration: 3,
      opacity: 1,
    });
  };

  const thirdLeave = () => {
    gsap.to(".third", {
      right: "23rem",
      top: "-3.5rem",
      ease: "power4.out",
      delay: 0.1,
      skewY: 0,
      stagger: 0.01,
      duration: 3,
      opacity: 1,
    });
  };
  const fourth = () => {
    gsap.to(".fourth", {
      left: "41rem",
      top: "24rem",
      ease: "power4.out",
      delay: 0.1,
      skewY: 0,
      stagger: 0.01,
      duration: 3,
      opacity: 1,
    });
  };

  const fourthLeave = () => {
    gsap.to(".fourth", {
      left: "38rem",
      top: "24rem",
      ease: "power4.out",
      delay: 0.1,
      skewY: 0,
      stagger: 0.01,
      duration: 3,
      opacity: 1,
    });
  };

  const five = () => {
    gsap.to(".five", {
      right: "-120rem",
      top: "-5rem",
      ease: "power4.out",
      delay: 0.1,
      skewY: 0,
      stagger: 0.01,
      duration: 3,
      opacity: 1,
    });
  };

  const fiveLeave = () => {
    gsap.to(".five", {
      right: "-14rem",
      top: "-7rem",
      ease: "power4.out",
      delay: 0.1,
      skewY: 0,
      stagger: 0.01,
      duration: 3,
      opacity: 1,
    });
  };
  return (
    <>
      <div
        className="pt-[82px] px-4 sm:px-6 lg:pb-[112px] overflow-hidden"
        ref={app}
      >
        <div className="container px-4  mx-auto relative">
          <div className="grid grid-cols-12 lg:grid-cols-12 gap-4 lg:gap-[100px] items-center relative pb-10 ">
            <div className="col-span-12 z-20 mb-14 lg:mb-0 lg:col-span-7 text-center lg:text-left opacity-0 test translate-y-[-200px]">
              <h1 className="text-[#0b0b2c] text-[53px]  font-[1000] font-jakarta leading-[62px]  ">
                Welcome to iLearnASkill,
                <br />
                <span className="text-[#3434ff] ">
                  Your Ultimate Guide to Skill Mastery.
                </span>
              </h1>
              <p className="text-[#69697b] text-[17px] font-normal leading-[1.667em] mb-12 font-jakarta my-6">
                We believe that everyone has the potential to learn new skills
                and transform their lives. Whether you're looking to advance
                your career, pick up a new hobby, or simply broaden your
                horizons, we're here to guide you every step of the way. Dive
                into our extensive collection of resources and start your
                journey towards skill mastery today.
              </p>
              <Link href={`/courses`}>
                <button className="bg-[#3434ff] px-8 py-5 rounded uppercase font-bold tracking-[1px] text-white text-[18px]  font-jakarta cursor-pointer z-10 hover:-translate-y-3	 hover:!bg-[#20228b] transition-all">
                  our Courses
                </button>
              </Link>
            </div>

            <div className="col-span-12 lg:col-span-5 text-center">
              <div className="h-full opacity-0   scale-[0.7] z-10" ref={circle}>
                <Image src={courseBg} alt="d" className="rounded-3xl " />
              </div>
              <div
                className="absolute t left-[-389px] top-[-94px]"
                onMouseEnter={test}
                onMouseLeave={onLeave}
              >
                <Image
                  src={cir1}
                  className="absolute  left-[-255px] bottom-[-133px] -z-10"
                />
              </div>
              <div
                onMouseEnter={second}
                onMouseLeave={secondLeave}
                className="absolute second left-[-66px] top-[565px]"
              >
                <Image src={cir2} className="absolute 2 -z-10" />
              </div>
              <div
                onMouseEnter={third}
                onMouseLeave={thirdLeave}
                className="absolute third top-[-3.5rem] right-[23rem] "
              >
                <Image src={circle1} className="absolute c1 -z-20" />
              </div>
              <div
                data-aos-delay="5000"
                data-aos="fade-down"
                onMouseEnter={fourth}
                onMouseLeave={fourthLeave}
                className="absolute fourth top-[24rem] left-[38rem]"
              >
                <Image src={circle2} className="absolute c2 -z-10" />
              </div>
              <div
                data-aos-delay="5000"
                data-aos="fade-down"
                onMouseEnter={five}
                onMouseLeave={fiveLeave}
                className="absolute five top-[-7rem] right-[-14rem] c33 -z-20"
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

export default Hero;
