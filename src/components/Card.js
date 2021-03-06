import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
