import Image from "next/image";

import people from "../../../../assets/ui/peolplestar.svg";
import { useGetAllPublishedReviewQuery } from "../../../../feature/api/dashboardApi";
// import "../../../../styles/testimonialsSwiperStyles.module.css";
// import "./styles.css";

// import required modules
import Marquee from "react-fast-marquee";

const Highlights = () => {
  const { data, isLoading, isError, isSuccess } = useGetAllPublishedReviewQuery(
    {}
  );

  return (
    <>
       <div>
            <div className="container mx-auto mb-10 pb-[7rem] border-b-2 bordr-gray">
                  <div className="flex justify-between items-center ">
                        <div>
                             <h1 className="font-jakarta font-bold text-[35px] ">Why Learning With us?</h1>
                        </div>
                        <div>
                               <button 
                                 className="bg-[#3434ff] text-[#ffffff] border-2 py-4 uppercase px-8 rounded font-semibold mt-5 text-[16px]"
                               >
                                          Our courses
                               </button>
                        </div>
                  </div>
                  <div className="pt-16">
                        <div className="grid grid-cols-12  gap-y-24">
                             <div className="col-span-5 flex flex-col gap-12">
                                    <div className="flex gap-4">
                                         <div className="w-[30%]">
                                               <Image src={people} className="text-[5rem] w-[5rem]" width={"100%"} height={"100%"}/>
                                         </div>
                                         <div>
                                              <h2 className="font-jakarta text-[29px] font-semibold mb-3">World-Class Teachers</h2>
                                              <p className="text-[#A8A8A8] font-jakarta">Lorem ipsum dolor sit amet, consecteturirem adipiscing elit. Volutpat quis molestie tortorerm, gravida a aenean neque. Placerat</p>
                                         </div>
                                    </div>
                                    <div className="flex gap-4">
                                         <div className="w-[30%]">
                                               <Image src={people} className="text-[5rem] w-[5rem]" width={"100%"} height={"100%"}/>
                                         </div>
                                         <div>
                                              <h2 className="font-jakarta text-[29px] font-semibold mb-3">World-Class Teachers</h2>
                                              <p className="text-[#A8A8A8] font-jakarta">Lorem ipsum dolor sit amet, consecteturirem adipiscing elit. Volutpat quis molestie tortorerm, gravida a aenean neque. Placerat</p>
                                         </div>
                                    </div>
                             </div>
                             <div className="col-span-2 flex justify-center">
                                 <div className="dfs w-[1px] h-full bg-[#D6DDDA] rounded" style={{content:""}}></div>
                             </div>
                             <div className="col-span-5 flex flex-col gap-12">
                                    <div className="flex gap-4">
                                         <div className="w-[30%]">
                                               <Image src={people} className="text-[5rem] w-[5rem]" width={"100%"} height={"100%"}/>
                                         </div>
                                         <div>
                                              <h2 className="font-jakarta text-[29px] font-semibold mb-3">World-Class Teachers</h2>
                                              <p className="text-[#A8A8A8] font-jakarta">Lorem ipsum dolor sit amet, consecteturirem adipiscing elit. Volutpat quis molestie tortorerm, gravida a aenean neque. Placerat</p>
                                         </div>
                                    </div>
                                    <div className="flex gap-4">
                                         <div className="w-[30%]">
                                               <Image src={people} className="text-[5rem] w-[5rem]" width={"100%"} height={"100%"}/>
                                         </div>
                                         <div>
                                              <h2 className="font-jakarta text-[29px] font-semibold mb-3">World-Class Teachers</h2>
                                              <p className="text-[#A8A8A8] font-jakarta">Lorem ipsum dolor sit amet, consecteturirem adipiscing elit. Volutpat quis molestie tortorerm, gravida a aenean neque. Placerat</p>
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
