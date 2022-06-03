import React, { Component } from 'react'
import Rating from './rating'
import HiddenIcons from './hiddenIcons'
import { FaCartPlus } from 'react-icons/fa';
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./styles.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';
SwiperCore.use([Pagination]);

class DealProduct extends Component {
    render() {

        const { products } = this.props
        const dealProducts = products.filter(item => {
            return item.deal
        })
        return (
            <div>
                <Swiper breakpoints={{
                    // 640: {
                    //     width: 640,
                    //     slidesPerView: 1,
                    //     },
                }} className="mySwiper" slidesPerView={1}>
                    {dealProducts.map((pro, index) => {
                        return (
                            <SwiperSlide key={index} pagination={{ "dynamicBullets": true }}>
                                <Row>
                                    <Col md={5} sm={12}>
                                        <div className="image">
                                            <img src={pro.images[0].url} alt='product' onMouseOver={e => (e.currentTarget.src = pro.images[1].url)} onMouseOut={e => (e.currentTarget.src = pro.images[0].url)} />
                                            <div className="hidden-info">
                                                <span>sale</span>
                                                <span>-30%</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={7} sm={12}>
                                        <div className="description_img">
                                           <HiddenIcons id={pro.id} />
                                            <div className="info">
                                                <h3>{pro.name}</h3>
                                                <Rating />
                                                <p style={{ color: "#D1D1D1" }}>iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam</p>
                                                <span>$50.00 </span><span className="through" style={{ color: "#D1D1D1" }}> &ThinSpace; $130.00</span>
                                                <button className="cart-icon btn-slide-down" style={{ display: "block" }}><FaCartPlus></FaCartPlus> Add To Cart</button>
                                                <p className="available">available : 996</p>
                                                <span className="empty1"></span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        )
    }
}
function mapStateToProps({ products }) {
    return {
        products: products.products
    }
}

export default connect(mapStateToProps)(DealProduct)
