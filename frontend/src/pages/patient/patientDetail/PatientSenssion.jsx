import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetPatientIdQuery } from '../../../store/patient2';

const PatientSenssion = () => {

    const {patientId} = useParams()
    const { data: patient, isLoading } = useGetPatientIdQuery(patientId, {
        skip: !patientId,
    });

    if (!patient) {
        return <div>{"Bir sorun oluştu..."}</div>;
    }else if (isLoading){
        return <div>Veri Yükleniyor</div>
    }

    return (
        <div className='bg-gray-200 w-[calc(100%-15%)] h-full flex justify-evenly items-center'>
            <div className='bg-white rounded-xl h-[90%] w-[60%] flex flex-col items-center justify-evenly'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-lg text-gray-500 font-semibold'>Seans</p>
                    <p className='text-lg text-gray-700 font-semibold'>{patient.seans_number}</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-lg text-gray-500 font-semibold'>Günler</p>
                    <p className='text-lg text-gray-700 font-semibold'>{patient.seans_days}</p>
                    {/* <div className='text-lg text-gray-700 font-semibold'>
                        {patient.selectedDays && patient.selectedDays.length > 0 ? (
                            patient.selectedDays.map((day, index) => (
                                <p key={index}>{day}</p>
                            ))
                        ) : (
                            <p>Gün seçilmedi</p>
                        )}
                    </div> */}
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-lg text-gray-500 font-semibold'>Cihaz Adı</p>
                    <p className='text-lg text-gray-700 font-semibold'>{patient.device_name}</p>
                </div>
            </div>
        </div>
    );
}

export default PatientSenssion;
