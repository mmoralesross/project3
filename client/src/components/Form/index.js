import React from "react";

function Form(props) {
    return (
        <React.Fragment>
        <div className={"card form alert-" + props.color}>
            <div className="card-body">
                {props.children}
            </div>
        </div>
        <br/>
        </React.Fragment>
    );
};

export default Form;