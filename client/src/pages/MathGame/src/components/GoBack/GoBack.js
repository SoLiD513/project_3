import React from "react";
import "./GoBack.css";

const GoBack = props => {
  return (
    <div className="container">
      <button
        type="button"
        id="GoBack"
        className="btn btn-primary btn-lg btn-block"
        onClick={() => props.backClick()}>Click Here To Go Back To The Dashboard</button>
    </div>
  );
};

export default GoBack;