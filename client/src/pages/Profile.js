import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

import Appbar from "../components/Navbar/index";
import Postreactions from "../components/Postreactions";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";

function Profile() {
    const [reactions, setReactions] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

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

    function handleLogOut() {
        localStorage.removeItem("marketReactUser@");
        API.userLogout()
            .then(() => window.location.replace("/login"))
            .catch(err => console.log(err));
    };

    function loadReactions() {
        console.log(currentUser)
        API.getUser(currentUser._id)
            .then(res => setReactions(res.data))
            .catch (err => console.log(err));
    };

    return (
        <Wrapper>
            <Appbar>
                <Link to="/home">Home</Link>
                <Link style={{float:"right"}} onClick={handleLogOut}>Log Out</Link>
            </Appbar>

            <Postreactions />

            <Wrapper>
                {reactions.length ? (
                    <Wrapper>
                        {reactions.map(reaction => (
                            <Card key={reaction._id} data-card-id={reaction._id} color="info">
                                <p><strong>{reaction.email}:</strong></p>
                                <hr />
                                <p>{reaction.reaction}</p>

                                {reaction.sentiments ? (
                                    <div>
                                        {reaction.sentiments.map(sentiment => (
                                            <Card key={sentiment._id} id={sentiment._id} color="danger">
                                                <p><strong>{sentiment.email} says:</strong> {sentiment.sentiment}</p>
                                                <hr />
                                            </Card>
                                        ))}
                                    </div>
                                ) : "no comments yet..."}
                            </Card>
                        ))}
                    </Wrapper>
                ) : (
                    <div>No reactions yet :&#40;</div>
                )}
            </Wrapper>
        </Wrapper>
    );
};

export default Profile;