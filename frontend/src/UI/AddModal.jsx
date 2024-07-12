import React, { useReducer } from 'react'


const reducer= ( state, action) =>{
    switch(action.type){
        case 'SET_NAME':
            return {
                ...state,
                name: action.value
            }
        case 'SET_SURNAME':
            return {
                ...state,
                surname: action.value
            }
        case 'SET_PHONE':
            return {
                ...state,
                phone: action.value
            }
        case 'SET_MAİL':
            return {
               ...state,
               mail: action.value
            }
        case 'SET_ISTURK':
            return {
                ...state,
                isTurk: action.value
            }
        case 'SET_ID':
            return {
                ...state,
                id: action.value
            }
        case 'SET_LOCATİON':
            return {
                ...state,
                location: action.value
            }
    }

}

const AddModal = ( {setModalOpen, setUser, users }) => {

    const [state, dispatch] = useReducer(reducer,{
        name: '',
        surname: '',
        phone: '',
        mail: '',
        isTurk: false,
        location: '',
        id: ''
    })
const submitHandler = e =>{
    e.preventDefault()
    setUser([...users, { ...state }]);
    setModalOpen(false);
}

  return (
    <div className='w-full h-full absolute top-0 left-0 bg-[#0000004b] flex justify-center items-center backdrop-blur-sm z-50'>        
        <div className='w-[400px] h-[620px] p-5 bg-white border rounded-lg relative'>
            <p onClick={()=> setModalOpen((prevstate) => !prevstate)} className='text-lg font-bold absolute right-2 top-2 cursor-pointer'>X</p>
            <form onSubmit={submitHandler} className='w-full h-full flex flex-col'>
                <h3 className='p-3 my-2 text-[20px]'>Hasta Ekle</h3>
                <div className='flex-col flex'>
                    <label htmlFor="">Adı</label>
                    <input value={state.name} onChange={(e)=>dispatch({type:'SET_NAME',value:e.target.value})} className='outline-none border rounded' type="text" />
                </div>
                <div className='flex-col flex'>
                    <label htmlFor="">Soyadı</label>
                    <input value={state.surname} onChange={(e)=>dispatch({type:'SET_SURNAME',value:e.target.value})} className='outline-none border rounded' type="text" />
                </div>
               <div className='flex-col flex'>
                    <label htmlFor="">Telefon</label>
                    <input value={state.phone} onChange={(e)=>dispatch({type:'SET_PHONE',value:e.target.value})} className='outline-none border rounded' type="text" />
               </div>
                <div className='flex-col flex'>
                    <label htmlFor="">E-Mail</label>
                    <input value={state.mail} onChange={(e)=>dispatch({type:'SET_MAİL',value:e.target.value})} className='outline-none border rounded' type="text" />
                </div>
                <div className='flex-col flex'>
                    <label htmlFor="">Konum</label>
                    <input value={state.location} onChange={(e)=>dispatch({type:'SET_LOCATİON',value:e.target.value})} className='outline-none border rounded' type="text" />
                </div>
                <div className='flex justify-between my-3'>
                    <label htmlFor="">TC Vatandaşı Değilim</label>
                    <input checked={state.isTurk} onChange={(e)=>dispatch({type:'SET_ISTURK',value:e.target.checked })} className='outline-none focus:ring-0 rounded mr-2' type="checkbox" />
                </div>
                <div className='flex-col flex'>
                    {!state.isTurk? <label htmlFor="">TC Numarası</label> : <label htmlFor="">Pasaport Numarası</label>}                    
                    <input value={state.id} onChange={(e)=>dispatch({type:'SET_ID',value:e.target.value})} className='outline-none border rounded' type="text" />
                </div>                
                <div className='flex justify-between my-3'>
                    <button className='w-full border rounded-lg border-blue-600 bg-blue-600 text-white py-2 mt-2'>Kaydet</button>
                </div>
               
            </form>
        </div>
    </div>
  )
}

export default AddModal