import React, { useState } from 'react'
import { t } from "i18next";
import { Check } from "lucide-react";
import { destroyModal } from "../Utils/Modal";
import { useCreateWorkerTaskMutation, useGetAllWorkerQuery } from '../../store/patient2';
import { useFormik } from 'formik';
import CustomerCombobox from '../tools/CustomCombobox'

const WorkerQuest = () => {

  const [ activePage, setActivePage] = useState(1)
  const [ createWorkerTask ] = useCreateWorkerTaskMutation()
  const { data, isLoading, error } = useGetAllWorkerQuery({page: activePage})
  //console.log(data);

  const leaves = data?.results.map(worker => ({
      id: worker.id,
      name: `${worker.first_name} ${worker.last_name}`,
      image: worker.worker_image
  }))

  const submit = async (values, actions) => {
    //console.log("Form verileri gönderiliyor:", JSON.stringify(values, null, 2))
   
  try {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key])
    })
    await createWorkerTask(formData).unwrap()
    actions.resetForm()
    destroyModal()
    //refetch()
  } catch (error) {
    console.log(error)      
  }
  }
  const {values, errors, handleChange, handleSubmit, setFieldValue, setValues } = useFormik({
    initialValues: {
      "task_name": "",
      "start_time": "",
      "end_time": "",
      "description": "",
      "date": "",
      "cheked_person": "",
      "situation": "",
      "person": ""
    },
    onSubmit: submit,
  })
    
    if(isLoading){
    return <div>Yükleniyor...</div>
    }

  return (
    <div className="add-modal z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
    <form onSubmit={handleSubmit} className="bg-lightGray rounded-lg shadow-lg w-full max-w-4xl p-8">
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-cyan-500">GÖREV ATA</h2>
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

      <div className="grid grid-cols-3 gap-x-6 gap-y-4 py-6">
        <div>
          <label className="block text-sm font-medium text-gray-500">Çalışan</label>
            <CustomerCombobox
                value={values.person} 
                onChange={(id) => setFieldValue('person', id)} 
                customers={leaves} 
                placeholder="Çalışan Seçin"
            />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Görevi</label>
          <input
            type="text"
            name="task_name"
            value={values.task_name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
          />
        </div>      
        <div>
          <label className="block text-sm font-medium text-gray-500">Başlangıç Saati</label>
          <input
            type="time"
            name="start_time"
            value={values.start_time}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Bitiş Saati</label>
          <input
            type="time"
            name="end_time"
            value={values.end_time}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
          />
        </div>
        <div className='col-span-2'>
          <label className="block text-sm font-medium text-gray-500">İş Tanımı</label>
          <input
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
          />
        </div>


      </div>

      <div className="flex justify-between pt-2">
        <button
          type="submit"
          className="ml-auto bg-cyan-500 flex items-center justify-around text-white rounded-md pr-6 pl-5 py-2 shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          <Check className="mr-1" size={20} />
          {t("save")}
        </button>
      </div>
    </form>
  </div>
  )
}

export default WorkerQuest