import React from "react";
import "../Cellar/Cellar.css";

export const Cellar = ({
  name,
  description,
  location,
  size,
  availability,
  price,
}) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        {/* <img className="card-img-top" src="../../assets/bodega1.png" alt="Card image cap"/> */}
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{location}</li>
          <li className="list-group-item">{size}</li>
          <li className="list-group-item">{availability}</li>
          <li className="list-group-item">{price}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            {availability === "not available" ? "No disponible" : "Disponible"}
          </a>
          <a href="#" className="card-link">
            Delete
          </a>
          <a href="#" className="card-link">
            Update
          </a>
        </div>
      </div>
    </>
  );
};
