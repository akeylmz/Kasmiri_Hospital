import React from 'react'
import TopMenu from '../../UI/TopMenu';
import { Outlet } from 'react-router-dom';

const HrLayout = () => {

    const tabs = [
        { label: 'HİYERARŞİ', active: true, url: 'hierarchy' },
        { label: 'ÇALIŞAN', active: false, url: 'personnel',submenu: [
            { label: 'İzin Yönetimi', active: true, url: 'leave-management' },
            { label: 'Çalışma Saatleri', active: false, url: 'working-hours' },
        ] },
        { label: 'İŞE ALIM', active: false, url: 'recruitment' },   
        { label: 'KPI', active: false, url: 'KPI-quests',submenu: [
            { label: 'Çalışan', active: true, url: 'KPI-quests' },
            { label: 'Yönetim', active: false, url: 'KPI-management' },
        ] },    
      ];

  return (
    <div className='flex flex-col w-full h-full items-center justify-evenly bg-slate-100'>
        <div className='w-[95%] h-[14%] flex '>
            <TopMenu tabs={tabs} submenu={false} />
        </div>
        <div className='w-[95%] h-[82%]'>
            <Outlet />
        </div>
    </div>
  )
}

export default HrLayout