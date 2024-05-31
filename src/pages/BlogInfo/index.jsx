import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import BlogRaiting from "../../components/BlogRaiting";
import BlogReply from "../../components/BlogRepy";
import BlogPosts from "../../components/blogPosts";

function BlogInfo() {
  const [blogs, setBlogs] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [id]);

  return (
    <div className="w-[95%] m-auto border-t border-black">
      {blogs && (
        <div className="blogsId my-14" key={blogs.id}>
          <div className="main-blog text-center">
            <h1>Fast Fashion, And Faster Fashion</h1>
            <p>by ANNY JOHNSON - October 8,2020</p>
          </div>

          <div className="img-bx">
            <img
              className="w-[100%] lg:h-[600px] h-[300px] rounded-[2px]"
              src={blogs.img}
              alt=""
            />
          </div>
        </div>
      )}
      <div className="lg:w-[75%] w-[100%] m-auto">
        <BlogRaiting />
        <BlogReply />
        <BlogPosts />
      </div>
    </div>
  );
}

export default BlogInfo;
