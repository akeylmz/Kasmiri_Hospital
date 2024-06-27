import React, { useReducer } from 'react'


const reducer= ( state, action) =>{
    switch(action.type){
        case 'SET_NAME':
            return {
                ...state,
                name: action.value
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
        case 'SET_LOCATİON':
            return {
                ...state,
                location: action.value
            }
    }

}

const AddModal = () => {

    const [state, dispatch] = useReducer(reducer,{
        name: '',
        phone: '',
        mail: '',
        location: ''
    })

  return (
    <div className='w-full h-full absolute top-0 left-0 bg-[#0000004b] flex justify-center items-center backdrop-blur-sm z-50'>
        <div className='w-[400px] h-[500px] p-5 bg-white border rounded-lg'>
            <form action="" className='w-full h-full flex flex-col'>
                <h3 className='p-3 my-2 text-[20px]'>Hasta Ekle</h3>
                <div className='flex-col flex'>
                    <label htmlFor="">Hasta Adı</label>
                    <input value={state.name} onChange={(e)=>dispatch({type:'SET_NAME',value:e.target.value})} className='outline-none border rounded' type="text" />
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
            </form>
        </div>
    </div>
  )
}

export default AddModal