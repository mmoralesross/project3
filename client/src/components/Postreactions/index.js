import React, { useState, useEffect } from "react";
import API from "../../utils/API";

import Wrapper from "../Wrapper";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";

function Postreactions() {
    // const [reactions, setReactions] = useState([]);
    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        loadReactions();
    }, []);

    function loadReactions() {
        API.getReactions()
            .then(res => {return})
            .catch(err => console.log(err))
    };

    function handleIputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        API.postReaction({
            reaction: formObject.reaction,
            username: formObject.username
        })
            .then(res => loadReactions())
            .catch(err => console.log(err));
    };

    return (
        <Wrapper>
            <Form>
                <Input
                    onChange={handleIputChange}
                    name="username"
                    id="username"
                    placeholder="Username"
                />
                <Input
                    onChange={handleIputChange}
                    name="reaction"
                    id="reaction"
                    placeholder="Post content"
                />
                <Button
                    color="info"
                    disabled={!(formObject.username && formObject.reaction)}
                    onClick={handleFormSubmit}
                >
                    Post
                </Button>
            </Form>
        </Wrapper>
    );
};

export default Postreactions;