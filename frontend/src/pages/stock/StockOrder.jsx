import React from 'react';
import TableComp2 from '../../UI/TableComp2';
import { motion } from 'framer-motion';
import { useGetStockOrdersQuery } from '../../store/patient2';
import { formatDateToShow } from '../../components/Utils/DateFormat';
import { ImBoxRemove } from "react-icons/im";
import { createModal } from '../../components/Utils/Modal';

const StockOrder = () => {

    
    const {data, isLoading} = useGetStockOrdersQuery()
    console.log(data);
    

    const thead = [
        // { name: '', sortable: false, width: 30 },
        { name: 'ÜRÜN', sortable: true },
        { name: 'ALINAN ADET/MİKTAR', sortable: true },
        { name: 'TARİH', sortable: true },
        { name: 'DEPO', sortable: true },
        { name: 'POZİSYON', sortable: true },
        { name: 'ÜRÜN GRUBU', sortable: true },
        { name: 'DURUM', sortable: false, width: 120 }
    ];

    
    if(isLoading) {
        return <div>Yükleniyor...</div>
    }

  return (
    <motion.div 
        initial={{opacity:0}}   
        animate={{opacity:1}}
        className="w-full h-[99%]">
        <TableComp2
            thead={thead}
            tbody={data.map(order => [
                // <button ><ImBoxRemove size={20} color='#0093ad' /></button>,
                order?.order_name || "",
                order?.order_number || "",
                order?.order_startdate ? formatDateToShow(order.order_startdate) : "",
                order?.order_wharehouse || "",
                order?.order_pozition || "",
                order?.order_group || "",
                <button
                    onClick={()=>{
                        createModal("stock", order.id)
                    }}
                    className='bg-cyan-600 text-white px-2 py-1 rounded-lg hover:bg-cyan-700'
                >
                    Tamamla
                </button>
            ])}
            searchable={true}
            tableTitle={"SATIN ALMA TALEPLERİ"}   
            modal={"stockOrder"}        
        />
    </motion.div>
  )
}

export default StockOrder