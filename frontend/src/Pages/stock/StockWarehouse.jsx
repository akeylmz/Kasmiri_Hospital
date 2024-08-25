import React from 'react';
import TableComp from '../../UI/TableComp';
import { motion } from 'framer-motion';

const StockWarehouse = () => {

    const thead = [
        { name: 'ÜRÜN', sortable: true },
        { name: 'ALINAN ADET/MİKTAR', sortable: true },
        { name: 'ÜRETİM TARİHİ', sortable: true },
        { name: 'SKT', sortable: true },
        { name: 'POZİSYON', sortable: true },
        { name: 'MEVCUT', sortable: true },
    ];

    const tbody = [
        {
            productName: '%5 DEKSTROZ 500CC',
            quantity: '20 Adet',
            productionDate: '16.05.2023',
            expiryDate: '01.03.2026',
            position: 'TOPRAK ECZA',
            stock: '20 Ampul'
        },
        {
            productName: 'Adrenalin 05mg (Osel) amp',
            quantity: '163 Ampul',
            productionDate: '09.05.2024',
            expiryDate: '30.01.2028',
            position: 'TOPRAK ECZA',
            stock: '40 Ampul'
        },
        {
            productName: 'Adrenalin 1mg 10 Ampul',
            quantity: '46 Ampul',
            productionDate: '30.05.2024',
            expiryDate: '30.12.2027',
            position: 'TOPRAK ECZA',
            stock: '50 Ampul'
        },
        {
            productName: 'Akineton 5mg 5 Amp',
            quantity: '7 Ampul',
            productionDate: '-',
            expiryDate: '30.03.2025',
            position: '-',
            stock: '-'
        },
        {
            productName: 'Amidovin IV 150mg 6 Amp',
            quantity: '30 Ampul',
            productionDate: '28.05.2025',
            expiryDate: '30.10.2025',
            position: 'TAYFUNTAY',
            stock: '5 Kutu'
        },
        {
            productName: 'Arcolit 20g Flakon',
            quantity: '92 Ampul',
            productionDate: '08.03.2023',
            expiryDate: '31.12.2024',
            position: 'TOPRAK ECZA',
            stock: '50 Kutu'
        },
        {
            productName: 'Artimol %2 Ampul',
            quantity: '111 Ampul',
            productionDate: '29.05.2024',
            expiryDate: '20.12.2026',
            position: 'TOPRAK ECZA',
            stock: '150 (3 Koli)'
        },
        {
            productName: 'Arnica 75gr Krem',
            quantity: '61 Adet',
            productionDate: '07.07.2023',
            expiryDate: '01.06.2025',
            position: 'VİTAMİNSAN',
            stock: '10 Kutu (5)'
        },
        {
            productName: 'Altopin Sulfat 1mg Amp. Osell',
            quantity: '30 Ampul',
            productionDate: '28.05.2024',
            expiryDate: '31.10.2025',
            position: 'UNİVERSAL',
            stock: '20 Kutu (1)'
        },
        {
            productName: 'Altopin Sulfat 1/2mg 10 Amp.',
            quantity: '25 Ampul',
            productionDate: '01.03.2024',
            expiryDate: '31.05.2028',
            position: 'TOPRAK ECZA',
            stock: '30 Ampul'
        },
        {
            productName: 'Bepanthen Ampul',
            quantity: '17 Ampul',
            productionDate: '31.10.2023',
            expiryDate: '31.03.2028',
            position: 'HAZAR İLAÇ',
            stock: '1 Kutu'
        }
    ];

    return (
        <div className="flex h-full items-center pb-4">
            {/* Sol Menü */}
            <div className="w-1/6 max-w-[200px] bg-cyan-600 h-full flex flex-col p-4 rounded-3xl mr-3">
                <h2 className="text-white w-full text-center text-lg pt-2 mb-4">DEPOLAR</h2>
                <ul className="stock-list relative text-white space-y-2 border-t border-slate-300 pt-5">
                    <li>ANA DEPO</li>
                    <li>DEPO 1</li>
                    <li>DEPO 2</li>
                    <li>DEPO 3</li>
                    <li>DEPO 4</li>
                    <li>DEPO 5</li>
                    <li>DEPO 6</li>
                </ul>
            </div>

            {/* Sağdaki Tablo */}
            <motion.div 
                initial={{opacity:0}}   
                animate={{opacity:1}}
                className="w-5/6 min-w-[calc(100%-200px)] h-full ">
                <TableComp
                    thead={thead}
                    tbody={tbody.map(row => [
                        row.productName,
                        row.quantity,
                        row.productionDate,
                        row.expiryDate,
                        row.position,
                        row.stock
                    ])}
                    searchable={true}
                    tableTitle={"SİPARİŞLER"}  
                    modal={'stock'}          
                />
            </motion.div>
        </div>
    );
}

export default StockWarehouse;
