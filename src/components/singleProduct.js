import React, { Component } from 'react'
import Seller from './Seller'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import pinkImage from "./images/pinkImage.jpg";
import tryy from "./images/try.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import { connect } from 'react-redux'

import SwiperCore, {

    Pagination
} from 'swiper/core';


SwiperCore.use([Pagination]);

export class SingleProduct extends Component {

    render() {
        const { products } = this.props
        let featuredElements = products.filter(item => {
            return item.rate === true
        })
        const id = this.props.match.params.id
        let currentProduct = products[id]
        const { name, price } = currentProduct
  

        return (
            <div className='content '>
                <div className='proName mb-3' style={{ backgroundColor: '#F5F5F5', display: 'flex', justifyContent: 'space-between', padding: '15px', borderRadius: '10px' }}>
                    <div>
                        <span>{name}</span>
                    </div>
                    <div>
                        <Link to='/'><AiOutlineHome></AiOutlineHome></Link> <IoIosArrowForward></IoIosArrowForward> {name}
                    </div>
                </div>

                <Container fluid className='mb-3'>
                    <Row>
                        {/* <Col sm={3}>1</Col> */}
                        <Col md={6}>
                            <div className='product-image'>
                                <img src={currentProduct.images[0].url} alt='current product' />
                            </div>
                        </Col>
                        <Col md={6}>
                            <h3 className='line'>{name}</h3>
                            <div className='social' style={{ display: 'flex' }}>
                                <div>rating</div><div>review</div><div>write review</div>
                            </div>
                            <div className='info line'>
                                <p>Brand: </p>
                                <p>Product code: </p>
                                <p>reward points: </p>
                                <p>availability: </p>
                            </div>
                            <div className='price line'>
                                <p>{price}</p>
                                <p>Extra price: $40</p>
                            </div>

                        </Col>
                    </Row>
                </Container>

                <div className='my-3'>
                    <Container fluid>
                        <Row>
                            <Col md={6} >
                                <div className='product-image'>
                                    <h3 className='heading'>Featured</h3>
                                    {featuredElements.map(item => {
                                        return (
                                            <Seller item={item} />
                                        )
                                    })}
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='product-image'>
                                    <Tabs defaultActiveKey="description" id="uncontrolled-tab-example" className="mb-3">
                                        <Tab eventKey="description" title="Description">
                                            <p className='mb-3'>Praesent ornare, ex a interdum consectetur, lectus diam sodales elit, vitae egestas est enim ornare nisl. Nullam in lectus nec sem semper viverra. In lobortis egestas massa. Nam nec massa nisi. Suspendisse potenti. Quisque suscipit vulputate dui quis volutpat. Ut id elit facilisis, feugiat est in, tempus lacus. Ut ultrices dictum metus, a ultricies ex vulputate ac. Ut id cursus tellus, non tempor quam. Morbi porta diam nisi, id finibus nunc tincidunt eu.</p>
                                            <div style={{justifyContent: 'space-between' }} className='mb-5 d-lg-flex'>
                                                <div>
                                                    <h4>Highlights</h4>
                                                    <ul>
                                                        <li>With Mic:Yes</li>
                                                        <li>Bluetooth version: 2.1</li>
                                                        <li>Colour:Black</li>
                                                        <li>Wireless range: 10 m</li>
                                                        <li>Type:On Ear</li>
                                                        <li>Battery life: 8 hrs | Charging time: 2 hrs</li>
                                                    </ul>

                                                    <h4>Services</h4>
                                                    <ul>
                                                        <li>1 Year</li>
                                                        <li>10 Days Replacement Policy</li>
                                                        <li>Cash on Delivery available</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <img className='w-100' src={pinkImage} alt='pink' />
                                                </div>
                                            </div>
                                            <div className='mb-5 d-lg-flex' style={{ justifyContent: 'space-between' }}>
                                                <div className='banner-image'>
                                                    <img src={tryy} alt='trying' />
                                                </div>
                                                <div className='ps-5'>
                                                    <p>
                                                        General<br />
                                                        Model Name:Rockerz 400 Super Extra Bass<br />
                                                        Headphone Type:On the Ear<br />
                                                        Inline Remote:no<br />
                                                        Connectivity:BluetoothSales Package:Manual, Audio Cable, Wireless Headphone, Charging CableBattery Time:100 HoursPower Input<br /> (mW):10mwDetachable Cord:
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <h4>terms and conditions</h4>
                                                <p>The images represent actual product though color of the image and product may slightly differ.</p>
                                                <p>Groom does not select, edit, modify, alter, add or supplement the information, description and other specifications provided by the Seller.</p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="review" title="Reviews">
                                            review
                                        </Tab>
                                    </Tabs>
                                </div>
                                <div className='mt-5'>
                                    <h3 className='heading'>Related Products</h3>
                                    <Swiper className='mySwiper' slidesPerView={3} spaceBetween={50}>
                                        {
                                            products.map(item => {
                                                return (
                                                    <SwiperSlide>
                                                        {/* <SimpleProduct element={item} /> */}
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>


            </div>
        )
    }
}

function mapStateToProps({ products }) {
    return {
        products: products.products
    }
}

export default connect(mapStateToProps)(SingleProduct)
