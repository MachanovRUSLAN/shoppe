import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function CartTotal() {
  const [totalPrice, setTotalPrice] = useState(0);

  const carts = useSelector((state) => state.counter.cart);
  console.log("cart", carts);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [carts]);

  return (
    <div className="py-10">
      <h3 className="py-2">Cart totals</h3>
      <div className="grid grid-cols-2">
        <div className="">
          <p>SUBTOTAL</p>
          <p className="py-3">SHIPPING</p>
        </div>
        <div className="">
          <p>{totalPrice}$</p>
          <p className="py-3">
            Shipping costs will be calculated once you have provided address.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;

{
  /* <p>{totalPrice}</p> */
}
