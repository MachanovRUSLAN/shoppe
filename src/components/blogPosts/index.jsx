import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";

function BlogPosts() {
  return (
    <div className="AddedPosts">
      <h1 className="text-[32px]">Comments(3)</h1>
      <div className="post-box flex py-6">
        <div className="postImg lg:w-[100px] w-[200px]">
          <img src="/img/postimg.png" alt="" />
        </div>
        <div className="comment px-6">
          <div className="nameComment flex justify-between items-center">
            <div className="name lg:flex col items-center ">
              <h3 className="lg:text-[24px] text-[16px]">Scarlet withch</h3>
              <span className="pl-2 font-bold text-[#707070] lg:text-[16px] text-[12px]">
                6 May, 2020
              </span>
            </div>
            <div className="back flex">
              <span className="pr-1">
                <FontAwesomeIcon icon={faShare} />
              </span>
              <p>Reply</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet.
          </p>
        </div>
      </div>
      {/* answer back */}
      <div className="answwer w-[100%] relative py-4">
        <div className="post-box flex w-[90%] ml-auto">
          <div className="postImg lg:w-[100px] w-[200px]">
            <img src="/img/ansImg.png" alt="" />
          </div>
          <div className="comment px-6">
            <div className="nameComment flex justify-between items-center">
              <div className="name lg:flex col items-center">
                <h3 className="lg:text-[24px] text-[16px]">Scarlet withch</h3>
                <span className="pl-2 font-bold text-[#707070] lg:text-[16px] text-[12px]">
                  6 May, 2020
                </span>
              </div>
              <div className="back flex">
                <span className="pr-1">
                  <FontAwesomeIcon icon={faShare} />
                </span>
                <p>Reply</p>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet.
            </p>
          </div>
        </div>
      </div>

      {/* next commit */}
      <div className="post-box flex border-t border-[#f3f3f3] py-5">
        <div className="postImg lg:w-[100px] w-[300px]">
          <img src="/img/postimg.png" alt="" />
        </div>
        <div className="comment px-6">
          <div className="nameComment flex justify-between items-center">
            <div className="name lg:flex col items-center">
              <h3 className="lg:text-[24px] text-[16px]">Scarlet withch</h3>
              <span className="pl-2 font-bold text-[#707070] lg:text-[16px] text-[12px]">
                6 May, 2020
              </span>
            </div>
            <div className="back flex">
              <span className="pr-1">
                <FontAwesomeIcon icon={faShare} />
              </span>
              <p>Reply</p>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPosts;
