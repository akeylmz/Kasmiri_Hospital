import React from 'react'

const CardPage = () => {
  return (
    <>
        <div className='w-full h-[60px] border-b border-gray-300 mb-4 flex items-center justify-between px-11 pb-2'>
            <div className='flex gap-4'>
                <button>Hasta Detay</button>
                <button>Tahlil Sonuçları</button>
                <button>Raporlar</button>
            </div>
            <button className='border border-gray-400 rounded-lg py-2 px-4 hover:bg-gray-100 hover:border-gray-600 transition-all '>Hasta Ekle</button>
        </div>
        <div className='flex gap-5 flex-wrap'>
        <div className='w-[345px] p-3 border shadow-xl rounded-md border-gray-300 bg-[#f0f2f8] flex flex-col gap-8 '>
        <head className='flex gap-5'>
            <div className='w-[80px] h-[80px] rounded-lg' style={{"background": "url('./images/hasta.jpg') no-repeat center center/cover"}}></div>
            <div className=' flex flex-col gap-1'>
                <span className='text-base font-semibold'>Mehmet Enes Doğan</span>
                <span><b>TC:</b> 25654856952</span>
                <span><b>Tel:</b> 523 658 74 25</span>                
            </div>
        </head>
        <section className='flex flex-col gap-3'>
            <div><span className='font-semibold'>Anamnez: </span> <span className='text-[14px]'>Lorem ipsum dolor sit.</span></div>
            <div><span className='font-semibold'>Uygun Muayene: </span><span className='text-[14px]'>Lorem ipsum dolor sit.</span></div>
        </section>
        <section>
            <span className='font-semibold'>Sonuç: </span><span className='text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, unde.</span>
        </section>
        <footer className='flex justify-between'>
            <button className='border rounded-full border-cyan-600 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white'>Tahlil Sonuçları</button>
            <button className='border rounded-full border-cyan-600 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white'>Raporlar</button>
        </footer>
    </div>
    <div className='w-[345px] p-3 border shadow-xl rounded-md border-gray-300 bg-[#f0f2f8] flex flex-col gap-8 '>
        <head className='flex gap-5'>
            <div className='w-[80px] h-[80px] rounded-lg' style={{"background": "url('./images/hasta.jpg') no-repeat center center/cover"}}></div>
            <div className=' flex flex-col gap-1'>
                <span className='text-base font-semibold'>Mehmet Enes Doğan</span>
                <span><b>TC:</b> 25654856952</span>
                <span><b>Tel:</b> 523 658 74 25</span>                
            </div>
        </head>
        <section className='flex flex-col gap-3'>
            <div><span className='font-semibold'>Anamnez: </span> <span className='text-[14px]'>Lorem ipsum dolor sit.</span></div>
            <div><span className='font-semibold'>Uygun Muayene: </span><span className='text-[14px]'>Lorem ipsum dolor sit.</span></div>
        </section>
        <section>
            <span className='font-semibold'>Sonuç: </span><span className='text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, unde.</span>
        </section>
        <footer className='flex justify-between'>
            <button className='border rounded-full border-cyan-600 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white'>Tahlil Sonuçları</button>
            <button className='border rounded-full border-cyan-600 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white'>Raporlar</button>
        </footer>
    </div>
    <div className='w-[345px] p-3 border shadow-xl rounded-md border-gray-300 bg-[#f0f2f8] flex flex-col gap-8 '>
        <head className='flex gap-5'>
            <div className='w-[80px] h-[80px] rounded-lg' style={{"background": "url('./images/hasta.jpg') no-repeat center center/cover"}}></div>
            <div className=' flex flex-col gap-1'>
                <span className='text-base font-semibold'>Mehmet Enes Doğan</span>
                <span><b>TC:</b> 25654856952</span>
                <span><b>Tel:</b> 523 658 74 25</span>                
            </div>
        </head>
        <section className='flex flex-col gap-3'>
            <div><span className='font-semibold'>Anamnez: </span> <span className='text-[14px]'>Lorem ipsum dolor sit.</span></div>
            <div><span className='font-semibold'>Uygun Muayene: </span><span className='text-[14px]'>Lorem ipsum dolor sit.</span></div>
        </section>
        <section>
            <span className='font-semibold'>Sonuç: </span><span className='text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, unde.</span>
        </section>
        <footer className='flex justify-between'>
            <button className='border rounded-full border-cyan-600 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white'>Tahlil Sonuçları</button>
            <button className='border rounded-full border-cyan-600 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white'>Raporlar</button>
        </footer>
    </div>
    <div className='w-[345px] p-3 border shadow-xl rounded-md border-gray-300 bg-[#f0f2f8] flex flex-col gap-8 '>
        <head className='flex gap-5'>
            <div className='w-[80px] h-[80px] rounded-lg' style={{"background": "url('./images/hasta.jpg') no-repeat center center/cover"}}></div>
            <div className=' flex flex-col gap-1'>
                <span className='text-base font-semibold'>Mehmet Enes Doğan</span>
                <span><b>TC:</b> 25654856952</span>
                <span><b>Tel:</b> 523 658 74 25</span>                
            </div>
        </head>
        <section className='flex flex-col gap-3'>
            <div><span className='font-semibold'>Anamnez: </span> <span className='text-[14px]'>Lorem ipsum dolor sit.</span></div>
            <div><span className='font-semibold'>Uygun Muayene: </span><span className='text-[14px]'>Lorem ipsum dolor sit.</span></div>
        </section>
        <section>
            <span className='font-semibold'>Sonuç: </span><span className='text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, unde.</span>
        </section>
        <footer className='flex justify-between'>
            <button className='border rounded-full border-cyan-600 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white'>Tahlil Sonuçları</button>
            <button className='border rounded-full border-cyan-600 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white'>Raporlar</button>
        </footer>
    </div>
    <div className='w-[345px] p-3 border shadow-xl rounded-md border-gray-300 bg-[#f0f2f8] flex flex-col gap-8 '>
        <head className='flex gap-5'>
            <div className='w-[80px] h-[80px] rounded-lg' style={{"background": "url('./images/hasta.jpg') no-repeat center center/cover"}}></div>
            <div className=' flex flex-col gap-1'>
                <span className='text-base font-semibold'>Mehmet Enes Doğan</span>
                <span><b>TC:</b> 25654856952</span>
                <span><b>Tel:</b> 523 658 74 25</span>                
            </div>
        </head>
        <section className='flex flex-col gap-3'>
            <div><span className='font-semibold'>Anamnez: </span> <span className='text-[14px]'>Lorem ipsum dolor sit.</span></div>
            <div><span className='font-semibold'>Uygun Muayene: </span><span className='text-[14px]'>Lorem ipsum dolor sit.</span></div>
        </section>
        <section>
            <span className='font-semibold'>Sonuç: </span><span className='text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, unde.</span>
        </section>
        <footer className='flex justify-between'>
            <button className='border rounded-full border-cyan-600 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white'>Tahlil Sonuçları</button>
            <button className='border rounded-full border-cyan-600 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white'>Raporlar</button>
        </footer>
    </div>
    <div className='w-[345px] p-3 border shadow-xl rounded-md border-gray-300 bg-[#f0f2f8] flex flex-col gap-8 '>
        <head className='flex gap-5'>
            <div className='w-[80px] h-[80px] rounded-lg' style={{"background": "url('./images/hasta.jpg') no-repeat center center/cover"}}></div>
            <div className=' flex flex-col gap-1'>
                <span className='text-base font-semibold'>Mehmet Enes Doğan</span>
                <span><b>TC:</b> 25654856952</span>
                <span><b>Tel:</b> 523 658 74 25</span>                
            </div>
        </head>
        <section className='flex flex-col gap-3'>
            <div><span className='font-semibold'>Anamnez: </span> <span className='text-[14px]'>Lorem ipsum dolor sit.</span></div>
            <div><span className='font-semibold'>Uygun Muayene: </span><span className='text-[14px]'>Lorem ipsum dolor sit.</span></div>
        </section>
        <section>
            <span className='font-semibold'>Sonuç: </span><span className='text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, unde.</span>
        </section>
        <footer className='flex justify-between'>
            <button className='border rounded-full border-cyan-600 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white'>Tahlil Sonuçları</button>
            <button className='border rounded-full border-cyan-600 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white'>Raporlar</button>
        </footer>
    </div>
    <div className='w-[345px] p-3 border shadow-xl rounded-md border-gray-300 bg-[#f0f2f8] flex flex-col gap-8 '>
        <head className='flex gap-5'>
            <div className='w-[80px] h-[80px] rounded-lg' style={{"background": "url('./images/hasta.jpg') no-repeat center center/cover"}}></div>
            <div className=' flex flex-col gap-1'>
                <span className='text-base font-semibold'>Mehmet Enes Doğan</span>
                <span><b>TC:</b> 25654856952</span>
                <span><b>Tel:</b> 523 658 74 25</span>                
            </div>
        </head>
        <section className='flex flex-col gap-3'>
            <div><span className='font-semibold'>Anamnez: </span> <span className='text-[14px]'>Lorem ipsum dolor sit.</span></div>
            <div><span className='font-semibold'>Uygun Muayene: </span><span className='text-[14px]'>Lorem ipsum dolor sit.</span></div>
        </section>
        <section>
            <span className='font-semibold'>Sonuç: </span><span className='text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, unde.</span>
        </section>
        <footer className='flex justify-between'>
            <button className='border rounded-full border-cyan-600 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white'>Tahlil Sonuçları</button>
            <button className='border rounded-full border-cyan-600 px-3 py-2 bg-cyan-600 hover:bg-cyan-700 text-white'>Raporlar</button>
        </footer>
    </div>
        </div>
    </>
  )
}

export default CardPage