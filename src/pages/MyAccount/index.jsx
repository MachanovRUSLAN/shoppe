import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function MyAccount() {
  const [reg, setReg] = useState("");

  const handleReg = () => {
    setReg(!reg);
  };

  return (
    <div className="py-20">
      <div className="lg:w-[500px] m-auto text-center">
        <h1 className="mb-10">My account</h1>
        <div className="buttons-click h-[60px] w-[100%] p-1 grid grid-cols-2 bg-[#EFEFEF]">
          <button
            className={`${reg ? "" : "bg-white rounded-[5px]"}`}
            onClick={handleReg}
          >
            Sign In
          </button>
          <button
            className={`${reg ? "bg-white rounded-[5px]" : ""}`}
            onClick={handleReg}
          >
            Register
          </button>
        </div>
        <div className="reg">
          <div className="reg-e mt-20">
            <Box
              component="form"
              lg={{
                "& > :not(style)": { my: 5, width: "500px" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="grid  grid-cols-1">
                <div className="flex flex-col">
                  <TextField
                    id="standard-basic"
                    label="Enter your Email*"
                    variant="standard"
                    style={{
                      margin: "0",
                    }}
                  />

                  <TextField
                    id="standard-basic"
                    label="Create Password*"
                    variant="standard"
                    style={{
                      marginTop: "50px",
                    }}
                  />
                </div>
                <div className={`${reg ? "flex flex-col" : "hidden"}`}>
                  <TextField
                    id="standard-basic"
                    label="Password*"
                    variant="standard"
                    style={{
                      marginTop: "50px",
                    }}
                  />
                </div>
              </div>
            </Box>
          </div>
        </div>
        <div className="save flex items-center mt-4">
          <input type="checkbox" name="" id="" />
          <p className="text-[13px] mt-3 ml-2 text-[#9c9c9c]">Remember me</p>
        </div>

        <div className="submit-button lg:mt-6 h-[40px] w-[100%]">
          <button className="w-[100%] rounded-[3px] h-[100%] text-[#fff] bg-black">
            Submit
          </button>
        </div>
        <Link to="/forgotPasword">
          <p className="py-2">Have you forgotten your password?</p>
        </Link>
      </div>
    </div>
  );
}

export default MyAccount;
