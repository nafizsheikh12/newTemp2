import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import Image from "next/image";
import Growmain from "../../../../assets/ui/growmain.svg"
import grow1 from "../../../../assets/ui/grow1.svg"
import grow3 from "../../../../assets/ui/grow3.svg"
import grow2 from "../../../../assets/ui/growg.svg"

const Grow = () => {
  return (
    <div className="my-12 px-4 sm:px-6 md:my-20  pb-10 bg-[#3434ff] ">
        <div className="relative container  mx-auto flex-col lg:flex-row text-center lg:text-left flex justify-between pt-24 pb-24 gap-14 ">
             <div className="text-center mb-20 lg:mb-0 lg:text-left">
                    <h2 data-aos-delay="5000" data-aos="fade-down" className="text-white font-bold font-jakarta text-[35px]">Grow your career!<br/>Start learning with us.</h2>
                    <p data-aos-delay="5000" data-aos="fade-down" className="text-[#DFDFDF] text-[18px] font-jakarta py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit mattis.</p>
                    <button data-aos-delay="5000" data-aos="fade-down" className="bg-white text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-semibold mt-5 text-[16px] hover:bg-[#3434ff] hover:text-white hover:-translate-y-2 cursor-pointer transition-all">Our courses</button>
             </div>
             <div className="">
                  <div className="lg:w-[94%] 1xl:w-[100%]">
                      <Image src={Growmain}/>
                  </div>
                 <div data-aos-delay="5000" data-aos="fade-down" className="lg:top-[12%] top-[60%] right-[-3%] w-[31%] lg:w-[13%] lg:right-[-1%]   absolute 1xl:right-[-5%] 1xl:top-[7%] ">
                      <Image src={grow1}/>
                 </div>
                 <div data-aos-delay="5000" data-aos="fade-down" className="w-[16%] right-[83%] top-[74%] absolute 1xl:w-[12%] lg:w-[10%] lg:top-[37%] lg:right-[30%] 1xl:top-[43%] 1xl:right-[30%]">
                        <Image src={grow2}/>
                 </div>
                 <div data-aos-delay="5000" data-aos="fade-down" className="w-[41%] right-[-3%] top-[82%] absolute lg:w-[17%] lg:top-[54%] lg:right-[0%] 1xl:right-[-3%] 1xl:top-[60%]">
                       <Image src={grow3}/>
                 </div> 
             </div>
        </div>
    </div>
  );
};

export default Grow;
