import React from 'react'
import TableComp from '../../UI/TableComp';

const HrQuests = () => {

  const thead = [
    { name: 'Görev Yeri', sortable: true },
    { name: 'Yöneticiler', sortable: true },
    { name: 'Mesai Haftası', sortable: true },
    { name: '', width: 50 },   
  ];

  const tbody = [
    {
      productName: 'Vezne - Hasta Karşılama',
      stock: 'Seçkin SEYMEN, Arslan ŞAHİN, Busenaz Ekici',
      expiryDate: 'Pzt. - Pz.',
      actions: (
        <button key="details-1" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      productName: 'Ameliyathane Personeli',
      stock: 'Seçkin SEYMEN, Busenaz Ekici',
      expiryDate: 'Pzt. - Cmts.',
      actions: (
        <button key="details-2" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      productName: 'Ameliyathane Hemşiresi',
      stock: 'Arslan Şahin, Sude KAZAN',
      expiryDate: 'Pzt. - Cmts.',
      actions: (
        <button key="details-3" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      productName: 'Anestezi Teknikleri',
      stock: 'Adem AKSU, İdil AKSU',
      expiryDate: 'Pzts. - Cmts.',
      actions: (
        <button key="details-4" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      productName: 'Güzellik Birimi',
      stock: 'Hatice ŞAHİN, Öznur BİLGEÇ',
      expiryDate: 'Pzts. - Cum.',
      actions: (
        <button key="details-5" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      productName: 'canberk',
      stock: 'Hakkı T.SALİM, Hüseyin TABURCU',
      expiryDate: 'Pzts. - Pz.',
      actions: (
        <button key="details-6" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      productName: 'Temizlik Görevlisi',
      stock: 'Seçkin SEYMEN, Hatice SEVİLEN',
      expiryDate: ' Pzts. - Cmts.',
      actions: (
        <button key="details-7" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      productName: 'Laborant',
      stock: 'Selim KAYMAKÇI, Sevgin BİÇİCİ',
      expiryDate: 'Pzts. - Cum.',
      actions: (
        <button key="details-8" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      productName: 'Radyoloji',
      stock: 'Halime ŞAHİN',
      expiryDate: 'Pzts. - Cmts.',
      actions: (
        <button key="details-9" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      productName: 'Öznur',
      stock: 'Seçkin SEYMEN, Arslan ŞAHİN',
      expiryDate: 'Pzts. - Pz.',
      actions: (
        <button key="details-10" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
          &gt;
        </button>
      )
    },
    {
      productName: 'Satın Alma',
      stock: 'Tuğçe TANEM, Arslan ŞAHİN',
      expiryDate: 'Sal. - Cmts.',
      actions: (
        <button key="details-11" className="h-8 px-3 flex items-center justify-center rounded-full bg-cyan-500 text-white text-lg">
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