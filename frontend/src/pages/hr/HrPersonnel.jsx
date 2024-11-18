import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { IoMailOutline } from "react-icons/io5";
import TableComp2 from '../../UI/TableComp2';
import { useGetAllWorkerQuery } from '../../store/patient2';

const HrPersonnel = () => {

  const navigate = useNavigate()
  const { data, isLoading, error} = useGetAllWorkerQuery()
  
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

      if(isLoading){
        return <div>Yükleniyor</div>
      }
      const workers = data.results
      console.log(workers);
      

  return (
    <motion.div
        initial={{opacity:0}}   
        animate={{opacity:1}}
        className='w-full h-full flex flex-col items-center justify-evenly'
    >
      
        <TableComp2            
            thead={thead}
            tbody={workers.map(worker => [
            <div className='flex items-center gap-x-1'>
              <img src={worker.worker_image} alt={`${worker.first_name} avatar`} className="w-10 h-10 rounded-full" />
              {worker.first_name + " " + worker.last_name}
            </div>, 
            worker.email, 
            worker.phone_1, 
            worker.department, 
            <div className='flex gap-5'>
              <button>
                <IoMailOutline size={30} color='blue' />
              </button>
                <button onClick={()=> navigate(`${worker.id}`)} key="details-1" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
                &gt;
              </button>
            </div>
            ])}
            modal={"workerAdd"}
            searchable={true}
            tableTitle= {"ÇALIŞAN LİSTESİ"}
        />  
    </motion.div>
  )
}

export default HrPersonnel