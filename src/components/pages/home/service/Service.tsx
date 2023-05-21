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
    <div className="my-12 md:my-20  pb-10 bg-[#3434ff] relative">
        <div className="container mx-auto flex justify-between pt-24 pb-24 gap-14 ">
             <div>
                    <h2 className="text-white font-bold font-jakarta text-[35px]">Grow your career!<br/>Start learning with us.</h2>
                    <p className="text-[#DFDFDF] text-[18px] font-jakarta py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit mattis.</p>
                    <button className="bg-white text-[#3434ff] border-2 py-4 uppercase px-8 rounded font-semibold mt-5 text-[16px]">Our courses</button>
             </div>
             <div className="">
                  <Image src={Growmain}/>
                 <div className="absolute left-[78%] top-[7%] ">
                      <Image src={grow1}/>
                 </div>
                 <div className="absolute top-[43%] right-[38%]">
                        <Image src={grow2}/>
                 </div>
                 <div className="absolute right-[14%] top-[60%]">
                       <Image src={grow3}/>
                 </div> 
             </div>
        </div>
    </div>
  );
};

export default Grow;
