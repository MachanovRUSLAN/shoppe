import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Blog() {
  const [blog, setBlogs] = useState([]);
  const [season, setSeason] = useState("");
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    filterCategory();
  }, [season, search, blog]);

  const filterCategory = () => {
    let filtered = blog;
    if (season) {
      filtered = filtered.filter((blogs) => blogs.season === season);
    }
    if (search) {
      filtered = filtered.filter((blogs) =>
        blogs.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  };

  return (
    <div className="border-t border-black">
    <div className="grid grid-cols-12 w-[95%] m-auto py-10">
      <div className="lg:col-span-3 col-span-12 lg:pl-0 pl-3">
        <h1 className="text-[33px]">Blog</h1>
        <div className="flex flex-col justify-start">
          <div className="searchBlog lg:flex hidden my-2 w-[250px] items-center h-[40px] border-b border-[#9c9c9c]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-[100%] h-[100%] outline-none"
            />
            <span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </div>
          <h3 className="text-[20px] lg:pt-5">Categories</h3>
          <div className="buttons flex flex-col justify-start items-start">
            <button
              value=""
              className="text-[#9c9c9c] my-2"
              onClick={(e) => setSeason(e.target.value)}
            >
              All
            </button>
            <button
              value="spring"
              className="text-[#9c9c9c] my-2"
              onClick={(e) => setSeason(e.target.value)}
            >
              Spring
            </button>
            <button
              value="summer"
              className="text-[#9c9c9c] my-2"
              onClick={(e) => setSeason(e.target.value)}
            >
              Summer
            </button>
            <button
              value="winter"
              className="text-[#9c9c9c] my-2"
              onClick={(e) => setSeason(e.target.value)}
            >
              Winter
            </button>
          </div>
        </div>
      </div>
      <div className="lg:col-span-9   col-span-12 my-12">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {filteredBlogs.map((item) => (
            <div className="blog grid grid-cols-1 py-2 m-2" key={item.id}>
              <Link to={`/bloginfo/${item.id}`}>
                <img src={item.img} className="mb-4" alt="" />
              </Link>
              <div className="blog-content">
                <span>{item.date}</span>
                <p className="font-bold text-[18px]">{item.title}</p>

                <p className="text-[#9c9c9c]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  faucibus augue, a maximus elit ex vitae libero...
                </p>
                <p>Read More</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Blog;
