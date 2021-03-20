import React, { useState, useEffect } from "react";
import API from "../../utils/API";

import "../../components/Marketstories/style.css";
import Wrapper from "../Wrapper";

function Marketstories() {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        loadStories();
    }, [stories]);

    function loadStories() {
        API.getTrendingStories()
            .then(res => setStories(res.data.results))
            .catch(err => console.log(err));
    };

    return (
        <Wrapper>
            {stories.length ? (
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {stories.map(story => (
                            <li data-target={story.uri} data-slide-to={story.uri}></li>
                        ))}
                    </ol>

                    <div className="carousel-inner">
                        {stories.map(story => (
                            <div className="carousel-item" data-img-id={story.uri}>
                                <img src={story.multimedia[1].url} className="d-block w-100" alt={stories[0].multimedia[0].caption} />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>{story.multimedia[1].caption}</h5>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a> */}
                </div>
            ) : (<h1>No Data found!</h1>)}
        </Wrapper>
    );
};

export default Marketstories;