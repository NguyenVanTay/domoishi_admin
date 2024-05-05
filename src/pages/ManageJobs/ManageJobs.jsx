/** @format */

import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { path } from "../../utils/constant";
// import {} from "";

const ManageJobs = () => {
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const handleEditJob = async (id) => {
    navigate("../" + path.JOBEDIT + `/${id}`, {
      state: mockData[id],
    });
  };
  // const handleEditProduct = (id) => {
  //   navigate("../" + path.PRODUCTEDIT + `/${id}`, {
  //     state: mockData[id],
  //   });
  // };

  // Declare label for vairiable
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      fixed: "left",
      width: 100,
    },
    {
      title: "Job",
      dataIndex: "job",
      key: "job",
      fixed: "left",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },

    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 200,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="hover:underline cursor-pointer"
            onClick={() => handleEditJob(record?.id - 1)}
          >
            <p className="">Edit</p>
          </button>

          <button
            className="hover:underline cursor-pointer"
            // onClick={() => handledeleteProduct(record.id)}
          >
            <p className="">Delete</p>
          </button>
        </div>
      ),
    },
  ];
  const mockData = [
    {
      id: "1",
      job: "Cashier",
      description:
        "The cashier’s role is to ensure that each and every customer is served in a friendly, professional, and timely manner. This includes greeting customers as they enter the store, processing customer payments through the POS system, and resolve customer issues.",
    },
    {
      id: "2",
      job: "Barista",
      description:
        "The cashier’s role is to ensure that each and every customer is served in a friendly, professional, and timely manner. This includes greeting customers as they enter the store, processing customer payments through the POS system, and resolve customer issues.g",
    },
    {
      id: "3",
      job: "Assistant Manager",
      description:
        " The assistant manager is responsible for providing operational services in the store. The assistant manager provides necessary directions to other members of staff through daily tasks and ensures they perform their assigned duties in accordance to the store.",
    },
  ];

  return (
    <div className="">
      {contextHolder}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">Jobs MANAGE</p>
        </div>

        {/* Start table categories Manage */}
        <div className="">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-x-3">
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => {
                  navigate("../" + path.JOBCREATE);
                }}
              >
                <Icon
                  icon="mdi:package-variant-add"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Add New Job</p>
              </button>
            </div>
          </div>
          <div className="w-[100%]">
            <Table
              columns={columns}
              dataSource={mockData}
              pagination={{ pageSize: 5, position: ["bottomCenter"] }}

              // scroll={{
              //   x: "max-content",
              // }}
            />
          </div>
        </div>
        {/* End table categories Manage */}
      </div>
    </div>
  );
};

export default ManageJobs;
