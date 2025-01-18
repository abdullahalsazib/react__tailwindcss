import React from "react";
import ShopCart from "../../../sub-components/Shop_cart";

const SubHome = () => {
  return (
    <>
      <div className="container-fluid mx-auto ">
        <div className="text-center">
          <h1 className="text-4xl font-semibold pt-3 my-5">New Arraival</h1>
          <p className="text-gray-500">
            Here is our new arraival products that you may like.
          </p>
          <span className="bg-[#FF4D6D] w-52 h-1 block mx-auto mt-2"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-x-5 mt-10">
          <ShopCart />
          <ShopCart />
          <ShopCart />
          <ShopCart />
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default SubHome;
