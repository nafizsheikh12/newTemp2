import { useState } from "react";
import { AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { useGetAllUsersQuery } from "../../../../../feature/api/dashboardApi";
// import Pagination from "../../../../common/pagination/Pagination";
import AddUsersModal from "./AddUsersModal";
import UserGridCard from "./UserGridCard";
import UsersListView from "./UsersListView";

type View = "list" | "grid";

function Users() {
  const [view, setView] = useState<View>("list");
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data, isSuccess, isError, isLoading } = useGetAllUsersQuery({});
  const handleCloseUserAddModal = () => setShowModal(false);

  return (
    <div>
      <div className="flex justify-between space-x-2 items-center mb-5">
        <h3 className="text-[28px] font-semibold leading-[36px] ">Users</h3>
        <div className="flex justify-between items-center gap-3">
          <button
            onClick={() =>
              view === "list" ? setView("grid") : setView("list")
            }
            className="text-white py-2 px-2 space-x-2 rounded bg-[#3A57E8] flex gap-2 items-center"
          >
            View{" "}
            {view === "list" ? (
              <BsFillGrid1X2Fill className="bg-[#373c53] rounded-md text-[#fff] bg-blend-normal opacity-40 p-1 text-2xl" />
            ) : (
              <AiOutlineUnorderedList className="bg-[#373c53] rounded-md text-[#fff] bg-blend-normal opacity-40 p-1 text-2xl" />
            )}
          </button>

          <button
            className="text-white py-2 px-6 rounded bg-[#3A57E8] flex gap-2 items-center"
            onClick={() => setShowModal(true)}
          >
            Add a User{" "}
            <AiOutlinePlus className="bg-[#373c53] rounded-md text-[#fff] bg-blend-normal opacity-40 p-1 text-2xl" />
          </button>
        </div>
      </div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error...</div>
        ) : isSuccess && data?.data?.users && data.data.users.length > 0 ? (
          <>
            {view === "list" ? (
              <UsersListView users={data.data.users} />
            ) : (
              <div className="grid grid-cols-2 gap-6">
                {data.data.users.map(
                  ({
                    _id,
                    firstName,
                    lastName,
                    avatar,
                    roles,
                  }: {
                    _id: string;
                    firstName: string;
                    lastName: string;
                    avatar: string;
                    roles: any[];
                  }) => (
                    <UserGridCard
                      key={_id}
                      firstName={firstName}
                      lastName={lastName}
                      avatar={avatar}
                      roles={roles}
                    />
                  )
                )}
              </div>
            )}
          </>
        ) : (
          <div>No user Found</div>
        )}
        {/* <Pagination/> */}
      </div>
      {showModal && (
        <AddUsersModal show={showModal} handleClose={handleCloseUserAddModal} />
      )}
    </div>
  );
}

export default Users;
