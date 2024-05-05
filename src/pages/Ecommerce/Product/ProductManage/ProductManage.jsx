/** @format */

import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Table, message } from "antd";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { path } from "../../../../utils/constant";
const ProductManage = () => {
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
    navigate("../" + path.PRODUCTVIEW + `/${id}`, { state: mockData[id] });
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
  const handledeleteProduct = async (id) => {
    await axios
      .delete(`http://103.157.218.126:8000/admin/deleteproduct/${id}`)
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          toast.success("delete product success");
          handlegetProduct();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEditProduct = (id) => {
    navigate("../" + path.PRODUCTEDIT + `/${id}`, {
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
      title: "Name Product",
      dataIndex: "nameproduct",
      key: "nameproduct",

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
      title: "Price",
      dataIndex: "price",
      key: "price",
    },

    { title: "Categories", dataIndex: "categories", key: "categories" },

    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 200,
      render: (_, record) => (
        <div className="flex items-center justify-center gap-x-2">
          <button
            className="hover:underline cursor-pointer hover:text-blue-500 hover:font-bold"
            onClick={() => {
              handleClickView(record?.key - 1);
            }}
          >
            <p className="">View</p>
          </button>

          <button
            className="hover:underline cursor-pointer hover:text-blue-500 hover:font-bold"
            onClick={() => handleEditProduct(record?.key - 1)}
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
      nameproduct: "HOUSE MILK TEA 1",
      image:
        "http://103.157.218.115:8899/static/media/housemilktea.51f4ac6005a0515334d2.png",
      description: "Premium House Blend Black Tea W. Cream & Boba",
      price: 5.9,
      categories: "Tea",
    },
    {
      key: "2",
      nameproduct: "HOUSE MILK TEA 2 ",
      image:
        "http://103.157.218.115:8899/static/media/classicthai.6121fa45f0c614167b46.png",
      description: "Premium House Blend Black Tea W. Cream & Boba",
      price: 5.9,
      categories: "Tea",
    },
    {
      key: "3",
      nameproduct: "HOUSE MILK TEA 3",
      image:
        "http://103.157.218.115:8899/static/media/signatureamber.ab09d5cf94e69e5f7e18.png",
      description: "Premium House Blend Black Tea W. Cream & Boba",
      price: 5.9,
      categories: "Tea",
    },
    {
      key: "4",
      nameproduct: "HOUSE MILK TEA 4",
      image:
        "http://103.157.218.115:8899/static/media/matcha.c72c994deda45c6b891d.png",
      description: "Premium House Blend Black Tea W. Cream & Boba",
      price: 5.9,
      categories: "Tea",
    },
    {
      key: "5",
      nameproduct: "HOUSE MILK TEA 5",
      image:
        "http://103.157.218.115:8899/static/media/coffeelatte.6121fa45f0c614167b46.png",
      description: "Premium House Blend Black Tea W. Cream & Boba",
      price: 5.9,
      categories: "Tea",
    },
    {
      key: "6",
      nameproduct: "HOUSE MILK TEA 6",
      image:
        "http://103.157.218.115:8899/static/media/tarolover.7184f3ab83f0426e3b72.png",
      description: "Premium House Blend Black Tea W. Cream & Boba",
      price: 5.9,
      categories: "Tea",
    },
    {
      key: "7",
      nameproduct: "HOUSE MILK TEA 7",
      image:
        "http://103.157.218.115:8899/static/media/creamyjasmine.51f4ac6005a0515334d2.png",
      description: "Premium House Blend Black Tea W. Cream & Boba",
      price: 5.9,
      categories: "Tea",
    },
    {
      key: "8",
      nameproduct: "HOUSE MILK TEA 8",
      image:
        "http://103.157.218.115:8899/static/media/roseyogurt.e4d41c556e6c14dc0ee7.png",
      description: "Premium House Blend Black Tea W. Cream & Boba",
      price: 5.9,
      categories: "Tea",
    },
    {
      key: "9",
      nameproduct: "HOUSE MILK TEA 9",
      image:
        "http://103.157.218.115:8899/static/media/peach.43c5bf2c7241b3fbd0af.png",
      description: "Premium House Blend Black Tea W. Cream & Boba",
      price: 5.9,
      categories: "Tea",
    },
    {
      key: "10",
      nameproduct: "HOUSE MILK TEA 10",
      image:
        "http://103.157.218.115:8899/static/media/lycheerose.408dec593a367331651f.png",
      description: "Premium House Blend Black Tea W. Cream & Boba",
      price: 5.9,
      categories: "Tea",
    },
  ];

  return (
    <div className="">
      {contextHolder}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl">PRODUCT MANAGE</p>
        </div>
        {/* Start Table Product Manage */}
        <div className="">
          <div className="flex items-center justify-between gap-x-10 px-4 py-4 ">
            <div className="  flex gap-x-4 w-6/12 justify-center items-center">
              <InputGroup className="flex items-center w-full">
                <Input
                  type="text"
                  placeholder="Search Product"
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
                  navigate("../" + path.PRODUCTADD);
                }}
              >
                <Icon
                  icon="mdi:package-variant-add"
                  width={24}
                  height={24}
                ></Icon>
                <p className="">Add New Product</p>
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

export default ProductManage;
