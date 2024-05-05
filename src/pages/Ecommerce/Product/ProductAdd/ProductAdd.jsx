/** @format */

import React, { useState, useEffect } from "react";
import { Breadcrumbs, Input, Textarea } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { toast } from "react-toastify";
import { isValidInputProduct } from "../../../../helpers/validInputs";

const ProductAdd = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(1);

  const [imageproduct, setimageproduct] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    image: "",
    categoryId: 1,
  });

  useEffect(() => {
    setFormData({
      ...formData,
      image: imageproduct,
    });
  }, [imageproduct]);

  const [messageApi, contextHolder] = message.useMessage();

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
            setimageproduct(
              `http://103.157.218.126:8000/images/${res.data.image}`
            );
          }
        }
      })
      .catch((err) => console.log(err));
  };

  const handleaddAPI = async () => {
    let check = isValidInputProduct(formData, toast);
    if (check === true) {
      await axios
        .post("http://103.157.218.126:8000/admin/addproduct", formData)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            toast.success("create product success");
            navigate("/productmanage");
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
      {/* Start Form Create Product */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> CREATE PRODUCT</p>
        </div>
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name Product</p>
            <Input
              className="w-full h-auto border-[1px] p-2"
              placeholder="Name Product"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Description</p>
            <textarea
              className="w-full h-[300px] border-[1px] p-2"
              placeholder="Subtitle"
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Price</p>
            <Input
              className="w-full h-full border-[1px] p-2"
              placeholder="Price"
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Category</p>
            <Select
              icon={false}
              placeholder="Please select category"
              className="border-[1px] p-2 w-full h-auto "
              // onChange={(e) =>
              //   setFormData({ ...formData, category: e.target.value })
              // }
            >
              <option className="">Tea</option>
              <option className="">Milk</option>
              <option className="">Beverage</option>
            </Select>
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
              {imageproduct ? (
                <img
                  src={imageproduct}
                  className="object-cover w-32 h-32 rounded-lg"
                />
              ) : (
                <img
                  src="https://t3.ftcdn.net/jpg/02/18/21/86/360_F_218218632_jF6XAkcrlBjv1mAg9Ow0UBMLBaJrhygH.jpg"
                  className="object-cover w-32 h-32 rounded-lg"
                />
              )}
            </div>

            <p className="">jpg , png , jpeg</p>
          </div>
          <div className="flex justify-center items-center gap-x-4">
            <button
              className="w-auto h-auto py-2 px-4 bg-slate-50 border-2 border-blue-300 rounded-lg hover:bg-slate-200 hover:shadow-lg"
              onClick={() => {
                navigate(-1);
              }}
            >
              <p className="">Back</p>
            </button>

            <button
              className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg "
              onClick={() => handleaddAPI()}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
      </div>

      {/* End Form Create Product  */}
    </div>
  );
};

export default ProductAdd;
