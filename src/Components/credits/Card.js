import React from 'react'
import Card from 'react-bootstrap/Card'
import pic1 from "./img/1.jpg" 
import pic2 from "./img/2.png" 
import pic3 from "./img/3.jpg" 
import pic4 from "./img/4.jpg" 
import pic5 from "./img/5.png" 
import pic6 from "./img/6.png" 
import pic7 from "./img/7.png" 
import "../../App.css"
 


function Cards(props) {
    

    return (
        <div className="cardd">  
            <a href = {props.link}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pic1} />
            </Card>
            </a>
            <a href = {props.link}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pic2} />
            </Card>
            </a>
            <a href = {props.link}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pic3} />
            </Card>
            </a>
            <a href = {props.link}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pic4} />
            </Card>
            </a>
            <a href = {props.link}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pic5} />
            </Card>
            </a>
            <a href = {props.link}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pic6} />
            </Card>
            </a>
            <a href = {props.link}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pic7} />
            </Card>
            </a>
           
        </div>
    )
}

export default Cards
