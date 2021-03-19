import React, { useState } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";

function Signup() {
    // const [users, setUsers] = useState([]);
    const [formObject, setFormObject] = useState({});

    function handleIputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };
    
    function handleFormSubmit(event) {
        event.preventDefault();
        API.createUser({
            email: formObject.email,
            password: formObject.password,
            username: formObject.username
        })
            .then(() => window.location.replace("/home"))
            .catch(err => console.log(err));
    };

    return (
        <Wrapper>
            <Jumbotron />
            <Form>
                <Input
                    onChange={handleIputChange}
                    name="email"
                    id="email"
                    placeholder="email"
                />
                <Input
                    onChange={handleIputChange}
                    name="password"
                    id="password"
                    placeholder="password"
                />
                <Input
                    onChange={handleIputChange}
                    name="username"
                    id="username"
                    placeholder="username"
                />
                <Button
                    color="success"
                    disabled={!(formObject.username && formObject.password && formObject.email)}
                    onClick={handleFormSubmit}
                >
                    Signup
                </Button>
            </Form>
            <Link rel="noreferrer" to="/home">Home</Link>
        </Wrapper>
    );
};

export default Signup;