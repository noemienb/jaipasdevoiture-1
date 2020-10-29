import React from 'react'
import { Card } from 'react-bootstrap';

export default function Partners({ title, partners }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div id="partners-logos">
                    {partners.map((p, i) => <Card.Img key={i} src={p.img} alt={p.alt} />)}
                </div>
            </Card.Body>
        </Card>
    )
}
