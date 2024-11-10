import React from 'react'

const Anket = () => {
  return (
    <div className='py-5 px-8 w-[calc(100%-18%)] mx-auto my-auto h-[97%] bg-white border border-gray-100 rounded-3xl shadow-md overflow-auto'>
        
            <p className='text-2xl mb-10 ml-10 mt-5 font-semibold text-cyan-600'>HASTA ANKETİ</p>
        
        <div className='mt-3'>
            <p className=' '><span className='font-semibold'>1.</span> Yolda bir arkadaşımız ile birlikte yürüyorken bir araba gelip arkadaşımıza çarpıp kaçsa; arkadaşımızın yanımda kalıp onunla mı ilgilenirdiniz yoksa, kaçan arabayı yakalamak için peşinden mi koşardımız?</p>
            <textarea className='w-full border mt-4 border-gray-300 rounded-xl outline-none px-4 shadow-md' type="text" rows="3" />
        </div>

        

        <div className='mt-8'>
            <p className=' '><span className='font-semibold'>3.</span> Kendinizi ne sıklıkla yalnız hissediyorsunuz?</p>
            <textarea className='w-full border mt-4 border-gray-300 rounded-xl outline-none px-4 shadow-md' type="text" rows="3" />
        </div>

        <div className='mt-8'>
            <p className=' '><span className='font-semibold'>4.</span> Yaşamdaki kişisel hedeflerinizin durumunu ne sıklıkla erteliyorsunuz?</p>
            <textarea className='w-full border mt-4 border-gray-300 rounded-xl outline-none px-4 shadow-md' type="text" rows="3" />
        </div>

        <div className='mt-8'>
            <p className=' '><span className='font-semibold'>2.</span>Şu fotoğraf seni rahatsız ediyor mu?</p>
            <img src="/img/anket.png" className='mt-3 ml-4' />
            <textarea className='w-full border mt-4 border-gray-300 rounded-xl outline-none px-4 shadow-md' type="text" rows="3" />
        </div>

        <div className='flex mt-5'>
            <button className='border border-gray-200 text-xl rounded-xl bg-sky-600 shadow-md hover:bg-sky-500 w-full p-5 text-white font-semibold ml-auto'>KAYDET</button>
        </div>
    </div>
  )
}

export default Anket