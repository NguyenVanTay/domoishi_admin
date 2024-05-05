/** @format */

import React, { useState } from "react";
import { Breadcrumbs, Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { toast } from "react-toastify";
import { isValidInputCategory } from "../../../../helpers/validInputs";

const CategoriesAdd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
  });
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  const [file, setFile] = useState();

  const [imagecategory, setimagecategory] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  const handleAddcategoryAPI = async () => {
    // validation  input categories
    let check = isValidInputCategory(formData, toast);
    if (check === true) {
      await axios
        .post("http://103.157.218.126:8000/admin/addcategory", formData)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            toast.success("add categories success");
            navigate("/categoriesmanage");
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
      {contextHolder}
      {/* Start breadcrumbs */}
      {/* <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <Breadcrumbs
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
          <div className="hover:font-bold hover:text-blue-400">E-commerce</div>
          <div
            className="hover:font-bold hover:text-blue-400"
            onClick={() => {
              navigate("/categoriesmanage");
            }}
          >
            CategoriesManage
          </div>
          <div className="font-bold text-blue-400">AddCategories</div>
        </Breadcrumbs>
      </div> */}
      {/* end breadcrumbs */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> ADD CATEGORY</p>
        </div>
        {/* Start form add categories */}
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name Category</p>
            <Input
              type="text"
              className="w-full h-auto p-2 border-[1px] border-gray-200"
              placeholder="Name Category"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <div className="flex justify-between">
              <input type="file" onChange={handleFile} className="p-3  " />

              <button
                className="h-auto w-auto p-2 bg-blue-400 rounded-lg"
                // onClick={handleUpload}
              >
                Upload
              </button>
            </div>
            <div className="">
              {imagecategory ? (
                <img
                  src={imagecategory}
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
              onClick={() => handleAddcategoryAPI()}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesAdd;
