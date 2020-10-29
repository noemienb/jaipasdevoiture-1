import React from 'react'
import { Card } from 'react-bootstrap';

export default function KeyFig({ keyFigures }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Chiffres-clés</Card.Title>
                <div id="key-figures">
                    {keyFigures.map((kf, i) => <div key={i} className="keyFigure">{kf}</div>)}
                </div>
            </Card.Body>
        </Card>
    )
};