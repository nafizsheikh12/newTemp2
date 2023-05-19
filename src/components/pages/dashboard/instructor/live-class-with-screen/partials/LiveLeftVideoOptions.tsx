import React,{useState} from "react";
import StartClass from "./modal/StartClass";
import Image from "next/image";
import JoinClass from "./modal/JoinClass";
import { IoVideocam } from "react-icons/io5";
import { RiAddBoxFill } from "react-icons/ri";
import {  } from "next/image";
import { useAppSelector } from "../../../../../../app/hooks";
import teacher from "../../../../../../assets/liveclass/teacher.svg";
import presenter from "../../../../../../assets/liveclass/presenter.svg";
import generalStyle from "../../../../../../styles/GeneralStyles.module.css";
import { useMeetCreateMutation,useAllMeetQuery } from "../../../../../../feature/api/dashboardApi";


const LiveLeftVideoOptions = () => {
  const [moduleModalShow, setmoduleModalShow] = useState<boolean>(false);
  const [joinclass, setjoinclass] = useState(false)
  const { user:{id:userid,title,roles}  } = useAppSelector((state) => state.auth);
  const { error:getMeetErro, data:meetData, isLoading:meetLoading, isSuccess:meetSuccess, isError:meetIsERror } =
  useAllMeetQuery({});
  
  const handleClick = () => {
    setmoduleModalShow(true)
  }
  return (
   <>
    <div
      className={`${generalStyle.liveBG} w-full h-[600px]  pr-5 lg:pr-0 pt-8  font-nunito`}
    >
      <div className="relative -mt-16 ">
        <Image width={170} height={170} alt="" src={teacher} />
        <div className="absolute top-4  bg-white px-2 py-1 rounded flex items-center ">
          <span className="inline-block bg-[#DD0000] w-3 h-3 rounded-full"></span>
          <span className="text-[15px] font-bold title-clr">LIVE</span>
          <span className="text-small-text-color">20:35</span>
        </div>
        <div className="flex items-center space-x-3 absolute  left-[50%] -translate-x-[50%] lg:translate-y-[550%] translate-y-[350%] md:translate-y-[550%]  bg-white px-5 py-2 shadow rounded">
          <div>
            <Image alt="" className="rounded" src={meetData?.data?.meets?.slice(-1)[0]?.createdBy?.avatar} width={50} height={50} />
          </div>
          <div>
            <h4 className="font-bold text-[23px] font-nunito">{meetData?.data?.meets?.slice(-1)[0]?.createdBy?.firstName} {meetData?.data?.meets?.slice(-1)[0]?.createdBy?.lastName}</h4>
            <p className="text-base font-nunito">Presenter</p>
          </div>
        </div>
      </div>
    </div> 
    <div className="pt-[100px] pb-[100px] lg:pb-[150px] flex justify-center space-x-5">
      <StartClass show={moduleModalShow} setShowModal={setmoduleModalShow}/>
      <JoinClass show={joinclass} setShowModal={setjoinclass}/>
      <button disabled={roles.includes("student")} className="text-center" onClick={handleClick}>
        <div className="bg-orange-400  px-4 py-3  rounded-lg shadow-xl flex items-center mb-2 cursor-pointer">
          <IoVideocam className="w-[35px] h-[30px]  text-white" />
        </div>
        <p className="text-[#5F5F60] font-medium font-nunito">Start Class</p>
      </button>
      <div className="text-center" onClick={() => setjoinclass(true)}>
        <div className="bg-blue-700 px-4 py-3 rounded-lg shadow-xl flex items-center mb-2 cursor-pointer">
          <RiAddBoxFill className="w-[35px] h-[30px]  text-white" />
        </div>
        <p className="text-[#5F5F60] font-medium font-nunito">Join Class</p>
      </div>
    </div>
  </> 
  );
};

export default LiveLeftVideoOptions;
