import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

import Jumbotron from "../components/Jumbotron";
import Appbar from "../components/Navbar/index";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import Form from "../components/Form";
import Input from "../components/Input";
import Button from "../components/Button";
import ReplyModal from "../components/ReplyModal";

function Home() {
    const [reactions, setReactions] = useState([]);
    const [formObject, setFormObject] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        loadReactions()
    }, [reactions]);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    function loadReactions() {
        API.getReactions()
            .then(res =>
                setReactions(res.data)
            ).then(() => console.log (reactions))
            .catch(err => console.log(err));
    };

    function handleIputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // user posts their reactions here
    function handleFormSubmit(event) {
        event.preventDefault();
        API.postReaction({
            reaction: formObject.reaction,
            username: formObject.username
        })
            .then(res => loadReactions())
            .catch(err => console.log(err));
    };

    // function handleFormReply(event, id) {
    //     event.preventDefault();
    //     API.postSentiment(id,{
    //         sentiment: formObject.sentiment,
    //         username: formObject.username
    //     })
    //         .then(res => loadReactions())
    //         .catch(err => console.log(err));
    // };

    return (
        <Wrapper>
            <Appbar>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
                <Link to="/profile">Profile</Link>
            </Appbar>
            <Jumbotron />
            {/* <Form>
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
            </Form> */}

            {reactions.length ? (
                <Wrapper>
                    {reactions.map(reaction => (
                        <Card key={reaction._id} data-card-id={reaction._id} color="info">
                            <p><strong>{reaction.username}:</strong></p>
                            <hr />
                            <p>{reaction.reaction}</p>
                            <ReplyModal
                                reaction={reaction} 
                                showModal={showModal}
                                handleClose={handleClose}
                                username={reaction.username}
                            />
                            <Button
                                color="success btn-sm"
                                onClick={handleShow}
                                data-btn-id={reaction._id}
                                name={reaction.username}
                            >
                                Reply
                            </Button>
                            {reaction.sentiments ? (
                                <div>
                                    {reaction.sentiments.map(sentiment => (
                                        <Card key={sentiment._id} id={sentiment._id} color="danger">
                                            <p><strong>{sentiment.username} says:</strong> {sentiment.sentiment}</p>
                                            <hr />
                                        </Card>
                                    ))}
                                </div>
                            ) : "nothing here..."}
                        </Card>
                    ))}
                </Wrapper>
            ) : (
                <div>No reactions yet :&#40;</div>
            )}
        </Wrapper>
    );
};

export default Home;