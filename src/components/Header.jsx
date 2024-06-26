import React, { useState, useEffect, useContext } from "react";
import Logo from "../assets/images/Logo.png";
import shopIcon from "../assets/images/header shop icon.png";
import profileIcon from "../assets/images/header Profile icon.png";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  const {  cartItems } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 1023 && setOpenNav(false)
    );
  }, []);


  return (
    <div id="header" className="bg-white">
      <Navbar className="px-12 py-8 border-0 max-w-full">
        <div className="flex items-center justify-between ">
          <Typography as="a" href="#">
            <img src={Logo} alt="logo" />
          </Typography>
          <div className="hidden lg:block">
            <ul className="flex flex-col items-center gap-7 lg:flex-row">
              <li>
                <a
                  href=""
                  className="text-xl font-jost font-normal text-[#383838] "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-xl font-jost font-normal text-[#383838] "
                >
                  About US
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-xl font-jost font-normal text-[#383838] "
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-xl font-jost font-normal text-[#383838] "
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-xl font-jost font-normal text-[#383838] "
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-xl font-jost font-normal text-[#383838] "
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="items-center gap-6 hidden lg:flex">
            <button className="relative">
              <img src={shopIcon} alt="shopIcon" />
              <p className="absolute left-4 bottom-4 size-6 bg-[#383838] text-white flex items-center justify-center rounded-full">{cartItems.length}</p>
            </button>
            <a href="/">
              <img src={profileIcon} alt="profileIcon" />
            </a>
          </div>
          <IconButton
            variant="text"
            className="h-6 w-6 text-inherit lg:hidden flex items-center"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="text-black size-6" />
            ) : (
              <Bars3Icon className="text-black size-6" />
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className=" flex flex-col items-center gap-8 py-8">
            <ul className="flex flex-col items-center gap-7 lg:flex-row">
              <li>
                <a
                  href=""
                  className="text-xl font-jost font-normal text-[#383838] "
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-xl font-jost font-normal text-[#383838] "
                >
                  About US
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-xl font-jost font-normal text-[#383838] "
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-xl font-jost font-normal text-[#383838] "
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-xl font-jost font-normal text-[#383838] "
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-xl font-jost font-normal text-[#383838] "
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-6">
              <button className="relative">
                <img src={shopIcon} alt="shopIcon" />
                <p className="absolute left-4 bottom-4 size-6 bg-[#383838] text-white flex items-center justify-center rounded-full">{cartItems.length}</p>
              </button>
              <a href="/">
                <img src={profileIcon} alt="profileIcon" />
              </a>
            </div>
          </div>
        </MobileNav>
      </Navbar>
  
    </div>
  );
}
