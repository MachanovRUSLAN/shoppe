import React, { useState, useEffect } from "react";
import "./filter.css";
import { Slider, Switch } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";

function ShopFilter() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [filterProducts, setFilterProducts] = useState([]);
  const [inStock, setInStock] = useState(false);
  const [searchItems, setSearchItems] = useState("");
  const [range, setRange] = useState([0, 30000]);
  const [filter, setFilter] = useState(false);

  const handleFilter = () => {
    setFilter(!filter);
  };

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilterProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    filteredProducts();
  }, [category, inStock, searchItems, range]);

  const filteredProducts = () => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }
    if (inStock) {
      filtered = filtered.filter((product) => product.stock === "true");
    }
    if (searchItems) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchItems.toLowerCase())
      );
    }
    if (range) {
      filtered = filtered.filter(
        (product) => product.price >= range[0] && product.price <= range[1]
      );
    }

    setFilterProducts(filtered);
  };

  return (
    <div className="grid grid-cols-12 border-t border-black lg:py-20 py-2">
      <div className="lg:col-span-4 col-span-12">
        <h1 className="mt-10">Shop The Latest</h1>
        <div className="input-box rounded-[5px] px-2 bg-[#efefef] lg:hidden flex items-center mt-4 w-[100%] h-[50px]">
          <img src="img/IconSearch.png" alt="" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-2 bg-transparent  h-full border-none  outline-none"
            value={searchItems}
            onChange={(e) => setSearchItems(e.target.value)}
          />
        </div>
        <div className="flex lg:hidden text p-1">
          <p className="text-[26px] my-4">Shop</p>
        </div>
        <div className="lg:hidden flex py-2  items-center p-1">
          <FontAwesomeIcon icon={faArrowDownShortWide} onClick={handleFilter} />
          <p className="pt-3 pl-3">Filters</p>
        </div>
        <div className={`${filter ? "block" : "hidden"} lg:block lg:p-0 pl-12`}>
          <div className="input-box flex items-center w-[80%] h-[50px] border-b border-black">
            <input
              type="text"
              className="w-full h-full border-none overflow-hidden outline-none"
              value={searchItems}
              onChange={(e) => setSearchItems(e.target.value)}
            />
            <img src="img/IconSearch.png" alt="" />
          </div>
          <select
            className="Category w-[80%] h-[50px] border border-black my-10"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="ring">ring</option>
            <option value="earring">earRing</option>
            <option value="necklace">Necklace</option>
            <option value="hairset">hairset</option>
          </select>
          <select className="w-[80%] h-[50px]  border border-black">
            <option value="">Shop by</option>
          </select>
          <div className="my-10 w-[80%]">
            <Slider
              value={range}
              onChange={(e, newValue) => setRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={30000}
            />
            Price {range[0]}$ - {range[1]}$
          </div>
          <div className="flex justify-between  w-[80%]">
            <p>in STOCK</p>
            <Switch
              type="checkbox"
              checked={inStock}
              onChange={(e) => setInStock(e.target.checked)}
            />
          </div>
        </div>
      </div>
      <div className="lg:col-span-8 col-span-12">
        <div className="grid  lg:grid-cols-3 grid-cols-2  py-[15%]">
          {filterProducts.map((product, id) => (
            <Link to={`/shop/${product.id}`} className="no-underline">
              <div
                className="imgLatest lg:mt-2 md:m-2 m-auto lg:p-0 p-1"
                key={id}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="mx-auto w-full object-cover mb-2"
                />
                <h3 className="text-lg text-[#000] font-bold">
                  {product.title.slice(0, 9)}
                </h3>
                <p>{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopFilter;
