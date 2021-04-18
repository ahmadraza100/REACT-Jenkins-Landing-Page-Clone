import React from 'react'
import Card from 'react-bootstrap/Card'


function SlideCards(props) {
    return (
        <>
             
            <a href={props.link} style={{ textDecoration:"none"}}>
                <Card  style={{ width: '18rem' , height:"9rem" , border:"none" , fontSize:".7rem"}}>
                    <Card.Body>
                        <Card.Title style={{ fontSize: "1rem" }}>{props.title}</Card.Title>
                        <Card.Text style={{ color: "black" }}>{props.disc}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </>
    )
}

export default SlideCards
