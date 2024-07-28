import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const SideBar = () => {


    const  { patients } = useSelector( state => state.patient)
    const {patientId} = useParams()

    var patien ;

    patients.forEach(element => {
        if (element.id == patientId) {
            patien = element
        }
    });

  return (
    <div className='h-full w-[15%] border-r shadow-md'>
        <div className='flex flex-col items-center py-8'>
            <img src="/images/profile1.jpg" className='w-[100px] h-[100px] rounded-full object-cover' />
            <span className='pt-3 pb-1 text-gray-700 text-lg font-semibold'>{patien.name} {patien.surname}</span>
            <span className='text-gray-600'>ID: {patien.id}</span>
        </div>
        <ul className='patient-detail-list w-full'>
            <li>
                <Link to="overwiev">GENEL BAKIŞ</Link>
            </li>
            <li>
                <Link to="IDinformation" >KİMLİK & PASAPORT</Link>
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
                <Link to="other">TAHLİL SONUÇLARI</Link>
            </li>
            <li>
                <Link>GEÇMİŞ</Link>
            </li>  
            <li>
                <Link>FOTOĞRAFLAR</Link>
            </li>  
            <li>
                <Link>EPİKRİZ OLUŞTUR</Link>
            </li>  
        </ul>
    </div>
  )
}

export default SideBar