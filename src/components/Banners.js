import React from 'react'
import { Row, Col } from 'react-bootstrap'
import banner1 from './images/banner-04.jpg'
import banner2 from './images/banner-05.jpg'

export default function Banners() {
    return (
        <div className='banner-image'>
            <Row>
                <Col sm={9}>
                    <img src={banner1} alt='banner' />
                </Col>
                <Col sm={3}>
                    <img src={banner2} alt='banner' />
                </Col>
            </Row>
        </div>
    )
}
