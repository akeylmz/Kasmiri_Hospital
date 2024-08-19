import React from 'react'
import { motion } from 'framer-motion';

const HrHierarchy = () => {

    const data = [
        {
          title: 'YÖNETİCİ',
          people: [
            { name: 'Selim GÜRSES', image: 'https://via.placeholder.com/40' },
            { name: 'Cemre YALÇINSOY', image: 'https://via.placeholder.com/40' },
          ],
          active: true,
        },
        {
          title: 'MUHASEBE',
          people: [
            { name: 'Seçkin SEYMEN', image: 'https://via.placeholder.com/40' },
            { name: 'Ahmet KAPAKÇI', image: 'https://via.placeholder.com/40' },
            { name: 'Yalçın SELİMOĞLU', image: 'https://via.placeholder.com/40' },
          ],
          extra: 5,
        },
        {
          title: 'PAZARLAMA',
          people: [
            { name: 'Nazan SATIŞOĞLU', image: 'https://via.placeholder.com/40' },
            { name: 'Alper ÜNLÜ', image: 'https://via.placeholder.com/40' },
          ],
        },
        {
          title: 'SATIŞ',
          people: [
            { name: 'Aylin GÜMÜŞÇÜ', image: 'https://via.placeholder.com/40' },
            { name: 'Selin TAŞ', image: 'https://via.placeholder.com/40' },
            { name: 'Buğra YAĞUŞ', image: 'https://via.placeholder.com/40' },
          ],
        },
        {
          title: 'VEZNE',
          people: [{ name: 'Tuğçe DAMLALI', image: 'https://via.placeholder.com/40' }],
        },
      ];

  return (
    <motion.div 
      initial={{opacity:0}}   
      animate={{opacity:1}} 
      className="flex flex-col items-center justify-center w-full h-full bg-white p-6 rounded-lg shadow-lg">
        <p className='text-3xl font-bold'>HİYERARŞİ - ALANI</p>
    </motion.div>
  )
}



export default HrHierarchy