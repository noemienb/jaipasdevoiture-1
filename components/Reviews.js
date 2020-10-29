import React from 'react'
import { Card, CardColumns } from 'react-bootstrap';

import Review from './Review';

export default function Reviews({ reviews }) {
    return (
        <div id={"reviews"}>
            {
                reviews.map(r => <Review img={r.img} size={100} name={r.name} text={<>{r.text}</>} />)
            }
        </div>
    )
}
