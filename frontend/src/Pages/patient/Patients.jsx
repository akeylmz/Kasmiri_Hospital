import React from 'react';
import TableComp from '../../UI/TableComp';
import { useSelector } from 'react-redux';
import TopMenu from '../../UI/TopMenu';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Patients = () => {
    const { t } = useTranslation();
    
    const tabs = [
        { label: t('generalOverview'), active: false },
        { label: t('products'), active: true, submenu: [
            { label: 'İzin Yönetimi', active: true },
            { label: 'Çalışma Saatleri', active: false },
        ] },
        { label: t('statistics'), active: false },
    ];

    const  { patients } = useSelector( state => state.patient);
    
    return (
        <motion.div
            initial={{opacity:0}}   
            animate={{opacity:1}}
            className='w-full h-full flex flex-col items-center justify-evenly'>       
            
           <div className='w-[95%] h-[95%]'>
                <TableComp
            thead={[
                { name: t('name'), sortable: true },
                { name: t('surname'), sortable: true },
                { name: t('phone') },
                { name: t('email'), sortable: true },
                { name: t('location'), sortable: true },
                { name: t('tcPassport') },
                { name: t('actions'), action: true},
            ]}
            tbody={patients.map((user) => [
                [<img src={user.image} alt={`${user.name} avatar`} className="w-10 h-10 rounded-full" />, user.name],
                user.surname,
                user.contact, 
                user.email,
                user.location, 
                user.tc,  
                [
                <button key="edit" className='h-8 px-4 flex items-center rounded bg-cyan-500 text-white'>
                    {t('edit')}
                </button>,
                <button key="delete" onClick={() => deleteHandler(user.id)} className='h-8 px-4 flex items-center rounded bg-orange-500 text-white'>
                    {t('delete')}
                </button>
                ]
            ])}
            searchable={true}
            tableTitle={t('patientList')}
            modal={'patient'}
            />
           </div>
        </motion.div>
    );
}

export default Patients;
