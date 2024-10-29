import ExistingUserPage from "@/components/base/ExistingUserPage/ExistingUserPage";
import NewUserPage from "@/components/DashBoardPage/NewUserPage";

import NewNavBar from "@/components/NewNavBar";
import SideBar from "@/components/SideBar";

const dashboard = () => {
  const isExistingUser = true;
  return (
    <div>
      <NewNavBar />
      <div className=" flex ">
        <div className="w-[20%] ">
          <SideBar />
        </div>
        <div className=" w-[80%] ml-10 mt-10 ">
          {isExistingUser ? <ExistingUserPage /> : <NewUserPage />}
        </div>
      </div>
    </div>
  );
};

export default dashboard;
