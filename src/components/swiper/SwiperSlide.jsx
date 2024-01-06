import React, { useState } from 'react';
import user from '../../assets/user.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css/autoplay'

import './Styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


export default function App() { 

  
    return (
    <>
      <Swiper
 
  slidesPerView={2} spaceBetween={30} loop={true}
     autoplay={{
       delay:3000,
       disableOnInteraction: false
      }}
      pagination={{
        clickable: true,
      }}
     breakpoints={{
      767:{
        slidesPerView:2
      },
      320:{
        slidesPerView:1
      }
     
     }}
      modules={[Pagination,Autoplay]}
      className="mySwiper swiper-container"
      >
        <SwiperSlide><div className="headings" style={{marginTop:"-50px"}}>
          <h3>"The rem value is the same as the em value displayed above. Both units are scalable."</h3>
          </div>
          <i className="fa fa-quote-right" aria-hidden="true" style={{marginTop:"210px",fontSize:"53px",position:"absolute",marginLeft:"300px",color:"#ff4c30"}}></i>

          <div className="user">
            <img src={user} alt="" />
            <span>Kimberly Garcia</span><br />
            <div>United State</div>
          </div>
          </SwiperSlide>
        <SwiperSlide><div className="headings" style={{marginTop:"-50px"}}>
          <h3>"The rem value is the same as the em value displayed above. Both units are scalable."</h3>
          </div>
          <i className="fa fa-quote-right" aria-hidden="true" style={{marginTop:"210px",fontSize:"53px",position:"absolute",marginLeft:"300px",color:"#ff4c30"}}></i>

          <div className="user">
            <img src={user} alt="" />
            <span>Kimberly Garcia</span><br />
            <div>United State</div>
          </div>
          </SwiperSlide>
        <SwiperSlide><div className="headings" style={{marginTop:"-50px"}}>
          <h3>"The rem value is the same as the em value displayed above. Both units are scalable."</h3>
          </div>
          <i className="fa fa-quote-right" aria-hidden="true" style={{marginTop:"210px",fontSize:"53px",position:"absolute",marginLeft:"300px",color:"#ff4c30"}}></i>

          <div className="user">
            <img src={user} alt="" />
            <span>Kimberly Garcia</span><br />
            <div>United State</div>
          </div>
          </SwiperSlide>
        <SwiperSlide><div className="headings" style={{marginTop:"-50px"}}>
          <h3>"The rem value is the same as the em value displayed above. Both units are scalable."</h3>
          </div>
          <i className="fa fa-quote-right" aria-hidden="true" style={{marginTop:"210px",fontSize:"53px",position:"absolute",marginLeft:"300px",color:"#ff4c30"}}></i>

          <div className="user">
            <img src={user} alt="" />
            <span>Kimberly Garcia</span><br />
            <div>United State</div>
          </div>
          </SwiperSlide>
        <SwiperSlide><div className="headings" style={{marginTop:"-50px"}}>
          <h3>"The rem value is the same as the em value displayed above. Both units are scalable."</h3>
          </div>
          <i className="fa fa-quote-right" aria-hidden="true" style={{marginTop:"210px",fontSize:"53px",position:"absolute",marginLeft:"300px",color:"#ff4c30"}}></i>

          <div className="user">
            <img src={user} alt="" />
            <span>Kimberly Garcia</span><br />
            <div>United State</div>
          </div>
          </SwiperSlide>
        
      </Swiper>
    </>
  );
}
