import React from "react";
import { BiFullscreen, BiHeart, BiShoppingBag } from "react-icons/bi";
import { HiEye } from "react-icons/hi";

const ShopCart = () => {
  return (
    <>
      <div className="">
        <div className="w-full h-[450px] xl:h-[500px] bg-gray-400 overflow-hidden relative">
          <img
            src="https://wpocean.com/html/tf/pengu/assets/images/product-single/1.jpg"
            alt="Product"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform  duration-300 ease-in-out"
          />
          {/* <BiHighlight className=" absolute top-2 right-2 text-2xl text-red-500"/>
           */}
          <div className="absolute top-4 right-4">
            <BiHeart className="text-3xl text-red-500 hover:text-red-700 cursor-pointer" />
          </div>
          <div className="absolute bottom-2 w-full p-2 flex flex-col items-center justify-between space-y-2">
            <div className="flex items-center gap-2">
              <SmallIcon
                icon={
                  <BiShoppingBag className="text-2xl text-white  cursor-pointer" />
                }
              />
              <SmallIcon icon={<HiEye className="text-2xl text-white" />} />
              <SmallIcon
                icon={<BiFullscreen className="text-2xl text-white" />}
              />
            </div>
            <div>
              <button className="px-8 py-3 bg-[#fff] text-black font-semibold hover:bg-[#ff3d5dd2] transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-col items-center">
          <h1 className="text-2xl font-semibold font-serif">
            Long Sleeve Tops
          </h1>
          <div className="flex w-1/2 justify-around p-2">
            <del className=" text-gray-500 font-semibold">$85.50</del>
            <p className=" text-[#ff4d6d] font-semibold">$70.30</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCart;

const SmallIcon = ({ icon }) => {
  return (
    <>
      <div className="p-2 bg-slate-800 hover:bg-[#ff4d6d] text-white cursor-pointer hover:text-white ">
        {/* <BiShoppingBag className="text-2xl text-slate-400" /> */}
        {icon}
      </div>
    </>
  );
};
