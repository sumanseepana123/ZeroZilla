import axios from "axios";
import React, { useEffect, useState } from "react";

export const EachProduct = () => {
  const productId = window.location.href.split("/")[4];
  const [productData, setProductData] = useState({});
  const [cart, setcart] = useState(0);

  useEffect(async () => {
    let response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    console.log(response.data);
    setProductData(response.data);
  }, []);
  const handleclick = () => {
    setcart(cart + 1);
  };

  return (
    <div>
      <img
        src={productData.image}
        style={{ height: "200px", width: "200px" }}
      />
      <p>{productData.category}</p>
      <p>{productData.description}</p>
      <p>{productData.id}</p>

      <p>{productData.price}</p>
      <span>{cart}</span>
      <button onClick={handleclick}>AddTocart</button>
    </div>
  );
};
