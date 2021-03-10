import React from "react";

function Alert(props) {
  return (
    <div className={"alert alert-" + props.color} role="alert">
      <h4 className="alert-heading">{props.titles}</h4>
      <p>
        {props.text1}
      </p>
      <hr />
      <p className="mb-0">
        {props.text2}
      </p>
      <h1>{props.children}</h1>
    </div>
  );
}

export default Alert;
