import React from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PatientOverwiev = () => {
    const { t } = useTranslation();
    const { patients } = useSelector(state => state.patient);
    const { patientId } = useParams();

    let patient;

    patients.forEach(element => {
        if (element.tc === patientId || element.id.toString() === patientId) {
            patient = element;
        }
    });

    if (!patient) {
        return <div>{t("patient_not_found")}</div>;
    }

    return (
        <div className='bg-gray-200 w-[calc(100%-15%)] h-full flex flex-col justify-evenly'>
            <div className='w-full h-[49%] flex justify-evenly items-center'>
                <div className='w-[42%] h-[96%] p-3 pl-0 bg-white rounded-xl shadow-md flex'>
                    <div className='border-r w-[45%] h-full flex flex-col items-center'>
                        <img src={patient.image} className='w-[90%] h-[70%] rounded-lg object-cover' alt={`${patient.name} ${patient.surname}`} />
                        <p className='py-3 text-xl font-semibold text-gray-700'>{patient.name} {patient.surname}</p>
                        <div className='flex w-full justify-evenly mt-1'>
                            <div className='flex flex-col items-center gap-1'>
                                <span className='text-gray-500'>{t("birth_date")}</span>
                                <span className='font-semibold text-gray-700'>{patient.birthDate}</span>
                            </div>
                            <div className='flex flex-col items-center gap-1'>
                                <span className='text-gray-500'>{t("age")}</span>
                                <span className='font-semibold text-gray-700'>{patient.age || '-'}</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-[55%] h-full flex flex-col gap-5 justify-evenly items-center'>
                        <div className='flex flex-col gap-1 items-center'>
                            <p className='text-lg text-gray-500'>{t("patient_code")}</p>
                            <p className='font-semibold text-lg text-gray-700'>{patient.patientCode || '-'}</p>
                        </div>
                        <div className='flex flex-col gap-1 items-center'>
                            <p className='text-lg text-gray-500'>{t("tc_passport_number")}</p>
                            <p className='font-semibold text-lg text-gray-700'>{patient.tc || patient.pasaportNo}</p>
                        </div>
                        <div className='flex flex-col gap-1 items-center'>
                            <p className='text-lg text-gray-500'>{t("birth_place")}</p>
                            <p className='font-semibold text-lg text-gray-700'>{patient.birthPlace}</p>
                        </div>
                        <div className='flex flex-col gap-1 items-center'>
                            <p className='text-lg text-gray-500'>{t("gender_nationality")}</p>
                            <p className='font-semibold text-lg text-gray-700'>{patient.gender} / {patient.nationality}</p>
                        </div>
                        <div className='flex flex-col gap-1 items-center'>
                            <p className='text-lg text-gray-500'>{t("mother_father_name")}</p>
                            <p className='font-semibold text-lg text-gray-700'>{patient.motherName} / {patient.fatherName}</p>
                        </div>
                    </div>
                </div>
                <div className='w-[42%] h-[96%] flex flex-col items-center justify-between'>
                    <div className='h-[48%] w-full py-8 px-20 bg-white rounded-xl shadow-md flex flex-col justify-between'>
                        <div className='flex gap-2'>
                            <div className='flex flex-col items-center justify-center w-[50%]'>
                                <p className='text-gray-500 font-semibold'>{t("phone_1")}</p>
                                <p className='text-gray-700 font-semibold text-lg'>{patient.contact}</p>
                            </div>
                            <div className='flex flex-col items-center justify-center w-[50%]'>
                                <p className='text-gray-500 font-semibold'>{t("instagram")}</p>
                                <p className='text-gray-700 font-semibold text-lg'>{patient.instagramName}</p>
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex flex-col items-center justify-center w-[50%]'>
                                <p className='text-gray-500 font-semibold'>{t("phone_2")}</p>
                                <p className='text-gray-700 font-semibold text-lg'>{patient.phone2}</p>
                            </div>
                            <div className='flex flex-col items-center justify-center w-[50%]'>
                                <p className='text-gray-500 font-semibold'>{t("email")}</p>
                                <p className='text-gray-700 font-semibold text-lg'>{patient.email}</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-[48%] w-full bg-white rounded-xl shadow-md flex flex-col px-3 py-7 '>
                        <div className='flex justify-between items-center mb-auto'>
                            <div className='flex flex-col justify-center items-center w-[50%] gap-1'>
                                <p className='text-gray-500 font-semibold'>{t("country")}</p>
                                <p className='text-gray-700 text-sm font-semibold'>{patient.country}</p>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[50%] gap-1'>
                                <p className='text-gray-500 font-semibold'>{t("city")}</p>
                                <p className='text-gray-700 text-sm font-semibold'>{patient.location}</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col justify-center items-center w-[100%] gap-1'>
                                <p className='text-gray-500 font-semibold'>{t("address")}</p>
                                <p className='text-gray-700 text-sm font-semibold'>{patient.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[49%] flex justify-evenly items-center'>
                <div className='w-[42%] h-[96%] flex flex-col justify-between'>
                    <div className='h-[56%] bg-white rounded-xl shadow-md overflow-auto'>
                        <div className='border-b p-4 flex justify-between items-center bg-white sticky top-0 left-0'>
                            <span className='text-lg font-semibold text-gray-600'>{t("notes")}</span>
                            <button className='text-blue-500'><CiCirclePlus size={30} strokeWidth={0.5} /></button>
                        </div>
                        <div className='p-4'>
                            <p className='text-gray-500 font-semibold mb-2'>02.06.2023</p>
                            <p className='text-gray-600 text-lg'>{t("sample_note_1")}</p>
                        </div>
                        <div className='p-4'>
                            <p className='text-gray-500 font-semibold mb-2'>01.03.2024</p>
                            <p className='text-gray-600 text-lg'>{t("sample_note_2")}</p>
                        </div>
                        <div className='p-4'>
                            <p className='text-gray-500 font-semibold mb-2'>23.11.2024</p>
                            <p className='text-gray-600 text-lg'>{t("sample_note_3")}</p>
                        </div>
                    </div>
                    <div className='h-[40%] bg-white rounded-xl shadow-md flex justify-evenly items-center'>
                        <div>
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("surgery_date")}</p>
                                <p className='text-gray-700 font-semibold text-lg text-center'>12.12.2022</p>
                            </div>
                            <div className='flex flex-col items-center mt-4'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("control_date")}</p>
                                <p className='text-gray-700 font-semibold text-lg text-center'>12.12.2022</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("discharge_date")}</p>
                                <p className='text-gray-700 font-semibold text-lg text-center'>12.12.2022</p>
                            </div>
                            <div className='flex flex-col items-center mt-4'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("flight_date")}</p>
                                <p className='text-gray-700 font-semibold text-lg text-center'>12.12.2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[42%] h-[96%] p-5 bg-white rounded-xl shadow-md flex flex-col overflow-auto'>
                    <div className='flex'>
                        <div className='w-[45%] flex flex-col items-center border-r pr-5 gap-5'>
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("patient_type")}</p>
                                <p className='text-gray-700 font-semibold text-lg text-center'>{patient.patientType}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("marital_status")}</p>
                                <p className='text-gray-700 font-semibold w-full text-center'>{patient.maritalStatus}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("has_given_birth")}</p>
                                <p className='text-gray-700 font-semibold w-full text-center'>{patient.childrenCount > 0 ? t("yes") : t("no")}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("current_diseases")}</p>
                                <p className='text-gray-700 font-semibold w-full text-center'>{patient.currentDiseases || t("none")}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("medications")}</p>
                                <p className='text-gray-700 font-semibold w-full text-center'>{patient.medications || t("none")}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("allergies")}</p>
                                <p className='text-gray-700 font-semibold w-full text-center'>{patient.allergies || t("none")}</p>
                            </div>
                        </div>
                        <div className='w-[45%] pl-5 flex flex-col items-center gap-5'>
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("referral")}</p>
                                <p className='text-gray-700 font-semibold w-full text-center'>{patient.referral || '-'}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("profession")}</p>
                                <p className='text-gray-700 font-semibold w-full text-center'>{patient.profession || '-'}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("workplace")}</p>
                                <p className='text-gray-700 font-semibold w-full text-center'>{patient.workplace || '-'}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("procedure")}</p>
                                <p className='text-gray-700 font-semibold w-full text-center'>{patient.procedure || '-'}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("smokes")}</p>
                                <p className='text-gray-700 font-semibold w-full text-center'>{patient.smoke ? t("yes") : t("no")}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-gray-500 font-semibold mb-1'>{t("operations")}</p>
                                <p className='text-gray-700 font-semibold w-full text-center'>{patient.operations || '-'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[90%] mt-6 flex flex-col items-center justify-center'>
                        <p className='text-gray-500 font-semibold mb-1'>{t("complaints")}</p>
                        <p className='text-gray-700 font-semibold w-full text-center'>{patient.complaint || t("no_complaints")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientOverwiev;
