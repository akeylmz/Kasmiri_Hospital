import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PatientSenssion = () => {

    const  { patients } = useSelector( state => state.patient)
    const {patientId} = useParams()
    console.log(patients);
     

    var patien ;

    patients.forEach(element => {
        if (element.id == patientId) {
            patien = element
        }
    });


  return (
    <div className='bg-gray-200 w-[calc(100%-15%)] h-full flex justify-evenly items-center'>
        <div className='bg-white rounded-xl h-[90%] w-[60%] flex flex-col items-center justify-evenly'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-lg text-gray-500 font-semibold'>Seans</p>
                <p className='text-lg text-gray-700 font-semibold'>{patien.seans}</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-lg text-gray-500 font-semibold'>Gün</p>
                <p className='text-lg text-gray-700 font-semibold'>Pazartesi</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-lg text-gray-500 font-semibold'>Cihaz Adı</p>
                <p className='text-lg text-gray-700 font-semibold'>{patien.cihazAdi}</p>
            </div>
        </div>
    </div>
  )
}

export default PatientSenssion