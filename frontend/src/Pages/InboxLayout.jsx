import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/lead/SideBar'

const InboxLayout = () => {
  return (
    <div className='w-full h-full flex border border-gray-300'>
        <SideBar/>
        <Outlet />
    </div>    
  )
}

export default InboxLayout