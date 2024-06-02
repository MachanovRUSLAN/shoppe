import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Contact() {
  return (
    <div className="dic border-t border-black">
      <div className="m-auto lg:w-[75%] w-[100%] lg:text-center  lg:py-[10%] py-[40%]">
        <h1>Contact Us</h1>
        <p className="lg:block hidden">
          Say Hello send us your thoughts about our products or share your ideas
          with our Team!
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { my: 5, width: "100%" },
            }}
            lg={{
              "& > :not(style)": { my: 5, width: "85ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="grid lg:grid-cols-2 grid-cols-1">
              <div className="flex flex-col lg:p-6">
                <TextField
                  id="standard-basic"
                  label="Enter your name*"
                  variant="standard"
                  style={{
                    margin: "0",
                  }}
                />

                <TextField
                  id="standard-basic"
                  label="Enter your Secondname*"
                  variant="standard"
                  style={{
                    marginTop: "50px",
                  }}
                />
              </div>
              <div className="flex flex-col lg:p-6 pt-10">
                <TextField
                  id="standard-basic"
                  label="Enter your email*"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Enter Subject*"
                  variant="standard"
                  style={{
                    marginTop: "50px",
                  }}
                />
              </div>
            </div>
            <div className="message lg:p-4">
              <TextField
                id="standard-basic"
                label="Message*"
                variant="standard"
                style={{
                  width: "100%",
                }}
              />
            </div>
          </Box>
        </div>
        <div className="submit-button m-auto h-[40px] lg:w-[400px] w-[280px]">
          <button className="w-[100%] rounded-[3px] h-[100%] text-[#fff] bg-black">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
