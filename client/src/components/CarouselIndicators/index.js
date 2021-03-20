import React from "react";

function CarouselIndicators(props) {
    return (
        <ol className="carousel-indicators">
            {props.children}
        </ol>
    );
};

export default CarouselIndicators;