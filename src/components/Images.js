import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import banner1 from './images/banner-01.jpg'
import banner2 from './images/banner-02.jpg'
import banner3 from './images/banner-03.jpg'
export default function Images() {
    return (
        <div className='banner'>
            <Container fluid>
                <Row>
                    <Col>
                        <div class="banner-image ">
                            <img className="btn-slide-up" alt='banner-1' src={banner1} />
                        </div>
                    </Col>
                    <Col>
                        <div class="banner-image ">
                            <img className="btn-slide-up" alt='banner-2' src={banner2} />
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div class="banner-image ">
                            <img className="btn-slide-up" alt='banner-3' src={banner3} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
