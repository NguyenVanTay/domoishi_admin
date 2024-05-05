/** @format */

import React, { useState } from "react";
import { Breadcrumbs, Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
} from "@chakra-ui/react";
import { Divider, Table } from "antd";
import { useNavigate } from "react-router-dom";
const UserView = () => {
  const navigate = useNavigate();
  // Declare label for variable
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },

    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Method", dataIndex: "method", key: "method" },
    { title: "Total", dataIndex: "total", key: "total" },

    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => (
        <>
          {status.map((item) => {
            if (item === "paid") {
              return (
                <div className="bg-green-300 w-auto h-auto rounded-lg flex justify-center items-center shadow-2xl border-2 border-green-300">
                  <p className="">Paid</p>
                </div>
              );
            }
            return (
              <div className="bg-red-300 w-auto h-auto  justify-center items-center  shadow-2xl border-2 border-green-300">
                <p className="">Unpaid</p>
              </div>
            );
          })}
        </>
      ),
    },
  ];

  // Create Mock data
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      id: i,
      date: `03 Aug, 2023 | 10:02 AM`,
      description: `Bit Bass Headphone`,
      method: "Momo",
      total: `$2032.12`,
      status: ["paid"],
    });
  }

  return (
    <div className="">
      {/* Start Breacrumbs */}
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
          <a href="#" className="hover:font-bold hover:text-blue-400">
            Users
          </a>
          <a href="#" className="hover:font-bold hover:text-blue-400">
            UserList
          </a>
          <a href="#" className="font-bold text-blue-400">
            UserView
          </a>
        </Breadcrumbs> */}
      </div>
      {/* End Breadcrums */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg px-2 pt-2 pb-4">
        <div className="flex p-2 justify-between">
          <p className="text-2xl">USER VIEW</p>
          <button
            className="w-auto h-auto"
            onClick={() => {
              navigate(-1);
            }}
          >
            <Icon icon="tabler:arrow-back" width={24} height={24}></Icon>
          </button>
        </div>

        {/* Start Tabs User View */}

        <Tabs>
          <TabList className="flex justify-start items-center gap-x-3 p-3 ">
            <Tab className="w-[5%]  h-auto  rounded-xl py-2 px-2 flex flex-col  justify-center items-center bg-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
              <Icon icon="bxs:user-detail" width={30} height={30}></Icon>
              <p className="">Detail</p>
            </Tab>

            <Tab className="w-[5%]  h-auto  rounded-xl py-2 px-2 flex flex-col  justify-center items-center bg-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
              <Icon
                icon="fa-solid:file-invoice-dollar"
                width={30}
                height={30}
              ></Icon>
              <p className="">Invoices</p>
            </Tab>
            <Tab className="w-[5%] h-auto  rounded-xl py-2 px-2 flex flex-col  justify-center items-center bg-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
              <Icon icon="icon-park-solid:log" width={30} height={30}></Icon>
              <p className="">Log</p>
            </Tab>
          </TabList>

          <TabPanels className="mt-8">
            <TabPanel>
              <div className="h-full w-[90%] mx-auto flex pb-10 ">
                <div className=" bg-green-50 h-auto w-full flex flex-col items-center justify-center mx-4 border-2 border-gray-200 shadow-2xl rounded-2xl">
                  <div className=" flex justify-center items-center flex-col pt-2">
                    <div className="w-[30%]">
                      <img
                        className="w-full rounded-full"
                        src="http://matx-react.ui-lib.com/assets/images/faces/10.jpg"
                      ></img>
                    </div>
                    <div className="">
                      <p className="text-xl ">Luu Lac Ling</p>
                    </div>
                    <div className="">
                      <p className="text-sm text-gray-500">Customer</p>
                    </div>
                  </div>
                  <Divider></Divider>

                  <div className="flex justify-between items-center w-full px-2">
                    <p className="">Email</p>
                    <p className="">taynv@1cinnovation.com</p>
                  </div>
                  <Divider></Divider>
                  <div className="flex justify-between items-center w-full px-2">
                    <p className="">Phone Number</p>
                    <p className="">0375875162</p>
                  </div>
                  <Divider></Divider>
                  <div className="flex justify-between items-center w-full px-2">
                    <p className="">Date Of Birth</p>
                    <p className="">25/06/1999</p>
                  </div>
                  <Divider></Divider>
                  <div className="flex justify-between items-center w-full px-2">
                    <p className="">Address</p>
                    <p className="">Ho Chi Minh </p>
                  </div>
                  <Divider></Divider>
                </div>
                <div className="bg-red-50 h-auto w-full flex flex-col items-center justify-center mx-4 border-2 border-gray-200 shadow-2xl rounded-2xl">
                  <div className="flex">
                    <p className="text-xl font-bold">Billing</p>
                  </div>
                  <Divider></Divider>
                  <div className="flex justify-between px-2 items-center w-full">
                    <p className="">Momo</p>
                    <p className="">******5162</p>
                  </div>
                  <Divider></Divider>
                  <div className="flex justify-between px-2 items-center w-full">
                    <p className="">Credit Card</p>
                    <p className="">**** **** **** 4242</p>
                  </div>
                  <Divider></Divider>
                  <div className="flex justify-between px-2 items-center w-full">
                    <p className="">Paid</p>
                    <p className="">$2110</p>
                  </div>
                  <Divider></Divider>
                </div>
                <div className="bg-yellow-50 h-auto w-full flex flex-col items-center justify-center mx-4 border-2 border-gray-200 shadow-2xl rounded-2xl">
                  <div className="">
                    <p className="text-xl font-bold">Send Email</p>
                  </div>
                  <Divider></Divider>

                  <div className="w-full px-2">
                    <Select
                      icon={false}
                      className="border-2 border-gray-100 w-full h-auto px-2 py-2"
                    >
                      <option className="">Resend Last Invoice</option>
                      <option className="">Send Password Reset Email</option>
                      <option className="">Send Verification Email</option>
                    </Select>
                  </div>
                  <Divider></Divider>
                  <button className="bg-gradient-to-t from-blue-100 to-blue-300 p-2 hover:bg-gradient-to-l  rounded-lg ">
                    <Icon icon></Icon>
                    <p className="">Send Email</p>
                  </button>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="h-full w-[90%] mx-auto flex flex-col justify-start items-center pb-10 ">
                <div className=" pb-6">
                  <p className="text-2xl"> Billing</p>
                </div>

                <div className="flex justify-center items-center">
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={{ pageSize: 10, position: ["bottomCenter"] }}
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
        {/* End Tabs User View */}
      </div>
    </div>
  );
};

export default UserView;
