import React from "react";
import { BiHighlight } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";

const ShopCart = () => {
  return (
    <>
      <div className="">
        <div className="w-full h-[400px] bg-gray-400 overflow-hidden relative">
          <img
            src="https://wpocean.com/html/tf/pengu/assets/images/product-single/1.jpg"
            alt="Product"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform cursor-pointer duration-300 ease-in-out"
          />
          {/* <BiHighlight className=" absolute top-2 right-2 text-2xl text-red-500"/>
           */}
          <div className="absolute top-2 right-2">
            <HiHeart className="text-2xl text-red-500 hover:text-red-700 cursor-pointer" />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ShopCart;
