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

function Profile() {
    const [reactions, setReactions] = useState([]);
    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        loadReactions()
    }, [reactions]);

    function loadReactions() {
        API.getUser("6053ea60a9e1b63b5c9c4b8c")
            .then(res =>
                setReactions(res.data)
            ).then(() => console.log(reactions))
            .catch(err => console.log(err));
    };

    function signout() {
        API.userLogout()
            .then(() => window.location.replace("/home"))
            .catch(err => console.log(err));
    }

    return (
        <Wrapper>
            <Appbar>
                <Link 
                    onClick={signout}
                >
                    Logout
                </Link>
            </Appbar>
            <Jumbotron />
            {/* {reactions.length !== 0 ? (
                <Wrapper>
                    {reactions.map(reaction => (
                        <Card key={reaction._id} data-card-id={reaction._id} color="info">
                            <p><strong>{reaction.username}:</strong></p>
                            <hr />
                            <p>{reaction.reaction}</p>
                            
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
            )} */}
        </Wrapper>
    );
};

export default Profile;