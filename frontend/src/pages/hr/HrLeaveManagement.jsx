import React, { useState } from 'react'
import { motion } from 'framer-motion';
import TableComp2 from '../../UI/TableComp2';
import { useGetAllWorkerQuery } from '../../store/patient2';

const HrLeaveManagement = () => {

  const [ activePage, setActivePage] = useState(1)
  const { data, isLoading, error } = useGetAllWorkerQuery({page: activePage})
  
  const thead = [
      { name: 'Adı Soyadı', sortable: true },
      { name: 'İş Başı', sortable: true },
      { name: 'Paydos', sortable: true },
      { name: 'Çalışma Günleri', sortable: true },
      { name: 'Haftalık Çalışma', sortable: true },
      { name: '', width: 80 },
    ]     
    
  if(isLoading){
    return <div>Yükleniyor...</div>
  }
  console.log(data.results);
      
  return (
    <motion.div
        initial={{opacity:0}}   
        animate={{opacity:1}} 
        className='w-full h-full flex items-center justify-center'
    >
        <TableComp2
            thead={thead}
            tbody={data.results.map(worker => [
              <div className='flex items-center gap-x-1'>
                <img src={worker.worker_image} alt={`${worker.first_name} avatar`} className="w-10 h-10 rounded-full" />
                {worker.first_name + " " + worker.last_name}
              </div>, 
              worker.startTime,
              worker.endTime,
              worker.workDays,
              worker.weeklyHours,
              worker.actions
            ])}
            searchable={true}
            tableTitle={"ÇALIŞMA SAATLERİ"}
            activePage = {activePage}
            setActivePage = {setActivePage}
        />
    </motion.div>
  )
}

export default HrLeaveManagement