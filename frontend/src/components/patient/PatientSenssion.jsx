import React from 'react'

const PatientSenssion = () => {
  return (
    <div className='bg-gray-200 w-[calc(100%-15%)] h-full flex justify-evenly items-center'>
        <div className='bg-white rounded-xl h-[90%] w-[60%] flex flex-col items-center justify-evenly'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-lg text-gray-500 font-semibold'>Seans</p>
                <p className='text-lg text-gray-700 font-semibold'>Lorem ipsum dolor sit amet</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-lg text-gray-500 font-semibold'>Gün</p>
                <p className='text-lg text-gray-700 font-semibold'>Pazartesi</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-lg text-gray-500 font-semibold'>Cihaz Adı</p>
                <p className='text-lg text-gray-700 font-semibold'>Lorem ipsum dolor</p>
            </div>
        </div>
    </div>
  )
}

export default PatientSenssion