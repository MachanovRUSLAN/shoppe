import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="border-t border-b-slate-600 lg:pt-10 lg:pb-10 pb-2 lg:px-10">
      <div className="lg:flex flex-wrap justify-between items-center">
        <div className="res-email lg:hidden  flex justify-between">
          <p>Give an email, get the newsletter.</p>
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </div>
        <hr className="bg-black h-[2px] lg:hidden" />
        <div className="checkout lg:hidden flex py-2">
          <input type="checkbox" name="" id="" />
          <p className="text-[12px] ml-1 mt-3 font-bold">
            i agree to the website’s terms and conditions
          </p>
        </div>
        <div className="flex  items-center">
          <ul className="lg:flex flex-wrap justify-between  pl-0">
            <Link to="/contact" className="no-underline text-black">
              <li className=" py-2">CONTACT</li>
            </Link>

            <li className="lg:px-4  py-2">TERMS OF SERVICES</li>
            <li className="lg:px-4  py-2">SHIPPING AND RETURNS</li>
          </ul>
        </div>
        <div className="lg:flex hidden justify-between items-center border-b border-black pl-0 pb-2">
          <p>Give an email, get the newsletter.</p>
        </div>
      </div>
      <div className="lg:hidden flex items-center py-6">
        <p>Follow us</p>
        <div className="bg-black w-[50px] mb-2 ml-2 h-[2px]"></div>
        <ul className="flex  items-center pl-0">
          <li className="px-4">
            <img src="img/facebook.png" alt="" />
          </li>
          <li className="px-4">
            <img src="img/insagram.png" alt="" />
          </li>
          <li>
            <img src="img/iconlast.png" alt="" />
          </li>
        </ul>
      </div>
      <div className="lg:flex flex-wrap justify-between items-center lg:py-6 p-0">
        <div className="flex justify-center items-center py-6">
          <ul className="flex justify-between pl-0">
            <Link to="/policy" className="no-underline text-[black]">
              <li className="text-[13px]">
                © 2021 Shelly. Terms of use and privacy policy.
              </li>
            </Link>
          </ul>
        </div>
        <div className="lg:flex hidden justify-between items-center">
          <ul className="flex  items-center">
            <li className="px-4">
              <img src="img/linken.png" alt="" />
            </li>
            <li className="px-4">
              <img src="img/facebook.png" alt="" />
            </li>
            <li className="px-4">
              <img src="img/insagram.png" alt="" />
            </li>
            <li>
              <img src="img/iconlast.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
