import React from 'react'

import { Container, Row, Image, Col, Card } from 'react-bootstrap';

export default function Review({ name, img, text, size }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Image src={img} width={size} height={size} roundedCircle />
                <Card.Text class="review-text">
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
