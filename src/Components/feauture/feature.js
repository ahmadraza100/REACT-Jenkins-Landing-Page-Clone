import React from 'react'
import Card from 'react-bootstrap/Card'

function Feature(props) {
    return (
        <div>
            <Card style={{ width: '18rem' , height:"9rem"  , border:"none" , textAlign:"left"  }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text style={{ fontSize:".7rem" }}>
            {props.text}
      </Card.Text>
    </Card.Body>
  </Card>
        </div>
    )
}

export default Feature
