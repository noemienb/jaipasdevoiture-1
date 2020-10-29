import React from 'react'
import { Card } from 'react-bootstrap';

export default function Partners({ partners }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Ils nous font confiance</Card.Title>
                <div id="partners-logos">
                    {partners.map((p, i) => <Card.Img key={i} src={p.img} alt={p.alt} />)}
                </div>
            </Card.Body>
        </Card>
    )
}
