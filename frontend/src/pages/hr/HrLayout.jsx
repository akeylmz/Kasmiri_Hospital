import React from 'react'
import TopMenu from '../../UI/TopMenu';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HrLayout = () => {
    const { t } = useTranslation()

    const tabs = [
        { label: t("HIERARCHY"), active: true, url: 'hierarchy' },
        { label: t("EMPLOYEE"), active: false, url: 'personnel',submenu: [
            { label: t("Leave Management"), active: true, url: 'leave-management' },
            { label: t("Working Hours"), active: false, url: 'working-hours' },
        ] },
        { label: t("RECRUITMENT"), active: false, url: 'recruitment' },   
        { label: 'KPI', active: false, url: 'KPI-quests',submenu: [
            { label: t("Employee"), active: true, url: 'KPI-quests' },
            { label: t("Management"), active: false, url: 'KPI-management' },
        ] },    
      ];

  return (
    <div className='flex flex-col w-full h-full items-center justify-evenly bg-slate-100'>
        <div className='w-[95%] h-[14%] flex '>
            <TopMenu tabs={tabs} submenu={false} basePath={"/human-resources"} />
        </div>
        <div className='w-[95%] h-[82%]'>
            <Outlet />
        </div>
    </div>
  )
}

export default HrLayout