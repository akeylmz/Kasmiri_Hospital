import React, { useEffect } from 'react';
import TableComp from '../../UI/TableComp';
import { useDispatch, useSelector } from 'react-redux';
import TopMenu from '../../UI/TopMenu';
import useSWR from "swr"
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { setPatient } from '../../store/patient';



const fetcher = (url) => fetch(url).then((res) => res.json());

const Patients = () => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    //const { data, error } = useSWR('http://127.0.0.1:8000/api/patientcard/', fetcher);
    const  { patients } = useSelector( state => state.patient);
    // console.log(patients);
    
    // useEffect(() => {
    //     if (data) {
    //         console.log(data)
    //         dispatch(setPatient(data)); 
    //     }
    // }, [data, dispatch]);

    // if (error) return <div>Failed to load patients</div>;
    // if (!data) return <div>Loading...</div>;

   
    
    const tabs = [
        { label: t('generalOverview'), active: false },
        { label: t('products'), active: true, submenu: [
            { label: 'İzin Yönetimi', active: true },
            { label: 'Çalışma Saatleri', active: false },
        ] },
        { label: t('statistics'), active: false },
    ];


   
    
    
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
                user.hastaBolumu || '', // Hasta bölümü
                        user.kayitAcan || '',   // Kayıt açan
                        user.onaylayanDoktor || '', // Onaylayan doktor
                        user.girisTarih || '',   // Giriş saat/tarih
                        user.taburcuTarih || '', // Taburcu olduğu saat/tarih
                        user.sigorta || '',       // Sigorta
                
                [
                    <button key="edit" className='h-8 px-4 flex items-center rounded bg-cyan-500 text-white'>
                        {t('edit')}
                    </button>,
                    <button key="delete" onClick={() => deleteHandler(user.id)} className='h-8 px-4 flex items-center rounded bg-orange-500 text-white'>
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
