import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BiCloset, BiSearch, BiShoppingBag, BiUser } from "react-icons/bi";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navList = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Pages", path: "/pages" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
      <nav className="flex justify-between items-center bg-slate-100 py-3 sm:py-4 lg:py-5 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 relative">
        {/* Hamburger Menu - show only on smaller screens */}
        <button
          className="text-2xl sm:text-3xl lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>

        {/* Logo with responsive sizing */}
        <img
          className="w-32 sm:w-36 md:w-40 lg:w-44"
          src="https://wpocean.com/html/tf/pengu/assets/images/logo.svg"
          alt="Logo"
        />

        {/* Updated Navigation List with AnimatePresence */}
        <AnimatePresence>
          {(isMenuOpen || window.innerWidth >= 1024) && (
            <motion.ul
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center gap-y-4 lg:gap-x-6 xl:gap-x-10 
                fixed lg:static bg-white lg:bg-transparent w-[300px] lg:w-auto left-0 top-0 h-screen lg:h-auto
                p-6 lg:p-0 z-50 shadow-lg lg:shadow-none text-slate-500`}
            >
              {/* Close button for mobile menu */}
              <button
                className="absolute top-4 right-4 p-2 lg:hidden text-2xl hover:bg-slate-100 rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <HiX />
              </button>

              {/* Logo for mobile menu */}
              <div className="mb-8 lg:hidden">
                <img
                  className="w-32"
                  src="https://wpocean.com/html/tf/pengu/assets/images/logo.svg"
                  alt="Logo"
                />
              </div>

              {/* Additional mobile menu header */}
              <div className="hidden lg:block mb-4">
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-lg font-medium"
                >
                  <BiUser />
                  <Link to={"/login"}>Login</Link>/
                  <Link to={"/singup"}>Register</Link>
                </Link>
              </div>

              {navList.map((item, index) => (
                <li key={index} className="w-full lg:w-auto py-2 lg:py-0">
                  <Link
                    className="font-[500] text-lg sm:text-xl lg:text-[21px] hover:text-slate-700 hover:font-semibold block lg:inline"
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {/* Additional mobile menu footer */}
              <div className="mt-auto lg:hidden">
                <div className="border-t pt-4">
                  <Link
                    to="/login"
                    className="flex items-center gap-2 text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BiUser />
                    <Link to={"/login"}>Login</Link>/
                    <Link to={"/singup"}>Register</Link>
                  </Link>
                </div>
              </div>
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Icons with responsive spacing and sizing */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          <div className="relative">
            <TopIcons onClick={() => toggleCart()} icons={<BiShoppingBag />} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </div>
          <div className="relative">
            <TopIcons onClick={toggleSearch} icons={<BiSearch />} />
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-12 w-72 bg-white shadow-lg rounded-lg p-4"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-slate-400"
                    />
                    <BiSearch className="absolute left-3 top-3 text-gray-400" />
                    <button
                      onClick={toggleSearch}
                      className="absolute right-2 top-2 p-1 hover:bg-slate-100 rounded-full"
                    >
                      <HiX className="text-xl text-gray-500" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link to="/login">
            <TopIcons icons={<BiUser />} />
          </Link>

          <div className="relative">
            <AnimatePresence>
              {isCartOpen && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-white shadow-lg z-50"
                >
                  <div className="h-full flex flex-col">
                    {/* Cart Header */}
                    <div className="p-4 border-b flex justify-between items-center">
                      <h3 className="text-xl font-semibold">
                        Shopping Cart (3)
                      </h3>
                      <button
                        onClick={() => toggleCart()}
                        className="p-2 hover:bg-slate-100 rounded-full"
                      >
                        <HiX className="text-2xl" />
                      </button>
                    </div>

                    {/* Cart Items */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      <AddCartCmp />
                      <AddCartCmp />
                      <AddCartCmp />
                    </div>

                    {/* Cart Footer */}
                    <div className="border-t p-4 bg-white">
                      <div className="flex justify-between mb-4">
                        <span className="text-lg">Subtotal:</span>
                        <span className="font-semibold text-lg">$297.00</span>
                      </div>
                      <div className="space-y-3">
                        <button className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700 transition">
                          View Cart
                        </button>
                        <button className="w-full border-2 border-slate-800 text-slate-800 py-3 rounded-lg hover:bg-slate-100 transition">
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;

const TopIcons = ({ icons, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 sm:p-2.5 md:p-3 lg:p-4 bg-slate-200 rounded-full text-slate-500 hover:bg-slate-300 text-base sm:text-lg md:text-xl"
    >
      {icons}
    </button>
  );
};

const AddCartCmp = () => {
  return (
    <div className="flex gap-2 sm:gap-3 items-center p-2 sm:p-3">
      <img
        src="https://picsum.photos/50"
        alt="Product"
        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded"
      />
      <div className="flex-1">
        <h4 className="text-sm sm:text-base lg:text-lg font-medium">
          Product Name
        </h4>
        <p className="text-xs sm:text-sm text-gray-500">1 x $99.00</p>
      </div>
      <button className="text-gray-400 hover:text-red-500 text-lg sm:text-xl">
        <HiX />
      </button>
    </div>
  );
};
