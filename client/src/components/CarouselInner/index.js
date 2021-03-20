import React from "react";

function CrouselInner(props) {
    return (
        <div className="carousel-inner">
            <div className={"carousel-item " + props.active}>
                <img src={props.src} className="d-block w-100" alt={props.alt} />
                <div className="carousel-caption d-none d-md-block">
                    <h5>{props.title}</h5>
                    <p>{props.caption}</p>
                </div>
            </div>
        </div>
    );
};

export default CrouselInner;