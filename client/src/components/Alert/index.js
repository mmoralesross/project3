import React from "react";

function Alert(props) {
  return (
    <div className={"alert alert-" + props.color} role="alert">
      <h4 className="alert-heading">{props.user}</h4>
      {props.children}
    </div>
  );
}

export default Alert;
