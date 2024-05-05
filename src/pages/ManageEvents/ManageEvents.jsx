/** @format */

import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { path } from "../../utils/constant";
// import { path } from "../../../../utils/constant";
const ManageEvents = () => {
  const navigate = useNavigate();
  const [productData, setproductData] = useState([]);
  const data = [];

  for (let i = 0; i < productData.length; i++) {
    data.push({
      key: i,
      id: productData[i].id,
      nameproduct: productData[i].name,
      image: productData[i].image,
      description: productData[i].description,
      price: productData[i].price,
      quatity: "100",
      categories: productData[i].categoryId,
    });
  }

  // Set state for variable
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleClickView = (id) => {
    navigate("../" + path.CATEGORYADD + `/${id}`, { state: mockData[id] });
  };
  const handlegetProduct = async () => {
    await axios
      .get("http://103.157.218.126:8000/public/getallproduct")
      .then((res) => {
        setproductData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const handledeleteProduct = async (id) => {
  //   await axios
  //     .delete(`http://103.157.218.126:8000/admin/deleteproduct/${id}`)
  //     .then((res) => {
  //       if (res.status === 200 || res.status === 201) {
  //         toast.success("delete product success");
  //         handlegetProduct();
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const handleEditEvents = (id) => {
    navigate("../" + path.EVENTEDIT + `/${id}`, {
      state: mockData[id],
    });
  };

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    handlegetProduct();
  }, []);
  // Declare label for variable
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
      fixed: "left",
      width: 100,
    },
    {
      title: "Event",
      dataIndex: "event",
      key: "event",
      fixed: "left",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <div className="flex items-center justify-center">
          <div className="w-28 h-28">
            <img
              src={record.image}
              className="object-contain w-full h-full"
            ></img>
          </div>
        </div>
      ),
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
    },

    { title: "Tags", dataIndex: "tags", key: "tag" },

    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 200,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="hover:underline cursor-pointer hover:text-blue-500 hover:font-bold"
            onClick={() => handleEditEvents(record?.key - 1)}
          >
            <p className="">Edit</p>
          </button>

          <button
            className="hover:underline cursor-pointer hover:text-blue-500 hover:font-bold"
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
      key: "1",
      event: "BEST POKE IN TOWN",
      image:
        "http://103.157.218.115:8899/static/media/event_product_1.694c447619d6a47557c9.png",
      description:
        "Our commitment to exceptional taste extends beyond coffee to our delectable pastries. Our signature creation, the Croffle, is a harmonious blend of croissants and waffles. Crispy on the outside, soft and buttery on the inside, these delightful treats are a symphony of flavors that will leave you craving more. Whether you opt for a sweet or savory Croffle, each bite is a celebration of the perfect balance between textures and tastes.",
      time: "The event starts on the 6th and ends on November 30th.",
      tags: "(*) Applies to joyu’s specials.",
    },
    {
      key: "2",
      event: "PORK RAMEN",
      image:
        "http://103.157.218.115:8899/static/media/event_product_2.e7f69f127c4f5cfc582f.png",
      description:
        "Our commitment to exceptional taste extends beyond coffee to our delectable pastries. Our signature creation, the Croffle, is a harmonious blend of croissants and waffles. Crispy on the outside, soft and buttery on the inside, these delightful treats are a symphony of flavors that will leave you craving more. Whether you opt for a sweet or savory Croffle, each bite is a celebration of the perfect balance between textures and tastes.",
      time: "The event starts on the 6th and ends on November 30th.",
      tags: "(*) Applies to joyu’s specials.",
    },
    {
      key: "3",
      event: "BUY 1 GET 1 FREE",
      image:
        "http://103.157.218.115:8899/static/media/event_product_3.acbcade25f16a73e11c1.png",
      description:
        "Our commitment to exceptional taste extends beyond coffee to our delectable pastries. Our signature creation, the Croffle, is a harmonious blend of croissants and waffles. Crispy on the outside, soft and buttery on the inside, these delightful treats are a symphony of flavors that will leave you craving more. Whether you opt for a sweet or savory Croffle, each bite is a celebration of the perfect balance between textures and tastes.",
      time: "The event starts on the 6th and ends on November 30th.",
      tags: "(*) Applies to joyu’s specials.",
    },
  ];

  return (
    <div className="">
      {contextHolder}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">EVENTS MANAGE</p>
        </div>
        {/* Start Table Product Manage */}
        <div className="">
          <div className="flex items-center justify-between gap-x-10 px-4 py-4 ">
            <div className="flex items-center gap-x-3">
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => {
                  navigate("../" + path.EVENTCREATE);
                }}
              >
                <Icon
                  icon="mdi:package-variant-add"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Add New Event</p>
              </button>
            </div>
          </div>
          <div className="w-[100%]">
            <Table
              columns={columns}
              dataSource={mockData}
              pagination={{ pageSize: 5, position: ["bottomCenter"] }}
              // scroll={{
              //   x: 1500,
              // }}
            />
          </div>
        </div>
        {/* End Table Product Manage */}
      </div>
    </div>
  );
};

export default ManageEvents;
