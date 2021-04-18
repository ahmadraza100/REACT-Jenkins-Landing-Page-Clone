import React from 'react'
import Data from "./CardData"
import SlideCards from "./slidecards"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Slider() {
    return (
        < div style={{width:"100vw" , display:"flex" , justifyContent:"center" , flexWrap:"nowrap" , alignItems:"center", overflowX:"scroll"}}>
            {

                <div  >
                    <Row className="my-5"style={{width:"70vw" , height:"30vh" , overflowY:"hidden",  borderBottom:"1px solid grey" , display:"flex" ,flexWrap:"nowrap", justifyContent:"center" , alignItems:"center", overflowX:"scroll"}}>
                        {Data.map((value) => {
                            return (<Col className="mx-5 my-2"><SlideCards title={value.title}
                                disc={value.disc}
                                link={value.link} ></SlideCards>
                            </Col>
                            )
                        })}
                    </Row>
                </div>
            }

        </div>
    )
}

export default Slider
