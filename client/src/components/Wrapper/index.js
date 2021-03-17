import React from "react";

function Wrapper(props) {
    return (
        <div className="container-lg">
            {props.children}
        </div>
    );
};

export default Wrapper;