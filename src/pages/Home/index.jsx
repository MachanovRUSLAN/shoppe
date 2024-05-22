import React from "react";
import HomeSlide from "../../components/HomeSlide";
import ShopLatest from "../../components/ShopHome";

function Home() {
  return (
    <div className="w-[95%] m-auto">
      <HomeSlide />
      <ShopLatest />
    </div>
  );
}

export default Home;
