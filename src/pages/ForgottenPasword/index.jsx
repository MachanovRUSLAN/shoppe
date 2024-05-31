import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function ForgPassword() {
  return (
    <div className="py-20">
      <div className="lg:w-[500px] m-auto text-center">
        <h1 className="mb-10">Have you Forgotten Your Password ?</h1>
        <p>
          If you've forgotten your password, enter your e-mail address and we'll
          send you an e-mail
        </p>

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
                <TextField
                  id="standard-basic"
                  label="Enter your Email*"
                  variant="standard"
                  style={{
                    margin: "0",
                  }}
                />
              </div>
            </Box>
          </div>
        </div>

        <div className="submit-button lg:mt-6 h-[40px] w-[100%]">
          <button className="w-[100%] rounded-[3px] my-4 h-[100%] text-[#fff] bg-black">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ForgPassword;
