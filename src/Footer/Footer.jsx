import React from 'react'
import './Footer.css'
// import { Swiper } from 'swiper/types'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import SwiperSlide from '../components/swiper/SwiperSlide'
const Footer = () => {
  return (
    <div>
          <SwiperSlide/>
      <div className="footer-container">
        <div className="footer1">
          <h3>Car Rental</h3>
          <p>Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion.</p>
        </div>
        <div className="footer2">
          <h3>Compony</h3>
          <p>Pakistan</p>
          <p>Career</p>
          <p>Mobile</p>
          <p>Blog</p>
          <p>How We Work</p>
        </div>
        <div className="footer3">
          <h2>Working Hours</h2>
          <div className="timing-container">

          <div> <label htmlFor="">Mon-Fri:</label>
            <span>9:00-5:00</span>
            </div>
          <div> <label htmlFor="">Sat:</label>
            <span>9:00-7:00</span>
            </div>
          <div> <label htmlFor="">Sunday:</label>
            <span>Closed</span>
            </div>
          </div>
        </div>
        <div className="footer4">
          <h2>Subscribe</h2>
          <p>Subscribe your Email address for latest news & updates.</p>
          <div><input type="text" id='timeSelect' placeholder='Enter Your Placeholder' /></div>
          <button className='hero-btn' style={{ marginTop: "10px", marginBottom: "60px" }}>Submit</button>
        </div>
      </div>
      <hr />
      <div className="icon-container">
      <p className='footer-para' style={{marginLeft:"130px",marginBottom:"50px",marginTop:"70px"}}>&copy; 2023 <b>Car Rental</b>.All Right Reserved</p>
      <div className="icons">

      <a href=""><FaGithub/></a>
      <a href=""><FaLinkedin/></a>
      <a href=""><FaFacebook/></a>
      </div>
      </div>
      <span>.</span>
    </div>
  )
}

export default Footer
