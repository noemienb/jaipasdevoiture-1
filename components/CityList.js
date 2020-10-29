import React from 'react'
import { Card } from 'react-bootstrap';

export default function CityList({ title, cities, map }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Vous pourrez trouver nos agences dans plus de 13 grandes villes de France et de
Belgique</Card.Text>
                <div id="city-grid">
                    <div className="container">
                        <Card.Text id="city-list">
                            {cities.map((city, i) => <span key={i} className="city-name">{city.toUpperCase()}</span>
                            )}
                        </Card.Text>
                    </div>
                    <div className="container">
                        <div id="map-container">
                            <img id="map" src={map} />
                        </div>
                    </div>
                </div>
            </Card.Body>

        </Card >
    )
}
