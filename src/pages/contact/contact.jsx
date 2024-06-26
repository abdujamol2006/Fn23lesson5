import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="container">
      <Link to="/">
        <button className="btn">Back to home</button>
      </Link>
      <h1 className="page">Contact us</h1>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere vel
        neque fugiat dolore numquam earum eius, pariatur deserunt unde alias
        cupiditate aliquam ab, nostrum ipsa sequi porro debitis eligendi
        nesciunt, et doloribus corporis soluta! Veritatis nulla porro reiciendis
        minus, dolor possimus doloremque velit iure, laborum beatae ea repellat
        perferendis aliquam? Animi, perferendis blanditiis obcaecati unde qui
        nobis saepe dolorem alias ut magni placeat aspernatur eius molestiae
        similique provident laborum quibusdam magnam tempora. Repellendus,
        consequuntur nobis libero nesciunt, id nulla qui culpa nostrum corporis
        aliquam ut eveniet temporibus saepe facere quis numquam voluptate
        dolores? Libero alias repellat aliquam necessitatibus vero nemo?
      </p>
    </div>
  );
}

export default Contact;
