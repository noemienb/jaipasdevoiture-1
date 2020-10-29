import React, { useState } from 'react';

import { Carousel } from 'react-bootstrap';

function Carrousel({ carousel }) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} id="carousel">
            { carousel.map((item, i) =>
                <Carousel.Item key={i}>
                    <img className="d-block w-100" src={item.img} alt="carousel item" />
                    <Carousel.Caption>
                        <h1>{item.title}</h1>
                        <p>{item.text}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    );
}

export default Carrousel;