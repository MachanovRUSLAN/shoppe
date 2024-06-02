import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { toast, Toaster } from "react-hot-toast";

function CheckOut() {
  const [pin, setPin] = useState("");
  const [warning, setWarning] = useState("");
  const [cvvWarning, setCvvWarning] = useState("");
  const [emailWarning, setEmailWarning] = useState("");
  const [name, setName] = useState("");
  const [cvv, setCvv] = useState("");
  const [email, setEmail] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const cart = useSelector((state) => state.counter.cart);
  console.log("check", cart);

  const handleCvvChange = (e) => {
    const value = e.target.value;
    setCvv(value);
    if (value.length !== 3) {
      setCvvWarning("CVV has to be 3 characters long");
    } else {
      setCvvWarning("");
    }
  };

  const handlePinChange = (e) => {
    const value = e.target.value;
    setPin(value);
    if (value.length !== 16) {
      setWarning("PIN has to be 16 characters long");
    } else {
      setWarning("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailWarning("Please enter a valid email address");
    } else {
      setEmailWarning("");
    }
  };

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cart]);

  const handleSubmit = () => {
    let hasErrors = false;

    if (cart.length === 0) {
      toast.error("Cart is empty");
      hasErrors = true;
    } else if (pin === "" || name === "" || email === "" || cvv === "") {
      toast.error("Please fill in all required information");
      hasErrors = true;
    } else if (warning !== "" || cvvWarning !== "" || emailWarning !== "") {
      toast.error("Please correct the errors in the form");
      hasErrors = true;
    } else if (cart.some((item) => item.quantity === 0)) {
      toast.error("Some items have a quantity of 0");
      hasErrors = true;
    }

    if (!hasErrors) {
      toast.success(`Payment Details :
      ${name}: 
      ${email}:
       ${totalPrice}:
        Successfully Payment!`);
      setPin("");
      setCvv("");
      setEmail("");
      setName("");
    }
  };

  return (
    <div className="border-t border-black">
      <h1 className="m-auto text-center mt-4">Checkout</h1>
      <Toaster position="top-center" />
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:py-20 py-10 lg:px-10">
        <div className="div">
          <h3>Enter Your Information</h3>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { mt: 5, width: "100%" },
            }}
            lg={{
              "& > :not(style)": { mt: 5, width: "85ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="full-name"
              label="Enter your Full Name*"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              type="email"
              id="email"
              label="Enter your Email*"
              variant="standard"
              value={email}
              onChange={handleEmailChange}
            />
            {emailWarning && <p className="text-red-400">{emailWarning}</p>}
            <TextField
              type="number"
              id="card-number"
              label="Enter your Card Number*"
              variant="standard"
              value={pin}
              onChange={handlePinChange}
            />
            {warning && <p className="text-red-400">{warning}</p>}
            <TextField
              type="number"
              id="cvv"
              label="Enter CVV*"
              variant="standard"
              value={cvv}
              onChange={handleCvvChange}
            />
            {cvvWarning && <p className="text-red-400">{cvvWarning}</p>}
          </Box>
        </div>
        <div className="div pt-[44px] lg:px-10">
          <div className="name-total flex justify-between border-b border-black p-4">
            <h4>PRODUCT</h4>
            <h4>TOTAL</h4>
          </div>
          {cart.map((item) => (
            <div className="items p-4" key={item.id}>
              <div className="checkProducts flex justify-between">
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
          <div className="freShipping flex justify-between border-b p-4 border-black">
            <h4>SHIPPING</h4>
            <h5>Free Shipping</h5>
          </div>
          <div className="freShipping flex justify-between border-b p-4 border-black">
            <h4>TOTAL</h4>
            <h5>{totalPrice}</h5>
          </div>
          <div className="payment p-4">
            <div className="transfer">
              <input type="radio" name="payment" id="bank-transfer" />
              <span>Direct Bank Transfer</span>
            </div>
            <p className="py-4">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
            <div className="transfer">
              <input type="radio" name="payment" id="check-payment" />
              <span>Check Payment</span>
            </div>
            <div className="transfer">
              <input type="radio" name="payment" id="cash-on-delivery" />
              <span>Cash on Delivery</span>
            </div>
          </div>
          <div className="submit-button m-auto h-[40px] lg:w-[100%] w-[250px]">
            <button
              className="w-[100%] rounded-[3px] h-[100%] text-[#fff] bg-black"
              onClick={handleSubmit}
            >
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
