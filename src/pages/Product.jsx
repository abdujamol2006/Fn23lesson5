import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
function Product() {
  const { id } = useParams();

  // Use 'islands' instead of 'trips'
  const {
    data: product,
    error,
    isPending,
  } = useFetch(" https://dummyjson.com/product/" + id);
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
      {product && (
        <div className="container">
          <Link to="/">
            <button className="btn">Back to home</button>
          </Link>
          <div>
            <div className="card-big lg:card-side bg-base-300 shadow-xl m-10">
              <figure>
                <img src={product.thumbnail} alt="Album" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>Description: {product.description}</p>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}$</p>
                <p>Discount Percentage: {product.discountPercentage}</p>
                <p>Rating: {product.rating}</p>
                <p>Stock: {product.stock}</p>
                <p>Tags: {product.tags}</p>
                <p>Brand: {product.brand}</p>
              </div>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
