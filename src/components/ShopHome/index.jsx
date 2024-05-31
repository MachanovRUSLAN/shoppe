import React, { useEffect, useState } from "react";

function ShopLatest() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center py-10">
        <div className="lg:text-[30px] text-[20px]">Shop The Latest</div>
        <p className="lg:text-[20px] mb-0 text-[14px]">Wiew All</p>
      </div>
      <div className="grid  lg:grid-cols-3 grid-cols-2 pb-40 ">
        {products.map((product, id) => {
          return (
            <div className="imgLatest lg:m-2 m-[1px] lg:p-0 p-[10px]" key={id}>
              <img className="w-[100%]" src={product.img} />
              <div className="conten">
                <p className="font-bold ">{product.title.slice(0, 9)}</p>
                <p className="text-[#a79171]">${product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopLatest;
