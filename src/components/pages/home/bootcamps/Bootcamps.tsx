import CardImage3 from "../../../../assets/ServicesImages/servicesImage/167774282_m.jpg";
import CardImage2 from "../../../../assets/ServicesImages/servicesImage/177095938_m.jpg";
import CardImage1 from "../../../../assets/ui/cardbg.png";

import { useGetAllActiveCourseQuery } from "../../../../feature/api/dashboardApi";
import BootCampsCard from "../../bootcamps/bootCampsCard/BootCampsCard";

const Bootcamps = () => {
  const { data, isSuccess, isError, isLoading } = useGetAllActiveCourseQuery(
    {}
  );
  console.log(data);
  return (
    <div className="font-jakarta my-12 md:my-20">
          <div className="container mx-auto">
                <div className="grid grid-cols-12 items-baseline">
                     <div className="col-span-5">
                           <h2 className="text-[40px] leading-[1.2em] tracking-[0.01em] text-[#0b0b2c] font-bold mb-2">Our Courses</h2>
                           <p className="text-[#69697b] text-[18px] leading-[1.667em]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat feugiat congue viverra facilisis.</p>
                     </div>
                     <div className="col-span-7 flex justify-end">
                          <a className="border-[#3434ff] text-[#3434ff] border-2 py-4 uppercase px-9 rounded font-medium text-[16px]">All courses</a>
                     </div>
                </div>
                <div className="grid grid-cols-3 gap-7 mt-5">
                     <BootCampsCard level="Beginner" description="Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis." name={"Brand & Identity Design for Marketers"} price={500} imgSrc={CardImage1}/>
                     <BootCampsCard level="Beginner" description="Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis." name={"Brand & Identity Design for Marketers"} price={500} imgSrc={CardImage1}/>
                     <BootCampsCard level="Beginner" description="Lorem ipsum dolor sit amet, consectere adipiscing elit. Feugiat feugiat congue viverra facilisis." name={"Brand & Identity Design for Marketers"} price={500} imgSrc={CardImage1}/>
                </div>
          </div>
    </div>
  );
};

export default Bootcamps;
