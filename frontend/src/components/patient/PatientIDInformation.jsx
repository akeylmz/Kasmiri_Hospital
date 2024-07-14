import React from 'react'

const PatientIDInformation = () => {
  return (
    <div className='bg-gray-200 w-[calc(100%-15%)] h-full flex justify-evenly items-center'>
        
         <div className='bg-white rounded-xl h-[90%] w-[45%] flex flex-col items-center justify-evenly'>
         <h3 className='text-xl mt-9 font-bold'>Genel Bilgiler</h3>
         <div className='h-[85%] w-full flex items-center justify-evenly'>         
            <div className='flex flex-col justify-evenly items-center w-2/4 h-full'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Cüzdan No</p>
                    <p className='font-semibold text-lg text-gray-700'>34234</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Medeni Hali</p>
                    <p className='font-semibold text-lg text-gray-700'>Bekar</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Kimlik Türü</p>
                    <p className='font-semibold text-lg text-gray-700'>Avukat</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Pasaport No</p>
                    <p className='font-semibold text-lg text-gray-700'>Lisans</p>
                </div>                
            </div>
            <div className='flex flex-col justify-evenly items-center w-2/4 h-full'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Anne TC Kimlik No</p>
                    <p className='font-semibold text-lg text-gray-700'>Lisans</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Baba TC Kimlik No</p>
                    <p className='font-semibold text-lg text-gray-700'>Mükellef Değil</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Beyan Kan Grubu</p>
                    <p className='font-semibold text-lg text-gray-700'>34234</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Nüfus Kayıt Türü</p>
                    <p className='font-semibold text-lg text-gray-700'>353</p>
                </div>
               
                
            </div>
        </div>
         </div>
        <div className='bg-white rounded-xl h-[90%] p-6 w-[45%] flex flex-col justify-evenly items-center'>
        <h3 className='text-xl mt-9 mb-3 font-bold'>Cüzdanın Kayıtlı Olduğu</h3>
            <div className='flex flex-col justify-evenly items-center w-2/4 h-full'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Şehir</p>
                    <p className='font-semibold text-lg text-gray-700'>B</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>İlçe</p>
                    <p className='font-semibold text-lg text-gray-700'>24232</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Mahalle Köy</p>
                    <p className='font-semibold text-lg text-gray-700'>12.06.2001</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Cilt No</p>
                    <p className='font-semibold text-lg text-gray-700'>Ankara</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Aile Sıra No</p>
                    <p className='font-semibold text-lg text-gray-700'>12.06.2001</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Sıra No</p>
                    <p className='font-semibold text-lg text-gray-700'>Protez</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientIDInformation