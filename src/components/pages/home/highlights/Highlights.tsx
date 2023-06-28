import Image from "next/image";

import msgi from "../../../../assets/ui/msgi.svg";
import networki from "../../../../assets/ui/networki.svg";
import people from "../../../../assets/ui/peolplestar.svg";
import stari from "../../../../assets/ui/stari.svg";

import { useGetAllPublishedReviewQuery } from "../../../../feature/api/dashboardApi";
// import "../../../../styles/testimonialsSwiperStyles.module.css";
// import "./styles.css";

// import required modules

const Highlights = () => {
  const { data, isLoading, isError, isSuccess } = useGetAllPublishedReviewQuery(
    {}
  );

  return (
    <>
      <div className="px-4 sm:px-6">
        <div className="container mx-auto mb-10 pb-[7rem] border-b-2 bordr-gray">
          <div className="flex flex-col lg:flex-row justify-between items-center ">
            <div>
              <h1
                data-aos-delay="5000"
                data-aos="fade-down"
                className="font-jakarta font-bold text-[30px] sm:text-[35px] "
              >
                Why Learning With us?
              </h1>
            </div>
            <div>
              <button
                data-aos-delay="5000"
                data-aos="fade-down"
                className="bg-[#3434ff] hover:bg-[#3030b1] hover:text-white hover:-translate-y-2 cursor-pointer transition-all text-[#ffffff] border-2 py-4 uppercase px-8 rounded-md font-semibold mt-5 text-[16px]"
              >
                Our courses
              </button>
            </div>
          </div>
          <div className="pt-16">
            <div
              data-aos-delay="5000"
              data-aos="fade-down"
              className="grid grid-cols-12  gap-y-24"
            >
              <div className="col-span-12 lg:col-span-5 flex flex-col gap-12">
                <div className="flex flex-col items-center lg:items-start text-center justify-center lg:flex-row lg:text-left gap-4">
                  <div className="w-[30%]">
                    <Image
                      src={people}
                      className="text-[5rem] w-[5rem]"
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <div>
                    <h2 className="font-jakarta text-[29px] font-semibold mb-3">
                      Expert Guidance
                    </h2>
                    <p className="text-[#69697b] font-jakarta">
                      Learn from seasoned professionals who bring real-world
                      experience and tailored teaching methods to enhance your
                      learning.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 flex-col lg:flex-row items-center lg:text-left text-center lg:items-start">
                  <div className="w-[30%]">
                    <Image
                      src={stari}
                      className="text-[5rem] w-[5rem]"
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <div>
                    <h2 className="font-jakarta text-[29px] font-semibold mb-3">
                      Flexible Learning
                    </h2>
                    <p className="text-[#69697b] font-jakarta">
                      Adapt your learning to suit your lifestyle with our
                      flexible course schedules and self-paced options.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex justify-center">
                <div
                  className="dfs w-[1px] h-full bg-[#D6DDDA] rounded"
                  style={{ content: "" }}
                ></div>
              </div>
              <div className="col-span-12 lg:col-span-5 flex flex-col  gap-12">
                <div className="flex gap-4 flex-col lg:flex-row items-center text-center lg:text-left lg:items-start">
                  <div className="w-[30%]">
                    <Image
                      src={networki}
                      className="text-[5rem] w-[5rem]"
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <div>
                    <h2 className="font-jakarta text-[29px] font-semibold mb-3">
                      Community Support
                    </h2>
                    <p className="text-[#69697b] font-jakarta">
                      Join a thriving community of learners, sharing insights,
                      experiences and encouragement throughout your learning
                      journey.
                    </p>
                  </div>
                </div>
                <div className="flex lg:flex-row gap-4 flex-col items-center text-center lg:text-left lg:items-start">
                  <div className="w-[30%]">
                    <Image
                      src={msgi}
                      className="text-[5rem] w-[5rem]"
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <div>
                    <h2 className="font-jakarta text-[29px] font-semibold mb-3">
                      Career Growth
                    </h2>
                    <p className="text-[#69697b] font-jakarta">
                      Transform your career with knowledge and skills that are
                      valued by employers across various industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlights;
