import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Products from "./Products";

function Home() {
  const [categories, setcategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productdetailsbycategory, setproductdetailsbycategory] = useState([]);
  // const [productbyid, setproductbyid] = useState({});
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(async () => {
    setIsLoading(true);

    try {
      let response = await axios.get(
        "https://fakestoreapi.com/products/Categories"
      );
      setcategories(response.data);

      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  }, []);

  const handleSearchValue = (e) => {
    setSearchedProducts(
      productdetailsbycategory.filter((product) =>
        product.title.includes(e.target.value)
      )
    );
  };

  const changeHandler = async (item) => {
    setIsLoading(true);
    await axios.get(`https://fakestoreapi.com/products/category/${item}`).then(
      (res) => {
        console.log(res.data);
        setproductdetailsbycategory(res.data);
        setIsLoading(false);
      },
      (err) => {
        setError(err);
        setIsLoading(false);
      }
    );
  };
  if (error) {
    return <div> {error} </div>;
  } else if (isLoading) {
    return <div> Loading... </div>;
  } else {
    return (
      <div>
        <h1>List of categories</h1>
        {categories.map((item, index) => {
          return (
            <li
              onClick={() => {
                changeHandler(item);
              }}
              key={index}
            >
              <b>{item}</b>
            </li>
          );
        })}

        {<input onChange={handleSearchValue} />}

        <ul style={{ display: "flex", flexBasis: "33.333333%" }}>
          {searchedProducts.map((item) => {
            return (
              <li key={item.id}>
                {item.id}
                <br></br>
                {item.title}
                <br />
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    style={{ width: "200px", height: "100px" }}
                  />
                </Link>
                <br />
                {item.price}
              </li>
            );
          })}
        </ul>
        {error && <div>{error}</div>}
        {isLoading && <div>isLoading</div>}
        <Products data={productdetailsbycategory} />
      </div>
    );
  }
}
export default Home;
