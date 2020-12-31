import React, { Component } from 'react'
import { Carousel } from 'antd'
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import logo1 from '../../../resource/assets/21.jpg'
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


class Carousels extends Component {
    render() {
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };
        const swiperstyle={
            width:'700px',
            height:"400px"
        }
        return (
            <div>
                <Carousel autoplay style={{ width: 600 }}>
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    style={swiperstyle}
                >
                    <SwiperSlide><img src={logo1} alt=""></img></SwiperSlide>
                    <SwiperSlide><img src={logo1} alt=""></img></SwiperSlide>
                    <SwiperSlide><img src={logo1} alt=""></img></SwiperSlide>
                    <SwiperSlide><img src={logo1} alt=""></img></SwiperSlide>
                </Swiper>
            </div>
        );
    }
}

export default Carousels;