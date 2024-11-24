import React from 'react'
import { motion } from 'framer-motion';
import TableComp2 from '../../UI/TableComp2';
import { useTranslation } from 'react-i18next';

const Billing = () => {
  const { t } = useTranslation()

    const tbody = [
        {
          billNo: "3622544745",
          company: 'Firma Adı 1',
          billDate: '16.05.2023',
          lastPayDate: '16.06.2023',
          total: '1000₺',
          actions: (
            <button key="details-1" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
        {
          billNo: "4622544746",
          company: 'Firma Adı 2',
          billDate: '10.05.2023',
          lastPayDate: '10.06.2023',
          total: '1500₺',
          actions: (
            <button key="details-2" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
        {
          billNo: "5622544747",
          company: 'Firma Adı 3',
          billDate: '12.05.2023',
          lastPayDate: '12.06.2023',
          total: '2000₺',
          actions: (
            <button key="details-3" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
        {
          billNo: "6622544748",
          company: 'Firma Adı 4',
          billDate: '18.05.2023',
          lastPayDate: '18.06.2023',
          total: '2500₺',
          actions: (
            <button key="details-4" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
        {
          billNo: "7622544749",
          company: 'Firma Adı 5',
          billDate: '20.05.2023',
          lastPayDate: '20.06.2023',
          total: '3000₺',
          actions: (
            <button key="details-5" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
        {
          billNo: "8622544750",
          company: 'Firma Adı 6',
          billDate: '22.05.2023',
          lastPayDate: '22.06.2023',
          total: '3500₺',
          actions: (
            <button key="details-6" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
        {
          billNo: "9622544751",
          company: 'Firma Adı 7',
          billDate: '24.05.2023',
          lastPayDate: '24.06.2023',
          total: '4000₺',
          actions: (
            <button key="details-7" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
        {
          billNo: "10622544752",
          company: 'Firma Adı 8',
          billDate: '26.05.2023',
          lastPayDate: '26.06.2023',
          total: '4500₺',
          actions: (
            <button key="details-8" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
        {
          billNo: "11622544753",
          company: 'Firma Adı 9',
          billDate: '28.05.2023',
          lastPayDate: '28.06.2023',
          total: '5000₺',
          actions: (
            <button key="details-9" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
        {
          billNo: "12622544754",
          company: 'Firma Adı 10',
          billDate: '30.05.2023',
          lastPayDate: '30.06.2023',
          total: '5500₺',
          actions: (
            <button key="details-10" className="h-8 px-4 flex items-center justify-center rounded bg-cyan-500 text-white">
              &gt;
            </button>
          )
        },
      ];
      

    const thead = [
        { name: t("Invoice Number"), sortable: true },
        { name: t("Company"), sortable: true },
        { name: t("Invoice Date") },
        { name: t("Due Date"), sortable: true },
        { name: t("Amount"), sortable: true },
        { name: t("Detail"), width: 80 }, // İşlemler sütunu için genişlik
    ];

  return (
    <motion.div
        initial={{ opacity: 0 }}   
        animate={{ opacity: 1 }}
        className='w-full h-full flex flex-col items-center justify-evenly'
    >
        <TableComp2
            thead={thead}
            tbody={tbody.map(row => [
                row.billNo, 
                row.company, 
                row.billDate, 
                row.lastPayDate, 
                row.total, 
                row.actions
            ])}
            searchable={true}
            tableTitle= {t("INVOICE LIST")}
            billing={true}
            modal={"invoice-modal"}
        />  
    </motion.div>
  )
}

export default Billing;
