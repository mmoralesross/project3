import React, { useState, useEffect } from "react";
import API from "../../utils/API";

import Wrapper from "../Wrapper";
import Card from "../Card";

function Marketstories() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        loadStories();
    }, []);

    function loadStories() {
        API.getMarketStories()
            .then(res => {
                setStories(res.data.results);
                // console.log(res.data.results);
            })
            .catch(err => console.log(err));
    };

    return (
        <Wrapper>
            {stories.length ? (
                <Wrapper>
                    {stories.map(story => (
                        <Card key={story.uri} data-story-id={story.uri} color="info">
                            <h2>{story.title}</h2>
                            <hr />
                            <p>{story.abstract}</p>
                            {/* <img 
                                src={story.multimedia[1].url} 
                                alt={story.multimedia[1].caption}
                            /> */}
                        </Card>
                    ))}
                </Wrapper>
            ) : (<h1>No Data found!</h1>)}
        </Wrapper>
    );
};

export default Marketstories;