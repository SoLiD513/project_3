import React from "react";
import Button from "../Button/Button";
import "./mathCard.css";

const Card = props => {
  return (
    <div className="container mb-4">
      <div id="mathcard" className="card" clicked={props.clicked}>
        <div className="row m-auto pt-2" id="propsQuestions"> {props.question}</div>
        <div className="row"><Button answers={props.answers} correctAnswer={props.correctAnswer} testClick={props.testClick} /></div>
      </div>
    </div>
  );
};

export default Card;
