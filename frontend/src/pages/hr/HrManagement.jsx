import React, { useState } from 'react'
import TableComp2 from '../../UI/TableComp2';
import { useNavigate } from 'react-router-dom';
import { createModal } from '../../components/Utils/Modal';
import { useGetAllWorkerQuery } from '../../store/patient2';
import { processDays } from '../../components/Utils/processDays';
import { capitalizeWords } from '../../components/Utils/capitalizeWords';
import { useTranslation } from 'react-i18next';

const HrManagement = () => {
  const { t } = useTranslation()

  const [ activePage, setActivePage] = useState(1)
  const { data, isLoading, error } = useGetAllWorkerQuery({page: activePage})
  console.log(data);
  
  const tableData = [
      {
        name: "Seçkin SEYMEN",
        gorevYeri: (
          <button              
            onClick={() => createModal("worker-check")}
          >
            Vezne - Hasta Karşılama
          </button>
        ),
        yoneticiler: ['Seçkin SEYMEN', 'Arslan ŞAHİN', 'Busenaz EKİCİ'],
        mesaiHaftasi: 'Pzts. - Pz.',
        sonKontrol: 'Seçkin SEYMEN',
        kontrolDurumu: 'Kontrol Edilmedi',
      },
      {
        name: "Arslan ŞAHİN",
        gorevYeri: (
          <button      
            onClick={() => createModal("worker-check")}        
            // onClick={() => navigate("/KPI-checklist")}
          >
            Ameliyathane Hemşiresi
          </button>
        ),
        yoneticiler: ['Arslan ŞAHİN', 'Sude KAZAN'],
        mesaiHaftasi: 'Pzts. - Cmts.',
        sonKontrol: 'Arslan ŞAHİN',
        kontrolDurumu: '9 Eylül 19:41',
      },
      {          
        name: "Ali KAYA",
        gorevYeri: (
          <button              
          onClick={() => createModal("worker-check")}
          >
            Hasta Bakımı
          </button>
        ),
        yoneticiler: ['Elif DOĞAN', 'Ali KAYA'],
        mesaiHaftasi: 'Salı - Pazar',
        sonKontrol: 'Elif DOĞAN',
        kontrolDurumu: '9 Eylül 18:32',
      },
    ];
    const thead = [
      { name: t("STAFF"), sortable: true },
      { name: t("Workplace"), sortable: true },
      { name: t("Work Week"), sortable: true },
      { name: t("Final Check"), sortable: true },
    ]
  if(isLoading){
    return <div>Yükleniyor...</div>
  }
    
  return (
    <div>
      <TableComp2
        thead={thead}
        tbody={data.results.map((worker) => [
          <div className='flex items-center gap-x-2'>
            <img src={worker.worker_image} alt={`${worker.first_name} avatar`} className="w-10 h-10 rounded-full" />
            {capitalizeWords(worker.first_name + " " + worker.last_name)}
          </div>,
          <button              
            onClick={() => createModal("worker-check")}
          >
            {worker.duty_place}
          </button>,          
          (() => {
            if(worker.working_hours[0]){
              const processResult = processDays(worker.working_hours[0].working_days)
              const [dayCount, ...rest] = processResult.split(", ")
              const dayDetails = rest.join(", ")
              return (
                  <span>
                      <span className="text-cyan-500 font-semibold mr-1">{dayCount},</span>
                      <span>{dayDetails}</span>
                  </span>
              )
            }            
        })(),
         <p>sonkontrol</p>,
        ])}
        searchable={true}
        tableTitle={t("Duty Check")}
        modal={"worker-quest"}
      />
    </div>
  )
}

export default HrManagement


  // <div className='flex !justify-between w-full'>
            //       <p key="sonKontrol" className="text-green-500 font-semibold w-2/4 ">{item.sonKontrol}</p> 
            //       <p className='w-2/4 text-cyan-500 font-semibold'>{item.kontrolDurumu}</p>
            // </div>
          //   item.kontrolDurumu === 'Kontrol Edilmedi' && (
          //     <button
          //       key="kontrolEt"
          //       className="h-8 px-4 flex items-center rounded bg-orange-500 text-white"
          //     >
          //       Kontrol Et
          //     </button>
          //   )