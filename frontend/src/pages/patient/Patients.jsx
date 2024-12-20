import React, { useEffect, useState } from 'react';
import TableComp from '../../UI/TableComp';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useDeletePatientMutation, useGetPatientIdQuery, useGetPatientsQuery } from '../../store/patient2';
import { createModal } from '../../components/Utils/Modal';
import TableComp2 from '../../UI/TableComp2';
import { useNavigate } from 'react-router-dom';
import { formatISODate } from '../../components/Utils/DateFormat';
import Loading from '../../components/tools/Loading';
import { capitalizeWords } from '../../components/Utils/capitalizeWords';


const Patients = () => {
   
    const navigate = useNavigate()
    const [searchable, setSearchable] = useState(''); 
    const { t } = useTranslation()
    const [deletePatient ] = useDeletePatientMutation()
    const [ activePage, setActivePage] = useState(1)
    const { data: patients, error, isLoading, refetch } = useGetPatientsQuery({page: activePage, filters: searchable})
    //console.log(patients)
    
    const [firstLoad, setFirstLoad] = useState(false);
    const [editToggle, setEditToggle] = useState(false);
    const [selectedPatientId, setSelectedPatientId] = useState(null);
    const { data: patient, isLoading: patientLoading } = useGetPatientIdQuery(selectedPatientId, {
        skip: !selectedPatientId,
    });
    
    useEffect(() => {
        if (!isLoading && firstLoad && patient) { 
            createModal("patient", patient, true, selectedPatientId);
            setFirstLoad(false)
        }
    }, [patient, patientLoading, editToggle]);
  
    

     const thead = [
        { name: t('name'), sortable: true, minWidth: 180 },
        { name: t('surname'), sortable: true, minWidth: 130 },
        { name: t("Attending Doctor"), sortable: true, minWidth: 160 },                               
        { name: t('phone') },
        { name: t('email'), sortable: true },
        { name: t('location'), sortable: true },
        { name: t('tcPassport') },
        { name: t("Patient Department"), sortable: true },
        { name: t("Registrar"), sortable: true },
        { name: t("Approving Doctor"), sortable: true },
        { name: t("Entry Date/Time"), sortable: true },
        { name: t("Discharge Date/Time"), sortable: true },
        { name: t("Insurance"), sortable: true },
        { name: t('actions'), action: true},
        { name: "none"},
    ]

    return (
        <motion.div
            initial={{opacity:0}}   
            animate={{opacity:1}}
            className='w-full h-full flex flex-col items-center justify-evenly'>       
            {isLoading && 
               <Loading />
            }
           {patients && !isLoading && <div className='w-[95%] h-[95%]'>
                <TableComp2
                    thead={thead}
                    tbody={patients.results.map((user) => [        
                    <button 
                        type='button' 
                        onClick={ () => navigate(`/patients/${user.id}`) }
                        className='flex items-center gap-x-3 w-full'>
                        <img src={user.patient_image} alt={`${user.first_name} avatar`} className="w-10 h-10 rounded-full" />
                        <p>{capitalizeWords(user.first_name)}</p>
                    </button>,              
                    capitalizeWords(user.last_name),        
                    capitalizeWords(user.relevant_worker),       
                    user.mobile_phone1, 
                    user.email,
                    user.city,                 
                    user.national_id || '',   
                    user.patient_part || '',
                    capitalizeWords(user.start_worker) || '',   
                    capitalizeWords(user.onaylayan_doktor) || '', 
                    formatISODate(user.created_at) || '',  
                    user.discharge_date || '', 
                    user.insurance_info || '',   
                    <div className='flex gap-x-2'>
                        <button 
                            key="edit" 
                            onClick={() => {    
                                setFirstLoad(true)                              
                                setSelectedPatientId(user.id)  
                                setTimeout(()=>{setEditToggle(prev => !prev)}, 200)                   
                            }}
                            className='h-8 px-4 flex items-center rounded bg-cyan-500 text-white'>
                            {t('edit')}
                        </button>
                        <button 
                            key="delete" 
                            onClick={async () => { 
                                await deletePatient(user.id) 
                                refetch()
                            }}
                            className='h-8 px-4 flex items-center rounded bg-orange-500 text-white'>
                            {t('delete')}
                        </button>
                    </div>                        
                ])}
                searchable = {searchable}
                setSearchable = {setSearchable}
                tableTitle = {t('patientList')}
                modal = {'patient'}
                scroll = {true}
                page = {patients.count}
                activePage = {activePage}
                setActivePage = {setActivePage}
            />
           </div>}
        </motion.div>
    );
}

export default Patients;
