"use client";

import Image from "next/image";
import Banner from "../Banner/Banner";
import HeaderStyle from "./HeaderStyle/HeaderStyle.module.css";
const Header: React.FC = () => {
  return (
    <div className="bg-[#12141d] relative">
      <div className="lg:pt-[10px]">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="text-[16px] font-medium">Demos</a>
                </li>
                <li>
                  {" "}
                  <a className="text-[16px] font-medium"> About</a>
                </li>
                <li>
                  <a className="text-[16px] font-medium">Blog</a>
                </li>
                <li>
                  <a className="text-[16px] font-medium">Pages</a>
                </li>
                <li>
                  <a className="text-[16px] font-medium">Contact</a>
                </li>
              </ul>
            </div>
            <div className="navbar-center hidden lg:flex lg:items-center gap-[30px]">
              <Image src="/logo.png" alt="logo" width={80} height={32} />
              <ul className="menu menu-horizontal px-1 lg:text-white">
                <li>
                  <a className="text-[16px] font-medium">Demos</a>
                </li>
                <li>
                  {" "}
                  <a className="text-[16px] font-medium"> About</a>
                </li>
                <li>
                  <a className="text-[16px] font-medium">Blog</a>
                </li>
                <li>
                  <a className="text-[16px] font-medium">Pages</a>
                </li>
                <li>
                  <a className="text-[16px] font-medium">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-end lg:space-x-[10px] space-x-1">
            <button className="rounded-[5px] lg:text-base font-medium lg:px-6 px-2 py-[6px] text-sm lg:py-[12px] text-white border-[2px] border-[#6e6e6e]">
              Sign in
            </button>
            <button
              className={`${HeaderStyle.btnAnimation} ${HeaderStyle.btn} rounded-[5px] bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-sm lg:text-base font-medium lg:px-6 px-2 lg:py-[14px] text-white py-2`}
            >
              Get Started Free
            </button>
          </div>
        </div>
        <div>
          <Banner />
        </div>
      </div>
      <div className={HeaderStyle.leftEllipse}></div>
      <div className={HeaderStyle.rightEllipse}></div>
    </div>
  );
};

export default Header;
