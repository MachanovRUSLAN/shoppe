import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

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
    <div className="py-10 lg:px-4 lg:bg-transparent bg-[#efefef]">
      <h3 className="py-2">Cart totals</h3>
      <div className="grid lg:grid-cols-2  border-b border-black">
        <div className="">
          <p>SUBTOTAL</p>
          <p className="py-3">SHIPPING</p>
        </div>
        <div className="">
          <p>{totalPrice}$</p>
          <p className="py-3">
            Shipping costs will be calculated once you have provided address.
          </p>
          <h4>CALCULATE SHIPPING</h4>
          <Box
            component="form"
            lg={{
              "& > :not(style)": { my: 5, width: "300px" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="">
              <div className="flex flex-col">
                <TextField
                  id="standard-basic"
                  label="SELECT A COUNTRY"
                  variant="standard"
                  style={{
                    margin: "0",
                  }}
                />

                <TextField
                  id="standard-basic"
                  label="CITY"
                  variant="standard"
                  style={{
                    marginTop: "50px",
                  }}
                />
                <TextField
                  id="standard-basic"
                  label="POST CODE / ZIP"
                  variant="standard"
                  style={{
                    marginTop: "50px",
                  }}
                />
              </div>
              <div className="but rounded-[5px]  my-4 border border-black flex justify-center items-center w-[250px] h-[53px] lg:ml-auto m-auto">
                <button>UPDATE TOTALS</button>
              </div>
            </div>
          </Box>
        </div>
      </div>
      <div className="tot flex justify-between items-center py-6 px-2">
        <h2>Total</h2>
        <p>${totalPrice}</p>
      </div>
      <div className="submit-button m-auto h-[40px] lg:w-[100%] w-[250px]">
        <Link to="/checkOut" className="no-underline text-black">
        <button className="w-[100%] rounded-[3px] h-[100%] text-[#fff] bg-black">
          PROCEED TO CHECKOUT
        </button>
        </Link>
      </div>
    </div>
  );
}

export default CartTotal;

{
  /* <p>{totalPrice}</p> */
}
