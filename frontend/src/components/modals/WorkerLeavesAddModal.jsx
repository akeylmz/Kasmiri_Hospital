import React, { useEffect, useState } from 'react'
import { destroyModal } from '../Utils/Modal'
import { useFormik } from 'formik'
import { Check } from 'lucide-react'
import { useCreateWorkerLeavesMutation, useGetAllWorkerQuery } from '../../store/patient2'
import CustomerCombobox from '../tools/CustomCombobox'

const WorkerLeavesAddModal = () => {
 
    const [ activePage, setActivePage] = useState(1)
    const [ createWorkerLeaves ] = useCreateWorkerLeavesMutation()
    const { data, isLoading, error } = useGetAllWorkerQuery({page: activePage})
    console.log(data);

    const customers = data?.results.map(worker => ({
        id: worker.id,
        name: `${worker.first_name} ${worker.last_name}`,
        image: worker.worker_image
    }))
    
    if(isLoading){
    return <div>Yükleniyor...</div>
    }
    
    const submit = async (values, actions) => {
          console.log("Form verileri gönderiliyor:", JSON.stringify(values, null, 2))
        
        try {
          const formData = new FormData();
          Object.keys(values).forEach((key) => {
            formData.append(key, values[key])
          })
          //await createWorkerLeaves(formData).unwrap()
          //actions.resetForm()
          //destroyModal()
          // refetch()
        } catch (error) {
          console.log(error)      
        }
    }
    const {values, errors, handleChange, handleSubmit, setFieldValue, setValues } = useFormik({
      initialValues: {
        "start_date": "",
        "end_date": "",
        "leave_days": "",
        "person": "",
        "customer": 2
      },
      onSubmit: submit,
    })
    
    //   useEffect(() => {
        //   if (data) {
        //     setValues({
        //       stock_name: data.order_name || '',
        //       stock_buyed: data.order_number || '',
        //       stock_haved: data.order_number || '',
        //       stock_wharehouse: data.order_wharehouse || '',
        //       stock_pozition: data.order_pozition || '',
        //       stcok_group: data.order_group || '',
        //       stock_ut: '',
        //       stock_skt: '',
        //     });
        //   }
        // }, [data]);
      
    return (
      <div className="add-modal z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[650px]">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 w-full ">
          <div className="flex justify-between items-center pb-3 border-b mb-5 border-gray-200">
            <h2 className="text-lg font-semibold text-cyan-500">İZİN OLUŞTUR</h2>
            <button
              onClick={() => destroyModal()}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 py-6">
            <div>
                <CustomerCombobox 
                    value={values.customer} 
                    onChange={(id) => setFieldValue('customer', id)} 
                    customers={customers} 
                />
            </div>
          <div>
              <label className="block text-sm font-medium text-gray-500">Çalışan</label>
              <input
                type="text"
                name="person"
                value={values.person}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">İzin Süresi</label>
              <input
                type="text"
                name="leave_days"
                value={values.leave_days}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Başlangıç Tarihi</label>
              <input
                type="date"
                name="start_date"
                value={values.start_date}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500">Bitiş Tarihi</label>
              <input
                type="date"
                name="end_date"
                value={values.end_date}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>            
          </div>
          <button
            type="submit"
            className="mx-auto bg-cyan-500 flex items-center justify-around text-white rounded-md px-10 py-2 shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            <Check className="mr-1" size={20} />
            Kaydet
          </button>
        </form>
      </div>
    )
}

export default WorkerLeavesAddModal