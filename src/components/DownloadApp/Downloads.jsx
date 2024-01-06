import React from 'react'
import './Download.css'
import { motion } from 'framer-motion'
import download from '../../assets/download.png'
const  Downloads= () => {
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
      <div className="download-container">
        <motion.div className="download-left"  variants={opacity} initial='initial' whileInView='animate' viewport={{once:true}}>
        <div className="download-headings">
                <h1>Download our app to get most out of it</h1>
                <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                <div className="download-image">

                <img src="https://www.freepnglogos.com/uploads/google-play-png-logo/new-get-it-on-google-play-png-logo-20.png" alt="" />
                <img src="https://w7.pngwing.com/pngs/265/94/png-transparent-app-store-apple-iphone-apple-text-label-logo-thumbnail.png" alt="" />
                </div>
            </div>
        </motion.div>
        <div className="download-right">
           
        <img src={download} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Downloads
