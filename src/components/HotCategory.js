import React, { Component } from 'react'
import hot1 from './images/hot1.png'
import hot2 from './images/hot2.png'
import hot3 from './images/hot3.png'
import hot4 from './images/hot4.png'
import hot5 from './images/hot5.png'
import {Container,Row} from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "./styles.css";
import SwiperCore, {
  Pagination
} from 'swiper/core';

SwiperCore.use([Pagination]);

class HotCategory extends Component {
  state = {
    hotCategory: [{
      url: hot1,
      name: 'Hidden Camera',
      types: ["Action Camera", "Tablets", "Digital Camera"]
    },
    {
      url: hot2,
      name: 'Box Camera',
      types: ["Action Camera", "Tablets", "Digital Camera"]
    },
    {
      url: hot3,
      name: 'Digital Camera',
      types: ["Action Camera", "Tablets", "Digital Camera"]
    },
    {
      url: hot4,
      name: 'Animation Camera',
      types: ["Action Camera", "Tablets", "Digital Camera"]
    },
    {
      url: hot5,
      name: 'Action Camera',
      types: ["Action Camera", "Tablets", "Digital Camera"]
    },
    ]

  }
  render() {
    const { hotCategory } = this.state
    return (
      <div className='hotCategory'>
        <h3 className='heading'>Hot Categories</h3>
        <Container fluid>
          <Row>
          <Swiper breakpoints={{
             // when window width is >= 640px
             640: {
                 slidesPerView: 1,
                 },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 8
              },
                992: {
                  slidesPerView: 3,
              },
              1200:{
                slidesPerView: 4,
                
              }
               }}   pagination={{
          "clickable": true, "dynamicBullets": true
        }} className="mySwiper">
          
          {hotCategory.map((category, index) => {
            return <SwiperSlide key={index}>
              <div className='hot-content'>
                <div className='image'>
                  <img src={category.url} alt='category' />
                </div>
                <div className='description'>
                  <h4 style={{ whiteSpace: 'nowrap' }}>{category.name}</h4>
                  <ul>
                    {category.types.map((item, index) => {
                      return <li key={index}>{item}</li>
                    })}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
            
          })}
          
        </Swiper>
          </Row>
        </Container>
        
      </div>
    )
  }

}
export default HotCategory
/**
<Swiper
  breakpoints={{
    // when window width is >= 640px
    640: {
      width: 640,
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 2,
    },
  }}
>
  {slides}
</Swiper>

.swiper-container {
  width: 480px;
}

@media screen and (min-width: 640px) {
  .swiper-container {
    width: 640px;
  }
}

@media screen and (min-width: 768px) {
  .swiper-container {
    width: 768px;
  }
}
 */
// breakpoints={{
//   // when window width is >= 640px
//   600: {
//     width: 640,
//     slidesPerView: 2,
//     spaceBetween: 116,
//   },
//   // when window width is >= 768px
//   768: {
//     width: 768,
//     slidesPerView: 2,
//   },
//   992: {
//     width: 992,
//     slidesPerView: 3,
//     spaceBetween:49,
//   },
//   1025: {
//     width: 1025,
//     slidesPerView: 3,
//     spaceBetween:32,
//   },
// }}
