import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

function Seacrh({ click, search }) {
  return (
    <>
      {search ? (
        <div className="flex z-20 w-full items-center justify-center absolute h-screen bg-primary/80">
          <div className="absolute top-0 right-0 m-6 cursor-pointer">
            <AiOutlineClose color="white" size={30} onClick={click} />
          </div>
          <form onSubmit={click} className="flex items-center justify-center ">
            <input
              type="seacrh"
              placeholder="Search . . ."
              className="bg-white rounded-l-md px-6 py-2 font-[500]"
            />
            <div className="cursor-pointer bg-white/70 rounded-r-md px-4 py-[10px]">
              <FiSearch size={20} onClick={click} />
            </div>
          </form>
        </div>
      ) : (
        <div className="flex hidden z-20 w-full items-center justify-center absolute h-screen bg-primary/70">
          <div className="absolute top-0 right-0 m-6 cursor-pointer">
            <AiOutlineClose color="white" size={30} onClick={click} />
          </div>
          <form onSubmit={click} className="flex items-center justify-center ">
            <input
              type="seacrh"
              placeholder="Search . . ."
              className="bg-white rounded-l-md px-6 py-2 font-[500]"
            />
            <div className="cursor-pointer bg-white/70 rounded-r-md px-4 py-[10px]">
              <FiSearch size={20} onClick={click} />
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Seacrh;
{
  /*{search ? 
        <div className="flex z-20 w-full items-center justify-center absolute h-screen bg-primary/70">
          <div className="absolute top-0 right-0 m-6 cursor-pointer">
            <AiOutlineCloseClose color="white" size={30} onClick={click} />
          </div>
          <form
            onSubmit={click}
            className="flex items-center justify-center "
          >
            <input
              type="seacrh"
              placeholder="Search . . ."
              className="bg-white rounded-l-md px-6 py-2 font-[500]"
            />
            <div className="cursor-pointer bg-white/70 rounded-r-md px-4 py-[10px]">
              <FiSearch size={20} onClick={click} />
            </div>
          </form>
        </div>
       : 
        <div className="flex hidden z-20 w-full items-center justify-center absolute h-screen bg-primary/70">
          <div className="absolute top-0 right-0 m-6 cursor-pointer">
            <AiOutlineClose color="white" size={30} onClick={click} />
          </div>
          <form
            onSubmit={click}
            className="flex items-center justify-center "
          >
            <input
              type="seacrh"
              placeholder="Search . . ."
              className="bg-white rounded-l-md px-6 py-2 font-[500]"
            />
            <div className="cursor-pointer bg-white/70 rounded-r-md px-4 py-[10px]">
              <FiSearch size={20} onClick={click} />
            </div>
          </form>
        </div>
      };*/
}
