/** @format */

import React, { useState } from "react";

import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { path } from "../../../utils/constant";
import { Icon } from "@iconify/react";
import imgBackground from "../../../assets/background.png";
async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const LoginPage = ({ setToken }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
  };

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    if (
      loginData.email === "admin@gmail.com" &&
      loginData.password === "123456"
    ) {
      navigate(path.CATEGORYMANAGE);
      toast.success("login with admin");
    } else {
      toast.error(
        "The email or password you entered is not connected to any account"
      );
    }
  };

  return (
    <div
      className="w-full h-[100vh]  "
      style={{ backgroundImage: `url("${imgBackground}")` }}
    >
      <div className="flex mx-auto w-[90%] items-center pt-4 text-white">
        <Icon icon={"mdi:administrator-network"} className="h-10 w-10"></Icon>
        <p className="text-xl font-bold ">Domoishi</p>
      </div>
      <div className="w-[50%] mt-[10%]   mx-auto h-auto rounded-r-2xl">
        <div className="mx-auto w-[90%] bg-white p-8 rounded-md">
          <div className={``}>
            <div className="pt-4">
              <p className="text-gray-300 font-mar text-3xl font-bold">
                Welcome back
              </p>
            </div>
          </div>

          <div className="">
            <form className="" onSubmit={handleSubmit}>
              <div className="w-full mx-auto h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Email</p>
                <input
                  className="w-full h-auto border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200 bg-transparent placeholder-blue-500 placeholder:font-bold"
                  placeholder="Email"
                  type="text"
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
              </div>
              <div className="w-full mx-auto h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
                <p className="text-lg">Password</p>
                <input
                  className="w-full h-auto border-b-2 border-gray-300 p-2 outline-none focus:border-blue-400 focus:ease-out duration-200 bg-transparent placeholder-blue-500 placeholder:font-bold"
                  placeholder="Password"
                  type="password"
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </div>
            </form>

            <div className="w-full mx-auto flex justify-start  ">
              <button
                className="  h-auto px-4 py-2 rounded-sm   bg-blue-400 hover:bg-blue-500 "
                onClick={handleLogin}
              >
                <p className="text-white">Login</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default LoginPage;
