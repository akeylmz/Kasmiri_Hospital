import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PatientOverwiev = () => {


    const  { patients } = useSelector( state => state.patient)
    const {patientId} = useParams()
    console.log(patients);
     

    var patien ;

    patients.forEach(element => {
        console.log(element.id);
        console.log(patientId);
        if (element.id == patientId) {
            patien = element
        }
    });


  return (
    <div className='bg-gray-200 w-[calc(100%-15%)] h-full flex flex-col justify-evenly'>
        <div className='w-full h-[49%] flex justify-evenly items-center'>
            <div className='w-[42%] h-[96%] p-3 pl-0 bg-white rounded-xl shadow-md flex '>
                <div className='border-r w-[45%] h-full flex flex-col items-center'>
                    <img src="/images/profile1.jpg" className='w-[90%] h-[70%] rounded-lg object-cover'  />
                    <p className='py-3 text-xl font-semibold text-gray-700'>{patien.name}</p>
                    <div className='flex w-full justify-evenly mt-1'>
                        <div className='flex flex-col items-center gap-1'>
                            <span className='text-gray-500'>Doğum Tarihi</span>
                            <span className='font-semibold text-gray-700'>{patien.dogumTarihi}</span>
                        </div>
                        <div className='flex flex-col items-center gap-1'>
                            <span className='text-gray-500'>Yaşı</span>
                            <span className='font-semibold text-gray-700'>-</span>
                        </div>                        
                    </div>
                </div>
                <div className='w-[55%] h-full flex flex-col gap-5 justify-evenly items-center'>
                    <div className='flex flex-col gap-1 items-center'>
                        <p className='text-lg text-gray-500'>Hasta Kodu / Dosya No</p>
                        <p className='font-semibold text-lg text-gray-700'>FGF32423423</p>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <p className='text-lg text-gray-500'>TC & Pasaport Numarası</p>
                        <p className='font-semibold text-lg text-gray-700'>{patien.id}</p>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <p className='text-lg text-gray-500'>Doğum Yeri</p>
                        <p className='font-semibold text-lg text-gray-700'>{patien.dogumYeri}</p>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <p className='text-lg text-gray-500'>Cinsiyet / Uyruk</p>
                        <p className='font-semibold text-lg text-gray-700'>{patien.cinsiyet} / {patien.uyruk}</p>
                    </div>
                    <div className='flex flex-col gap-1 items-center'>
                        <p className='text-lg text-gray-500'>Ana Adı / Baba Adı</p>
                        <p className='font-semibold text-lg text-gray-700'>{patien.anaAdi} / {patien.babaAdi}</p>
                    </div>
                </div>
            </div>
            <div className='w-[42%] h-[96%] flex flex-col items-center justify-between'>
                <div className='h-[48%] w-full py-8 px-20 bg-white rounded-xl shadow-md flex flex-col justify-between'>
                    <div className='flex gap-2'>
                        <div className=' flex flex-col items-center justify-center w-[50%]'>
                            <p className='text-gray-500 font-semibold'>Cep Tel-1</p>
                            <p className='text-gray-700 font-semibold text-lg'>{patien.cep1}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-[50%]'>
                            <p className='text-gray-500 font-semibold'>İnstagram</p>
                            <p className='text-gray-700 font-semibold text-lg'>{patien.instagram}</p>
                        </div>
                        
                    </div>
                   <div className='flex gap-2'>
                        <div className=' flex flex-col items-center justify-center w-[50%]'>
                            <p className='text-gray-500 font-semibold'>Cep Tel-2</p>
                            <p className='text-gray-700 font-semibold text-lg'>{patien.cep1}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center w-[50%]'>
                            <p className='text-gray-500 font-semibold'>E-Mail</p>
                            <p className='text-gray-700 font-semibold text-lg'>{patien.email}</p>
                        </div>
                   </div>                   
                </div>
                <div className='h-[48%] w-full bg-white rounded-xl shadow-md flex flex-col px-3 py-7 '>
                    <div className='flex justify-between items-center mb-auto'>
                        
                        <div className='flex flex-col justify-center items-center w-[50%] gap-1'>
                            <p className='text-gray-500 font-semibold'>Ülke</p>
                            <p className='text-gray-700 text-sm font-semibold'>Türkiye</p>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[50%] gap-1'>
                            <p className='text-gray-500 font-semibold'>Şehir</p>
                            <p className='text-gray-700 text-sm font-semibold'>İstanbul</p>
                        </div>
                        
                    </div>
                    <div className='flex justify-between items-center'>                        
                        <div className='flex flex-col justify-center items-center w-[100%] gap-1'>
                            <p className='text-gray-500 font-semibold'>İkametgah Adresi</p>
                            <p className='text-gray-700 text-sm font-semibold'>Ahmet Yılmaz Atatürk Mahallesi, Cumhuriyet Caddesi, No: 45, Daire: 7 34752 Kadıköy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-[49%] flex justify-evenly items-center'>
            <div className='w-[42%] h-[96%] flex flex-col justify-between'>
                <div className='h-[56%] bg-white rounded-xl shadow-md overflow-auto'>
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
                <div className='h-[40%] bg-white rounded-xl shadow-md flex justify-evenly items-center'>
                    <div>
                        <div className='flex flex-col items-center'>
                            <p className='text-gray-500 font-semibold mb-1'>Ameliyat Günü</p>
                            <p className='text-gray-700 font-semibold text-lg text-center'>12.12.2022</p>
                        </div>
                        <div className='flex flex-col items-center mt-4'>
                            <p className='text-gray-500 font-semibold mb-1'>Kontrol Tarihi</p>
                            <p className='text-gray-700 font-semibold text-lg text-center'>12.12.2022</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col items-center'>
                            <p className='text-gray-500 font-semibold mb-1'>Taburcu Günü</p>
                            <p className='text-gray-700 font-semibold text-lg text-center'>12.12.2022</p>
                        </div>
                        <div className='flex flex-col items-center mt-4'>
                            <p className='text-gray-500 font-semibold mb-1'>Uçuş Tarihi</p>
                            <p className='text-gray-700 font-semibold text-lg text-center'>12.12.2022</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='w-[42%] h-[96%] p-5 bg-white rounded-xl shadow-md flex flex-col overflow-auto'>
                <div className='flex'>
                    <div className='w-[45%] flex flex-col items-center border-r pr-5 gap-5'>
                        <div className='flex flex-col items-center'>
                            <p className='text-gray-500 font-semibold mb-1'>Hasta Tipi</p>
                            <p className='text-gray-700 font-semibold text-lg text-center'>Kurum</p>
                        </div>
                        
                        <div className='flex flex-col items-center'>
                            <p className='text-gray-500 font-semibold mb-1'>Medeni Durum</p>
                            <p className='text-gray-700 font-semibold w-full text-center'>Bekar</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-gray-500 font-semibold mb-1'>Doğum Yaptı mı?</p>
                            <p className='text-gray-700 font-semibold w-full text-center'>Hayır</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-gray-500 font-semibold mb-1'>Mevcut Hastalık</p>
                            <p className='text-gray-700 font-semibold w-full text-center'>Yok</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-gray-500 font-semibold mb-1'>Sürekli Kullanılan İlaç</p>
                            <p className='text-gray-700 font-semibold w-full text-center'>Yok</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-gray-500 font-semibold mb-1'>Alerjileri</p>
                            <p className='text-gray-700 font-semibold w-full text-center'>Yok</p>
                        </div>
                    </div>
                    <div className='w-[45%] pl-5 flex flex-col items-center gap-5'>
                        <div className='flex flex-col items-center'>
                            <p className='text-gray-500 font-semibold mb-1'>Refere Eden</p>
                            <p className='text-gray-700 font-semibold w-full text-center'>-</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-gray-500 font-semibold mb-1'>Meslek</p>
                            <p className='text-gray-700 font-semibold w-full text-center'>Doktor</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-gray-500 font-semibold mb-1'>Çalıştığı Kurum</p>
                            <p className='text-gray-700 font-semibold w-full text-center'>-</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-gray-500 font-semibold mb-1'>Geldiği İşlem</p>
                            <p className='text-gray-700 font-semibold w-full text-center'>-</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-gray-500 font-semibold mb-1'>Sigara Kullanıyor mu?</p>
                            <p className='text-gray-700 font-semibold w-full text-center'>Hayır</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-gray-500 font-semibold mb-1'>Geçirdiği Operasyonlar</p>
                            <p className='text-gray-700 font-semibold w-full text-center'>-</p>
                        </div>
                        
                    </div>
                </div>
                <div className='w-[90%] mt-6 flex flex-col items-center justify-center'>
                        <p className='text-gray-500 font-semibold mb-1'>Şikayetler</p>
                        <p className='text-gray-700 font-semibold w-full text-center'>Herhangi bir şikayet yok</p>
                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default PatientOverwiev