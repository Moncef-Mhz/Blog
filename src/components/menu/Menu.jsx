import React from "react";
import { nav } from "../../utils/constent";

function Menu() {
  return (
    <>
      {nav.map((item) => {
        <ul className="flex md:flex-row gap-6 flex-col absolute h-screen text-dark top-0 left-0 bg-primary/70   justify-center">
          <li>
            <a
              href="/"
              className="font-meduim capitalize tracking-wide text-dark"
            >
              {item?.link}
            </a>
          </li>
        </ul>;
      })}
    </>
  );
}

export default Menu;
