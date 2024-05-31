import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQty,
  decrementQty,
  removeFromCart,
} from "../../redux/addSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ShopBag() {
  const cart = useSelector((state) => state.counter.cart);
  console.log("cart", cart);

  const dispatch = useDispatch();

  return (
    <div className="cart-page w-[95%] m-auto py-10">
      <div className="cart-box">
        {cart.map((item) => (
          <div className="cart flex p-2 w-full" key={item.id}>
            <div className="img-cart lg:w-[200px]  w-[150px] lg:h-[200px] h-[150px]">
              <img className="w-[100%]" src={item.img} alt="" />
            </div>
            <div className="cart-detail lg:flex  lg:justify-between">
              <div className="content px-4">
                <h1 className="font-bold text-[17px]">
                  {item.title.slice(0, 10)}...
                </h1>
                <p className="font-bold text-[#868686]">{item.price}</p>
              </div>
              <div className="quantity-part lg:ml-[100px] ml-[10px] lg:mt-[0] md:mt-[50px] mt-[50px] flex justify-between items-baseline rounded-[5px] bg-[#efefef] lg:w-[100px] w-[70px] h-[50px] px-2">
                <button onClick={() => dispatch(incrementQty({ id: item.id }))}>
                  +{" "}
                </button>
                <p className="pt-3">{item.quantity}</p>
                <button onClick={() => dispatch(decrementQty({ id: item.id }))}>
                  -
                </button>
              </div>
              <div className="remove">
                <button
                  className="ml-6"
                  onClick={() => dispatch(removeFromCart({ id: item.id }))}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopBag;
