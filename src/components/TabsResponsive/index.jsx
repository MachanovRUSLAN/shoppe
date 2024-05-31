import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function ResponsiveTabs() {
  return (
    <div className="my-4">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            placerat, augue a volutpat hendrerit, sapien tortor faucibus augue,
            a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
            consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor
            odio, in molestie diam bibendum sed.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Weight: 0.3 kg <br />
            Dimentions: 15 x 10 x 1 cm <br />
            Colours: Black, Browns, White <br /> Material: Metal
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            <div className="grid grid-cols-1">
              <div className="reviews-box pr-10">
                <h1 className="font-bold mb-6">2 Reviews for lira earings</h1>
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
                <h1 className="font-bold">Add a Review</h1>
                <p className="text-[#9c9c9c] text-[15px] py-1">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { mt: 5, width: "100%" },
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
                    Save my name, email, and website in this browser for the
                    next time I comment
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default ResponsiveTabs;
