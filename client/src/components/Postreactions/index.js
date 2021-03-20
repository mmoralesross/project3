import React, { useState, useEffect } from "react";
import API from "../../utils/API";

import Wrapper from "../Wrapper";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";

function Postreactions() {
    const [reactions, setReactions] = useState([]);
    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        loadReactions();
    }, []);

    function loadReactions() {
        API.getReactions()
            .then(res => setReactions(res.data))
            .catch(err => console.log(err))
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        API.postReaction({
            reaction: formObject.reaction,
            username: formObject.username
        })
            .then(res => setReactions(res))
            .catch(err => console.log(err));
    };

    // const Comments = React.createClass({
    //     renderComment(comment, i) {
    //         console.log(comment);
    //     },
    //     render() {

    //         return(
    //             <div className="comment">
    //                 {this.props.postComments.map(this.renderComment)}

    //             </div>
    //         )
    //     }
    // })

    return (
        <Wrapper>
            <Form>
                <Input
                    onChange={handleInputChange}
                    name="username"
                    id="username"
                    placeholder="Username"
                />
                <Input
                    onChange={handleInputChange}
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