import React from 'react'
import './About.css'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import { motion } from 'framer-motion'
const About = () => {
  const opacity = {
    initial: {

        opacity: 0,
        scale:0
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            // straggerChildren: 0.1
        }
    },
}
  return (
    <div>
      <motion.div className="about-conatiner" variants={opacity} initial='initial' whileInView='animate' viewport={{once:true}}>
        <div className="about-heading">
            <h3>Plan our Trip Now</h3>
            <h1>Quick & easy car rental</h1>
        </div>
        <div className="logo-container">
       <motion.div className="about-logo">
            <img src={logo3} alt="" />
            <h2>Select Car</h2>
            <p>To contribute to positive change  and achieve our sustainability goals with  many extraordinary </p>
        </motion.div>
       <motion.div className="about-logo" >
            <img src={logo1} alt="" />
            <h2>Conatct Operator</h2>
            <p>To contribute to positive change and achieve our sustainability goals with many extraordinary </p>
        </motion.div>
       <motion.div className="about-logo about-logo-3" >
            <img src={logo2} alt="" />
            <h2>Let's Drive</h2>
            <p>To contribute to positive change and achieve our sustainability goals with many extraordinary </p>
        </motion.div>
            </div>
      </motion.div>
    </div>
  )
}

export default About
