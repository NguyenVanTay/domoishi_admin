/** @format */

import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { SidebarAd } from "../../components";
function PrivateLayout() {
  // const { Footer, Sider, Content } = Layout;

  // Login
  const navigate = useNavigate();

  //   useEffect(() => {
  //       const loggedInUser = sessionStorage.getItem("token");
  //       if (!loggedInUser) {
  //           navigate("/login");
  //       }
  //   }, []);

  return (
    <>
      {/* <HeaderAd /> */}
      <div className=" grid grid-cols-5 h-full ">
        <div className="col-span-1 h-full">
          <SidebarAd />
        </div>

        <div className="col-span-4 h-full mt-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default PrivateLayout;
