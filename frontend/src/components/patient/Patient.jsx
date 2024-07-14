
import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Table from '../Table'
import AddModal from '../../UI/AddModal'
import { useSelector } from 'react-redux'


const Patient = () => {
    
    const [modalOpen, setModalOpen] = useState(false)

    const  { patients } = useSelector( state => state.patient)

    const deleteHandler = (id) =>{
        setUser((prevUsers) => prevUsers.filter(user => user.id !== id));
    }
  return (
    <div className='w-full h-full'>        
        { modalOpen &&<AddModal setModalOpen={setModalOpen}/>}
        <div className='flex justify-end px-4 my-4 pb-4 border-b border-gray-400'>
            <button 
                onClick={()=> setModalOpen((prevstate) => !prevstate)}
                className='border border-gray-400 rounded-lg py-2 px-4 hover:bg-blue-100 hover:border-gray-600 transition-all '>
                Hasta Ekle
            </button>
        </div>
        <Table 
            thead={[
                {name: "Hasta Adı", sortable: true }, 
                {name: "Soyadı", sortable: true }, 
                {name:  "Telefon"},
                {name: "Mail", sortable: true},
                {name: "Konum", sortable: true},
                {name: "TC/Pasaport"},
                // {name: "Ödeme Durumu"},
                {name: "İşlmeler", width: 100}

                ]}
            tbody={patients.map((user) =>([
                user.name,
                user.surname,
                user.phone,
                user.email,
                user.location,
                user.id,
                // user.situation,
                [
                    <button className='h-8 px-4 flex items-center rounded bg-blue-600 text-white'>Düzenle</button>,
                    <button onClick={()=>deleteHandler(user.id)} className='h-8 px-4 flex items-center rounded bg-red-500 text-white'>Sil</button>
                ]
            ]))}
            searchable={true}
        />
    </div>
  )
}

export default Patient