import React from 'react'

const PatientFiles = () => {
  return (
    <div className='bg-gray-200 w-[calc(100%-15%)] h-full flex justify-evenly items-center'>
        <div className='bg-white rounded-xl h-[90%] w-[90%] flex flex-col items-center p-3 gap-1'>
            <div className='w-full h-[60px] bg-blue-100 flex items-center justify-between px-5 rounded-lg hover:bg-blue-50'>
                <p className='font-semibold w-[14%]'>Yeni Metin Belgesi.txt</p>
                <p className='font-semibold text-gray-700 text-center'>11.09.2023</p>
                <p className='text-gray-600 w-[8%]'>16.3kb</p>
            </div>

            <div className='w-full h-[60px] bg-blue-100 flex items-center justify-between px-5 rounded-lg hover:bg-blue-50'>
                <p className='font-semibold w-[14%]'>Faturalar.pdf</p>
                <p className='font-semibold text-gray-700 text-center'>03.011.2023</p>
                <p className='text-gray-600 w-[8%]'>38kb</p>
            </div>

            <div className='w-full h-[60px] bg-blue-100 flex items-center justify-between px-5 rounded-lg hover:bg-blue-50'>
                <p className='font-semibold w-[14%]'>Ödenemeler.xlsx</p>
                <p className='font-semibold text-gray-700 text-center'>26.05.2024</p>
                <p className='text-gray-600 w-[8%]'>55.2kb</p>
            </div>

            <div className='w-full h-[60px] bg-blue-100 flex items-center justify-between px-5 rounded-lg hover:bg-blue-50'>
                <p className='font-semibold w-[14%]'>Notlar.txt</p>
                <p className='font-semibold text-gray-700 text-center'>19.09.2024</p>
                <p className='text-gray-600 w-[8%]'>8.1kb</p>
            </div>
        
        </div>
    </div>
  )
}

export default PatientFiles