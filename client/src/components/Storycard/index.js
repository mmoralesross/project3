import React from "react";

function Storycard(props) {
  return (
    <React.Fragment>
      <div className="card" style={{ width: "18rem" }}>
        <img {...props} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <button className="btn btn-primary">React</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Storycard;
