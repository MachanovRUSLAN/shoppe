import React from "react";
import LgTabs from "../LgTabs";
import ResponsiveTabs from "../TabsResponsive";

function ProductTabs() {
  return (
    <>
      <div className="LgTabs lg:block hidden">
        <LgTabs />
      </div>
      <div className="responTabs lg:hidden block">
        <ResponsiveTabs />
      </div>
    </>
  );
}

export default ProductTabs;
