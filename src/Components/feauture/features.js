import Feature from "./feature"
import React from 'react'
import arr from "./featuresdata"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Features() {
    return (
        <>
            <Container fluid >
                <Row className="my-5">
                    {arr.map((value) => {
                        return (<Col className="mx-5 my-2"><Feature title={value.title}
                            text={value.disc} ></Feature>
                        </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}

export default Features;
