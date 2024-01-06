import React from 'react'
import './NAvbar.css'
import logo from '../../assets/logo.png'
import {motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div>
      <div className="container">
        {/* left */}
        <div className="left">
          <motion.div className="logo"  initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>
            <img src={logo} alt="" />
          </motion.div>
        </div>
        {/* center */}
        <div className="center">
          <div>
            <ul className='list-item'>
              <li className="list">Home</li>
              <li className="list">About</li>
              <li className="list">Vehicle Model</li>
              <li className="list">Testmonial</li>
              <li className="list">Our Team</li>
              <li className="list">Contact</li>
            </ul>
          </div>
        </div>
        {/* right */}
        <div className="right">

        <motion.div className="buttons"  initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>
          <div>Sign in</div>
          <button className="btn">Conatct</button>

        </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
