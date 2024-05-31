import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";

function LgTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="my-4">
    <Box sx={{ width: "100%", typography: "body1"}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Description" value="1" />
            <Tab label="Aditional information" value="2" />
            <Tab label="Reviews(0)" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
          in molestie diam bibendum sed.
        </TabPanel>
        <TabPanel value="2">
          Weight: 0.3 kg <br />
          Dimentions: 15 x 10 x 1 cm <br />
          Colours: Black, Browns, White <br /> Material: Metal
        </TabPanel>
        <TabPanel value="3">
          <div className="grid grid-cols-2">
            <div className="reviews-box pr-10">
              <h4 className="font-bold mb-6">2 Reviews for lira earings</h4>
              <div className="review mt-2">
                <div className="name flex items-center">
                  <p className="font-bold">Scarlet witch</p>
                  <span className="text-[12px] text-[#9c9c9c] ml-2">
                    6 May, 2020
                  </span>
                </div>
                <div className="stars w-[100px] py-2">
                  <img className="w-[100%]" src="/img/Star.png" alt="" />
                </div>
                <div className="txt">
                  <p className="text-[#9c9c9c] py-4">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet.
                  </p>
                </div>
                <hr />
                <div className="name flex items-center mt-4">
                  <p className="font-bold">Scarlet witch</p>
                  <span className="text-[12px] text-[#9c9c9c] ml-2">
                    6 May, 2020
                  </span>
                </div>
                <div className="stars w-[100px] py-2">
                  <img className="w-[100%]" src="/img/Star.png" alt="" />
                </div>
                <div className="txt">
                  <p className="text-[#9c9c9c] py-4">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet.
                  </p>
                </div>
              </div>
            </div>
            <div className="addReview p-2">
              <h4 className="font-bold">Add a Review</h4>
              <p className="text-[#9c9c9c] text-[15px] py-1">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { mt: 5, width: "60ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Your review*"
                  variant="standard"
                />

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
              </Box>
              <div className="save flex items-center mt-4">
                <input type="checkbox" name="" id="" />
                <p className="text-[13px] ml-1 text-[#9c9c9c]">
                  Save my name, email, and website in this browser for the next
                  time I comment
                </p>
              </div>
              <div className="ratingAdd my-6">
                <p>Your Rating*</p>
                <img src="/img/Star.png" alt="" />
              </div>
              <div className="submit-button  h-[40px] w-[100px]">
                <button className="w-[100%] rounded-[3px] h-[100%] text-[#fff] bg-black">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
    </div>
  );
}

export default LgTabs;
