import React, { useState } from "react";
import { MdOutlineLightMode, MdNightlight } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Seacrh from "./seacrh/seacrh";
import { BiMenuAltRight } from "react-icons/bi";

function Header() {
  const s = ["Home", "Categories", "Reviews", "News", "Contact"];
  const [search, setSearch] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  // const darkmodeHandler = () => {
  //   setDark(!dark);
  // };
  const seacrhHandler = () => {
    setSearch(!search);
  };
  const navHandler = () => [setOpenNav(!openNav)];

  return (
    <>
      <div className="flex flex-row w-full h-[70px]  text-white items-center justify-between px-4 bg-secondary fixed top-0 left-0 z-20 ">
        <h1 className="font-bold text-3xl cursor-pointer z-20 ">NewsFlash</h1>
        <div
          className={
            openNav
              ? "flex flex-col md:flex-col  absolute top-[100%] left-0 bg-secondary w-[40%] h-screen gap-6 translate-x-0 lg:flex-row lg:relative lg:top-auto lg:left-auto   lg:h-auto lg:items-center lg:justify-between lg:w-full lg:ml-[18%]"
              : "flex flex-col md:flex-col absolute top-[100%] left-0 bg-secondary w-[40%] h-screen gap-6 -translate-x-[100%] lg:translate-x-0 lg:flex-row lg:relative lg:top-auto lg:left-auto lg:w-full lg:h-auto lg:items-center lg:justify-between lg:ml-[18%] "
          }
        >
          <ul className="flex flex-col items-center lg:flex-row lg:h-[70px]  ">
            {s.map((e) => {
              return (
                <li
                  key={e}
                  className="px-5 py-3 hover:bg-therd w-full duration-200 cursor-pointer lg:hover:bg-secondary"
                >
                  <a
                    href="/"
                    className="font-meduim capitalize tracking-wide text-white/60 hover:text-white "
                  >
                    {e}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex flex-col gap-3 px-5 lg:flex-row lg:items-center">
            <FiSearch
              size={20}
              className="cursor-pointer hidden lg:block"
              onClick={seacrhHandler}
            />
            <button className="bg-transparent rounded-lg text-white px-3 py-2 hover:text-therd/80 ">
              Sign In
            </button>
            <button className="bg-therd text-white rounded-lg px-3 py-2 hover:text-gray/80  hover:bg-therd/70">
              Sign Up
            </button>
          </div>
        </div>
        <div className="flex items-center gap-10 lg:hidden">
          <FiSearch
            size={20}
            className="cursor-pointer"
            onClick={seacrhHandler}
          />
          <BiMenuAltRight
            size={25}
            className="cursor-pointer"
            onClick={navHandler}
          />
        </div>
      </div>
      <Seacrh click={seacrhHandler} search={search} />
    </>
  );
}

export default Header;
{
  /* {dark ? (
            <MdNightlight
            onClick={darkmodeHandler}
            className="cursor-pointer"
              size={20}
            />
          ) : (
            <MdOutlineLightMode
              onClick={darkmodeHandler}
              className="cursor-pointer"
              size={20}
            />
          )} */
}
