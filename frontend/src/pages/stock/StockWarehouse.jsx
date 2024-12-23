import React, { useState } from 'react';
import TableComp2 from '../../UI/TableComp2';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useGetAllStocksQuery, useGetWarehouseQuery } from '../../store/patient2';
import { createModal } from '../../components/Utils/Modal';
import { formatDateToShow } from '../../components/Utils/DateFormat';
import Loading from '../../components/tools/Loading';

const StockWarehouse = () => {
    const { t } = useTranslation()
    const [ activeWarehouse, setActiveWarehouse ] = useState(1)

    const thead = [
        { name: "none"},
        { name: t("PRODUCT"), sortable: true },
        { name: t("QUANTITY PURCHASED"), sortable: true },
        { name: t("MANUFACTURING DATE"), sortable: true },
        { name: t("EXPIRY DATE"), sortable: true },
        // { name: t("POSITION"), sortable: true },
        { name: t("AVAILABLE"), sortable: true },
    ]

    const { data, error, isLoading } = useGetAllStocksQuery({ page: 1, stock_warehouse: activeWarehouse })
    const { data: warehouses, error: wareError, isloading: wareLoading} = useGetWarehouseQuery() 
    //console.log(data);
    //console.log(warehouses);
    
    if(isLoading || wareLoading){
        return <Loading />
    }if(!data || !warehouses){
        return <div>Hata Oluştu...</div>
    }

    return (
        <div className="flex h-full items-center pb-4">
            {/* Sol Menü */}
            <div className="w-1/6 max-w-[200px] bg-cyan-600 h-full flex flex-col p-4 rounded-3xl mr-3 ">
                <h2 className="text-white w-full text-center text-lg pt-2 mb-4">
                    DEPOLAR 
                    {/* <button onClick={()=> createModal("warehouse-modal")} type='button' className='border-2 text-xl border-white rounded-full w-8 h-8 ml-4'>+</button> */}
                </h2>
                <ul className="stock-list relative text-white space-y-2 border-t border-slate-300 pt-5 overflow-y-auto">
                    {warehouses.results && warehouses.results.map((item) => (
                        <li 
                            key={item.id} 
                            className={`${activeWarehouse === item.id ? "bg-cyan-500 hover:!bg-cyan-500" : ""}`} 
                            onClick={()=>setActiveWarehouse(item.id)}
                        >
                            {item.wh_name}
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
                    tbody={data.results && data.results.map(row => [
                        <button type='button' onClick={()=> createModal("tranfer-product", row)}>{row.stock_name}</button>,
                        row.stock_buyed,
                        formatDateToShow(row.stock_ut),
                        formatDateToShow(row.stock_skt),
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
