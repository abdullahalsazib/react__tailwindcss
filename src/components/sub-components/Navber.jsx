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
      <nav className="flex justify-between items-center bg-[#F2F2F2] py-3 sm:py-4 lg:py-5 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40 relative">
        {/* Hamburger Menu - Improved touch target */}
        <button
          className="p-2 text-2xl sm:text-3xl lg:hidden hover:bg-slate-200 rounded-lg"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>

        {/* Logo with better responsive sizing */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
        >
          <img
            className="w-28 sm:w-32 md:w-36 lg:w-40"
            src="https://wpocean.com/html/tf/pengu/assets/images/logo.svg"
            alt="Logo"
          />
        </Link>

        {/* Mobile Navigation with AnimatePresence */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed inset-y-0 left-0 w-[280px] sm:w-[320px] bg-white shadow-xl z-50"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Mobile Menu Header */}
                <div className="p-4 border-b flex justify-between items-center">
                  <img
                    className="w-24 sm:w-28"
                    src="https://wpocean.com/html/tf/pengu/assets/images/logo.svg"
                    alt="Logo"
                  />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-slate-100 rounded-full text-2xl"
                  >
                    <HiX />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="py-4">
                  {navList.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-6 py-3 text-lg hover:bg-slate-50 text-slate-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Menu Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t">
                  <Link
                    to="/login"
                    className="flex items-center gap-2 text-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <BiUser />
                    <span>Login</span> / <span>Register</span>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {navList.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-base xl:text-lg text-slate-700 hover:text-slate-900 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Icons Section */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Cart Icon */}
          <div className="relative">
            <TopIcons onClick={toggleCart} icons={<BiShoppingBag />} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </div>

          {/* Search Icon */}
          <div className="relative">
            <TopIcons onClick={toggleSearch} icons={<BiSearch />} />
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 top-full mt-2 w-[280px] sm:w-[320px] bg-white rounded-lg shadow-xl p-4"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-slate-300"
                    />
                    <BiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <button
                      onClick={toggleSearch}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 rounded-full"
                    >
                      <HiX />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User Icon */}
          <Link to="/login" className="hidden sm:block">
            <TopIcons icons={<BiUser />} />
          </Link>
        </div>
      </nav>

      {/* Shopping Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setCartOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cart Header */}
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-xl font-semibold">Shopping Cart (3)</h3>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full"
                >
                  <HiX className="text-2xl" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-4">
                  <AddCartCmp />
                  <AddCartCmp />
                  <AddCartCmp />
                </div>
              </div>

              {/* Cart Footer */}
              <div className="border-t p-4 bg-white">
                <div className="flex justify-between mb-4">
                  <span className="text-lg">Subtotal:</span>
                  <span className="font-semibold text-lg">$297.00</span>
                </div>
                <div className="space-y-3">
                  <button className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700">
                    View Cart
                  </button>
                  <button className="w-full border-2 border-slate-800 text-slate-800 py-3 rounded-lg hover:bg-slate-100">
                    Checkout
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Outlet />
    </>
  );
};

// TopIcons component with improved responsive sizing
const TopIcons = ({ icons, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 sm:p-2.5 md:p-3 bg-slate-200 rounded-full text-slate-600 hover:bg-slate-300 transition-colors"
    >
      <span className="text-xl sm:text-2xl">{icons}</span>
    </button>
  );
};

// AddCartCmp with improved responsive design
const AddCartCmp = () => {
  return (
    <div className="flex items-center gap-3 p-2">
      <img
        src="https://picsum.photos/50"
        alt="Product"
        className="w-16 h-16 rounded object-cover"
      />
      <div className="flex-1">
        <h4 className="font-medium text-sm sm:text-base">Product Name</h4>
        <p className="text-sm text-gray-500">1 x $99.00</p>
      </div>
      <button className="p-2 hover:bg-slate-100 rounded-full text-gray-400 hover:text-red-500">
        <HiX className="text-xl" />
      </button>
    </div>
  );
};

export default Navbar;
