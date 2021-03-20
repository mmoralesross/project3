import React from "react";
import "./style.css";

function Rowcontainer(props) {
    return(
        <div className="container-fluid">
            <div className="row overflow-auto">
                {props.children}
            </div>
        </div>
    );
};

export default Rowcontainer;