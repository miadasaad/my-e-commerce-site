import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import slide1 from './images/slider-01-1265x485.jpg'
import slide2 from './images/slider-02-1265x485.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "./styles.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';

SwiperCore.use([Pagination]);


export default function Slider() {
    let sliders = [{ url: slide1 }, { url: slide2 }]
    return (
        <div className='slider'>
            <Container fluid>
                <Row>
                    <Col sm={4}>

                    </Col>
                    <Col sm={8}>
                        <Swiper className="mySwiper">
                            {sliders.map((slider, index) => {
                                return <SwiperSlide key={index}>

                                    <div className='image'>
                                        <img src={slider.url} alt='sliding carousel' />
                                    </div>
                                </SwiperSlide>
                            })}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>



    )
}
