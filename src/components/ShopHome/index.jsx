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
        <div className="text-[30px]">Shop The Latest</div>
        <p className="text-[20px]">Wiew All</p>
      </div>
      <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pb-40">
        {products.map((item, id) => {
          return (
            <div className="imgLatest lg:mt-2 md:m-2 m-auto" key={id}>
              <img className="w-full" src={item.img} />
              <div className="content">
                <p>{item.title}</p>
                <p>{item.price}$</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopLatest;
