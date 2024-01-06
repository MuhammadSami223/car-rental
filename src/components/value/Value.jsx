import React from 'react'
import price from '../../assets/price.png'
import charge from '../../assets/charge.png'
import drive from '../../assets/drive.png'
import './Value.css'
import { motion } from 'framer-motion'
const Values = () => {
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
  return (
    <div>
      <div className="value-container">
        <div className="value-left">
            <motion.div className="value-headings" variants={textvariants} initial='initial'whileInView='animate' viewport={{ once: true }} >
                <h2>Why Choose Us</h2>
                <h3>Best valued deals you will ever find</h3>
                <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                <button className="hero-btn value-btn">Find Deal</button>
            </motion.div>
        </div>

        <div className="value-right">
            <div className="valueright-box">
            <div className="value-logo">
            <img src={drive} alt="" />
            <h2>No Hidden Charges</h2>
        </div>
            <p>Under folly balls death own point now men. Match way these she avoid see. She whose drift their fat off. </p>
            </div>
            <div className="valueright-box">
            <div className="value-logo">
            <img src={price} alt="" />
            <h2>Cross Country Drive</h2>
        </div>
            <p>Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. </p>
            </div>
            <div className="valueright-box">
            <div className="value-logo">
            <img src={charge} alt="" />
            <h2>All Inclusive Pricing</h2>
        </div>
            <p>Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had,</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Values
