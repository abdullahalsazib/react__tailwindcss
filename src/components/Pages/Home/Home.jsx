import React, { useState } from "react";
import { motion } from "framer-motion";
import SubHome from "./Home_sum_compo/SubHome";

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
        <div className="w-full h-screen overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <div className="w-full h-screen flex-shrink-0">
              <HomeP />
            </div>
            <div className="w-full h-screen flex-shrink-0">
              <HomeP />
            </div>
            <div className="w-full h-screen flex-shrink-0">
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
      <SubHome />
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
      <div className="flex flex-col w-full lg:flex-row items-center  justify-between  min-h-screen px-4 md:px-[10%] gap-8 py-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6 lg:space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#1a1a3d] leading-tight"
          >
            Sneakers For Men
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero,
            vel, facilisis purus, turpis tincidunt vel. Aliquet egestas in nibh
            mattis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
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

            <div className="flex items-center space-x-4 flex-wrap gap-y-3">
              <button className="px-6 py-3 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                40% Off
              </button>
              <button className="px-8 py-3 bg-[#ff4d6d] text-white rounded-lg hover:bg-[#ff3d5d] transition-colors">
                Shop Now
              </button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden md:flex w-full lg:w-auto overflow-hidden"
        >
          <div className="w-[280px] h-[280px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] mx-auto flex items-center justify-center rounded-full border-2 border-pink-400">
            <div
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-[230px] h-[230px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-[#FEF9F9] flex items-center justify-center border-2 border-pink-100"
            >
              <img
                className="scale-[1.2] md:scale-[1.8] lg:scale-[2.0] object-contain"
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
