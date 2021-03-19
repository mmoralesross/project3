import React from "react";
import "./style.css";

function Rowcontainer(props) {
    return(
        <div className="container horizontal">
            <div className="row text-center">
                {props.children}
            </div>
        </div>
    );
};

export default Rowcontainer;