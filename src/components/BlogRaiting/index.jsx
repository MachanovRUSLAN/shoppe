import React from "react";

function BlogRaiting() {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis. Nunc sed porta augue. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat
        hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.
        Sed quis mauris eget arcu facilisis consequat sed eu felis.
      </p>
      <img className="w-full" src="/img/bloginf.png" alt="" />
      <h1>Top trends</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero.
      </p>
      <p>
        ● consectetur adipiscing elit. Aliquam placerat <br />● Lorem ipsum
        dolor sit amet consectetur
        <br /> ● sapien tortor faucibus augue <br />● a maximus elit ex vitae
        libero. Sed quis mauris eget arcu facilisis
      </p>
      <div className="tags-share lg:flex col items-center justify-between border-b border-black">
        <div className="tags lg:flex  col items-center">
          <p className="pt-3">Tags</p>
          <hr className="w-[100px] h-[2px] bg-[#000] mx-2"></hr>
          <p className="pt-3">Fashion, Style, Season</p>
        </div>
        <div className="share lg:flex col items-center mb-2">
          <p className="pt-3">Share</p>
          <hr className="w-[100px] h-[2px] bg-[#000] mx-2"></hr>
          <img src="/img/Group 10.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default BlogRaiting;
