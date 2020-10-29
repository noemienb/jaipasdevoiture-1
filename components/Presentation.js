import React from 'react'
import { Card } from 'react-bootstrap';

export default function Presentation({ presentation }) {
    return (
        <Card >
            <Card.Body>
                <Card.Title>Qui sommes-nous?</Card.Title>
                <Card.Text id="presentation-text">
                    {presentation.map((p, i) => <div key={i}>{p}</div>)}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
