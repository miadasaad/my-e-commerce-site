import React, { Component } from 'react'
import bigBack from './images/big-back.jpg'
import { Row, Col, Container } from 'react-bootstrap'
import about from './images/about1.jpg'
import about2 from './images/about2.jpg'
import about3 from './images/about3.jpg'


export class About extends Component {

    render() {
        return (
            <div className='content my-products'>
                <div>
                    <img src={bigBack} alt='product' />
                </div>

                <div className='company mt-5'>
                    <h2 className='mb-5 text-center' >The Company</h2>
                    <Container fluid>
                        <Row>
                            <Col className='mt-5' md={12}>
                                <div>
                                    <h2>Online Camera Shop </h2>
                                    <h4>Lorem ipsum dolor - quam non cursus felis condimentum.</h4>
                                </div>
                                <div className='about d-md-flex'>
                                    <p>Fusce quam risus, facilisis et molestie non, feugiat in tortor. Duis volutpat, mi id cursus rhoncus, purus augue aliquam arcu, sit amet rhoncus tellus neque aliquet sapien. Donec sit amet sodales eros.

                                        Suspendisse potenti. In scelerisque libero id eleifend consectetur. Sed lacinia tempor orci, non lacinia purus </p>
                                    <p>
                                        faucibus non. Aliquam gravida risus nec velit lacinia dapibus. Phasellus at magna id elit tristique lacinia.

                                        Integer a justo vitae arcu fermentum consequat. Duis volutpat, mi id cursus rhoncus, purus augue aliquam arcu, sit amet rhoncus tellus neque aliquet sapien. Donec sit amet sodales eros.
                                    </p>
                                </div>
                            </Col>
                            <Col>
                                <div className='mt-5' style={{ display: 'flex' }}>
                                    <div className='about-image test'>
                                        <img src={about} alt='product' />
                                    </div>

                                    <div className='image-design'>
                                        <img src={about2} alt='product' />
                                        <img src={about3} alt='product' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>


            </div>
        )
    }
}

export default About
