/** @format */
// @ts-expect-error

import React, { useState, useEffect } from "react";
import { Breadcrumbs, Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Radio, message } from "antd";
import { isValidInputsUser } from "../../../../helpers/validInputs";
const UserAdd = () => {
  const [imageAvatar, setimageAvatar] = useState("");
  useEffect(() => {
    setFormData({
      ...formData,
      avatar: imageAvatar,
    });
  }, [imageAvatar]);
  const RoleOption = ["Admin", "User"];
  const options = [
    {
      label: "Admin",
      value: "User",
    },
    {
      label: "Pear",
      value: "User",
    },
  ];

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    dateofbirth: "",
    address: "",
    avatar: "",
    password: "",
    role: "Admin",
  });

  // set state for variable
  const [file, setFile] = useState();
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const handleUpload = () => {
    const dataimage = new FormData();
    dataimage.append("profile-pic", file);
    axios
      .post("http://103.157.218.126:8000/upload", dataimage)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          {
            setimageAvatar(
              `http://103.157.218.126:8000/images/${res.data.image}`
            );
          }
        }
      })
      .catch((err) => console.log(err));
  };

  // declare navigate
  const navigate = useNavigate();

  const handleGetAPI = async () => {
    // validation  input user

    let check = isValidInputsUser(formData, toast);
    if (check === true) {
      await axios
        .post("http://103.157.218.126:8000/admin/adduser", formData)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            toast.success("create new user success");
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
      {/* {contextHolder} */}
      {/* Start Breadcrums */}
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        {/* <Breadcrumbs
          separator={
            <Icon icon="ep:arrow-right-bold" className="text-blue-500"></Icon>
          }
        >
          <div
            className="hover:font-bold hover:text-blue-400 flex  items-center gap-x-2"
            onClick={() => navigate("/dashboard")}
          >
            <Icon icon="wpf:administrator" width={24} height={24}></Icon>
            <p className="">Admin</p>
          </div>
          <div className="hover:font-bold hover:text-blue-400">Users</div>
          <div className="font-bold text-blue-400">UserAdd</div>
        </Breadcrumbs> */}
      </div>
      {/* End Breadcrumbs */}
      {/* Start form Add User */}
      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2 justify-between">
          <p className="text-2xl">USER ADD</p>

          <button
            className="w-auto h-auto"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Icon icon="tabler:arrow-back" width={24} height={24}></Icon>
          </button>
        </div>

        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="flex pb-8">
            <p className="text-3xl">Add User</p>
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6 relative">
            <p className="text-lg">Full Name</p>
            <input
              className="w-full h-auto border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="Full Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Phone Number</p>
            <input
              className="w-full h-auto border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="Phone Number"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Email</p>
            <input
              className="w-full h-auto border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Date of birth</p>

            <input
              type="date"
              className="w-full h-auto border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  dateofbirth: e.target.value,
                })
              }
            ></input>
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Address</p>
            <input
              className="w-full h-auto border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="Address"
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>
          <div className="flex justify-start gap-x-4 items-center">
            <p className="text-lg">Role</p>
            <Radio.Group
              options={RoleOption}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              value={formData.role}
            ></Radio.Group>
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <div className="flex justify-between">
              <input type="file" onChange={handleFile} className="p-3  " />

              <button
                className="h-auto w-auto p-2 bg-blue-400 rounded-lg"
                onClick={handleUpload}
              >
                Upload
              </button>
            </div>
            <div className="">
              {imageAvatar ? (
                <img
                  src={imageAvatar}
                  className="object-cover w-20 h-20 rounded-full"
                />
              ) : (
                <img
                  src="https://t3.ftcdn.net/jpg/02/18/21/86/360_F_218218632_jF6XAkcrlBjv1mAg9Ow0UBMLBaJrhygH.jpg"
                  className="object-cover w-20 h-20 rounded-full"
                />
              )}
            </div>

            <p className="">jpg , png , jpeg</p>
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Password</p>
            <input
              className="w-full h-auto  border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200"
              placeholder="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <button
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg "
              onClick={() => handleGetAPI()}
            >
              <p className="">Save</p>
            </button>
            <button className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg">
              <p className="">Reset</p>
            </button>
            <button
              className="w-auto h-auto py-2 px-4 bg-red-50 border-2 border-red-300 rounded-lg hover:bg-red-200 hover:shadow-lg"
              onClick={() => navigate(-1)}
            >
              <p className="">Cancel</p>
            </button>
          </div>
        </div>
        {/* End form Add User */}
      </div>
      {/* End form Add User */}
    </div>
  );
};

export default UserAdd;
