import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ResponsivMenu() {
  return (
    <div className="w-[80%]">
      <div className="res-search bg-[#efefef] w-[119%] h-[40px] p-2 flex items-center  rounded-[5px]">
        <span>
          <FontAwesomeIcon
            className="text-[20px] text-[#9f9f9f]"
            icon={faMagnifyingGlass}
          />
        </span>
        <input
          className="outline-none bg-transparent px-2 w-[110%]"
          type="text"
          placeholder="Search..."
        />
      </div>
      <ul>
        <Link to="/" className="no-underline text-black">
          <li className="text-[20px] mt-[20px] ml-[5px]">Home</li>
        </Link>
        <Link to="/shop" className="no-underline text-black">
          <li className="text-[20px] mt-[20px] ml-[5px]">Shop</li>
        </Link>
        <Link to="/about" className="no-underline text-black">
          <li className="text-[20px] mt-[20px] ml-[5px]">About</li>
        </Link>
        <Link to="/blog" className="no-underline text-black">
          <li className="text-[20px] mt-[20px] ml-[5px]">Blog</li>
        </Link>
        <li className="text-[20px] mt-[20px] ml-[5px]">Help</li>
        <Link to="/contact" className="no-underline text-black">
          <li className="text-[20px] mt-[20px] ml-[5px]">Contact</li>
        </Link>
        <li className="text-[20px] mt-[20px] ml-[5px]">Search</li>
      </ul>
      <ul className="border-t border-[#9f9f9f] mt-10">
        <Link to="/myAccount" className="no-underline text-black">
          <li className="flex items-center mt-4">
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <p className="text-[20px] ml-2">My account</p>
          </li>
        </Link>
        <li className="flex items-center mt-2">
          <span>
            <FontAwesomeIcon icon={faUser} />
          </span>
          <p className="text-[20px] ml-2">Logout</p>
        </li>
      </ul>
    </div>
  );
}

export default ResponsivMenu;
