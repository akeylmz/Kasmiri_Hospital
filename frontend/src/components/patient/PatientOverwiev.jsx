import React from 'react'
import { CiCirclePlus } from "react-icons/ci";

const PatientOverwiev = () => {
  return (
    <div className='bg-gray-200 w-[calc(100%-15%)] h-full flex flex-col justify-evenly'>
        <div className='w-full h-[48%] flex justify-evenly items-center'>
            <div className='w-[42%] h-[96%] p-3 pl-0 bg-white rounded-xl shadow-md flex '>
                <div className='border-r w-[45%] h-full flex flex-col items-center'>
                    <img src="/images/profile1.jpg" className='w-[90%] h-[70%] rounded-lg object-cover'  />
                    <p className='py-3 text-xl font-semibold text-gray-700'>Mehmet Enes Doğan</p>
                    <div className='flex w-full justify-evenly mt-1'>
                        <div className='flex flex-col items-center gap-1'>
                            <span className='text-gray-500'>Doğum Tarihi</span>
                            <span className='font-semibold text-gray-700'>12.02.1997</span>
                        </div>
                        <div className='flex flex-col items-center gap-1'>
                            <span className='text-gray-500'>Yaşı</span>
                            <span className='font-semibold text-gray-700'>27</span>
                        </div>                        
                    </div>
                </div>
                <div className='w-[55%] h-full flex flex-col gap-5 justify-evenly items-center'>
                    <div className='flex flex-col gap-1 items-center'>
                        <p className='text-lg text-gray-500'>Hasta Kodu / Dosya No</p>
                        <p className='font-semibold text-lg text-gray-700'>FGF32423423</p>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <p className='text-lg text-gray-500'>TC Kimlik Numarası</p>
                        <p className='font-semibold text-lg text-gray-700'>345123536</p>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <p className='text-lg text-gray-500'>Doğum Yeri</p>
                        <p className='font-semibold text-lg text-gray-700'>Ankara</p>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <p className='text-lg text-gray-500'>Cinsiyet / Uyruk</p>
                        <p className='font-semibold text-lg text-gray-700'>Erkek / Turkiye Cumhuriyeti</p>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <p className='text-lg text-gray-500'>Ana Adı / Baba Adı</p>
                        <p className='font-semibold text-lg text-gray-700'>Fatma / Hüseyin</p>
                    </div>
                </div>
            </div>
            <div className='w-[42%] h-[96%] flex flex-col items-center justify-between'>
                <div className='h-[48%] w-full py-8 px-20 bg-white rounded-xl shadow-md flex flex-col justify-between'>
                    <div className='flex gap-2'>
                        <div className=' flex flex-col items-center justify-center w-[33.33%]'>
                            <p className='text-gray-500 font-semibold'>Ev Telefonu</p>
                            <p className='text-gray-700 font-semibold text-lg'>07633432</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-[33.33%]'>
                            <p className='text-gray-500 font-semibold'>İş Telefon</p>
                            <p className='text-gray-700 font-semibold text-lg'>07633432</p>
                        </div>
                        <div className=' flex flex-col items-center justify-center w-[33.33%]'>
                            <p className='text-gray-500 font-semibold'>Fax</p>
                            <p className='text-gray-700 font-semibold text-lg'>07633432</p>
                        </div>
                    </div>
                   <div className='flex gap-2'>
                        <div className=' flex flex-col items-center justify-center w-[33.33%]'>
                            <p className='text-gray-500 font-semibold'>Cep Tel-1</p>
                            <p className='text-gray-700 font-semibold text-lg'>07633432</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-[33.33%]'>
                            <p className='text-gray-500 font-semibold'>Cep Tel-2</p>
                            <p className='text-gray-700 font-semibold text-lg'>07633432</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-[33.33%]'>
                            <p className='text-gray-500 font-semibold'>E-Mail</p>
                            <p className='text-gray-700 font-semibold text-lg'>Enes@gmail.com</p>
                        </div>
                   </div>                   
                </div>
                <div className='h-[48%] w-full bg-white rounded-xl shadow-md flex flex-col px-3 py-7 '>
                    <div className='flex justify-between items-center mb-auto'>
                        <div className='flex flex-col justify-center items-center w-[25%] gap-1'>
                            <p className='text-gray-500 font-semibold'>Adres Tipi</p>
                            <p className='text-gray-700 text-sm font-semibold'>Sürekli İkamet Adresi</p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[25%] gap-1'>
                            <p className='text-gray-500 font-semibold'>Ülke</p>
                            <p className='text-gray-700 text-sm font-semibold'>Türkiye</p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[25%] gap-1'>
                            <p className='text-gray-500 font-semibold'>Şehir</p>
                            <p className='text-gray-700 text-sm font-semibold'>Ankara</p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[25%] gap-1'>
                            <p className='text-gray-500 font-semibold'>İlçe</p>
                            <p className='text-gray-700 text-sm font-semibold'>Polatlı</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center'>                        
                        <div className='flex flex-col justify-center items-center w-[25%] gap-1'>
                            <p className='text-gray-500 font-semibold'>Bucak</p>
                            <p className='text-gray-700 text-sm font-semibold'>Polatlı</p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[25%] gap-1'>
                            <p className='text-gray-500 font-semibold'>Köy</p>
                            <p className='text-gray-700 text-sm font-semibold'>Polatlı</p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[25%] gap-1'>
                            <p className='text-gray-500 font-semibold'>Mahalle</p>
                            <p className='text-gray-700 text-sm font-semibold'>Polatlı</p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[25%] gap-1'>
                            <p className='text-gray-500 font-semibold'>CSBM</p>
                            <p className='text-gray-700 text-sm font-semibold'>Ankara</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-[48%] flex justify-evenly items-center'>
            <div className='w-[42%] h-[96%] bg-white rounded-xl shadow-md overflow-auto'>
                <div className='border-b p-4 flex justify-between items-center bg-white sticky top-0 left-0'>
                    <span className='text-lg font-semibold text-gray-600'>Notlar</span>
                    <button className='text-blue-500'><CiCirclePlus size={30} strokeWidth={0.5}/></button>
                </div>
                <div className='p-4'>
                    <p className='text-gray-500 font-semibold mb-2'>02.06.2023</p>
                    <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,o repellat qui a consectetur vel. Tempore nostrum blanditiis molestias reprehenderit eum?</p>
                </div>
                <div className='p-4'>
                    <p className='text-gray-500 font-semibold mb-2'>01.03.2024</p>
                    <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,o repellat qui a consectetur vel. Tempore nostrum blanditiis molestias reprehenderit eum?</p>
                </div>
                <div className='p-4'>
                    <p className='text-gray-500 font-semibold mb-2'>23.11.2024</p>
                    <p className='text-gray-600 text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,o repellat qui a consectetur vel. Tempore nostrum blanditiis molestias reprehenderit eum?</p>
                </div>
            </div>
            <div className='w-[42%] h-[96%] p-5 bg-white rounded-xl shadow-md flex'>
                <div className='w-[45%] flex flex-col items-center border-r pr-5 gap-5'>
                    <div className='flex flex-col items-center'>
                        <p className='text-gray-500 font-semibold mb-1'>Hasta Tipi</p>
                        <p className='text-gray-700 font-semibold text-lg'>Kurum</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-gray-500 font-semibold mb-1'>Yakınlık Tipi</p>
                        <p className='text-gray-700 font-semibold text-lg'>Kuzen</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='text-gray-500 font-semibold mb-1'>Sigortalı Bilgileri</p>
                        <p className='text-gray-700 font-semibold w-full '>Lorem ipsum dolor sit amet asd consectetur Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                </div>
                <div className='w-[45%] pl-5 flex flex-col gap-5'>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='text-gray-500 font-semibold'>Geldiği Yer / Refere Eden</p>
                        <p className='w-full text-gray-700 font-semibold'>Lorem ipsum dolor sit ametsds consectetur.</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='text-gray-500 font-semibold'>Sigorta Bilgileri</p>
                        <p className='w-full text-gray-700 font-semibold'>Lorem ipsum dolor sit ametsds consectetur, adipisicinasg elit. Rerum,o repellat qui a  vel.</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='text-gray-500 font-semibold'>Tamamlayıcı Sigorta</p>
                        <p className='w-full text-gray-700 font-semibold'>Lorem ipsum dolor sit ametsds consectetur, adipisicinasg elit. Rerum,o repellat qui a  vel.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientOverwiev