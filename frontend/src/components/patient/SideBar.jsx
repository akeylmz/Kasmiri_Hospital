import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='h-full w-[15%] border-r shadow-md'>
        <div className='flex flex-col items-center py-8'>
            <img src="/images/profile1.jpg" className='w-[100px] h-[100px] rounded-full object-cover' />
            <span className='pt-3 pb-1 text-gray-700 text-lg font-semibold'>Mehmet Enes Doğan</span>
            <span className='text-gray-600'>ID: 65476423</span>
        </div>
        <ul className='patient-detail-list w-full'>
            <li>
                <Link to="overwiev">GENEL BAKIŞ</Link>
            </li>
            <li>
                <Link to="IDinformation" >NUFUS BİLGİLERİ</Link>
            </li>                      
            <li>
                <Link to="sessionInformation">SEANS BİLGİLERİ</Link>
            </li>            
            <li>
                <Link to="files">DOSYALAR</Link>
            </li>
            <li>
                <Link to="bill">FATURALAR</Link>
            </li>
            <li>
                <Link to="other">DİĞER</Link>
            </li>
            <li>
                <Link>GEÇMİŞ</Link>
            </li>  
        </ul>
    </div>
  )
}

export default SideBar