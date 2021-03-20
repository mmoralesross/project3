import React from "react";

function Storycard(props) {
  return (
    <React.Fragment>
      <div {...props} className="card" style={{ width: "18rem" }}>
        <img src={props.src} alt={props.alt} className="card-img-top" />
        <div className="card-body">
          {props.children}
          <button className="btn btn-primary">React</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Storycard;
