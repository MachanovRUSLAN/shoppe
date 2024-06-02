import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <div className="w-[75%] m-auto py-[10%] text-center flex flex-col justify-center ">
        <h1>404 ERROR</h1>
        <p>This page not found; back to home and start again</p>

        <div className="back-home flex justify-center">
          <Link to="/" className="no-underline text-black">
            <div className="but rounded-[5px]   my-4 border border-black flex justify-center items-center w-[250px] h-[53px]">
              <button>HOMEPAGE</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
