import { useState } from "react";
import Mike from "../../../Icon/Mike";
import { useAppSelector } from "../../../app/hooks";
import styles from "../../../styles/GeneralStyles.module.css";
import AnnouncementModal from "../../common/announcement/AnnounceModal";

export default function Announce() {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => {
    setShow(false);
  };
  const {
    user: { roles, studentType, email },
    refresh,
  } = useAppSelector((state) => state.auth);
  return (
    <>
      <div
        className={`${styles.dashboardTopBg} w-full py-[29px] px-2 font-nunito`}
      >
        <div className=" flex xsm:flex-col sm:flex-row lg:flex-row md:flex-row xl:flex-row justify-between xsm:px-[5px] sm:px-10 md:px-10 lg:px-10 xl:px-10  xsm:py-[5px] sm:py-5 md:py-5 lg:py-5 xl:py-5">
          {roles.includes("admin") && (
            <div>
              <h1 className="text-4xl mb-1 font-extrabold text-white">
                Welcome, admin !{" "}
              </h1>
              <p className="text-white text-sm">
                Your hub for site management is ready. Monitor site activity,
                manage courses and users, and ensure a smooth learning
                experience for all. Your role is crucial to our community's
                success.
              </p>
            </div>
          )}
          {roles.includes("instructor") && (
            <div>
              <h1 className="text-4xl mb-1 font-extrabold text-white">
                Welcome, instructor !{" "}
              </h1>
              <p className="text-white text-sm">
                This is your creative platform. Craft engaging courses, interact
                with students, and share your knowledge. Your expertise shapes
                the learning journey for our community.
              </p>
            </div>
          )}
          {roles.includes("student") && (
            <div>
              <h1 className="text-4xl mb-1 font-extrabold text-white">
                Welcome, learner !{" "}
              </h1>
              <p className="text-white text-sm">
                Your journey towards mastering new skills starts here. Explore
                your courses, track your progress, and set your learning goals.
                Let's embark on this adventure together
              </p>
            </div>
          )}
          <div>
            <button
              onClick={() => setShow(true)}
              className="p-4 flex justify-between items-center text-white bg-blue-700 xsm:mt-[5px] sm:mt-0 lg:mt-0 md:mt-0 xl:mt-0"
            >
              Announcements
              <div>
                <Mike />
              </div>
            </button>
          </div>
        </div>
      </div>
      {show && <AnnouncementModal show={show} handleClose={handleClose} />}
    </>
  );
}
