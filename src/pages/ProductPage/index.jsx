import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);

        console.log(setProduct);
      });
  }, [id]);

  return (
    <div className="class">
      <div className="div" key={product.id}>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <img src={product.img} alt={product.title} />
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductPage;
