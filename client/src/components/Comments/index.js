import React, { useState, useEffect } from "react";
import API from "../../utils/API";

import Wrapper from "../Wrapper";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";
import Comments from "../Comments";


function Comments() {
    const [Comments, setComments] = useState([]);
    // const [formObject, setFormObject] = useState({});

    useEffect(() => {
        loadComments();
    }, []);

    function loadComments() {
        API.getComments()
            .then(res => setComments(res.data))
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
            email: formObject.email
        })
            .then(res => setComments(res))
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
                    name="email"
                    id="email"
                    placeholder="email"
                />
                <Input
                    onChange={handleInputChange}
                    name="reaction"
                    id="reaction"
                    placeholder="Post content"
                />
                <Button
                    color="info"
                    disabled={!(formObject.email && formObject.reaction)}
                    onClick={handleFormSubmit}
                >
                    Post
                </Button>
            </Form>
        </Wrapper>
    );
};

export default Comments;