import React, { useState } from "react";
import { motion } from "framer-motion";
import SubHome from "./Home_sum_compo/SubHome";
import Product_Overview from "../../../components/sub-components/Shoping/Product_Overview";
import Catagory_view from "../../sub-components/Product/Catagory_view";
import Promo_sec from "../../sub-components/Product/Promo_sec";
import NewsList from "../../sub-components/Product/NewsList";
import Team_sec from "../../sub-components/Product/Team_sec";
import Logo_Clouds from "../../sub-components/Product/Logo_Clouds";

const Home = () => {
  const images = [
    "https://picsum.photos/1200/1200?text=Slide+1",
    "https://picsum.photos/1200/1200?text=Slide+2",
    "https://picsum.photos/1200/1200?text=Slide+3",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* <Slider /> */}
      
      <div>
        <div className="w-full  overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <div className="w-full  flex-shrink-0">
              <HomeP />
            </div>
            <div className="w-full  flex-shrink-0">
              <HomeP />
            </div>
            <div className="w-full flex-shrink-0">
              <HomeP />
            </div>
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
        >
          &rarr;
        </button>

        {/* Dots */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div> */}
      </div>
      {/* Header next part */}
      <SubHome />
      <Catagory_view />

      <section className="pengu-banner-section bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="banner-wrap">
            <div className="row flex justify-center">
              <div className="col-lg-7 col-md-9 col-12">
                <div className="content text-center">
                  {/* Background Text */}
                  <div className="bg-text">
                    <h1 className="text-7xl font-bold text-gray-800 uppercase opacity-10">
                      Fashion
                    </h1>
                  </div>
                  {/* Main Heading */}
                  <h2 className="text-4xl font-semibold text-gray-900 mt-4">
                    Stylish casual sweater &amp; sneakers
                  </h2>
                  {/* Description */}
                  <p className="text-lg text-gray-700 mt-2">
                    Beautiful, Fashionable and Stylish
                  </p>
                  {/* Shop Now Button */}
                  <a
                    href="shop.html"
                    className="inline-block bg-blue-500 text-white font-medium py-2 px-6 rounded-lg mt-6 hover:bg-blue-600 transition-all"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Promo_sec />
      <Logo_Clouds />
      <NewsList />
      <Team_sec />
    </>
  );
};

export default Home;

const SizeBox = ({ num }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center justify-center w-12 h-12 rounded-lg border-2 border-gray-200
        hover:border-[#ff4d6d] hover:text-[#ff4d6d]
        focus:border-[#ff4d6d] focus:text-[#ff4d6d] focus:outline-none
        cursor-pointer select-none transition-all duration-200
        ${num === "10" ? "border-[#ff4d6d] text-[#ff4d6d]" : "text-gray-700"}`}
      role="button"
      tabIndex={0}
      onClick={() => {}}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
        }
      }}
    >
      {num}
    </motion.span>
  );
};

const ColorPellate = ({ color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`w-6 h-6 ${color} rounded-full
        focus:ring-2 focus:ring-[#ff4d6d]
        cursor-pointer transition-all`}
      role="button"
      tabIndex={0}
      aria-label="Select color"
      onClick={() => {}}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
        }
      }}
    />
  );
};

const HomeP = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row h-full xl:h-screen  w-full items-center  justify-around  gap-8 py-8">
        <div className="flex flex-col  space-y-6 lg:space-y-8  py-5 ">
          {/* hading h1 & p */}
          <div className="">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl t  font-bold text-[#1a1a3d] leading-tight">
              Sneakers For Men
            </h1>
            <p className="text-base md:text-lg text-gray-600  max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero,
              vel, facilisis purus, turpis tincidunt vel. Aliquet egestas in
              nibh mattis.
            </p>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="lg:grid flex items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <div>
                <p className="text-gray-500 mb-3">Price :</p>
                <h3 className="text-3xl font-semibold">$50.60</h3>
              </div>
              <div>
                <p className="text-gray-500 mb-3">Color :</p>
                <div className="flex items-center space-x-3">
                  <ColorPellate color={"bg-white border-2"} />
                  <ColorPellate color={"bg-gray-200"} />
                  <ColorPellate color={"bg-pink-200"} />
                  <ColorPellate color={"bg-blue-200"} />
                </div>
              </div>
              <div>
                <p className="text-gray-500 mb-3">Size :</p>
                <div className="flex space-x-2">
                  {[9, 10, 11, 12, 13].map((size) => (
                    <SizeBox key={size} num={size.toString()} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center lg:justify-start justify-center space-x-4 flex-wrap gap-y-3">
              <button className="px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                40% Off
              </button>
              <button className="px-8 py-3 bg-[#ff4d6d] text-white rounded-lg hover:bg-[#ff3d5d] transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex  lg:w-auto "
        >
          <div className=" w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] mx-auto flex items-center justify-center rounded-full border-2 border-pink-400">
            <div
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#FEF9F9] flex items-center justify-center border-2 border-pink-100"
            >
              <img
                className="scale-[1.0] md:scale-[1.8] lg:scale-[2.0] object-contain"
                src="/src/assets/images/banner-img.jpg"
                alt="Sneaker showcase"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
