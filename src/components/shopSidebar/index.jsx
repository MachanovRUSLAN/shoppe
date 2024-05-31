import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQty,
  decrementQty,
  removeFromCart,
} from "../../redux/addSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ShopBag() {
  const cart = useSelector((state) => state.counter.cart);
  console.log("cart", cart);

  const totalCartPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const dispatch = useDispatch();

  return (
    <div className="relative">
      {cart.map((item) => (
        <div className="div">
          <div className="flex" key={item.id}>
            <div className="detail-img w-[130px] h-[100px]">
              <img className="w-full p-2" src={item.img} alt="" />
            </div>

            <div className="details p-1">
              <p className="font-bold">{item.title.slice(0, 7)}</p>
              <p className="font-bold text-[#868686]">{item.price}$</p>
              <div className="qty flex">
                <p className="font-bold text-[#868686]">QTY</p>
                <div className="qty-buttons flex items-baseline ml-2">
                  <button
                    className="font-bold text-[#868686]"
                    onClick={() => dispatch(incrementQty({ id: item.id }))}
                  >
                    +
                  </button>
                  <p className="font-bold text-[#868686]">{item.quantity}</p>
                  <button
                    className="font-bold text-[#868686]"
                    onClick={() => dispatch(decrementQty({ id: item.id }))}
                  >
                    -
                  </button>
                </div>
              </div>
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
      <div className="w-full flex-col justify-center items-center text-center">
        <div className="border-t border-black">
          <p className="">Total Price: ${totalCartPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default ShopBag;
