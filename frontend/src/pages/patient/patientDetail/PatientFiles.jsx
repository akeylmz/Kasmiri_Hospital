import React from 'react'

const PatientFiles = () => {
  return (
    <div className='bg-gray-200 w-[calc(100%-15%)] h-full flex flex-col justify-evenly items-center'>        
        <div className='bg-white rounded-xl h-[98%] w-[98%] flex flex-col items-center p-3 gap-1'>
            <div className='w-full h-14 border-b border-gray-300 flex items-center justify-between px-3 pb-2'>
                <p className='text-cyan-600 font-semibold text-lg'>DOSYALAR</p>
                <button className='text-lg text-white bg-cyan-600 rounded-full font-semibold hover:bg-cyan-700 px-7 py-2' type='button'>EKLE</button>
            </div>
            <div className='flex flex-col w-full h-[calc(100%-3.5rem)] pt-3 gap-2'>
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
    </div>
  )
}

export default PatientFiles