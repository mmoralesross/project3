import React from "react";

function Card(props) {
    return (
        <React.Fragment>
            <div className={"card alert-" + props.color} {...props}>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
            <br />
        </React.Fragment>
    );
};

export default Card;