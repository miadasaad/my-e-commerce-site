import React, { Component } from 'react'
import HiddenIcons from './hiddenIcons'
import { connect } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "./styles.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';

SwiperCore.use([Pagination]);

class DailyProduct extends Component {
    render() {
        const { products } = this.props
        const dailyProd = products.filter(item => {
            return (item.daily === true)
        })
        return (
            <div>
                <div className="new_product">

                    <div className="heading">
                        <h2>New Products</h2>
                    </div>

                    <hr className="deal-hr" /><hr className="deal-hr" />
                    <span class="vertical"></span>
                    <Swiper breakpoints={{
                        768:{
                            slidesPerView:2
                        },
                        992: {
                            slidesPerView: 3,
                            },
                        1200: {
                            slidesPerView: 2,
                                },
                    }} spaceBetween={30} pagination={{
                        "clickable": true, "dynamicBullets": true
                    }} className="mySwiper">
                        {dailyProd.map(item => {
                            return (

                                <SwiperSlide key={item.id}>
                                    <div >
                                        <div className="imagesPro">
                                            <img src={item.images[0].url} alt='pro' onMouseOver={e => (e.currentTarget.src = item.images[1].url)} onMouseOut={e => (e.currentTarget.src = item.images[0].url)} />
                                        </div>
                                        <HiddenIcons id={item.id} />
                                        <p>{item.name}</p>
                                        <span>{item.price}</span>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
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

export default connect(mapStateToProps)(DailyProduct)
