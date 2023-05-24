import React,{useEffect} from 'react'
import Hero from "./courseHeroSection";
import CourseCard  from "../bootcamps/bootCampsCard/BootCampsCard";
import CardImage1 from "../../../assets/ui/cardbg.png";
import { useGetAllActiveCourseQuery } from "../../../feature/api/dashboardApi";
import Aos from "aos"

const Courses = () => {
    const { data, isSuccess, isError, isLoading } = useGetAllActiveCourseQuery(
        {}
      );

 useEffect(() => {
   Aos.init();
 }, [])
          
  return (
    <div>
          <Hero />
          <div className='px-4 sm:px-6 container mx-auto mt-16 pb-11'>
               <div className='text-center mb-20 '>
                    <h1 data-aos-delay="5000" data-aos="fade-down" className="text-[#0b0b2c] text-[39px] lg:text-[39px] font-bold font-jakarta leading-[18px] lg:leading-[15px]">Courses</h1>
               </div>
               <div data-aos-delay="5000" data-aos="fade-down" className='!grid !grid-cols-12 gap-7'>
               {isSuccess &&
                        data?.data?.courses?.length > 0 ?
                        data.data.courses
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
                              ratingsAverage:number;
                              numberOfLectures:number
                            }) => (
                              <CourseCard
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
                          ):
                            <div className='col-span-12 text-center'>No course found</div>
                        
                        }
               </div>
          </div>
    </div>
  )
}

export default Courses