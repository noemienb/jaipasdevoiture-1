import React from 'react'
import { Card } from 'react-bootstrap';

export default function CityList() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Où nous trouver?</Card.Title>
                <Card.Text>Vous pourrez trouver nos agences dans plus de 13 grandes villes de France et de
Belgique</Card.Text>
                <div id="city-grid">
                    <Card.Text id="city-list">
                        <div>nantes</div>
                        <div>Limoges</div>
                        <div>Tours</div>
                        <div>Reims</div>
                        <div>Lille</div>
                        <div>Liège</div>
                        <div>Mâcon</div>
                        <div>Montauban</div>
                        <div>Quimper</div>
                        <div>Caen</div>
                        <div>Le Havre</div>
                        <div>Dijon</div>
                        <div>Strasbourg (Bientôt)</div>
                    </Card.Text>
                    <div id="map-container">
                        <div id="map" style={{ backgroundImage: "url(/img/map.png)" }}></div>
                    </div>
                </div>
            </Card.Body>

        </Card >
    )
}
