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
      const tbody = [
        {
          fullName: [
            <img src="https://via.placeholder.com/40" alt="Selim GÜRSES avatar" className="w-10 h-10 rounded-full" />,
            'Selim GÜRSES'
          ],
          startTime: (
            <div className="flex items-center gap-x-2.5">
              <Clock4 size={18} color='gray' />
              <span>09:00</span>
            </div>
          ),
          endTime: (
            <div className="flex items-center gap-x-2.5">
              <Clock4 size={18} color='gray' />
              <span>13:00</span>
            </div>
          ),
          workDays: (
            <span>
              <span className="text-cyan-500 font-semibold mr-1">3 Gün</span>, Pzt, Çrş, Cum
            </span>
          ),
          weeklyHours: '23 Saat',
          actions: (
            <button key="details-1" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
        {
          fullName: [
            <img src="https://via.placeholder.com/40" alt="Cemre YALÇINSOY avatar" className="w-10 h-10 rounded-full" />,
            'Cemre YALÇINSOY'
          ],
          startTime: (
            <div className="flex items-center gap-x-2.5">
              <Clock4 size={18} color='gray' />
              <span>13:00</span>
            </div>
          ),
          endTime: (
            <div className="flex items-center gap-x-2.5">
              <Clock4 size={18} color='gray' />
              <span>18:00</span>
            </div>
          ),
          workDays: (
            <span>
              <span className="text-cyan-500 font-semibold mr-1">3 Gün</span>, Sal, Per, Cmt
            </span>
          ),
          weeklyHours: '23 Saat',
          actions: (
            <button key="details-2" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
        {
          fullName: [
            <img src="https://via.placeholder.com/40" alt="Seçkin SEYMEN avatar" className="w-10 h-10 rounded-full" />,
            'Seçkin SEYMEN'
          ],
          startTime: (
            <div className="flex items-center gap-x-2.5">
              <Clock4 size={18} color='gray' />
              <span>08:45</span>
            </div>
          ),
          endTime: (
            <div className="flex items-center gap-x-2.5">
              <Clock4 size={18} color='gray' />
              <span>18:00</span>
            </div>
          ),
          workDays: (
            <span>
              <span className="text-cyan-500 font-semibold mr-1">6 Gün</span>, Pzt → Cmt
            </span>
          ),
          weeklyHours: '45 Saat',
          actions: (
            <button key="details-3" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
        {
          fullName: [
            <img src="https://via.placeholder.com/40" alt="Ahmet KAPAKÇI avatar" className="w-10 h-10 rounded-full" />,
            'Ahmet KAPAKÇI'
          ],
          startTime: (
            <div className="flex items-center gap-x-2.5">
              <Clock4 size={18} color='gray' />
              <span>08:45</span>
            </div>
          ),
          endTime: (
            <div className="flex items-center gap-x-2.5">
              <Clock4 size={18} color='gray' />
              <span>18:00</span>
            </div>
          ),
          workDays: (
            <span>
              <span className="text-cyan-500 font-semibold mr-1">6 Gün</span>, Pzt → Cmt
            </span>
          ),
          weeklyHours: '45 Saat',
          actions: (
            <button key="details-4" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
        {
          fullName: [
            <img src="https://via.placeholder.com/40" alt="Yalçın SELİMOĞLU avatar" className="w-10 h-10 rounded-full" />,
            'Yalçın SELİMOĞLU'
          ],
          startTime: (
            <div className="flex items-center gap-x-2.5">
              <Clock4 size={18} color='gray' />
              <span>08:45</span>
            </div>
          ),
          endTime: (
            <div className="flex items-center gap-x-2.5">
              <Clock4 size={18} color='gray' />
              <span>18:00</span>
            </div>
          ),
          workDays: (
            <span>
              <span className="text-cyan-500 font-semibold mr-1">6 Gün</span>, Pzt → Cmt
            </span>
          ),
          weeklyHours: '45 Saat',
          actions: (
            <button key="details-5" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
        {
          fullName: [
            <img src="https://via.placeholder.com/40" alt="Nazan SATIŞOĞLU avatar" className="w-10 h-10 rounded-full" />,
            'Nazan SATIŞOĞLU'
          ],
          startTime: (
            <div className="flex items-center gap-x-2.5">
              <Clock4 size={18} color='gray' />
              <span>09:00</span>
            </div>
          ),
          endTime: (
            <div className="flex items-center gap-x-2.5">
              <Clock4 size={18} color='gray' />
              <span>18:00</span>
            </div>
          ),
          workDays: (
            <span>
              <span className="text-cyan-500 font-semibold mr-1">6 Gün</span>, Pzt → Cmt
            </span>
          ),
          weeklyHours: '45 Saat',
          actions: (
            <button key="details-6" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
      ]
    
  if(isLoading){
    return <div>Yükleniyor...</div>
  }
  console.log(data.results);
      
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