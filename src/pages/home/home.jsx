import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState(null);
  // Use 'islands' instead of 'trips'
  useEffect(() => {
    fetch("  https://dummyjson.com/product")
      .then((data) => data.json())
      .then((products) => {
        setProducts(products); // Access the 'islands' property
      });
  }, []);

  return (
    <div>
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
