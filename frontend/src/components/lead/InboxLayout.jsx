import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import SideBar from './SideBar'
import { IoLocationSharp } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import ProtectedRoute from '../../ProtectedRoute'

const InboxLayout = () => {

  
 

  return (
    <ProtectedRoute allowedRoles={["admin", "leedgroup"]}>
    <div className='w-full h-full flex border border-gray-300 bg-slate-100 '>
        <SideBar />
        <Outlet />       
    </div>    
    </ProtectedRoute>
  )
}

export default InboxLayout