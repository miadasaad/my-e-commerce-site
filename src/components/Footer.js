import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

export default function Footer() {
    return (
        <div className='footer'>
            <Container fluid>
                <Row>
                    <Col sm={3}>
                        <h3>About Store</h3>
                        <p>Claritas processus dynamicus sequitu consut, consut ryethm sirter smreted oeureots.</p>
                    </Col>

                    <Col sm={2}>
                        <h3>Extras</h3>
                        <ul>
                            <li>Brands</li>
                            <li>Affiliate</li>
                            <li>gifts</li>
                            <li>site map</li>
                        </ul>
                    </Col>

                    <Col sm={2}>
                        <h3>My Account</h3>
                        <ul>
                            <li>my account</li>
                            <li>wish lists</li>
                            <li>news letter</li>
                            <li>returns</li>
                        </ul>
                    </Col>

                    <Col sm={2}>
                        <h3>Information</h3>
                        <ul>
                            <li>about us</li>
                            <li>delivery information</li>
                            <li>privacy policy</li>
                            <li>terms, conditions</li>
                        </ul>
                    </Col>

                    <Col sm={3}>
                        <h3>About Us</h3>
                        <ul>
                            <li>demo store</li>
                            <li>125 5578 7639</li>
                            <li>store@gmail.com</li>
                            <li>654 9764 6564</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
