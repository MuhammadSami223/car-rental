import React from 'react'
import Vehicleimage from '../../assets/Vehicleimage.jpg'
import transportation from '../../assets/transportation.png'
import parking from '../../assets/parking.png'
import savebg from '../../assets/savebg.png'
import car from '../../assets/car.png'
import { motion } from 'framer-motion'
// import { motion, useScroll } from "framer-motion"
import './Vehicle.css'
const Vehicle = () => {

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
      <div className="vehicle-conatiner">
        <motion.div className="vehicle-headings">
            <h3>Vehicle Models</h3>
            <h1>Our rental fleet</h1>
            <p>To contribute to positive change and achieve our sustainability </p>
            <span>goals with many extraordinary</span>
        </motion.div>
        <div className="compony-container">
       
        <div className="left" >
            <motion.img src={Vehicleimage} alt=""  
  viewport={{ once: true }} variants={textvariants} initial='initial' whileInView='animate'/>
        </div>

        <motion.div className="right" variants={textvariants2} initial='initial' whileInView='animate'  viewport={{ once: true }} >
            <div className="compony-headings">
                <h3>About Compony</h3>
                <h1>You start the engine and your adventure begins</h1>
                <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
            <motion.div className="transport-count" variants={opacity} initial='initial' whileInView='animate' viewport={{once:true}}>
                <div className="tranport-image">
                    <img src={transportation} alt="" />
                <div className="count">20 <span>Car Type</span></div>
                </div>
                <motion.div className="tranport-image">
                    <img src={car} alt="" />
                <div className="count">85 <span>Rental Outlets</span></div>
                </motion.div>
                <div className="tranport-image">
                    <img src={parking} alt="" />
                <div className="count">75 <span>Repair Shop</span></div>
                </div>
               
            </motion.div>
            </div>
        </motion.div>
        </div>
        <motion.div className="savebg"  variants={textvariants3} initial='initial'whileInView='animate' viewport={{ once: true }}>
            <img src={savebg} alt="" />
            <h1>Save big with our cheap car rental!</h1>
            <h3>Top Airports. Local Suppliers. 24/7 Support.</h3>
            <div className='padding'>

            <button className='hero-btn search vehicle-btn'>Book Now</button>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Vehicle
