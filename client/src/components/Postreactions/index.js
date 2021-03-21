import React, { useState, useEffect } from "react";
import API from "../../utils/API";

import Wrapper from "../Wrapper";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";

function Postreactions() {
    const [currentUser, setCurrentUser] = useState({});
    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        activeUser();
    }, []);

    function activeUser() {
        const userID = localStorage.getItem("marketReactUser@")
        API.connectedUser(userID)
            .then(res => setCurrentUser(res.data))
            .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        API.postReaction({
            reaction: formObject.reaction,
            email: currentUser.email
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <Wrapper>
            <Form>
                {/* <Input
                    onChange={handleInputChange}
                    name="email"
                    id="email"
                    placeholder="email"
                /> */}
                <Input
                    onChange={handleInputChange}
                    name="reaction"
                    id="reaction"
                    placeholder="Post content"
                />
                <Button
                    color="info"
                    disabled={!(formObject.reaction)}
                    onClick={handleFormSubmit}
                >
                    Post
                </Button>
            </Form>
        </Wrapper>
    );
};

export default Postreactions;