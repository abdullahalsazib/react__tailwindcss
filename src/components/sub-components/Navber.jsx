import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch, BiShoppingBag, BiUser } from "react-icons/bi";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navList = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Pages", path: "/pages" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contactus" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      <nav className="flex justify-between items-center bg-slate-100 py-5 px-3 md:px-10 xl:px-20 2xl:px-40 lg:px-52 relative">
        {/* Hamburger Menu for Mobile */}
        <button
          className="text-3xl md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? <HiX /> : <HiOutlineMenu />}
        </button>
        {/* Logo */}
        <img
          className="w-44"
          src="https://wpocean.com/html/tf/pengu/assets/images/logo.svg"
          alt="Logo"
        />

        {/* Navigation List */}
        <ul
          className={`flex flex-col md:flex-row items-center justify-center md:gap-x-7 text-slate-500 absolute md:static bg-slate-100 w-full md:w-auto left-0 md:top-0 z-50 transition-transform duration-300 top-0 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
          }`}
        >
          {navList.map((item, index) => (
            <li key={index} className="py-3 md:py-0">
              <Link
                className="font-[500] text-[21px] hover:text-slate-700 hover:font-semibold"
                to={item.path}
                onClick={() => setIsMenuOpen(false)} // Close menu after clicking a link
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-2">
          <TopIcons
            to={"/cart"}
            icons={<BiShoppingBag />}
            size="text-xl md:text-2xl lg:text-3xl"
          />
          <TopIcons
            to={"/search"}
            icons={<BiSearch />}
            size="text-xl md:text-2xl lg:text-3xl"
          />
          <TopIcons
            to={"/login"}
            icons={<BiUser />}
            size="text-xl md:text-2xl lg:text-3xl"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

const TopIcons = (props) => {
  return (
    <Link
      to={props.to}
      className={`p-2 md:p-3 lg:p-4 bg-slate-200 rounded-full text-slate-500 ${props.size}`}
    >
      {props.icons}
    </Link>
  );
};
