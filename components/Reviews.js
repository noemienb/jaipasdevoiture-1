import React from 'react'
import { Card, CardColumns } from 'react-bootstrap';

import Review from './Review';

export default function Reviews({ id }) {
    return (
        <div id={id}>
            <Review img="/img/customers/adeline.jpg" size={100} name={"Adeline"} text={"Un accueil irréprochable par une équipe toujours souriante et agréable ! Et des véhicules toujours nickel !"} />
            <Review img="/img/customers/françois.jpg" size={100} name={"François"} text={"Belle flotte de véhicules. Accueil personnalisé et service professionnel. Facilité de mise à disposition et de restitution du véhicule. Je recommande."} />
            <Review img="/img/customers/astrid.jpg" size={100} name={"Astrid"} text={"Accueil formidable à chaque fois ! En plus d'avoir des voitures impeccables et des prix corrects !"} />
        </div>
    )
}
