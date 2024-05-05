/** @format */

import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import { Icon } from "@iconify/react";

import { Select } from "@chakra-ui/react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { isValidInputProduct } from "../../../../helpers/validInputs";

const ProductEdit = () => {
  const navigate = useNavigate();

  const location = useLocation();
  let productDetail = location.state;
  const [formData, setFormData] = useState({
    name: productDetail.name,
    price: productDetail.price,
    description: productDetail.description,
    image: productDetail.image,
    categoryId: productDetail.categoryId,
  });
  const ApiEditProduct = async (id) => {
    let check = isValidInputProduct();
    if (check === true) {
      await axios
        .put(`http://103.157.218.126:8000/admin/updateproduct/${id}`, formData)
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            toast.success("edit product success");
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
      {/* Start Breadcrumbs */}
      {/* <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <Breadcrumbs
          separator={
            <Icon icon="ep:arrow-right-bold" className="text-blue-500"></Icon>
          }
        >
          <div className="hover:font-bold hover:text-blue-400 flex  items-center gap-x-2">
            <Icon icon="wpf:administrator" width={24} height={24}></Icon>

            <p className="">Admin</p>
          </div>
          <div className="hover:font-bold hover:text-blue-400">E-commerce</div>
          <div className="hover:font-bold hover:text-blue-400">
            ProductManage
          </div>
          <div href="/createproduct" className="font-bold text-blue-400">
            EditProduct
          </div>
        </Breadcrumbs>
      </div> */}
      {/* End Breadcrumbs */}

      <div className="w-[90%] mx-auto h-auto bg-white shadow-xl rounded-lg p-1">
        <div className="flex p-2">
          <p className="text-2xl"> EDIT PRODUCT</p>
        </div>
        {/* Start Form Edit Product */}
        <div className="px-10 py-4 mx-auto w-[50%] ">
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Name Product</p>
            <Input
              type="text"
              className="w-full h-auto border-[1px] p-2"
              placeholder="Name Product"
              defaultValue={productDetail.nameproduct}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Description</p>
            <textarea
              className="w-full h-[300px] border-[1px] p-2"
              placeholder="Description"
              defaultValue={productDetail.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Price</p>
            <Input
              className="w-full h-auto border-[1px] p-2"
              placeholder="Price"
              defaultValue={productDetail.price}
              onChange={(e) => {
                setFormData({ ...formData, price: e.target.value });
                console.log(formData);
              }}
            />
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Categories</p>
            <Select
              icon={false}
              // placeholder="Please select category"
              className="border-[1px] p-2 w-full h-auto"
              defaultValue={productDetail.categories}
            >
              <option className="">{productDetail.categories}</option>
              <option className="">Milk</option>
              <option className="">Beverage</option>
            </Select>
          </div>

          <div className="w-full h-auto flex flex-col justify-start items-start gap-y-2 pb-6">
            <p className="text-lg">Image Product</p>
            <button className="w-auto h-auto py-2 px-4 bg-blue-300 border-2 border-blue-300 rounded-lg hover:bg-blue-500 hover:shadow-lg">
              <img
                className="w-20 h-20 object-cover"
                src={productDetail.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              ></img>
            </button>
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
              // onClick={() => ApiEditProduct(productDetail.id)}
            >
              <p className="">Save</p>
            </button>
          </div>
        </div>
        {/* End Form Edit Product */}
      </div>
    </div>
  );
};

export default ProductEdit;
