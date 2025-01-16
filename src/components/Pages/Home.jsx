import React from "react";

const Home = () => {
  return (
    <>
      <div className="container mx-auto p-6">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold">Welcome to Our E-Commerce Site</h1>
          <p className="text-lg mt-2">Find the best products for your needs</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <img
              src="https://picsum.photos/50"
              alt="Product 1"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-4">Product 1</h2>
            <p className="text-gray-600">$29.99</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <img
              src="https://picsum.photos/50"
              alt="Product 2"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-4">Product 2</h2>
            <p className="text-gray-600">$39.99</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <img
              src="https://picsum.photos/50"
              alt="Product 3"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-4">Product 3</h2>
            <p className="text-gray-600">$49.99</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        </div>

        <footer className="text-center mt-12">
          <p className="text-gray-500">
            &copy; 2023 E-Commerce. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Home;
