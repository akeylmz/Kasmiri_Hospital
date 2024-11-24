import React, { useState } from 'react'
import { motion } from 'framer-motion';
import TableComp2 from '../../UI/TableComp2';
import { useGetAllWorkerQuery } from '../../store/patient2';
import { capitalizeWords } from '../../components/Utils/capitalizeWords';
import { formatDateToShow } from '../../components/Utils/DateFormat';
import { useTranslation } from 'react-i18next';

const HrLeaveManagement = () => {
  const { t } = useTranslation()

  const [ activePage, setActivePage] = useState(1)
  const { data, isLoading, error } = useGetAllWorkerQuery({page: activePage})
  
  const thead = [
      { name: t("Full Name"), sortable: true },
      { name: t("Start Date"), sortable: true },
      { name: t("End Date"), sortable: true },
      { name: t("Leave Duration"), sortable: true },
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
            tbody={data.results.filter((x) => x.leaves.length > 0).map(worker => [
              <div className='flex items-center gap-x-2'>
                <img src={worker.worker_image} alt={`${worker.first_name} avatar`} className="w-10 h-10 rounded-full" />
                {capitalizeWords(worker.first_name + " " + worker.last_name)}
              </div>, 
              formatDateToShow(worker.leaves[0].start_date),
              formatDateToShow(worker.leaves[0].end_date),
              worker.leaves[0].leave_days,
            ])}
            searchable={true}
            tableTitle={t("LEAVE MANAGEMENT")}
            modal={"leaves-modal"}
            activePage = {activePage}
            setActivePage = {setActivePage}
        />
    </motion.div>
  )
}

export default HrLeaveManagement