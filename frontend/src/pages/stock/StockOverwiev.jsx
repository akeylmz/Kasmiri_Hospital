import React from 'react'
import StatCard from '../../UI/StatCard';
import { motion } from 'framer-motion'
import { useGetAllStocksQuery } from '../../store/patient2';
const StockOverwiev = () => {

    const containerMotion = {        
        visible:{
            transition: {
                //delayChildren: 0.1,
                staggerChildren: 0.05
            }
        }
    }
    const itemMotion = {
        hidden: {
            opacity: 0,
            translateY: 20
        },
        visible:{
            opacity: 1,
            translateY: 0
        }
    }

    const { data, error, isLoading } = useGetAllStocksQuery({
            page: 1,
            type: "total",
        })
console.log(data);

    const data2 = [
        { percentage: 0.57, title: "ISOLYTE DENGELİ", subtitle: "500 ML (TURKFLEKS)" },
        { percentage: 0.9, title: "BIOFLEX", subtitle: "%0.9 IZOTONIK SODYUM KLORUR SOL. 500 ML" },
        { percentage: 8.5, title: "PF IZOLEN M", subtitle: "500 ML" },
        { percentage: 21.03, title: "TYLOL", subtitle: "500 MG 20 TABLET" },
        { percentage: 100, title: "PARANOX-S", subtitle: "120 MG 10 SUPP" },
        { percentage: 25.01, title: "ONCEFT", subtitle: "1GR IV FLK." },
        { percentage: 25.06, title: "RIF", subtitle: "250MG AMPUL" },
        { percentage: 2, title: "DEXTROCIN", subtitle: "POMAD" },
      ];

  return (
    <motion.div 
        variants={containerMotion}
        initial={"hidden"}   
        animate={"visible"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">      
      {data && data.map((item, index) => (
        <motion.div
        className='h-full'
            variants={itemMotion}
        >
            <StatCard
            key={index}
            percentage={(item.total_haved / item.total_buyed)*100}
            title={item.stock_name}
            />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default StockOverwiev