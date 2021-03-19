import React, { useState } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import Appbar from "../components/Navbar";

function Login() {
    const [users, setUsers] = useState([]);
    const [formObject, setFormObject] = useState({});

    function handleIputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };
    
    function handleFormSubmit(event) {
        event.preventDefault();
        API.userLogin({
            email: formObject.email,
            password: formObject.password,
            username: formObject.username
        })
            // .then(() => window.location.replace("/home"))
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <Wrapper>
            <Appbar>
                <Link to="/home">Home</Link>
            </Appbar>
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
                    Login
                </Button>
            </Form>
        </Wrapper>
    );
};

export default Login;