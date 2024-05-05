/** @format */

import React from "react";
import { Icon } from "@iconify/react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Divider } from "antd";
import { useNavigate, useParams, useLocation } from "react-router-dom";
const ProductView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  console.log(data);
  let { id } = useParams();
  return (
    <div className=" ">
      <div className="w-[90%] mx-auto h-auto bg-white srounded-lg p-1 flex ">
        <div className="w-full h-auto flex border-[1px] m-8 rounded-xl">
          <img src={data?.image} className="w-[400px]   h-auto m-4"></img>
          <div className="w-full h-auto border-[1px]  flex flex-col gap-4">
            <div className="flex justify-start p-2">
              <p className="text-lg font-bold">{data?.nameproduct}</p>
            </div>
            <div className="flex justify-start px-2">
              <p className="text-gray-500 font-bold ">
                Categories : {data?.categories}
              </p>
            </div>
            <div className="flex justify-start px-2">
              <p className="text-gray-500 font-bold">
                Price : {`$${data?.price}`}
              </p>
            </div>
            <div className="flex flex-col items-start px-2">
              <p className="text-gray-500 font-bold">Description : </p>
              <p className="text-left text-gray-500">{data?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
