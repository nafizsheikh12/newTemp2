import { Spinner } from "flowbite-react";
import { useRouter } from "next/router";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { useGetOneCourseQuery } from "../../../../feature/api/dashboardApi";
import TopFormRegistration from "../../signin/SigninForm1";
import BootcampTab from "./BootcampTab";
import ViewBootCampTitle from "./ViewBootCampTitle";
import BootcampPriceCard from "./rightCard/BootcampPriceCard";
import IncludesCard from "./rightCard/IncludesCard";
import Tags from "./rightCard/Tags";

const ViewBootcamp = () => {
  const router = useRouter();
  const id = router.query.id as any;
  const { isSuccess, data, isError, isLoading } = useGetOneCourseQuery(id);
  const [open, setOpen] = useState(false);
  const [regShow, setregShow] = useState(false);
  const [videoLink, setvideoLink] = useState("");
  // console.log(data);
  return (
    <div className="font-nunito">
      {isLoading ? (
        <div className="h-[100vh] flex justify-center items-center">
          <Spinner />
        </div>
      ) : isError ? (
        <div>Error...</div>
      ) : (
        isSuccess && (
          <div>
            <section className="bg-[#F5F7F9]">
              <ModalVideo
                channel="custom"
                isOpen={open}
                url={data.data.course.videoUrl}
                onClose={() => setOpen(false)}
              />
              <div className="container  mx-auto px-4 sm:px-6">
                <div className="py-8">
                  <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-8">
                      <ViewBootCampTitle course={data.data.course} />
                    </div>
                    <div className="col-span-12 lg:col-span-4"></div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="container border-b-[1px] border-[#D6DDDA] pb-5 mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-12 gap-3 lg:gap-6 my-7">
                  <div
                    className="col-span-12 lg:col-span-8"
                    style={{
                      boxShadow:
                        "0px 0px 40px rgba(29, 58, 83, 0.15) !important",
                    }}
                  >
                    <BootcampTab course={data.data.course} />
                  </div>
                  <div
                    className="col-span-12 lg:col-span-4"
                    style={{
                      boxShadow:
                        "0px 0px 40px rgba(29, 58, 83, 0.15) !important",
                    }}
                  >
                    <div className="grid grid-cols-12 gap-5 md:gap-4 lg:gap-5">
                      <div className="col-span-12 md:col-span-6 lg:col-span-12">
                        {!regShow && (
                          <BootcampPriceCard
                            setregShow={setregShow}
                            setOpen={setOpen}
                            id={data.data.course.id}
                            price={data.data.course.price}
                            discountPrice={data.data.course.discountPrice}
                          />
                        )}
                        {regShow && <TopFormRegistration />}
                        <IncludesCard course={data.data.course} />
                      </div>
                      <div className="col-span-12 md:col-span-6 lg:col-span-12">
                        <Tags tags={data.data.course.tags} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
      )}
    </div>
  );
};

export default ViewBootcamp;
