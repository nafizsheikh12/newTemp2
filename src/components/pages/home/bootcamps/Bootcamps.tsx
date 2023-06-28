import { useGetAllActiveCourseQuery } from "../../../../feature/api/dashboardApi";
import BootCampsCard from "../../bootcamps/bootCampsCard/BootCampsCard";

const Bootcamps = () => {
  const { data, isSuccess, isError, isLoading } = useGetAllActiveCourseQuery(
    {}
  );

  return (
    <div className="font-jakarta px-4 sm:px-6 my-12 md:my-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 text-center lg:text-left items-baseline mb-8">
          <div className="col-span-12 lg:col-span-5">
            <h2
              data-aos-delay="5000"
              data-aos="fade-down"
              className="text-[40px] leading-[1.2em] tracking-[0.01em] text-[#0b0b2c] font-bold mb-2"
            >
              Our Courses
            </h2>
            <p
              data-aos-delay="5000"
              data-aos="fade-down"
              className="text-[#69697b] text-[18px] leading-[1.667em]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              feugiat congue viverra facilisis.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 flex justify-center mt-5 lg:mt-0 lg:justify-end">
            <a
              data-aos-delay="5000"
              data-aos="fade-down"
              className="border-[#3434ff] text-[#3434ff] border-2 py-4 uppercase px-9 rounded font-medium text-[16px] hover:bg-[#3434ff] hover:text-white hover:-translate-y-2 cursor-pointer transition-all"
            >
              All courses
            </a>
          </div>
        </div>
        <div
          data-aos-delay="5000"
          data-aos="fade-down"
          className="grid  grid-cols-12 lg:grid-cols-12 gap-7 mt-5  border-b-[1px] border-[#D6DDDA] pb-24"
        >
          {isSuccess &&
            data?.data?.courses?.length > 0 &&
            data.data.courses
              .slice(0, 3)
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
                  ratingsAverage: number;
                  numberOfLectures: number;
                }) => (
                  <BootCampsCard
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
              )}
        </div>
      </div>
    </div>
  );
};

export default Bootcamps;
