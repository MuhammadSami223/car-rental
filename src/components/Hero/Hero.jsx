import React from 'react'
import './Hero.css'
import herobg from '../../assets/herobg.png'
import herocar from '../../assets/herocar.png'
import bookbg from '../../assets/bookbg.png'
import Dropdowninput from '../lists/Dropdowninput'
import Dropdowninput2 from '../lists/Dropdowninput2'
import Dropdowninput3 from '../lists/Dropdowninput3'
import Dropdowninput4 from '../lists/Dropdowninput4'
import Dropdowninput5 from '../lists/Dropdowninput5'
import Dropdowninput6 from '../lists/Dropdowninput6'
import {motion}from 'framer-motion'
const Hero = () => {
  const textvariants = {
    initial: {

        x: -500,
        opacity: 1
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.9,
            straggerChildren: 0.1
        }
    },
    scrollbutton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}
  const textvariants2 = {
    initial: {

        x: 500,
        opacity: 1
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.9,
            straggerChildren: 0.1
        }
    },
    scrollbutton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}
  const textvariants3 = {
    initial: {

        y: 200,
        opacity: 1
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.9,
            straggerChildren: 0.1
        }
    },
    scrollbutton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}
  return (
    <div>
      <div className="hero-container">
        {/* left */}
        <div className="hero-left">
            <motion.div className="hero-headings" variants={textvariants} initial='initial'animate='animate'>
            <h3>Plan your trip now</h3>
            <h1>Save <span>big</span> with our car rental</h1>
            <p>To contribute to positive change and achieve our sustainability goals with many extraordinary</p>
            <div className="hero-buttons">

            <button className='hero-btn'>Book Ride</button>
            <button className='hero-btn2'>Learn More</button>
            </div>
            </motion.div>
        </div>
        {/* right */}
        <motion.div className="hero-right" >
          <div className="hero-bg">
            <img src={herobg} alt="" />
          </div>
          <motion.div className="herocar" variants={textvariants2} initial='initial'animate='animate'>
            <img src={herocar} alt="" />
          </motion.div>
        </motion.div>
        </div>
        <motion.div className="booksconatiner"  variants={textvariants3} initial='initial'whileInView='animate' viewport={{ once: true }} >
          
        <div className="bookcontainer">
          <h2>Book a Car</h2>
          <div className="inputs1">
          <Dropdowninput/>
          <Dropdowninput2/>
          <Dropdowninput3/>
          </div>
          <div className="input2-conatiner">  </div>
          <div className="inputs2">
          <Dropdowninput4/>
          <Dropdowninput5/>
          <Dropdowninput6/>
          <Dropdowninput5/>
         <span><button className="hero-btn search">Search</button></span> 
          </div>
          <img src={bookbg} alt="" />
      </div>
        </motion.div>
    </div>
  )
}

export default Hero
Hero