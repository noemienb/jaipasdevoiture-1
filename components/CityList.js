import React from 'react'
import { Card } from 'react-bootstrap';

export default function CityList({ cities, map }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Où nous trouver?</Card.Title>
                <Card.Text>Vous pourrez trouver nos agences dans plus de 13 grandes villes de France et de
Belgique</Card.Text>
                <div id="city-grid">
                    <div className="container">
                        <Card.Text id="city-list">
                            {cities.map((city, i) => <div key={i} className="city-name">{city.toUpperCase()}</div>
                            )}
                        </Card.Text>
                    </div>
                    <div className="container">
                        <div id="map-container">
                            <div id="map" style={{ backgroundImage: "url(" + map + ")" }}></div>
                        </div>
                    </div>
                </div>
            </Card.Body>

        </Card >
    )
}
