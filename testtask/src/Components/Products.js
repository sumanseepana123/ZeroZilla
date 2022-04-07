import React from "react";
import { Link } from "react-router-dom";

function Products(props) {
  return (
    <>
      <div>List of Products</div>
      {console.log(props.data)}
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {props.data.map((item) => {
          return (
            <li key={item.id} style={{ width: "33.333%" }}>
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
    </>
  );
}

export default Products;
