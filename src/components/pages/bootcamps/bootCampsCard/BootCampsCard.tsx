import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineWatchLater, MdStickyNote2 } from "react-icons/md";
import ReactStar from "react-stars";
import { useAppSelector } from "../../../../app/hooks";
import { useEnrollMutation } from "../../../../feature/api/dashboardApi";
import { isAuthorized } from "../../../../utils/auth";
import ActionConfirmModal from "../../../utils/modals/ActionConfirmModal";

const BootCampsCard = ({
  name,
  price,
  id,
  level,
  imgSrc,
  duration,
  numberOfLectures,
  ratingsAverage,
}: {
  name: any;
  id: string;
  imgSrc: any;
  level: string;
  price: number;
  duration: number;
  numberOfLectures: number;
  ratingsAverage: any;
}) => {
  const {
    user: { roles, email, studentType },
    refresh,
  } = useAppSelector((state) => state.auth);
  const [showEnrollConfirmModal, setShowEnrollConfirmModal] = useState(false);
  const handleCloseEnrollConfirmModal = () => setShowEnrollConfirmModal(false);
  return (
    <>
      <ActionConfirmModal
        show={showEnrollConfirmModal}
        handleClose={handleCloseEnrollConfirmModal}
        title="Are you sure you want to enroll this course?"
        mutationHook={useEnrollMutation}
        id={id}
        successMessage="Successfully enrolled!"
        sureButtonColor="success"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 100, ease: "linear" }}
        className=" flex justify-center items-center font-nunito rounded-xl w-full col-span-12 lg:col-span-4 hover:scale-95 cursor-pointer transition-all ease-in-out"
      >
        <div className=" bg-base-100 shadow-xl font-nunito rounded-xl w-full h-full flex flex-col">
          <Link href={"/bootcamp-view/[id]"} as={`bootcamp-view/${id}`}>
            <Image
              width={350}
              height={200}
              layout="responsive"
              src={imgSrc}
              alt="Shoes"
              className="rounded-tl-xl rounded-tr-xl"
            />
          </Link>
          <div className="px-4 py-5">
            <div>
              <div className="bg-[rgba(97,50,253,0.24)] w-[23%] px-3 flex justify-center mb-4 items-center text-center rounded">
                <h3 className="font-jakarta font-medium text-[#6132fd]">
                  {level}
                </h3>
              </div>
              <div className="mb-3">
                <h2 className="font-jakarta font-bold text-2xl"> {name}</h2>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center ">
                  <div>
                    <MdOutlineWatchLater className="text-[#EC455A] text-[23px] font-semibold" />
                  </div>
                  <div>
                    <span className="font-jakarta font-semibold text-[16px]">
                      3 Month
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <MdStickyNote2 className="!text-[#00C2FB] text-[24px] font-semibold" />
                  </div>
                  <div>
                    <span className="font-jakarta font-semibold text-[16px]">
                      {numberOfLectures} Lectures
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center border-t-2 mt-5 border-[#CECECE] pt-5">
                <div className="flex justify-between gap-2 items-center">
                  <ReactStar
                    size={24}
                    value={ratingsAverage}
                    edit={false}
                    half={true}
                  />
                  <span className="text-[#8A92A6] font-semibold font-jakarta">
                    {ratingsAverage}
                  </span>
                </div>
                <div>
                  {isAuthorized(email, refresh) ? (
                    !roles.includes("instructor") && (
                      <button
                        onClick={() => setShowEnrollConfirmModal(true)}
                        className="bg-[#6132fd] text-white px-4 py-2 font-medium font-jakarta rounded"
                      >
                        Enroll now
                      </button>
                    )
                  ) : (
                    <button className="bg-[#6132fd] text-white px-4 py-2 z-50 block font-medium font-jakarta rounded">
                      <Link href={"/signin"}>Register</Link>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BootCampsCard;
