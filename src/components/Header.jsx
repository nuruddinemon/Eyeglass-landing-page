import React, { Link } from "react";
import Logo from "../assets/images/Logo.png";
import shopIcon from "../assets/images/header shop icon.png";
import profileIcon from "../assets/images/header Profile icon.png";

export default function Header() {
  return (
    <div id="header" className="bg-white">
      <div className="flex justify-between px-12 py-8">
        <a href="#">
          <img src={Logo} alt="logo" />
        </a>
        <ul className="flex gap-7 items-center">
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
        <div className="flex gap-6 items-center">
          <button>
            <img src={shopIcon} alt="shopIcon" />
          </button>
          <a href="/">
            <img src={profileIcon} alt="profileIcon" />
          </a>
        </div>
      </div>
    </div>
  );
}
