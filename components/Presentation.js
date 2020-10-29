import React from 'react'
import { Card } from 'react-bootstrap';

export default function Presentation({ title, presentation }) {
    return (
        <Card >
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text id="presentation-text">
                    {presentation.map((p, i) => <span key={i}>{p}</span>)}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
