import React from "react";

function Footer() {
  return (
    <div className="border-t border-b-slate-600 pt-10 pb-10 px-10">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <ul className="flex justify-between">
            <li>CONTACT</li>
            <li>TERMS OF SERVICES</li>
            <li>SHIPPING AND RETURNS</li>
          </ul>
        </div>
        <div className="flex justify-between items-center border-b border-black pb-2">
          <p>Give an email, get the newsletter.</p>
        </div>
      </div>
      <div className="flex justify-between items-center py-6">
        <div className="flex justify-center items-center">
          <ul className="flex justify-between">
            <li>© 2021 Shelly. Terms of use and privacy policy.</li>
          </ul>
        </div>
        <div className="flex justify-between items-center">
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
