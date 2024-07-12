import React, { useState } from 'react'
import Table from '../components/Table'
import AddModal from '../UI/AddModal'
import { TbUserEdit } from 'react-icons/tb'

const HomePage = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const [users, setUser] = useState([
        {
            name: "Ahmet Yusuf",
            surname: "Kuru",
            phone: "512 452 56 54",
            email: "Yusuf@gmail.com",
            location: "Trabzon",
            isTurk: true,
            id: "1253423",
            situation: "Ödendi"
        },
        {
            name: "Mehmet Enes",
            surname: "Doğan",
            phone: "512 452 56 54",
            email: "Mehmet@gmail.com",
            location: "Ankara",
            isTurk: true,
            id: "124423",
            situation: "Bekliyor"
        },
        {
            name: "Ahmet Kemal",
            surname: "Yılmaz",
            phone: "512 452 56 54",
            email: "Kemal@gmail.com",
            location: "Konya",
            isTurk: true,
            id: "1234233",
            situation: "Günü Geçti"
        }
    ])

    const deleteHandler = (id) =>{
        setUser((prevUsers) => prevUsers.filter(user => user.id !== id));
    }

  return (
    <div>        
        {modalOpen && <AddModal setModalOpen={setModalOpen} setUser={setUser} users={users}/>}
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
            tbody={users.map((user) =>([
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

export default HomePage