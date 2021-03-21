import React, { useState, useEffect } from "react";
import API from "../../utils/API";

import Wrapper from "../Wrapper";
import Card from "../Card";
import Button from "../Button";
import Input from "../Input";

function Reactions() {
    const [currentUser, setCurrentUser] = useState({});
    const [reactions, setReactions] = useState([]);
    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        activeUser();
        loadReactions();
    }, []);

    function activeUser() {
        const userID = localStorage.getItem("marketReactUser@")
        API.connectedUser(userID)
            .then(res => setCurrentUser(res.data))
            .catch(err => console.log(err));
    };

    function loadReactions() {
        API.getReactions()
            .then(res => setReactions(res.data))
            .catch(err => console.log(err))
    };
    
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(id, event) {
        event.preventDefault();
        API.postSentiment(id, {
            sentiment: formObject.sentiment,
            email: currentUser.email
        })
            .then(res => console.log(res))
            .catch(err => console.group(err));
    };

    return (
        <Wrapper>
            {reactions.length ? (
                <Wrapper>
                    {reactions.map(reaction => (
                        <Card key={reaction._id} data-card-id={reaction._id} color="info">
                            <p><strong>{reaction.email}:</strong></p>
                            <hr />
                            <p>{reaction.reaction}</p>

                            <Input
                                onChange={handleInputChange}
                                name="sentiment"
                                data-sentiment-id={reaction._id}
                                placeholder="Comment"
                            />
                            <Button
                                color="success btn-sm"
                                disabled={!(formObject.sentiment)}
                                onClick={event => handleFormSubmit(reaction._id, event)}
                            >
                                Reply
                                </Button>
                            <div>
                                {reaction.sentiments.map(sentiment => (
                                    <Card key={sentiment._id} id={sentiment._id} color="danger">
                                        <p><strong>{sentiment.email} says:</strong> {sentiment.sentiment}</p>
                                        <hr />
                                    </Card>
                                ))}
                            </div>
                        </Card>
                    ))}
                </Wrapper>
            ) : (
                <div>No reactions yet :&#40;</div>
            )}
        </Wrapper>
    );
};

export default Reactions;