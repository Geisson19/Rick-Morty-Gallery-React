import React from "react";
import "./Card.css";

const Card = ({ name, img, gender, status }) => {
  return (
    <>
      <div className="card">
        <img className="card-img-top" src={img} alt="card" />
        <div className="card-body">
          <h5>{name}</h5>
          <p>Gender: {gender}</p>
          <p>Status: {status}</p>
          <a
            href="https://github.com/Geisson19/rickandmorty/tree/master/src"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
