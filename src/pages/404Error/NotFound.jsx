import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="container err-container">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <p>
        Go to the <Link to="/">Home.</Link>
      </p>
    </div>
  );
}

export default NotFound;
