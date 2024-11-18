import React from 'react'
import { motion } from 'framer-motion';
import TableComp from '../../UI/TableComp';
import { useNavigate } from 'react-router-dom';
import { IoMailOutline } from "react-icons/io5";

const HrPersonnel = () => {

  const navigate = useNavigate()

    const tbody = [
        {
          fullName: ['https://via.placeholder.com/40', 'Selim GÜRSES'],
          email: 'selim@domain.com',
          contact: '05369863247',
          department: 'Yönetici',
          actions: (            
            <div className='flex gap-5'>
              <button>
                <IoMailOutline size={30} color='blue' />
              </button>
                <button onClick={()=> navigate("/KPI-personnel")} key="details-1" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
                &gt;
              </button>
            </div>
          )
        },
        {
          fullName: ['https://via.placeholder.com/40', 'Cemre YALÇINSOY'],
          email: 'cemre@domain.com',
          contact: '05426987832',
          department: 'Yönetici',
          actions: (
            <div className='flex gap-5'>
              <button>
                <IoMailOutline size={30} color='blue' />
              </button>
                <button onClick={()=> navigate("/KPI-personnel")} key="details-1" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
                &gt;
              </button>
            </div>
          )
        },
        {
          fullName: ['https://via.placeholder.com/40', 'Seçkin SEYMEN'],
          email: 'seckin@domain.com',
          contact: '05318521496',
          department: 'Muhasebe',
          actions: (
            <div className='flex gap-5'>
              <button>
                <IoMailOutline size={30} color='blue' />
              </button>
                <button onClick={()=> navigate("/KPI-personnel")} key="details-1" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
                &gt;
              </button>
            </div>
          )
        },
        {
          fullName: ['https://via.placeholder.com/40', 'Ahmet KAPAKÇI'],
          email: 'ahmet@domain.com',
          contact: '05336547893',
          department: 'Muhasebe',
          actions: (
            <div className='flex gap-5'>
              <button>
                <IoMailOutline size={30} color='blue' />
              </button>
                <button onClick={()=> navigate("/KPI-personnel")} key="details-1" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
                &gt;
              </button>
            </div>
          )
        },
        {
          fullName: ['https://via.placeholder.com/40', 'Yalçın SELİMOĞLU'],
          email: 'yalcin@domain.com',
          contact: '05465989832',
          department: 'Muhasebe',
          actions: (
            <div className='flex gap-5'>
              <button>
                <IoMailOutline size={30} color='blue' />
              </button>
                <button onClick={()=> navigate("/KPI-personnel")} key="details-1" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
                &gt;
              </button>
            </div>
          )
        },
        {
          fullName: ['https://via.placeholder.com/40', 'Nazan SATIŞOĞLU'],
          email: 'nazan@domain.com',
          contact: '05556985478',
          department: 'Pazarlama',
          actions: (
            <div className='flex gap-5'>
              <button>
                <IoMailOutline size={30} color='blue' />
              </button>
                <button onClick={()=> navigate("/KPI-personnel")} key="details-1" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
                &gt;
              </button>
            </div>
          )
        },
        {
          fullName: ['https://via.placeholder.com/40', 'Alper ÜNLÜ'],
          email: 'alper@domain.com',
          contact: '05052587413',
          department: 'Pazarlama',
          actions: (
            <div className='flex gap-5'>
              <button>
                <IoMailOutline size={30} color='blue' />
              </button>
                <button onClick={()=> navigate("/KPI-personnel")} key="details-1" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
                &gt;
              </button>
            </div>
          )
        }
      ];

      const thead = [
        { name: 'Adı Soyadı', sortable: true },
        { name: 'E-Posta', sortable: true },
        { name: 'İletişim' },
        { name: 'Departman', sortable: true },
        { name: '', width: 120 }, // İşlemler sütunu için genişlik
      ];

  return (
    <motion.div
        initial={{opacity:0}}   
        animate={{opacity:1}}
        className='w-full h-full flex flex-col items-center justify-evenly'
    >
      
        <TableComp
            thead={thead}
            tbody={tbody.map(row => [
            [<img src={row.fullName[0]} alt={`${row.fullName[1]} avatar`} className="w-10 h-10 rounded-full" />, row.fullName[1]], 
            row.email, 
            row.contact, 
            row.department, 
            row.actions
            ])}
            modal={"workerAdd"}
            searchable={true}
            tableTitle= {"ÇALIŞAN LİSTESİ"}
        />  
    </motion.div>
  )
}

export default HrPersonnel