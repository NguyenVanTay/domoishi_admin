/** @format */

import React from "react";
import { Icon } from "@iconify/react";
import { Breadcrumbs, Input } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      {/* Start Breadcrumbs */}
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        {/* <Breadcrumbs
          separator={
            <Icon icon="ep:arrow-right-bold" className="text-blue-500"></Icon>
          }
        >
          <a
            href="/dashboard"
            className="hover:font-bold hover:text-blue-400 flex  items-center gap-x-2"
          >
            <Icon icon="wpf:administrator" width={24} height={24}></Icon>

            <p className="">Admin</p>
          </a>

          <a href="/profile" className="font-bold text-blue-400">
            Profile
          </a>
        </Breadcrumbs> */}
      </div>
      {/* End Breadcrumbs */}

      {/* Start banner Profile */}
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg ">
        <div className="w-full h-auto rounded-lg  flex flex-col justify-center items-center">
          <img
            src="http://matx-react.ui-lib.com/assets/images/study-2.jpg "
            className="w-full h-[200px] object-cover rounded-t-lg"
          ></img>
          <div className="flex justify-start gap-x-2 p-2">
            <div className="w-[100px]  h-[100px] relative ">
              <img
                src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/362986939_2605878022904631_4056306678071544124_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5CKOzwditsUAX8VBeK3&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfBDGnivyE4CmD5SLcs7S-WJ40OOBejPQ6U6nwmtct1rqg&oe=64CF7EF7"
                className="w-full h-[full] rounded-full "
              ></img>
              <button className="absolute top-20 right-2 bg-blue-500 p-1 rounded-full">
                <Icon
                  icon="mdi:camera"
                  width={24}
                  height={24}
                  className="text-white"
                ></Icon>
              </button>
            </div>
            <div className="flex flex-col justify-center items-start">
              <p className="text-">Luu Lac Ling</p>
              <p className="text-gray-400"> Admin</p>
            </div>
          </div>
          <div className="flex justify-center gap-x-10 text-gray-500 py-4">
            <div className="flex justify-center gap-x-2">
              <Icon icon="iconoir:developer" width={24} height={24}></Icon>
              <p className="">Developer</p>
            </div>
            <div className="flex justify-center gap-x-2">
              <Icon icon="bytesize:location" width={24} height={24}></Icon>
              <p className="">Vietnam</p>
            </div>
            <div className="flex justify-center gap-x-2">
              <Icon icon="mdi:calendar" width={24} height={24}></Icon>
              <p className="">Join March 17</p>
            </div>
          </div>
        </div>
      </div>
      {/* End banner Profile */}

      {/* Start Profile  */}
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg flex py-4 ">
        <div className="w-full px-4">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Full Name</p>
            <Input
              type="text"
              className="w-full h-auto"
              placeholder="Full Name"
              defaultValue={"Luu Lac Ling"}
              disabled
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Phone Number</p>
            <Input
              type="text"
              className="w-full h-auto"
              placeholder="Phone Number"
              defaultValue={"0375875162"}
              disabled
            />
          </div>
        </div>
        <div className="w-full px-4">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Email</p>
            <Input
              type="text"
              className="w-full h-auto"
              placeholder="Email"
              defaultValue={"admin@gmail.com"}
              disabled
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Address</p>
            <Input
              type="text"
              className="w-full h-auto"
              placeholder="Email"
              defaultValue={"Ho Chi Minh"}
              disabled
            />
          </div>
        </div>
      </div>
      <div className=" flex justify-center gap-x-6">
        <button
          className="w-auto h-auto p-2 bg-blue-600 border-2 border-gray-200 shadow-2xl rounded-xl "
          // onClick={() => {
          //   navigate("dashboard");
          // }}
        >
          <p className="text-white"> Save Changes</p>
        </button>
        <button
          className="w-auto h-auto p-2 bg-white border-2 border-blue-300 shadow-2xl rounded-xl"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <p className="text-blue-600"> Cancel</p>
        </button>
      </div>
      {/* End Profile */}
    </div>
  );
};

export default Profile;
