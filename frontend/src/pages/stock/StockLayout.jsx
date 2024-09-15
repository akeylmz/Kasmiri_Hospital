import React from 'react'
import { Outlet } from 'react-router-dom'
import TopMenu from '../../UI/TopMenu';

const StockLayout = () => {

    const tabs = [
        { label: 'GENEL BAKIŞ', active: true, url: 'overwiev' },
        { label: 'ÜRÜNLER', active: false, url: 'products' },
        { label: 'DEPOLAR', active: false, url: 'warehouse' },
        { label: 'SİPARİŞLER', active: false, url: 'orders' },
        { label: 'İSTATİSTİK', active: false, url: 'statistics' },       
      ];

  return (
    <div className='flex flex-col w-full h-full items-center justify-evenly bg-slate-100'>
        <div className='w-[95%] h-[14%] flex items-center'>
            <TopMenu tabs={tabs} submenu={false} />
        </div>
        <div className='w-[95%] h-[82%]'>
            <Outlet />
        </div>
    </div>
  )
}

export default StockLayout