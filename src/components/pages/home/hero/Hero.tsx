import Link from "next/link";
import react,{useEffect} from "react"
import { useAppSelector } from "../../../../app/hooks";
import courseBg from "../../../../assets/ui/herobg.jpeg"
import cir1 from "../../../../assets/ui/1.svg"
import cir2 from "../../../../assets/ui/2.svg";
import circle1 from "../../../../assets/ui/circle1.svg"
import circle2 from "../../../../assets/ui/circle2.svg"
import circle3 from "../../../../assets/ui/circle3.svg"
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const { firstName } = useAppSelector((state) => state.auth.user);

 
  return (
    <>
      <div className="pt-[82px] px-4 sm:px-6 lg:pb-[112px] overflow-hidden">
           <div className="container px-4  mx-auto relative">
              <div className="grid grid-cols-12 lg:grid-cols-12 gap-4 lg:gap-[100px] items-center relative pb-10 ">
                
                         <div  data-aos-delay="5000" data-aos="fade-down" className="col-span-12 z-20 mb-14 lg:mb-0 lg:col-span-7 text-center lg:text-left">
                              <h1 data-aos-delay="5000" data-aos="fade-down" className="text-[#0b0b2c] text-[52px] lg:text-[74px] font-bold font-jakarta leading-[58px] lg:leading-[85px]">Grow your skills,<br/><span className="text-[#3434ff]">Define your future.</span></h1>
                              <p  data-aos-delay="5000" data-aos="fade-down" className="text-[#69697b] text-[18px] font-normal leading-[1.667em] mb-9 font-jakarta my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique laoreet ut elementum cras cursus. Morbi morbi at diam.</p>
                              <button  className="bg-[#3434ff] px-12 py-5 rounded uppercase text-white text-[18px] font-m font-jakarta cursor-pointer z-10 hover:-translate-y-3	 hover:!bg-[#20228b] transition-all">View Courses</button>
                         </div>
               
                       <div className="col-span-12 lg:col-span-5 text-center">
                         <div  data-aos-delay="5000" data-aos="fade-down" className="h-full">
                              <Image style={{boxShadow:"0 14px 54px 0 rgba(52, 52, 255, 0.08), 0 14px 74px 0 rgba(11, 11, 44, 0.07)"}} src={courseBg} alt="d" className="rounded-3xl shadow"  />
                         </div>
                         <div className="absolute left-[-389px] top-[-94px]">
                              <Image src={cir1} className="absolute left-[-255px] bottom-[-133px] -z-10"/>
                         </div>
                         <div className="absolute left-[-66px] top-[565px]">
                              <Image src={cir2} className="absolute 2"/>
                         </div>
                         <div className="absolute top-[-3.5rem] right-[23rem] ">
                              <Image src={circle1} className="absolute c1 -z-10"/>
                         </div>
                         <div data-aos-delay="5000" data-aos="fade-down" className="absolute top-[24rem] left-[38rem]">
                              <Image src={circle2} className="absolute c2 -z-10"/>
                         </div>
                         <div  data-aos-delay="5000" data-aos="fade-down" className="absolute top-[-7rem] right-[-14rem] c33">
                              <Image src={circle2} className="absolute c3 -z-10"/>
                         </div>
                        </div>
              </div>  
           </div>
      </div>
    </>
  );
};

export default Hero;
