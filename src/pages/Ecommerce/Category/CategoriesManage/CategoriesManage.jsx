/** @format */

import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { path } from "../../../../utils/constant";

const CategoriesManage = () => {
  const navigate = useNavigate();
  // Call API data
  const data = [];
  const [categoryData, setcategoryData] = useState([]);
  useEffect(() => {
    handlergetCategoryList();
  }, []);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const [messageApi, contextHolder] = message.useMessage();

  const handleAPIDeleteCategory = async (id) => {
    await axios
      .delete(`http://103.157.218.126:8000/admin/deletecategory/${id}`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          messageApi.success("delete category success");
          handlergetCategoryList();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlergetCategoryList = async () => {
    await axios
      .get("http://103.157.218.126:8000/public/getallcategory")
      .then((res) => {
        setcategoryData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditCategory = async (id) => {
    navigate("../" + path.CATEGORYEDIT + `/${id}`, {
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
      title: "Name Category",
      dataIndex: "namecategory",
      key: "namecategories",
      fixed: "left",
      // filters: [
      //   {
      //     text: "Liem",
      //     value: "Liem",
      //   },
      // ],
      // filterMode: "tree",
      // filterSearch: true,
      // onFilter: (value, record) => record.name.includes(value),
      // onFilter: (name, record) => record.name.indexOf(name) === 0,
    },
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (_, record) => (
        <div className="flex items-center justify-center">
          <div className="w-[200px] h-[200px]">
            <img
              src={record?.img}
              className="object-contain w-full h-full"
            ></img>
          </div>
        </div>
      ),
    },

    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 200,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="hover:underline cursor-pointer hover:text-blue-500 hover:font-bold"
            onClick={() => handleEditCategory(record?.id - 1)}
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
      id: "1",
      namecategory: "Tea",
      img: "http://103.157.218.115:8899/static/media/lycheerose.408dec593a367331651f.png",
    },
    {
      id: "2",
      namecategory: "Milk",
      img: "http://103.157.218.115:8899/static/media/signatureamber.ab09d5cf94e69e5f7e18.png",
    },
    {
      id: "3",
      namecategory: "Beverage",
      img: "http://103.157.218.115:8899/static/media/coffeelatte.6121fa45f0c614167b46.png",
    },
  ];

  for (let i = 0; i < categoryData.length; i++) {
    data.push({
      id: categoryData[i].id,
      namecategories: categoryData[i].name,
      title: categoryData[i].title,
    });
  }
  return (
    <div className="">
      {contextHolder}
      {/* Start Breadcrumbs */}
      {/* <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <Breadcrumbs
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
            E-Commerce
          </a>
          <a href="#" className="font-bold text-blue-400">
            CategoriesManage
          </a>
        </Breadcrumbs>
      </div> */}
      {/* End Breadcrumbs */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">CATEGORIES MANAGE</p>
        </div>

        {/* Start table categories Manage */}
        <div className="">
          <div className="flex items-center justify-between px-4 py-4">
            <div className=" lg:w-3/12 h-10 sm:w-10/12 md:w-full xl:w-3/12 2xl:w-4/12">
              <InputGroup className="flex  items-center w-full">
                <Input
                  type="text"
                  placeholder="Search Categories"
                  className="text-black w-full h-10 border-b-2 border-black border-solid p-2"
                />

                <InputRightElement>
                  <button className="text-black  h-10 flex justify-center items-center">
                    <Icon icon="material-symbols:search" fontSize={24}></Icon>
                  </button>
                </InputRightElement>
              </InputGroup>
            </div>
            <div className="flex items-center gap-x-3">
              <button
                className="w-auto h-auto p-2 rounded-lg border-2 border-green-300 hover:border-green-500 flex items-center gap-x-2 hover:shadow-lg"
                onClick={() => {
                  navigate("../" + path.CATEGORYADD);
                }}
              >
                <Icon
                  icon="mdi:package-variant-add"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Add New Categories</p>
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

export default CategoriesManage;
