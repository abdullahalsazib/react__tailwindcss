import { CiMenuBurger, CiMenuKebab, CiShop } from "react-icons/ci";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const NavLinks = [
    { routeNmae: "Home", routePath: "/" },
    { routeNmae: "Products", routePath: "/products" },
    { routeNmae: "Contact", routePath: "/contact" },
    { routeNmae: "Account", routePath: "/account" },
  ];
  return (
    <>
      <div className=" sm:px-3 md:px-[10%] lg:px-[20%]">
        <nav
          className="flex items-center justify-between 
          py-7"
        >
          <h2 className=" font-semibold text-xl">
            Red.
            <span className="text-[30px] text-red-500 font-extrabold">Buy</span>
          </h2>
          <div className=" relative flex items-center justify-center gap-x-4">
            <ul
              className={`
               md:gap-x-3
               md:flex
               md:items-center
               md:flex-row 
               md:justify-center  
               md:relative 
               md:w-full
               md:px-0
               md:py-0
               md:bg-transparent
               absolute
               bg-slate-800              
               flex 
               flex-col 
               items-center  
               transition-all
               ease-in-out
               rounded-md
               overflow-hidden
               
               px-10
               py-10
               gap-5
              ${isOpen ? "right-0 top-[200%]" : "hidden"}
                 `}
            >
              {NavLinks.map((items, index) => (
                <li key={index}>
                  <Link
                    className="px-1 text-lg font-medium text-slate-500 hover:text-slate-900 transition-all "
                    to={items.routePath}
                  >
                    {items.routeNmae}{" "}
                  </Link>
                </li>
              ))}
            </ul>
            {/* icons on hambergur and shoping icon */}
            <div className="flex items-center justify-center gap-x-2">
              <CiShop
                className="hover:text-slate-600 cursor-pointer"
                fontSize={30}
                strokeWidth={1}
              />
              <CiMenuBurger
                onClick={toggleMenu}
                className="hover:text-slate-600 cursor-pointer flex md:hidden"
                fontSize={30}
                strokeWidth={2}
              />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navber;
