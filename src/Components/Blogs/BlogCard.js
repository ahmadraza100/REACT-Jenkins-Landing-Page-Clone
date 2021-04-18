import React from 'react'
import Card from 'react-bootstrap/Card'


function BlogCard(props) {
    return (
        <a href={props.link} style={{ textDecoration: "none" }}>
            <>
                <Card style={{boder:"10px solid black"}} >
                    <Card.Body className="my-3" >
                        <Card.Title style={{fontSize:"1rem"}}>{props.title}</Card.Title>
                        <Card.Text style={{fontSize:".5rem", color:"black"}}>{props.disc}
                        </Card.Text>
                        <p style={{fontSize:".5rem", color:"red"}}>Author :{props.author}</p>

                    </Card.Body>
                </Card>
            </>
        </a>
    )
}

export default BlogCard
