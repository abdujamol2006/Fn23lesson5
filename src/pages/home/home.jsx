import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

function Home() {
  // Use 'islands' instead of 'trips'
  const {
    data: products,
    error,
    isPending,
  } = useFetch(" https://dummyjson.com/product");

  return (
    <div className="container">
      {error && (
        <div>
          <h3>{error}</h3>
        </div>
      )}
      {isPending && (
        <div className="mb-10">
          <h3>Loading...</h3>
        </div>
      )}
      <ul className="cardlist">
        {products &&
          products.products.map((product) => {
            return (
              <li className="card" key={product.id}>
                <img className="img" src={product.thumbnail} alt="" />
                <h2 className="title">{product.title}</h2>
                <div>
                  <h3>Brand:{product.brand}</h3>
                  <h3>${product.price}</h3>
                </div>
                <Link to={`/about/${product.id}`}>
                  <button className="btn">More</button>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Home;
