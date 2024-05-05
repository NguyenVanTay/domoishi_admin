/** @format */

import React, { useState } from "react";
import { Breadcrumbs, Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import DatePicker from "react-datepicker";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
} from "@chakra-ui/react";
import { isValidInputsUser } from "../../../../helpers/validInputs";
import { toast } from "react-toastify";

const UserEdit = () => {
  // const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const location = useLocation();
  let userDetail = location.state;

  const [formData, setFormData] = useState({
    name: userDetail.name,
    address: userDetail.address,
    avatar: userDetail.avatar,
    dateofbirth: userDetail.dateofbirth,
    email: userDetail.email,
    phone: userDetail.phone,
    role: userDetail.role,
  });
  const ApiEditUser = async (id) => {
    let check = isValidInputsUser(formData, toast);
    if (check) {
      await axios
        .put(`http://103.157.218.126:8000/admin/updateuser/${id}`, formData)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            console.log("edit success");
            navigate("/userlist");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return;
  };

  return (
    <div className="">
      {/* Start Breadcrumbs */}
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1 flex justify-between">
        {/* <Breadcrumbs
          separator={
            <Icon icon="ep:arrow-right-bold" className="text-blue-500"></Icon>
          }
        >
          <div
            className="hover:font-bold hover:text-blue-400 flex  items-center gap-x-2"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <Icon icon="wpf:administrator" width={24} height={24}></Icon>
            <p className="">Admin</p>
          </div>
          <div className="hover:font-bold hover:text-blue-400">Users</div>
          <div className="font-bold text-blue-400">UserEdit</div>
        </Breadcrumbs> */}
      </div>
      {/* End Breadcrumbs  */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2 justify-between">
          <p className="text-2xl">USER EDIT</p>
          <button
            className="w-auto h-auto"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Icon icon="tabler:arrow-back" width={24} height={24}></Icon>
          </button>
        </div>

        {/* Start Tabs User Edit */}
        <Tabs>
          <TabList className="flex justify-center items-center gap-x-3 py-3 ">
            <Tab className="w-[12%] h-auto  rounded-xl py-2 px-2 flex flex-col  justify-center items-center bg-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
              <Icon icon="iconamoon:profile-fill" width={30} height={30}></Icon>
              <p className="">Account</p>
            </Tab>

            <Tab className="w-[12%] h-auto  rounded-xl py-2 px-2 flex flex-col  justify-center items-center bg-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
              <Icon icon="mdi:password" width={30} height={30}></Icon>
              <p className="">Change Password</p>
            </Tab>
          </TabList>

          <TabPanels className="mt-8">
            <TabPanel className="px-10 py-4 mx-auto w-[50%] ">
              <div className="flex pb-6">
                <p className="text-2xl font-bold">Account</p>
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Full Name</p>
                <Input
                  className="w-full h-auto"
                  placeholder="Full Name"
                  defaultValue={userDetail.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
              </div>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Email</p>
                <Input
                  className="w-full h-auto"
                  placeholder="Email"
                  defaultValue={userDetail.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Phone Number</p>
                <Input
                  className="w-full h-auto"
                  placeholder="Phone Number"
                  defaultValue={userDetail.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                  }}
                />
              </div>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Date of birth</p>

                <input
                  type="date"
                  className="w-full h-full border-2 border-black py-2 rounded-lg px-2"
                  defaultValue={userDetail.dateofbirth}
                  // onChange={(e) =>
                  //   setFormData({ ...formData, dateofbirth: e.target.value })
                  // }
                ></input>
              </div>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Role</p>
                <Select
                  icon={false}
                  className="border-[3px] border-black w-full h-auto px-2 py-2"
                  defaultValue={userDetail.role}
                  onChange={(e) => {
                    setFormData({ ...formData, role: e.target.value });
                    console.log(formData);
                  }}
                >
                  <option className="" value="admin">
                    admin
                  </option>
                  <option className="" value="user">
                    user
                  </option>
                </Select>
              </div>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Avatar</p>
                <button className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg">
                  <img src={userDetail.avatar} className="w-20 h-20"></img>
                </button>
                <p className="">jpg , png , jpeg</p>
              </div>

              <div className="flex justify-between items-center">
                <button className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg">
                  <p className="">Reset</p>
                </button>
                <button
                  className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg"
                  onClick={() => ApiEditUser(userDetail.id)}
                >
                  <p className="">Save</p>
                </button>
              </div>
            </TabPanel>

            <TabPanel className="px-10 py-4 mx-auto w-[50%]">
              <div className="flex pb-6">
                <p className="text-2xl font-bold">Change Password</p>
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Current Password</p>
                <Input
                  className="w-full h-auto"
                  placeholder="Current Password"
                />
              </div>

              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">New Password</p>
                <Input className="w-full h-auto" placeholder="New Password" />
              </div>
              <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Confirm Password</p>
                <Input
                  className="w-full h-auto"
                  placeholder="Confirm Password"
                />
              </div>

              <div className="flex justify-between items-center">
                <button className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg">
                  <p className="">Reset</p>
                </button>
                <button className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg ">
                  <p className="">Save Password</p>
                </button>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* End Tabs User Edit */}
      </div>
    </div>
  );
};

export default UserEdit;
