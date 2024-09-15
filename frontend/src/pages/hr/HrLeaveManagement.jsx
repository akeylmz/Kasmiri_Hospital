import React from 'react'
import { motion } from 'framer-motion';

const HrLeaveManagement = () => {
  return (
    <motion.div
        initial={{opacity:0}}   
        animate={{opacity:1}} 
        className='w-full h-full flex items-center justify-center'
    >
        <p className='text-3xl font-bold'>İZİN YÖNETİMİ - ALANI</p>
    </motion.div>
  )
}

export default HrLeaveManagement