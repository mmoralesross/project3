import React from "react";

function Input(props) {
    return (
        <div className="input-group input-group-sm mb-3">
            <input {...props} type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            {props.children}
        </div>
    );
};

export default Input;