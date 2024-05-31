import React from "react";
import ShopBag from "../../components/shopbagNav";
import CartTotal from "../../components/CartTotals";

function ShoppingCart() {
  return (
    <div className="div  border-t border-black py-10">
      <div className="tex flex justify-center">
        <h1 className="m-auto">Shopping Cart</h1>
      </div>

      <div className="lg:p-6 p-0 grid lg:grid-cols-2 grid-cols-1 m-auto">
        <div className="div">
          <ShopBag />
        </div>
        <div className="div">
          <CartTotal />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
