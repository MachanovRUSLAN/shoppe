import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function BlogReply() {
  return (
    <div>
      <div className="Reply py-4">
        <h1>Leave a reply</h1>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mt: 5, width: "85ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Enter your name*"
            variant="standard"
          />

          <TextField
            id="standard-basic"
            label="Enter your email*"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Enter your website*"
            variant="standard"
          />

          <div className="save flex items-center mt-4">
            <input type="checkbox" name="" id="" />
            <p className="text-[13px] ml-1 mt-3 text-[#9c9c9c]">
              Save my name, email, and website in this browser for the next time
              I comment
            </p>
          </div>
          <TextField
            id="standard-basic"
            label="Your comment*"
            variant="standard"
          />
        </Box>
        <div className="submit-button my-6  h-[40px] w-[200px]">
          <button className="w-[100%] rounded-[3px] h-[100%] text-[#fff] bg-black">
            POST COMMENT
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogReply;
