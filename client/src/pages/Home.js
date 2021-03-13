import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";

function Home() {
    const [reactions, setReactions] = useState([]);
    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        loadReactions()
    },[])

    function loadReactions() {
        API.getReactions()
            .then(res =>
                setReactions(res.data)
            )
            .catch(err => console.log(err));
    };

    function handleIputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]:value })
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

    return (
        <div className="container">
            {reactions.length ? (
                <div>
                    {reactions.map(reaction => (
                        <div key={reaction._id}>
                            <ul>
                                <li>Reaction: {reaction.reaction}</li>
                                <li>Username: {reaction.username}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            ):(
                <div>No reactions yet :&#40;</div>
            )}
        </div>
    );
};

export default Home;