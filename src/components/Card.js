import React from "react";
import "./Card.css";

const Card = ({ key, name, img, gender, status }) => {
  return (
    <>
      <div className="card">
        <img className="card-img-top" src={img} alt="card" />
        <div className="card-body">
          <h5>{name}</h5>
          <p>Gender: {gender}</p>
          <p>Status: {status}</p>
          <btn class="btn btn-primary">Go somewhere</btn>
        </div>
      </div>
    </>
  );
};

export default Card;
