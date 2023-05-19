import Link from "next/link";
import { useAppSelector } from "../../../../app/hooks";
import courseBg from "../../../../assets/ui/courseBg.jpeg"
import circle from "../../../../assets/ui/circle.svg"
import Image from "next/image"

const Hero = () => {
  const { firstName } = useAppSelector((state) => state.auth.user);
  return (
    <>
      <div className="py-[82px] ">
           <div className="container px-4  mx-auto relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-center relative pb-10">
                <div>
                     <h1 className="text-[#0b0b2c] text-[74px] font-bold">Courses</h1>
                     <p className="text-[#69697b] text-[18px] font-normal leading-[1.667em] mb-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tristique laoreet ut elementum cras cursus. Morbi morbi at diam.</p>
                     <a className="bg-[#3434ff] px-4 py-3 capitalize text-white text-[18px] font-medium">View Courses</a>
                </div>
                <div className="h-full">
                     <Image style={{boxShadow:"0 14px 54px 0 rgba(52, 52, 255, 0.08), 0 14px 74px 0 rgba(11, 11, 44, 0.07)"}} src={courseBg} alt="d" className="rounded-3xl shadow" width={"900px"} height={"600px"} />
                </div>
                <div className="absolute">
                     <Image src={circle} className="absolute left-[-255px] bottom-[-133px] -z-10"/>
                </div>
              </div>  
           </div>
      </div>
    </>
  );
};

export default Hero;
