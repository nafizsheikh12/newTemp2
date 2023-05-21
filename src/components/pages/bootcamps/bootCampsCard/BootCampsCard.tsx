import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAppSelector } from "../../../../app/hooks";
import { useEnrollMutation } from "../../../../feature/api/dashboardApi";
import ActionConfirmModal from "../../../utils/modals/ActionConfirmModal";

import {
  AiFillSignal,
  AiOutlineClockCircle,
  AiOutlineDollar,
} from "react-icons/ai";
import { TbStack2 } from "react-icons/tb";

const BootCampsCard = ({
  name,
  price,
  level,
  imgSrc,
  description,
}: {
  name: any;
  imgSrc: any;
  level: string;
  price: number;
  description:string;
}) => {
  const {
    user: { roles, studentType },
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
        id="sdflkjfds"
        successMessage="Successfully enrolled!"
        sureButtonColor="success"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 100, ease: "linear" }}
        className=" flex justify-center items-center font-nunito rounded-xl w-full "
      >
        <div className=" bg-base-100 shadow-xl font-nunito rounded-lg w-full h-full flex flex-col">
          <Image
            width={350}
            height={200}
            layout="responsive"
            src={imgSrc}
            alt="Shoes"
            className="rounded-tl-xl rounded-tr-xl"
          />
          <div className="px-4">
            <h3 className="font-bold text-[25px] leading-9 mt-[15px] font-jakarta">
              {name}
            </h3>
          </div>
          <div className="px-4">
               <div>
                   <p className="text-[18px] text-[#69697b] leading-[1.667em]  font-jakarta py-4">{description}</p>
               </div>
               <div className="flex justify-between border-t-2 py-7">
                    <div className="flex items-center gap-2">
                           <AiFillSignal className="text-[#3434ff]"/>
                           <p className="text-[18px] text-[black] font-medium leading-[1.667em]  font-jakarta">{level}</p>
                    </div>
                    <div>
                          <p className="text-[21px] text-black leading-[1.1em] font-semibold"> $ {price} USD</p>
                    </div>
               </div>
          </div>
            
        </div>
      </motion.div>
    </>
  );
};

export default BootCampsCard;
