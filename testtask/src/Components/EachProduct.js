import axios from "axios";
import React, { useEffect, useState } from "react";

export const EachProduct = () => {
  const productId = window.location.href.split("/")[4];
  const [productData, setProductData] = useState({});

  useEffect(async () => {
    let response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    console.log(response.data);
    setProductData(response.data);
  }, []);

  return (
    <div>
      <span>{productData.category}</span>
    </div>
  );
};
