import React from 'react'
import TableComp from '../../UI/TableComp';
import { useNavigate } from 'react-router-dom';

const HrQuests = () => {

  const navigate = useNavigate()

  const thead = [
    { name: 'Görevli', sortable: true },
    { name: 'Görev Yeri', sortable: true },
    { name: 'Yöneticiler', sortable: true },
    { name: 'Mesai Haftası', sortable: true },
    { name: '', width: 50 },   
  ];

  const tbody = [
    {
      name: "Seçkin SEYMEN",
      productName: 'Vezne - Hasta Karşılama',
      stock: 'Seçkin SEYMEN, Arslan ŞAHİN, Busenaz Ekici',
      expiryDate: 'Pzt. - Pz.',
      actions: (
        <button
        onClick={()=> navigate("/human-resources/KPI-detail")}
         key="details-1" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      name: "Busenaz EKİCİ",
      productName: 'Ameliyathane Personeli',
      stock: 'Seçkin SEYMEN, Busenaz Ekici',
      expiryDate: 'Pzt. - Cmts.',
      actions: (
        <button onClick={()=> navigate("/human-resources/KPI-detail")} key="details-2" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      name: "Sude KAZAN",
      productName: 'Ameliyathane Hemşiresi',
      stock: 'Arslan Şahin, Sude KAZAN',
      expiryDate: 'Pzt. - Cmts.',
      actions: (
        <button onClick={()=> navigate("/human-resources/KPI-detail")} key="details-3" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      name: "İdik AKSU",
      productName: 'Anestezi Teknikleri',
      stock: 'Adem AKSU, İdil AKSU',
      expiryDate: 'Pzts. - Cmts.',
      actions: (
        <button onClick={()=> navigate("/human-resources/KPI-detail")} key="details-4" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      name: "Hatice SAHİN",
      productName: 'Güzellik Birimi',
      stock: 'Hatice ŞAHİN, Öznur BİLGEÇ',
      expiryDate: 'Pzts. - Cum.',
      actions: (
        <button onClick={()=> navigate("/human-resources/KPI-detail")} key="details-5" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      name: "Seçkin SEYMEN",
      productName: 'canberk',
      stock: 'Hakkı T.SALİM, Hüseyin TABURCU',
      expiryDate: 'Pzts. - Pz.',
      actions: (
        <button onClick={()=> navigate("/human-resources/KPI-detail")} key="details-6" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      name: "Hatice SEVİLEN",
      productName: 'Temizlik Görevlisi',
      stock: 'Seçkin SEYMEN, Hatice SEVİLEN',
      expiryDate: ' Pzts. - Cmts.',
      actions: (
        <button onClick={()=> navigate("/human-resources/KPI-detail")} key="details-7" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      name: "Seçkin SEYMEN",
      productName: 'Laborant',
      stock: 'Selim KAYMAKÇI, Sevgin BİÇİCİ',
      expiryDate: 'Pzts. - Cum.',
      actions: (
        <button onClick={()=> navigate("/human-resources/KPI-detail")} key="details-8" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      name: "Halime ŞAHİN",
      productName: 'Radyoloji',
      stock: 'Halime ŞAHİN',
      expiryDate: 'Pzts. - Cmts.',
      actions: (
        <button onClick={()=> navigate("/human-resources/KPI-detail")} key="details-9" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      name: "Seçkin SEYMEN",
      productName: 'Öznur',
      stock: 'Seçkin SEYMEN, Arslan ŞAHİN',
      expiryDate: 'Pzts. - Pz.',
      actions: (
        <button onClick={()=> navigate("/human-resources/KPI-detail")} key="details-10" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      name: "Arslan ŞAHİN",
      productName: 'Satın Alma',
      stock: 'Tuğçe TANEM, Arslan ŞAHİN',
      expiryDate: 'Sal. - Cmts.',
      actions: (
        <button onClick={()=> navigate("/human-resources/KPI-detail")} key="details-11" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
  ];
  
  return (
    <div>
      
    <TableComp
            thead={thead}
            tbody={tbody.map(row => [
            row.name,
            row.productName,
            row.stock,
            row.expiryDate,
            row.actions
            ])}
            searchable={true}
            tableTitle= {"GÖREVLER"}        
        /> 
    </div>
  )
}

export default HrQuests