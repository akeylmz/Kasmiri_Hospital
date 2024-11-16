import React from 'react';
import TableComp from '../../UI/TableComp';
import { motion } from 'framer-motion';
import { useGetStockOrdersQuery } from '../../store/patient2';

const StockOrder = () => {

    
    const {data} = useGetStockOrdersQuery()
    console.log(data);
    

    const thead = [
        { name: 'ÜRÜN', sortable: true },
        { name: 'ALINAN ADET/MİKTAR', sortable: true },
        { name: 'ÜRETİM TARİHİ', sortable: true },
        { name: 'SKT', sortable: true },
        { name: 'POZİSYON', sortable: true },
        { name: 'DURUM', sortable: false, width: 100 }
    ];

    const tbody = [
        {
            productName: '%5 DEKSTROZ 500CC',
            quantity: '20 Adet',
            productionDate: '16.05.2023',
            expiryDate: '01.03.2026',
            position: 'TOPRAK ECZA',
            status: <span className="status waiting">Bekliyor</span>
        },
        {
            productName: 'Adrenalin 05mg (Osel) amp',
            quantity: '163 Ampul',
            productionDate: '09.05.2024',
            expiryDate: '30.01.2028',
            position: 'TOPRAK ECZA',
            status: <span className="status processing">İşlemde</span>
        },
        {
            productName: 'Adrenalin 1mg 10 Ampul',
            quantity: '46 Ampul',
            productionDate: '30.05.2024',
            expiryDate: '30.12.2027',
            position: 'TOPRAK ECZA',
            status: <span className="status successful">Başarılı</span>
        },
        {
            productName: 'Akineton 5mg 5 Amp',
            quantity: '7 Ampul',
            productionDate: '-',
            expiryDate: '30.03.2025',
            position: '-',
            status: <span className="status successful">Başarılı</span>
        },
        {
            productName: 'Amidovin IV 150mg 6 Amp',
            quantity: '30 Ampul',
            productionDate: '28.05.2025',
            expiryDate: '30.10.2025',
            position: 'TAYFUNTAY',
            status: <span className="status successful">Başarılı</span>
        },
        {
            productName: 'Artimol %2 Ampul',
            quantity: '111 Ampul',
            productionDate: '29.05.2024',
            expiryDate: '20.12.2026',
            position: 'TOPRAK ECZA',
            status: <span className="status processing">İşlemde</span>
        },
        {
            productName: 'Arnica 75gr Krem',
            quantity: '61 Adet',
            productionDate: '07.07.2023',
            expiryDate: '01.06.2025',
            position: 'VİTAMİNSAN',
            status: <span className="status red">Red</span>
        },
        {
            productName: 'Altopin Sulfat 1mg Amp. Osell',
            quantity: '30 Ampul',
            productionDate: '28.05.2024',
            expiryDate: '31.10.2025',
            position: 'UNİVERSAL',
            status: <span className="status red">Red</span>
        }
    ];


  return (
    <motion.div 
        initial={{opacity:0}}   
        animate={{opacity:1}}
        className="w-[95%] h-[99%]">
        <TableComp
            thead={thead}
            tbody={tbody.map(row => [
                row.productName,
                row.quantity,
                row.productionDate,
                row.expiryDate,
                row.position,
                row.status
            ])}
            searchable={true}
            tableTitle={"SATIN ALMA TALEPLERİ"}   
            modal={"stockOrder"}        
        />
    </motion.div>
  )
}

export default StockOrder