import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ShopBag from "../shopSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import ResponsivMenu from "../responMenu";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const [products, setProducts] = useState([]);
  const [sideBar, setSideBar] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { pathname } = useLocation();

  const carts = useSelector((state) => state.counter.cart);
  console.log("cart", carts);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setQuantity(total);
  }, [carts]);

  const handleSideBar = () => {
    setSideBar(!sideBar);
  };

  const handleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  useEffect(() => {
    setOpenMenu(false);
  }, [pathname]);

  useEffect(() => {
    fetch("http://localhost:5050/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("sliceData", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="flex justify-between items-end relative w-[95%] m-auto h-[100px] bg-white pb-2">
      <div className="navLogo lg:mb-0 mb-3 lg:w-[200px] w-[80px]">
        <Link to="/">
          <img src="/img/SHOPPE.png" alt="Shop Logo" />
        </Link>
      </div>
      <div className="navmenu flex">
        <ul className="lg:flex border-r border-black hidden">
          <Link to="/shop" className="no-underline">
            <li className="px-4 text-[black] font-semibold">Shop</li>
          </Link>
          <Link to="/blog" className="no-underline">
            <li className="px-4 text-[black]  font-semibold">Blog</li>
          </Link>
          <Link to="/checkOut" className="no-underline text-black">
            <li className="px-4  font-semibold">Our Story</li>
          </Link>
        </ul>
        <ul className="flex items-center">
          <li className="px-4 lg:flex hidden">
            <img src="/img/IconSearch.png" alt="Search Icon" />
          </li>
          <li className="px-4 relative" onClick={handleSideBar}>
            <img src="/img/iconshop.png" className="w-[25px]" alt="Shop Icon" />
            <span className="text-[10px] absolute bg-white flex justify-center z-10 items-center w-[15px] h-[15px] top-[-7px] left-10 border border-black rounded-[50%]">
              {quantity}
            </span>
          </li>
          <li className="px-4 lg:hidden flex" onClick={handleMenu}>
            <img
              src={`${openMenu ? "/img/Vector.png" : "/img/Menu 1.png"}`}
              alt="Admin Icon"
            />
          </li>
          <Link to="/myAccount">
            <li className="px-4 lg:flex hidden">
              <img src="/img/iconAdmin.png" alt="Admin Icon" />
            </li>
          </Link>
        </ul>
        <div
          className={`${
            openMenu ? "flex" : "hidden"
          } res-menu w-[105%] h-[100vh] right-[-1px] top-[100px] lg:hidden  absolute z-10 bg-white`}
        >
          <ResponsivMenu />
        </div>
      </div>
      <div
        className={`${
          sideBar
            ? "lg:right-[-1px]  right-[0px] "
            : "lg:right-[-350px] md:right-[-850px] right-[-950px] "
        } fixed z-20 top-0 bg-white border border-black lg:w-[20%]  md:w-[100%] w-[100%] h-auto transition-all duration-300`}
      >
        <p
          className={`${sideBar ? "right-[0px]" : "right-[-350px]"} p-3`}
          onClick={handleSideBar}
        >
          <FontAwesomeIcon icon={faRightLong} />
        </p>
        <ShopBag />
        <Link
          className={`${
            sideBar ? "right-[-70px]" : "right-[-350px]"
          } p-3 no-underline text-black`}
          onClick={handleSideBar}
          to="/bag"
        >
          <div className="mx-auto mt-2 wiew-fullcart w-[80%] h-[40px] border border-black flex justify-center items-center">
            Wiew Cart
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
