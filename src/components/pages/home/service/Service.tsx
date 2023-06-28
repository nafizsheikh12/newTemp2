import Image from "next/image";
import grow1 from "../../../../assets/ui/grow1.svg";
import grow3 from "../../../../assets/ui/grow3.svg";
import grow2 from "../../../../assets/ui/growg.svg";
import Growmain from "../../../../assets/ui/growmain.svg";

const Grow = () => {
  return (
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
              journey with us and unlock unparalleled learning experiences that
              drive your professional growth and open new opportunities.
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
  );
};

export default Grow;
