import React from "react";
import HomeSlide from "../../components/HomeSlide";
import ShopLatest from "../../components/ShopHome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="w-[95%] m-auto">
      <div className="res-search bg-[#efefef] w-[100%] h-[40px] p-2 lg:hidden flex items-center  rounded-[5px]">
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
      <HomeSlide />
      <ShopLatest />
    </div>
  );
}

export default Home;
