import React from "react";
import "../Cellar/Cellar.css";

export const User = ({
  name,
  surname,
  username,
  phone,
  role
}) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        {/* <img className="card-img-top" src="../../assets/bodega1.png" alt="Card image cap"/> */}
        <div className="card-body">
          <h5 className="card-title">{name}, {surname}</h5>
          <p className="card-text">{role}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{username}</li>
          <li className="list-group-item">{phone}</li>
        </ul>
        <div className="card-body">
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
