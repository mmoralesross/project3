import React from "react";

function Button(props) {
    return (
        <button type="button" class={"btn btn-outline-" + props.color}>
            {props.children}
        </button>
    );
};

export default Button;
