import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-end w-[95%] m-auto h-[100px] bg-white pb-2">
      <div className="navLogo">
        <img src="img/SHOPPE.png" alt="" />
      </div>
      <div className="navmenu flex">
        <ul className="flex border-r border-black">
          <Link to="/shop">
          <li className="px-4">Shop</li>
          </Link>
          <li className="px-4">Blog</li>
          <li className="px-4">Our Story</li>
        </ul>
        <ul className="flex">
          <li className="px-4">
            <img src="img/IconSearch.png" alt="" />
          </li>
          <li className="px-4">
            <img src="img/iconshop.png" alt="" />
          </li>
          <li className="px-4">
            <img src="img/iconAdmin.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
