import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaTruck, FaRecycle, FaUser, FaCcPaypal } from 'react-icons/fa'

export default function Icons() {
    let data = [{
        title: 'Free Shipping',
        subtitle: 'order of $99',
        icon: <FaTruck></FaTruck>,
        bottom: '30px'
    },
    {
        title: 'Best Support',
        subtitle: '24h online',
        icon: <FaUser></FaUser>,
        top: "30px"
    },
    {
        title: 'Big Saving',
        subtitle: 'on products',
        icon: <FaRecycle></FaRecycle>,
        bottom: '30px'
    },
    {
        title: 'Easy Payment',
        subtitle: 'Shop now',
        icon: <FaCcPaypal></FaCcPaypal>,
        top: "30px"
    }]
    return (

        <div className="icons">
            <Container fluid>
                <Row>
                    {data.map((item, index) => {
                        return (

                            <Col>
                                <div className='design' style={{ display: "flex", marginTop: `${item.top}`, marginBottom: `${item.bottom}` }} key={index}>
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                    <div className="text">
                                        <p>{item.title}</p>
                                        <span>{item.subtitle}</span>
                                    </div>
                                </div>
                            </Col>


                        )

                    })}
                </Row>
            </Container>
        </div>





    )
}
