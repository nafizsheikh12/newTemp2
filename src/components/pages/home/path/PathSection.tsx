import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import pathBg from "../../../../assets/ui/path1.png";
import parttime from "../../../../assets/ui/path2.png";
import online from "../../../../assets/ui/path3.png";
gsap.registerPlugin(ScrollTrigger);

const PathSection = () => {
  const app = useRef<any>();
  const textanim = useRef<any>();
  const textanim2 = useRef<any>();
  const iconanim = useRef<any>();
  const iconanim1 = useRef<any>();
  const iconanim2 = useRef<any>();

  useEffect(() => {
    const pin = gsap.fromTo(
      textanim.current,
      {
        opacity: 0,
        y: "110px",
      },
      {
        y: 0,
        duration: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: app.current,
          start: "top center bottom",
          end: " top",
        },
      }
    );

    const pin2 = gsap.fromTo(
      textanim2.current,
      {
        opacity: 0,
        y: 110,
      },
      {
        y: 0,
        duration: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: app.current,
          start: "top center bottom",
          end: " top",
        },
      }
    );

    const icon = gsap.fromTo(
      iconanim.current,
      {
        opacity: 0,
      },
      {
        scale: 1,
        duration: 2,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: app.current,
          start: " center bottom",
          end: " top",
        },
      }
    );

    const icon1 = gsap.fromTo(
      iconanim1.current,
      {
        opacity: 0,
      },
      {
        scale: 1,
        duration: 2,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: app.current,
          start: " center bottom",
          end: " top",
        },
      }
    );

    const icon2 = gsap.fromTo(
      iconanim2.current,
      {
        opacity: 0,
      },
      {
        scale: 1,
        duration: 2,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: app.current,
          start: " center bottom",
          end: " top",
        },
      }
    );

    return () => {
      pin.kill();
      pin2.kill();
      icon.kill();
      icon1.kill();
      icon2.kill();
    };
  }, []);
  return (
    <div ref={app}>
      <div className="px-4 sm:px-6 ">
        <div className="container mx-auto text-center">
          <h2
            ref={textanim}
            className="text-[35px] mb-3 lg:text-[40px] font-jakarta font-semibold"
          >
            Choose Your Path
          </h2>
          <p
            ref={textanim2}
            className="text-[#69697B] text-[18px] font-jakarta"
          >
            Choose your path at iLearnASkill: opt for instructor-led guidance,
            self-paced learning, or a blend of both to suit your learning style.
          </p>
        </div>
        <div className="container mx-auto py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-9">
            <div
              className="text-center opacity-0 scale-[0.7]
            "
              ref={iconanim}
            >
              <div>
                <Image src={pathBg} width={270} height={270} />
              </div>
              <div className="text-center">
                <h3 className="text-[26px] font-jakarta font-semibold">
                  Instructor-led
                </h3>
                <p className="text-[#69697B] font-jakarta py-3">
                  Experience personalized guidance with our instructor-led
                  courses, designed to enhance your learning through
                  interactive, real-time sessions.
                </p>
              </div>
              <div className="mt-8">
                <a className="border-[#3434ff] text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-medium text-[16px] hover:bg-[#3434ff] hover:text-white hover:-translate-y-2 transition-all cursor-pointer">
                  Learn More
                </a>
              </div>
            </div>
            <div className="text-center opacity-0 scale-[0.7]" ref={iconanim1}>
              <div>
                <Image src={parttime} width={270} height={270} />
              </div>
              <div className="text-center">
                <h3 className="text-[26px] font-jakarta font-semibold">
                  Self-Paced
                </h3>
                <p className="text-[#69697B] font-jakarta py-3">
                  Embrace flexibility with our self-paced courses, enabling you
                  to learn at your own rhythm and convenience.
                </p>
              </div>
              <div className="mt-8">
                <a className="border-[#3434ff]  text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-medium text-[16px] hover:bg-[#3434ff] hover:text-white hover:-translate-y-2 cursor-pointer transition-all">
                  Learn More
                </a>
              </div>
            </div>
            <div className="text-center opacity-0 scale-[0.7]" ref={iconanim2}>
              <div>
                <Image src={online} width={270} height={270} />
              </div>
              <div className="text-center">
                <h3 className="text-[26px] font-jakarta font-semibold">Both</h3>
                <p className="text-[#69697B] font-jakarta py-3">
                  Get the best of both worlds, combining structured guidance
                  with the flexibility of self-paced learning.
                </p>
              </div>
              <div className="mt-8">
                <a className="hover:bg-[#3434ff] hover:text-white hover:-translate-y-2 transition-all cursor-pointer border-[#3434ff] text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-medium text-[16px]">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathSection;
