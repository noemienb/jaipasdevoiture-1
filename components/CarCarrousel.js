import React, { useState } from 'react';

import { Carousel } from 'react-bootstrap';

function CarCarrousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img className="d-block w-100" src="/img/cars/car-1.jpg" alt="Looping car" />

                <Carousel.Caption>
                    <h1>Vroom Vroom!!!</h1>
                    <p>Je mets la gomme car j'adore le chewing gum!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src="/img/cars/car-2.jpg" alt="Looping car" />

                <Carousel.Caption>
                    <h1>Voyage voyage!!!</h1>
                    <p>C'est pas une petite toux qui va nous empêcher de rêver.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img className="d-block w-100" src="/img/cars/car-3.jpg" alt="Looping car" />

                <Carousel.Caption>
                    <h1>Dis camion</h1>
                    <p>Tu cherches une belle cylindrée dans ta région?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarCarrousel;