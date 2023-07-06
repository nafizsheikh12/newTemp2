import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { useGetAllActiveCourseQuery } from "../../../../feature/api/dashboardApi";
import BootCampsCard from "../../bootcamps/bootCampsCard/BootCampsCard";

const Bootcamps = () => {
  const { data, isSuccess, isError, isLoading } = useGetAllActiveCourseQuery(
    {}
  );

  gsap.registerPlugin(ScrollTrigger);
  const app = useRef<any>();
  const textanim = useRef<any>();
  const textanim2 = useRef<any>();

  useLayoutEffect(() => {
    const pin = gsap.fromTo(
      textanim.current,
      {
        y: "200px",
        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        opacity: 1,
        skewY: 0,
        stagger: 0.01,
        ease: "power4.out",
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
        translateY: "200px",
        opacity: 0,
      },
      {
        ease: "none",
        duration: 1,
        translateY: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: app.current,
          start: "top center bottom",
          end: " top",
        },
      }
    );

    return () => {
      pin.kill();
      pin2.kill();
    };
  }, []);
  return (
    <div className="font-jakarta px-4 sm:px-6 my-12 md:my-20" ref={app}>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 text-center lg:text-left items-baseline mb-12">
          <div
            className="col-span-12 lg:col-span-8 translate-y-[200px] opacity-0"
            ref={textanim}
          >
            <h2 className="text-[40px] leading-[1.2em] tracking-[0.01em] text-[#0b0b2c] font-bold mb-2">
              Our Courses
            </h2>
            <p className="text-[#69697b] text-[18px] leading-[1.667em]">
              Discover our diverse range of courses, meticulously designed to
              empower your learning journey. From coding to cooking, unlock new
              potentials and reinvent yourself with iLearnASkill.
            </p>
          </div>
          <div
            className="translate-y-[200px] opacity-0 col-span-12 lg:col-span-4 flex justify-center mt-5 lg:mt-0 lg:justify-end"
            ref={textanim2}
          >
            <a
              data-aos-delay="5000"
              data-aos="fade-down"
              className="border-[#3434ff] text-[#3434ff] border-2 py-4 uppercase px-9 rounded font-medium text-[16px] hover:bg-[#3434ff] hover:text-white hover:-translate-y-2 cursor-pointer transition-all"
            >
              All courses
            </a>
          </div>
        </div>
        <div
          data-aos-delay="5000"
          data-aos="fade-down"
          className="grid  grid-cols-12 lg:grid-cols-12 gap-7 mt-5  border-b-[1px] border-[#D6DDDA] pb-24"
        >
          {isSuccess &&
            data?.data?.courses?.length > 0 &&
            data.data.courses
              .slice(0, 3)
              .map(
                (item: {
                  _id: string;
                  title: string;
                  price: number;
                  level: string;
                  courseImage: string;
                  durationInMinutes: number;
                  modules: [];
                  discountPrice: number;
                  ratingsAverage: number;
                  numberOfLectures: number;
                }) => (
                  <BootCampsCard
                    key={item._id}
                    id={item._id}
                    name={item.title}
                    duration={3}
                    price={item.price}
                    imgSrc={item.courseImage}
                    numberOfLectures={item.numberOfLectures}
                    ratingsAverage={item.ratingsAverage}
                    level={item.level}
                  />
                )
              )}
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;
