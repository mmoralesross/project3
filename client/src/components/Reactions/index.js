import React, { useState, useEffect } from "react";
import API from "../../utils/API";

import Wrapper from "../Wrapper";
import Card from "../Card";
import Button from "../Button";
import ReplyModal from "../ReplyModal";

function Reactions() {
    const [reactions, setReactions] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    useEffect(() => {
        loadReactions();
    }, []);

    function loadReactions() {
        API.getReactions()
            .then(res => setReactions(res.data))
            .catch(err => console.log(err))
    };

    return (
        <Wrapper>
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

export default Reactions;