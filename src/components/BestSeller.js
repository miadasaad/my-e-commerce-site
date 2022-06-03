import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import Seller from './Seller'
import { connect } from 'react-redux'

import "./styles.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';
SwiperCore.use([Pagination]);

function BestSeller(props) {
    const { products } = props
    const items = products.filter(item => {
        return item.rate === true
    })
    return (
        <div className='best-seller'>
            <h3 className='heading'>best sellers</h3>
            <Swiper className='mySwiper'
                breakpoints={{
                    // when window width is >= 640px
                    600: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
                spaceBetween={0}>
                {items.map((item, index) => {
                    return (<SwiperSlide key={index}>
                        <Seller item={item} />
                    </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
function mapStateToProps({ products }) {
    return {
        products: products.products
    }
}

export default connect(mapStateToProps)(BestSeller)