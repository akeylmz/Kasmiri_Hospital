import React, { useState } from 'react';
import TableComp2 from '../../UI/TableComp2';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useGetAllStocksQuery } from '../../store/patient2';
import { createModal } from '../../components/Utils/Modal';

const StockWarehouse = () => {
    const { t } = useTranslation()
    const [ activeWarehouse, setActiveWarehouse ] = useState("ANADEPO")

    const { data, error, isLoading } = useGetAllStocksQuery({
        page: 1,
        stock_wharehouse: activeWarehouse
    })
    console.log(data);
    

    const thead = [
        { name: "none"},
        { name: t("PRODUCT"), sortable: true },
        { name: t("QUANTITY PURCHASED"), sortable: true },
        { name: t("MANUFACTURING DATE"), sortable: true },
        { name: t("EXPIRY DATE"), sortable: true },
        { name: t("POSITION"), sortable: true },
        { name: t("AVAILABLE"), sortable: true },
    ]
    const [warehouses, setWarehouses] = useState([
        {id: 1, name: "ANADEPO"},
        {id: 2, name: "DEPO-1"},
        {id: 3, name: "DEPO-2"},
        {id: 4, name: "DEPO-3"},
        {id: 5, name: "DEPO-4"},
        {id: 6, name: "DEPO-5"},
        {id: 7, name: "DEPO-6"},
    ])
    if(isLoading){
        return <div>Yükleniyor...</div>
    }

    return (
        <div className="flex h-full items-center pb-4">
            {/* Sol Menü */}
            <div className="w-1/6 max-w-[200px] bg-cyan-600 h-full flex flex-col p-4 rounded-3xl mr-3 ">
                <h2 className="text-white w-full text-center text-lg pt-2 mb-4">
                    DEPOLAR 
                    <button onClick={()=> createModal("warehouse-modal")} type='button' className='border-2 text-xl border-white rounded-full w-8 h-8 ml-4'>+</button>
                </h2>
                <ul className="stock-list relative text-white space-y-2 border-t border-slate-300 pt-5 overflow-y-auto">
                    {warehouses.map((item) => (
                        <li 
                            key={item.id} 
                            className={`${activeWarehouse === item.name ? "bg-cyan-500 hover:!bg-cyan-500" : ""}`} 
                            onClick={()=>setActiveWarehouse(item.name)}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sağdaki Tablo */}
            <motion.div 
                initial={{opacity:0}}   
                animate={{opacity:1}}
                className="w-5/6 min-w-[calc(100%-200px)] h-full ">
                <TableComp2
                    thead={thead}
                    tbody={data.results.map(row => [
                        <button type='button' onClick={()=> createModal("tranfer-product", row)}>{row.stock_name}</button>,
                        row.stock_buyed,
                        row.stock_ut,
                        row.stock_skt,
                        row.stock_pozition,
                        row.stock_haved
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
