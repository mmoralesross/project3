import React, { useState } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";

function Signup() {
    const [formObject, setFormObject] = useState({});

    function handleIputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();

        localStorage.removeItem("marketReactUser@");

        API.createUser({
            email: formObject.email,
            password: formObject.password
        })
            .then(res => {
                localStorage.setItem("marketReactUser@", res.data._id);
                window.location.replace("/home");
            })
            .catch(err => console.log(err));
    };

    return (
        <Wrapper>

            <Jumbotron />

            <form className="px-4 py-3">
                <div className="form-group">
                    <label name="email">Email address</label>
                    <input
                        onChange={handleIputChange}
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="email@example.com" />
                </div>
                <div className="form-group">
                    <label name="password">Password</label>
                    <input
                        onChange={handleIputChange}
                        name="password"
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="Password" />
                </div>
                <button
                    disabled={!(formObject.email && formObject.password)}
                    onClick={handleFormSubmit}
                    type="submit"
                    className="btn btn-success"
                >Sign Up
                </button>
            </form>
            <div className="dropdown-divider"></div>
            <Link to="/login" className="dropdown-item">Log In</Link>
        </Wrapper>
    );
};

export default Signup;