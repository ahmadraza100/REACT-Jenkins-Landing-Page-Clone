import React from 'react'
import Container from 'react-bootstrap/Container'
import Logo from "../pics/jenkins.png"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'


function Hero() {
    return (
        <>
            <Container fluid >

                <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Col xs={2}></Col>

                <Col  style={{ display: "flex", justifyContent: "center", alignItems: "center" }} ><Container  >
                    <img src={Logo} alt="Jenkins" className="my-4 " />
                </Container>
                </Col>
                <Col   >
                    <Container className="my-5 mx-0 text-left">
                        <h1 className="text-left">Jenkins</h1>
                        <h4 className="text-left">Build Things at any scale</h4>
                        <h6>
                            The leading open source automation server, Jenkins provides
                            hundreds of plugins to support building, deploying and automating
                            any project.
                            </h6>
                            <div style={{display:"flex" , justifyContent:"center"}}>
                        <Button variant="secondary mx-2">Documentation</Button>
                        <Button variant="danger">Download</Button>
                        </div>
                    </Container>

                </Col>
                <Col xs={3}></Col>

                </Row>

            </Container>
        </>

    )
}

export default Hero
