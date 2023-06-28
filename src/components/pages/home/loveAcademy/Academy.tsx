import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import sara from "../../../../assets/ui/1686712528081.jpeg";
import avatar from "../../../../assets/ui/avatar.jpg";
import mike from "../../../../assets/ui/mike.jpeg";

const Academy = () => {
  const [borderClass, setborderClass] = useState("");
  const [para, setpara] = useState(
    "iLearnASkill has made learning enjoyable and effective. The instructor-led courses are comprehensive and interactive."
  );
  const [num, setnum] = useState(1);

  const handleClick = (id: any) => {
    if (id == 1) {
      setborderClass("mr-auto");
      setnum(1);
      setpara(
        "iLearnASkill has made learning enjoyable and effective. The instructor-led courses are comprehensive and interactive."
      );
    }
    if (id == 2) {
      setborderClass("m-auto");
      setnum(2);
      setpara(
        "The self-paced courses allowed me to learn at my own pace while balancing my job and personal life."
      );
    }
    if (id == 3) {
      setborderClass("ml-auto");
      setnum(3);
      setpara(
        "I appreciate the community support on iLearnASkill. It’s motivating to learn alongside others with similar goals."
      );
    }
  };
  return (
    <div className="pb-12">
      <div className="container mx-auto px-4 sm:px-6  border-b-[1px] border-[#69697b29] pb-16">
        <div className="text-center">
          <h1 className="font-jakarta font-bold text-[36px] capitalize py-14">
            Hear from Our <span className="text text-[#3434ff]">Learners</span>
          </h1>
        </div>
        <div>
          <div className="pb-16">
            <p className="text-[#69697B] leading-[1.583em] text-[20px] text-center">
              {para}
            </p>
          </div>
          <div className="">
            <div className="w-full transition-all bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
              <div
                className={`bg-[#6132fd] h-1.5 rounded-full dark:bg-blue-500 ${borderClass}`}
                style={{ width: "33%" }}
              ></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 pt-8 lg:gap-0 gap-5">
              <div
                className="flex items-center justify-start lg:justify-center cursor-pointer  gap-3"
                onClick={() => handleClick(1)}
              >
                <div className="w-[67px] h-[67px]">
                  <Image src={sara} className="rounded-full w-[80px]" />
                </div>
                <div>
                  <h2
                    className={`font-jakarta font-semibold text-lg ${
                      num === 1 ? "text-[#6132fd]" : ""
                    }`}
                  >
                    Sarah
                  </h2>
                  <p className="font-jakarta text-[#69697B]">
                    Software Developer
                  </p>
                </div>
              </div>
              <div
                className="flex items-center justify-start lg:justify-center cursor-pointer  gap-3"
                onClick={() => handleClick(2)}
              >
                <div className="w-[67px] h-[67px]">
                  <Image src={mike} className="rounded-full w-[80px]" />
                </div>
                <div>
                  <h2
                    className={`font-jakarta font-semibold text-lg ${
                      num === 2 ? "text-[#6132fd]" : ""
                    }`}
                  >
                    Mike
                  </h2>
                  <p className="font-jakarta text-[#69697B]">
                    Marketing Manager
                  </p>
                </div>
              </div>
              <div
                className="flex items-center justify-start lg:justify-center cursor-pointer  gap-3"
                onClick={() => handleClick(3)}
              >
                <div className="w-[67px] h-[67px]">
                  <Image src={avatar} className="rounded-full w-[80px]" />
                </div>
                <div>
                  <h2
                    className={`font-jakarta font-semibold text-lg ${
                      num === 3 ? "text-[#6132fd]" : ""
                    }`}
                  >
                    Priya
                  </h2>
                  <p className="font-jakarta text-[#69697B]">Aspiring Artist</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-6 pt-16 ">
            <Link href={`/courses`}>
              <button className="bg-[#3434ff] hover:bg-[#2e2e94] hover:text-white hover:-translate-y-2 cursor-pointer transition-all text-[#ffffff] border-2 py-4 uppercase px-8 rounded-lg font-semibold mt-5 text-[16px]">
                View courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
