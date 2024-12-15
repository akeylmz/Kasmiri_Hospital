import React from 'react'
import { destroyModal } from '../Utils/Modal';
import { useFormik } from 'formik';
import { useCreateTaskCheckMutation } from '../../store/patient2'
import { FaCheck } from "react-icons/fa6";

const WorkerTask = ({ task }) => {

    console.log(task);
    const [ createTaskCheck ] = useCreateTaskCheckMutation()
    
     const submit = async (values, actions) => {
      console.log(values);
      
      //  console.log("Form verileri gönderiliyor:", JSON.stringify(values, null, 2))
      
      try {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          formData.append(key, values[key])
        })
         await createTaskCheck(formData).unwrap()
        // const updateFormData = new FormData();
        // updateFormData.append("order_stuation", "Tamamlandı")
        // await updateStockOrder({newOrder: updateFormData, orderID:data.id}).unwrap();
        // actions.resetForm()
        // destroyModal()
        // refetch()
      } catch (error) {
        console.log(error)      
      }
    }
    
    const {values, errors, handleChange, handleSubmit, setFieldValue, setValues } = useFormik({
      initialValues: {
        task_check: task.task_checks[0]?.task_check || '',
        description: task.task_checks[0]?.description || "",
        cheked_person: task.task_checks[0]?.cheked_person || '',
        task: task.id
      },
      onSubmit: submit,
    })

    if(!task && !task.task_checks[0]){
        return <p>BOŞ</p>
    }
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-5 gap-x-6 gap-y-4 py-6 items-center" style={{ gridTemplateColumns: "repeat(4, 1fr) 30px" }}>
        <div className='flex flex-col '>
            <span className='mt-2 text-lg font-semibold text-gray-600'>{task.task_name}</span>
        </div>

        <div className='flex flex-col '>
          <span className='mt-2 text-lg font-semibold text-gray-600'>{`${task.start_time.slice(0, 5)} - ${task.end_time.slice(0, 5)}`}</span>
        </div>

        <div className="flex items-center h-full">
            <label className="inline-flex items-center mr-4">
            <input
                type="radio"
                name="task_check"
                value='true'
                checked={values.task_check === true}
                onChange={(e) => setFieldValue("task_check", e.target.value === "true")}
                className="form-radio h-6 w-6 text-green-500 border-gray-300 rounded focus:ring-cyan-500 focus:border-cyan-500"
            />
            <span className="ml-2 text-lg text-gray-700">✔ </span>
            </label>
            <label className="inline-flex items-center">
            <input
                type="radio"
                name="task_check"
                value='false'
                checked={values.task_check === false}
                onChange={(e) => setFieldValue("task_check", e.target.value === "true")}
                className="form-radio h-6 w-6 text-red-500 border-gray-300 rounded focus:ring-cyan-500 focus:border-cyan-500"
            />
            <span className="ml-2 text-lg text-gray-700">✘ </span>
            </label>
        </div>        

        <div>
          <input
            type="text"
            name="place_of_birth"
            className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
          />
        </div>
        <button type='submit' className='bg-cyan-600 m-auto px-2 py-1 rounded-lg'><FaCheck color='white' size={30} /></button>

    </form>
  )
}

export default WorkerTask