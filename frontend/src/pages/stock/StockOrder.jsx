import React, { useState } from 'react';
import TableComp2 from '../../UI/TableComp2';
import { motion } from 'framer-motion';
import { useGetStockOrdersQuery } from '../../store/patient2';
import { formatDateToShow } from '../../components/Utils/DateFormat';
import { ImBoxRemove } from "react-icons/im";
import { createModal } from '../../components/Utils/Modal';
import { useTranslation } from 'react-i18next';
import Loading from '../../components/tools/Loading';

const StockOrder = () => {
    const { t } = useTranslation()

    const [ activePage, setActivePage] = useState(1)
    const {data, isLoading} = useGetStockOrdersQuery(activePage)
    //console.log(data);
    

    const thead = [
        // { name: '', sortable: false, width: 30 },
        { name: t("PRODUCT"), sortable: true },
        { name: t("QUANTITY PURCHASED"), sortable: true },
        { name: t("DATE"), sortable: true },
        { name: t("WAREHOUSE"), sortable: true },
        { name: t("POSITION"), sortable: true },
        { name: t("PRODUCT GROUP"), sortable: true },
        { name: t("STATUS"), sortable: false, width: 120 }
    ];

    
    if(isLoading){
        return <Loading />
      }

  return (
    <motion.div 
        initial={{opacity:0}}   
        animate={{opacity:1}}
        className="w-full h-[99%]">
        <TableComp2
            thead={thead}
            tbody={data.results.map(order => [
                // <button ><ImBoxRemove size={20} color='#0093ad' /></button>,
                order?.order_name || "",
                order?.order_number || "",
                order?.order_startdate ? formatDateToShow(order.order_startdate) : "",
                order?.order_wharehouse || "",
                order?.order_pozition || "",
                order?.order_group || "",
                <button      
                disabled={order?.order_stuation === "Tamamlandı"}              
                    onClick={()=>{
                        createModal("stock", order.id)
                    }}
                    className={` text-white px-2 py-1 rounded-lg 
                        ${order?.order_stuation === "Bekliyor" && "bg-yellow-600"}
                        ${order?.order_stuation === "Tamamlandı" && "bg-green-600"}
                    `}
                >
                    {order?.order_stuation}
                </button>
            ])}
            searchable={true}
            tableTitle={"SATIN ALMA TALEPLERİ"}   
            modal={"stockOrder"} 
            page={data.count}  
            activePage={activePage} 
            setActivePage={setActivePage}     
        />
    </motion.div>
  )
}

export default StockOrder