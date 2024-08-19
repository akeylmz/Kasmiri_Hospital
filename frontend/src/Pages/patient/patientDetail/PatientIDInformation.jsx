import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PatientIDInformation = () => {

    const  { patients } = useSelector( state => state.patient)
    const {patientId} = useParams()
    console.log(patients);
     

    var patien ;

    patients.forEach(element => {
        if (element.tc == patientId) {
            patien = element
        }
    });

  return (
    <div className='bg-gray-200 w-[calc(100%-15%)] h-full flex justify-evenly items-center'>
        
         <div className='bg-white rounded-xl h-[90%] w-[45%] flex flex-col items-center justify-evenly'>
         <h3 className='text-xl mt-9 font-bold'>Genel Bilgiler</h3>
         <div className='h-[85%] w-full flex items-center justify-evenly'>         
            <div className='flex flex-col justify-evenly items-center w-2/4 h-full'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Cüzdan No</p>
                    <p className='font-semibold text-lg text-gray-700'>{patien.cuzdanNo}</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Medeni Hali</p>
                    <p className='font-semibold text-lg text-gray-700'>{patien.medeniHali}</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Kimlik Türü</p>
                    <p className='font-semibold text-lg text-gray-700'>{patien.kimlikTuru}</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Pasaport No</p>
                    <p className='font-semibold text-lg text-gray-700'>{patien.pasaportNo}</p>
                </div>                
            </div>
            <div className='flex flex-col justify-evenly items-center w-2/4 h-full'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Anne TC Kimlik No</p>
                    <p className='font-semibold text-lg text-gray-700'>{patien.anneTc}</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Baba TC Kimlik No</p>
                    <p className='font-semibold text-lg text-gray-700'> {patien.babaTc}</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Beyan Kan Grubu</p>
                    <p className='font-semibold text-lg text-gray-700'>{patien.beyanKanGrubu}</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Nüfus Kayıt Türü</p>
                    <p className='font-semibold text-lg text-gray-700'>{patien.nufusKayitTuru}</p>
                </div>
               
                
            </div>
        </div>
         </div>
        <div className='bg-white rounded-xl h-[90%] p-6 w-[45%] flex flex-col justify-evenly items-center'>
        <h3 className='text-xl mt-9 mb-3 font-bold'>Cüzdanın Kayıtlı Olduğu</h3>
            <div className='flex flex-col justify-evenly items-center w-2/4 h-full'>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Şehir</p>
                    <p className='font-semibold text-lg text-gray-700'>{patien.sehir}</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>İlçe</p>
                    <p className='font-semibold text-lg text-gray-700'>{patien.ilce}</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Mahalle Köy</p>
                    <p className='font-semibold text-lg text-gray-700'>{patien.mahalle}</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Cilt No</p>
                    <p className='font-semibold text-lg text-gray-700'>{patien.ciltNo}</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Aile Sıra No</p>
                    <p className='font-semibold text-lg text-gray-700'>{patien.aileSiraNo}</p>
                </div>
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-gray-500 font-semibold'>Sıra No</p>
                    <p className='font-semibold text-lg text-gray-700'>{patien.siraNo}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientIDInformation