import React from "react";

function Button(props) {
    return (
        <button {...props} type="button" className={"btn btn-outline-" + props.color} style={{ float: "right", marginBottom: 10 }}>
            {props.children}
        </button>
    );
};

export default Button;
