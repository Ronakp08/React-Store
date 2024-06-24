import React from "react";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { SiGnuprivacyguard } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleNav() {
    setIsOpen((prev) => !prev);
  }
  return (
    <header className="w-full bg-[#1a1a1a7d] border-b-2 border-[#ffffff5f] backdrop-blur-md header z-[999] py-3 flex items-center justify-between pr-3 bg-center bg-cover md:px-10 md:py-5 fixed top-0 left-0 right-0">
      <div className="bar text-2xl md:hidden">
        <button
          onClick={handleNav}
          className="px-1 py-1 bg-[#151515] rounded-full ml-2 text-2xl"
        >
          <FiMenu />
        </button>
      </div>
      <Link to="/">
      <img src="/logo.svg" alt=""  className="h-10"/>
      </Link>
      <div className="nav hidden md:block">
        <div className="nav">
          <ul className="flex items-center gap-2">
            <li className="text-base font-bold p-1">
              <Link to="/">Home</Link>
            </li>
            <li className="text-base font-bold p-1">
              <Link to="/products">Products</Link>
            </li>
            <li className="text-base font-bold p-1">
              <Link to="/about">About</Link>
            </li>
            <li className="text-base font-bold p-1">
              <Link to="/mens">Men</Link>
            </li>
            <li className="text-base font-bold p-1">
              <Link to="/women">Women</Link>
            </li>
            <div className="pl-28">
            <li className="flex">
              <div className="auth px-1 py-1">
                <Link
                  to="/login"
                  onClick={handleNav}
                  className="flex font-bold gap-1 items-center"
                >
                  <FiLogIn />
                  Login
                </Link>
              </div>
              <div className="auth font-bold px-1 py-1 ml-2">
                <Link
                  to="/register"
                  onClick={handleNav}
                  className="flex font-bold gap-1 items-center"
                >
                  <SiGnuprivacyguard />
                  Signup
                </Link>
              </div>
            </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="submenu flex justify-end md:w-[220px]">
        <div className="px-1 py-1 bg-[#151515] rounded-full ml-2 text-2xl">
          <Link to="/profile">
            <CgProfile />
          </Link>
        </div>
        <div className="px-1 py-1 bg-[#151515] rounded-full ml-2 text-2xl">
          <Link to="/cart">
            <PiShoppingCartSimpleBold />
          </Link>
        </div>
        <div className="auth px-1 py-1 bg-[#151515] rounded-full ml-2 text-2xl hidden md:block">
          <a
            href="https://github.com/Ronakp08"
            rel="noreferrer"
            target="_blank"
            className="flex gap-1 items-center"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={
          isOpen
            ? "fixed inset-0 bg-black z-[9999] w-screen h-screen md:hidden"
            : "hidden"
        }
      >
        <div className="w-full h-full flex flex-col">
          <div className="mobileHeader h-20 bg-black px-3 py-2 flex items-center justify-between">
            <div className="closeBar">
              <button
                onClick={handleNav}
                className="p-1 bg-[#151515] rounded-full text-2xl"
              >
                <FiX />
              </button>
            </div>
            <div className="mobileSubmenu flex items-center">
              <div className="auth px-1 py-1 bg-black z-[999] rounded-lg">
                <Link
                  to="/login"
                  onClick={handleNav}
                  className="flex font-bold gap-1 items-center bg-[#151515] p-1 rounded-lg"
                >
                  <FiLogIn />
                  Login
                </Link>
              </div>
              <div className="auth font-bold px-1 py-1 bg-[#151515] rounded-lg ml-2">
                <Link
                  to="/register"
                  onClick={handleNav}
                  className="flex font-bold gap-1 items-center"
                >
                  <SiGnuprivacyguard />
                  Signup
                </Link>
              </div>
              <div className="auth p-1 bg-[#151515] rounded-full ml-2 text-2xl">
                <a
                  href="https://github.com/Ronakp08"
                  rel="noreferrer"
                  target="_blank"
                  className="flex gap-1 items-center"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="mainHead flex-1 flex items-center justify-center">
            <div className="menu">
              <ul className="text-center text-2xl font-bold">
                <li className="py-1">
                  <Link onClick={handleNav} to="/">
                    Home
                  </Link>
                </li>
                <li className="py-1">
                  <Link onClick={handleNav} to="/about">
                    About
                  </Link>
                </li>
                <li className="py-1">
                  <Link onClick={handleNav} to="/products">
                    Products
                  </Link>
                </li>
                <li className="py-1">
                  <Link onClick={handleNav} to="/mens">
                    Men
                  </Link>
                </li>
                <li className="py-1">
                  <Link onClick={handleNav} to="/women">
                    Women
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
