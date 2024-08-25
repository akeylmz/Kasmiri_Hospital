import React from 'react'
import TableComp from '../../UI/TableComp';
import { Clock4 } from 'lucide-react';
import { motion } from 'framer-motion';

const HrWorkingHours = () => {

    const thead = [
        { name: 'Adı Soyadı', sortable: true },
        { name: 'İş Başı', sortable: true },
        { name: 'Paydos', sortable: true },
        { name: 'Çalışma Günleri', sortable: true },
        { name: 'Haftalık Çalışma', sortable: true },
        { name: '', width: 80 },
      ];
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
      ];
      
  return (
    <motion.div
        initial={{opacity:0}}   
        animate={{opacity:1}}
        className="w-full">
        <TableComp
            thead={thead}
            tbody={tbody.map(row => [
            row.fullName,
            row.startTime,
            row.endTime,
            row.workDays,
            row.weeklyHours,
            row.actions
            ])}
            searchable={true}
            tableTitle={"ÇALIŞMA SAATLERİ"}
        />
    </motion.div>
  )
}

export default HrWorkingHours