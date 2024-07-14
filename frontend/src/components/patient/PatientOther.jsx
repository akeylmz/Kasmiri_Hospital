import React from 'react'

const PatientOther = () => {
  return (
    <div className='bg-gray-200 w-[calc(100%-15%)] h-full flex justify-evenly items-center'>
        <div className='bg-white rounded-xl h-[90%] w-[45%] flex items-center justify-evenly'>
            <div className='flex flex-col justify-evenly items-center w-2/4 h-full'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Vergi Dairesi / No</p>
                    <p className='font-semibold text-lg text-gray-700'>34234</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Mesleği</p>
                    <p className='font-semibold text-lg text-gray-700'>Avukat</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Meslek (Resmi)</p>
                    <p className='font-semibold text-lg text-gray-700'>Avukat</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Eğitim Durumu</p>
                    <p className='font-semibold text-lg text-gray-700'>Lisans</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Entegrasyon Kodu</p>
                    <p className='font-semibold text-lg text-gray-700'>Lisans</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>E-Fatura Türü</p>
                    <p className='font-semibold text-lg text-gray-700'>Mükellef Değil</p>
                </div>
            </div>
            <div className='flex flex-col justify-evenly items-center w-2/4 h-full'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Arşiv No</p>
                    <p className='font-semibold text-lg text-gray-700'>34234</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Oda No</p>
                    <p className='font-semibold text-lg text-gray-700'>353</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Bölüm No</p>
                    <p className='font-semibold text-lg text-gray-700'>32</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Kısım No</p>
                    <p className='font-semibold text-lg text-gray-700'>21</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Raf No</p>
                    <p className='font-semibold text-lg text-gray-700'>E6</p>
                </div>
                
            </div>
        </div>
        <div className='bg-white rounded-xl h-[90%] w-[45%] flex flex-col justify-evenly items-center'>
            <div className='flex flex-col justify-evenly items-center w-2/4 h-full'>
            <h3 className='text-xl mt-2 mb-3 font-bold'>Ehliyet Bilgileri</h3>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Sınıfı</p>
                    <p className='font-semibold text-lg text-gray-700'>B</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Belge No</p>
                    <p className='font-semibold text-lg text-gray-700'>24232</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Belge Tarihi</p>
                    <p className='font-semibold text-lg text-gray-700'>12.06.2001</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Verildiği Yer</p>
                    <p className='font-semibold text-lg text-gray-700'>Ankara</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Verildiği Tarih</p>
                    <p className='font-semibold text-lg text-gray-700'>12.06.2001</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Cihaz - Protez</p>
                    <p className='font-semibold text-lg text-gray-700'>Protez</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientOther