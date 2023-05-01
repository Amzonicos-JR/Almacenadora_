import React from "react";

export const Lease = ({
  _id,
  account = {},
  cellar = {},
  user = {},
  total,
}) => {
  const {
    _id: idAccount,
    dpi,
    name: nameAccount,
    surname: surnameAccount,
    age,
    phone: phoneAccount,
    email,
  } = account;
  const {
    _id: idCellar,
    name: nameCellar,
    description,
    location,
    size,
    availability,
    price,
  } = cellar;
  const {
    _id: idUser,
    name: nameUser,
    surname: surnameUser,
    username,
    phone: phoneUser,
  } = user;

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        {/* <img className="card-img-top" src="../../assets/bodega1.png" alt="Card image cap"/> */}
        <div className="card-body" style={{ color: "#000" }}>
          <h5 className="card-title"></h5>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">Account {nameAccount}</li>
          <li className="list-group-item">{surnameAccount}</li>
          <li className="list-group-item">{email}</li>
        </ul>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">Cellar {nameCellar}</li>
          <li className="list-group-item">{location}</li>
          <li className="list-group-item">{price}</li>
        </ul>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">User {nameUser}</li>
          <li className="list-group-item">{surnameUser}</li>
          <li className="list-group-item">{username}</li>
          <li className="list-group-item">{total}</li>          
        </ul>

        <div className="card-body">
          <a href="#" className="card-link">
            Desarrendar
          </a>
          <a href="#" className="card-link">
            Update
          </a>
          <a href="#" className="card-link">
            Delete
          </a>
        </div>
      </div>
    </>
  );
};
