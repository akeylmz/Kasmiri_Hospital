import React from 'react'
import TableComp from '../../UI/TableComp';
import { useNavigate } from 'react-router-dom';

const HrManagement = () => {

   const navigate = useNavigate()

    const tableData = [
        {
          gorevYeri: (
            <button              
              onClick={() => navigate("/KPI-checklist")}
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
          gorevYeri: (
            <button              
              onClick={() => navigate("/KPI-checklist")}
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
          gorevYeri: (
            <button              
              onClick={() => navigate("/KPI-checklist")}
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
        { name: 'Görev Yeri', sortable: true },
        { name: 'Yöneticiler', sortable: true },
        { name: 'Mesai Haftası', sortable: true },
        { name: 'Son Kontrol', sortable: true },
        { name: 'Kontrol Durumu', sortable: true },
        { name: 'Kontrol Tarihi', sortable: true },
      ];
      
  return (
    <div>
        <TableComp
  thead={[
    { name: 'Görev Yeri', sortable: true },
    { name: 'Yöneticiler', sortable: true },
    { name: 'Mesai Haftası', sortable: true },
    { name: 'Son Kontrol', sortable: true },
    { name: 'none' }, // Gizli sütunlar için
  ]}
  tbody={tableData.map((item) => [
    item.gorevYeri,
    item.yoneticiler.join(", "), // Yöneticiler virgülle ayrılmış olarak gelecek
    item.mesaiHaftasi,
    [
      <div className='flex !justify-between w-full'>
            <p key="sonKontrol" className="text-green-500 font-semibold w-2/4 ">{item.sonKontrol}</p> 
            <p className='w-2/4 text-cyan-500 font-semibold'>{item.kontrolDurumu}</p>
      </div>
    //   item.kontrolDurumu === 'Kontrol Edilmedi' && (
    //     <button
    //       key="kontrolEt"
    //       className="h-8 px-4 flex items-center rounded bg-orange-500 text-white"
    //     >
    //       Kontrol Et
    //     </button>
    //   )
    ],
    item.id,
  ])}
  searchable={true}
  tableTitle="Görev Kontrol"
/>
    </div>
  )
}

export default HrManagement