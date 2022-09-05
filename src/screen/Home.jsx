import React from "react";

function Home() {
  return (
    <>
      <div className="h-full w-full bg-primary grid grid-cols-3 py-28 px-4 gap-4 justify-center">
        <>
          <div className="col-span-2 bg-secondary flex items-center min-h-[50px]">
            <h5 className="text-white cursor-pointer uppercase font-bold text-xs bg-therd h-full w-[15%] flex items-center justify-center">
              breaking news
            </h5>
            <h1 className="text-white/60 px-4 font-semibold tracking-wide">
              apple announces a new partnership...
            </h1>
          </div>
          <div className="row-span-3 flex flex-col bg-secondary min-h-full py-10 px-4 gap-8">
            <h1 className="text-white font-bold text-xl text-center md:text-3xl tracking-wide">
              Trending news
            </h1>
            <div className="flex flex-row items-center justify-evenly gap-5">
              <img
                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="w-24 h-24 object-cover"
              />
              <div className="flex-col flex gap-3 items-center">
                <p className="text-white">5 Sep 2022</p>
                <h1 className="text-white font-bold">Sample article title</h1>
              </div>
            </div>
            <div className="flex flex-row items-center justify-evenly gap-5">
              <img
                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="w-24 h-24 object-cover"
              />
              <div className="flex-col flex gap-3 items-center">
                <p className="text-white">5 Sep 2022</p>
                <h1 className="text-white font-bold">Sample article title</h1>
              </div>
            </div>
            <div className="flex flex-row items-center justify-evenly gap-5">
              <img
                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="w-24 h-24 object-cover"
              />
              <div className="flex-col flex gap-3 items-center">
                <p className="text-white">5 Sep 2022</p>
                <h1 className="text-white font-bold">Sample article title</h1>
              </div>
            </div>
            <div className="flex flex-row items-center justify-evenly gap-5">
              <img
                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="w-24 h-24 object-cover"
              />
              <div className="flex-col flex gap-3 items-center">
                <p className="text-white">5 Sep 2022</p>
                <h1 className="text-white font-bold">Sample article title</h1>
              </div>
            </div>
            <div className="flex flex-row items-center justify-evenly gap-5">
              <img
                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="w-24 h-24 object-cover"
              />
              <div className="flex-col flex gap-3 items-center">
                <p className="text-white">5 Sep 2022</p>
                <h1 className="text-white font-bold">Sample article title</h1>
              </div>
            </div>
          </div>
          <div className="bg-secondary min-h-[300px] relative  cursor-pointer overflow-hidden">
            <div className="w-full h-full">
              <div className="absolute top-0 right-0 px-3 py-1 m-4 bg-secondary uppercase z-10 text-white">
                Tech
              </div>
              <div className="z-10 text-white absolute bottom-0 w-full h-[30%] bg-primary/60 flex flex-col py-4 px-6 gap-2">
                <p className="text-xs font-bold tracking-wide uppercase">
                  Seb 4th 2022
                </p>
                <h1 className="font-bold text-2xl capitalize">
                  The new MotherBoard
                </h1>
              </div>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="object-cover w-full h-full absolute"
              />
            </div>
          </div>
          <div className="bg-secondary min-h-[300px] relative  cursor-pointer overflow-hidden">
            <div className="w-full h-full">
              <div className="absolute top-0 right-0 px-3 py-1 m-4 bg-secondary uppercase z-10  text-white">
                Gaming
              </div>
              <div className="z-10 text-white absolute bottom-0 w-full h-[30%] bg-primary/60 flex flex-col py-4 px-6 gap-2">
                <p className="text-xs font-bold tracking-wide uppercase">
                  Seb 5th 2022
                </p>
                <h1 className="font-bold text-2xl capitalize">
                  A new warzone Update
                </h1>
              </div>
              <img
                src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80"
                alt="img"
                className="object-cover w-full h-full absolute"
              />
            </div>
          </div>
          <div className="col-span-2 bg-secondary min-h-[400px] relative  cursor-pointer overflow-hidden">
            <div className="w-full h-full">
              <div className="absolute top-0 right-0 px-3 py-1 m-4 bg-secondary uppercase z-30 text-white">
                Tech
              </div>
              <div className="z-10 text-white absolute bottom-0 w-full h-[25%] bg-primary/60 flex flex-col py-4 px-6 gap-2">
                <p className="text-xs font-bold tracking-wide uppercase">
                  Seb 5th 2022
                </p>
                <h1 className="font-bold text-2xl capitalize">
                  Lorem ipsum dolor sit
                </h1>
              </div>
              <img
                src="https://images.unsplash.com/photo-1632633174743-ba3e685cc7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="object-cover w-full h-full absolute"
              />
            </div>
          </div>
        </>
        <>
          <div className="col-span-3 relative bg-secondary flex items-center h-[50px]">
            <h5 className="text-white cursor-pointer uppercase font-bold text-xl bg-therd h-full w-[15%] flex items-center justify-center">
              Read Quick
            </h5>
            <h1 className="text-white/60 px-4 font-semibold tracking-wide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              fugiat assumenda molestiae dolores.
            </h1>
          </div>
          <div className="row-span-2 flex flex-col bg-secondary min-h-full py-10 px-4 gap-8">
            <h1 className="text-white font-bold text-xl text-center md:text-3xl tracking-wide">
              Trending news
            </h1>
            <div className="flex flex-row items-center justify-evenly gap-5">
              <img
                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="w-24 h-24 object-cover"
              />
              <div className="flex-col flex gap-3 items-center">
                <p className="text-white">5 Sep 2022</p>
                <h1 className="text-white font-bold">Sample article title</h1>
              </div>
            </div>
            <div className="flex flex-row items-center justify-evenly gap-5">
              <img
                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="w-24 h-24 object-cover"
              />
              <div className="flex-col flex gap-3 items-center">
                <p className="text-white">5 Sep 2022</p>
                <h1 className="text-white font-bold">Sample article title</h1>
              </div>
            </div>
            <div className="flex flex-row items-center justify-evenly gap-5">
              <img
                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="w-24 h-24 object-cover"
              />
              <div className="flex-col flex gap-3 items-center">
                <p className="text-white">5 Sep 2022</p>
                <h1 className="text-white font-bold">Sample article title</h1>
              </div>
            </div>
            <div className="flex flex-row items-center justify-evenly gap-5">
              <img
                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="w-24 h-24 object-cover"
              />
              <div className="flex-col flex gap-3 items-center">
                <p className="text-white">5 Sep 2022</p>
                <h1 className="text-white font-bold">Sample article title</h1>
              </div>
            </div>
            <div className="flex flex-row items-center justify-evenly gap-5">
              <img
                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="w-24 h-24 object-cover"
              />
              <div className="flex-col flex gap-3 items-center">
                <p className="text-white">5 Sep 2022</p>
                <h1 className="text-white font-bold">Sample article title</h1>
              </div>
            </div>
          </div>
          <div className="bg-secondary min-h-[300px] relative  cursor-pointer overflow-hidden">
            <div className="w-full h-full">
              <div className="absolute top-0 right-0 px-3 py-1 m-4 bg-secondary uppercase z-10 text-white">
                Tech
              </div>
              <div className="z-10 text-white absolute bottom-0 w-full h-[30%] bg-primary/60 flex flex-col py-4 px-6 gap-2">
                <p className="text-xs font-bold tracking-wide uppercase">
                  Seb 4th 2022
                </p>
                <h1 className="font-bold text-2xl capitalize">
                  The new MotherBoard
                </h1>
              </div>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="object-cover w-full h-full absolute"
              />
            </div>
          </div>
          <div className="bg-secondary min-h-[300px] relative  cursor-pointer overflow-hidden">
            <div className="w-full h-full">
              <div className="absolute top-0 right-0 px-3 py-1 m-4 bg-secondary uppercase z-10 text-white">
                Tech
              </div>
              <div className="z-10 text-white absolute bottom-0 w-full h-[30%] bg-primary/60 flex flex-col py-4 px-6 gap-2">
                <p className="text-xs font-bold tracking-wide uppercase">
                  Seb 4th 2022
                </p>
                <h1 className="font-bold text-2xl capitalize">
                  The new MotherBoard
                </h1>
              </div>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="object-cover w-full h-full absolute"
              />
            </div>
          </div>
          <div className="bg-secondary min-h-[300px] relative  cursor-pointer overflow-hidden">
            <div className="w-full h-full">
              <div className="absolute top-0 right-0 px-3 py-1 m-4 bg-secondary uppercase z-10 text-white">
                Tech
              </div>
              <div className="z-10 text-white absolute bottom-0 w-full h-[30%] bg-primary/60 flex flex-col py-4 px-6 gap-2">
                <p className="text-xs font-bold tracking-wide uppercase">
                  Seb 4th 2022
                </p>
                <h1 className="font-bold text-2xl capitalize">
                  The new MotherBoard
                </h1>
              </div>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="object-cover w-full h-full absolute"
              />
            </div>
          </div>
          <div className="bg-secondary min-h-[300px] relative  cursor-pointer overflow-hidden">
            <div className="w-full h-full">
              <div className="absolute top-0 right-0 px-3 py-1 m-4 bg-secondary uppercase z-10 text-white">
                Tech
              </div>
              <div className="z-10 text-white absolute bottom-0 w-full h-[30%] bg-primary/60 flex flex-col py-4 px-6 gap-2">
                <p className="text-xs font-bold tracking-wide uppercase">
                  Seb 4th 2022
                </p>
                <h1 className="font-bold text-2xl capitalize">
                  The new MotherBoard
                </h1>
              </div>
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="img"
                className="object-cover w-full h-full absolute"
              />
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default Home;
//https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80

{
  /*<div className="bg-secondary min-h-[300px] cursor-pointer">
  <div className="absolute top-0 right-0 px-3 py-1 m-4 bg-secondary uppercase z-30 text-white">
  Gaming
  </div>
  <img
  src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80"
  alt="img"
  className="object-cover w-full h-full absolute"
  />
  </div>
  <div className="col-span-2 bg-secondary min-h-[400px]">
  <div className="w-full h-full">
  <div className="absolute top-0 right-0 px-3 py-1 m-4 bg-secondary uppercase z-30 text-white">
  Tech
  </div>
  <img
  src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  alt="img"
  className="object-cover w-full h-full absolute"
  />
  </div>
  </div>* */
}
