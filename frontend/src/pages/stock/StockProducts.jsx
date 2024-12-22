import React, { useState } from 'react'
import TableComp2 from '../../UI/TableComp2'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'
import { useGetAllStocksQuery } from '../../store/patient2'
import { formatDateToShow } from '../../components/Utils/DateFormat';
import Loading from '../../components/tools/Loading';

const StockProducts = () => {

  const { t } = useTranslation()

  const [ activePage, setActivePage] = useState(1)
  const { data, isLoading, error } = useGetAllStocksQuery({page:activePage, type:"skt"})
  //console.log(data);
  
    const thead = [
        { name: t("Product Name"), sortable: true },
        { name: t("Stock"), sortable: true },
        { name: t("Expiry Date"), sortable: true },
        { name: t("Product Group"), sortable: true },
    ]

  if(isLoading){
    return <Loading />
  }
  if(error){
    return <div>Bir Hata Oluştu...</div>
  }

  return (
    <motion.div 
        initial={{opacity:0}}   
        animate={{opacity:1}}
        className="w-[98%] h-[99%] flex items-center justify-center">
        {!isLoading && data.results && <TableComp2
            thead={thead}
            tbody={data.results.map(row => [
            row.stock_name,
            row.total_haved, 
            formatDateToShow(row.stock_skt),
            row.stcok_group,
            ])}
            searchable={true}
            tableTitle= {t("PRODUCTS")} 
            page={data.count}  
            activePage={activePage} 
            setActivePage={setActivePage}     
        />}
    </motion.div>
  )
}

export default StockProducts