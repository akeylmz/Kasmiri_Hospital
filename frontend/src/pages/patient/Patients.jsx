import React, { useEffect, useState } from 'react';
import TableComp from '../../UI/TableComp';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useDeletePatientMutation, useGetPatientIdQuery, useGetPatientsQuery } from '../../store/patient2';
import { createModal } from '../../components/Utils/Modal';


const Patients = () => {
    const { t } = useTranslation();
    const [deletePatient ] = useDeletePatientMutation()
    const { data: patients, error, isLoading, refetch } = useGetPatientsQuery();

    const [firstLoad, setFirstLoad] = useState(false);
    const [editToggle, setEditToggle] = useState(false);
    const [selectedPatientId, setSelectedPatientId] = useState(null);
    const { data: patient, isLoading: patientLoading } = useGetPatientIdQuery(selectedPatientId, {
        skip: !selectedPatientId,
    });
    useEffect(() => {
        if (!isLoading && firstLoad && patient) { 
            createModal("patient", patient, true);
            setFirstLoad(false)
        }
    }, [patient, patientLoading, editToggle]);
  
     if (error) return <div>Failed to load patients</div>
     if (isLoading) return <div>Loading...</div>

    return (
        <motion.div
            initial={{opacity:0}}   
            animate={{opacity:1}}
            className='w-full h-full flex flex-col items-center justify-evenly'>       
            
           <div className='w-[95%] h-[95%]'>
                <TableComp
            thead={[
                { name: t('name'), sortable: true },
                { name: "İlgilenen Doktor", sortable: true },                
                { name: t('surname'), sortable: true },
                { name: t('phone') },
                { name: t('email'), sortable: true },
                { name: t('location'), sortable: true },
                { name: t('tcPassport') },
                { name: "Hasta bölümü", sortable: true },
                { name: "Kayıt açan", sortable: true },
                { name: "Onaylayan doktor", sortable: true },
                { name: "Giriş saat/tarih", sortable: true },
                { name: "Taburcu olduğu saat/tarih", sortable: true },
                { name: "Sigorta", sortable: true },
                { name: t('actions'), action: true},
                { name: "none"},
            ]}
            tbody={patients.map((user) => [                
                [<img src={user.patient_image} alt={`${user.first_name} avatar`} className="w-10 h-10 rounded-full" />, user.first_name],                
                user.last_name,        
                user.ilgilenenDoktor,       
                user.mobile_phone1, 
                user.email,
                user.city,                 
                user.national_id || '',   
                user.id , 
                user.hastaBolumu || '',
                user.kayitAcan || '',   
                user.onaylayanDoktor || '', 
                user.girisTarih || '',  
                user.taburcuTarih || '', 
                user.sigorta || '',                   
                [
                    <button 
                        key="edit" 
                        onClick={() => {    
                            setFirstLoad(true)                              
                            setSelectedPatientId(user.id)  
                            setTimeout(()=>{setEditToggle(prev => !prev)}, 200)                   
                        }}
                        className='h-8 px-4 flex items-center rounded bg-cyan-500 text-white'>
                        {t('edit')}
                    </button>,
                    <button 
                        key="delete" 
                        onClick={async () => { 
                            await deletePatient(user.id) 
                            refetch()
                        }}
                        className='h-8 px-4 flex items-center rounded bg-orange-500 text-white'>
                        {t('delete')}
                    </button>
                ] ,
                         
               
            ])}
            searchable={true}
            tableTitle={t('patientList')}
            modal={'patient'}
            detail={7}
            scroll={true}
            />
           </div>
        </motion.div>
    );
}

export default Patients;
