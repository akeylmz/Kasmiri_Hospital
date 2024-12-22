import React, { useState } from 'react'
import TableComp2 from '../../UI/TableComp2';
import { Clock4 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useGetAllWorkerQuery } from '../../store/patient2';
import { processDays } from '../../components/Utils/processDays';
import { useTranslation } from 'react-i18next';

const HrWorkingHours = () => {
  const { t } = useTranslation()

  const [ activePage, setActivePage] = useState(1)
  const { data, isLoading, error } = useGetAllWorkerQuery({page: activePage})
  
  

    const thead = [
        { name: t("Full Name"), sortable: true },
        { name: t("Start Work"), sortable: true },
        { name: t("Break"), sortable: true },
        { name: t("Working Days"), sortable: true },
        { name: t("Weekly Working"), sortable: true },
        { name: '', width: 80 },
      ]
     
    
  if(isLoading){
    return <div>Yükleniyor...</div>
  }
 // console.log(data.results);
      
  return (
    <motion.div
        initial={{opacity:0}}   
        animate={{opacity:1}}
        className="w-full">
        <TableComp2
            thead={thead}
            tbody={data.results.filter((x) => x.working_hours.length > 0).map(worker => [
              <div className='flex items-center gap-x-1'>
                <img src={worker.worker_image} alt={`${worker.first_name} avatar`} className="w-10 h-10 rounded-full" />
                {worker.first_name + " " + worker.last_name}
              </div>, 
              worker.working_hours[0].start_time.substring(0, 5),
              worker.working_hours[0].end_time.substring(0, 5),              
              (() => {
                const processResult = processDays(worker.working_hours[0].working_days)
                const [dayCount, ...rest] = processResult.split(", ")
                const dayDetails = rest.join(", ")
                //console.log(dayDetails);
                return (
                    <span>
                        <span className="text-cyan-500 font-semibold mr-1">{dayCount},</span>
                        <span>{dayDetails}</span>
                    </span>
                )
            })(),
              parseInt(worker.working_hours[0].weekly_hours, 10),
              worker.actions
            ])}
            searchable={true}
            tableTitle={t("WORKING HOURS")}
            activePage = {activePage}
            modal={"workerhours-modal"}
            setActivePage = {setActivePage}
        />
    </motion.div>
  )
}

export default HrWorkingHours