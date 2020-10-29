import React from 'react'
import { Card, CardColumns } from 'react-bootstrap';

import Review from './Review';

export default function Footer({ contacts }) {
    return (
        <Card id="footer" className="">
            {
                contacts.map((c, i) => <div key={i} className="row container">
                    <span className={"m-10 fa " + c.icon}></span>
                    <span className="m-10">{c.name}:</span>
                    <span className="m-10">{c.text}</span>
                </div>
                )
            }
        </Card>
    )
}
