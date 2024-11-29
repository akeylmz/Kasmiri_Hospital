import React, { useState } from "react";
import { t } from "i18next";
import { Check } from "lucide-react";
import { destroyModal } from "../Utils/Modal";
import { useDispatch } from "react-redux";
import { useFormik } from 'formik';
import { addMedicine } from "../../store/medicine";
import { stockFormSchemas } from "../../schemas/stockFormSchemas";
import ToothSchema from "../../assets/icons/ToothSchema";

const ToothNotesAddModal = () => {

    
  const submit = (values, actions) => {
    console.log(JSON.stringify(values, null, 2))      
    destroyModal()
  }
  const { values, errors, handleChange, handleSubmit} = useFormik({
    initialValues: {
      stock_name: "",
      stock_buyed: "",
      stock_haved: 10,
      stock_ut: "",
      stock_skt: "",
      stock_wharehouse: "",
      stock_position: "",
      stock_group: ""
    },
    validationSchema : stockFormSchemas,
    onSubmit: submit
  });

  console.log(errors);

  return (
    <div className="add-modal z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <form onSubmit={handleSubmit} className="bg-lightGray rounded-lg shadow-lg w-[1200px] p-8">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-cyan-500">Doktor Notu</h2>
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

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 py-6 h-[700px] ">
                <div className="overflow-y-scroll">
                    <div className="ml-3">
                        <div className="flex items-center">
                            <label className="block font-nunito font-semibold">Hasta Adı :</label>
                            <p className="text-gray-600 ml-2">Mehmet Enes Doğan</p>
                        </div>
                        <div className="flex items-center">
                            <label className="block font-nunito font-semibold">Ülke :</label>
                            <p className="text-gray-600 ml-2">Türkiye</p>
                        </div>
                        <div className="flex items-center">
                            <label className="block font-nunito font-semibold">Yaşı :</label>
                            <p className="text-gray-600 ml-2">13</p>
                        </div>
                        <div className="flex items-center">
                            <label className="block font-nunito font-semibold">Paylaşım İzni :</label>
                            <p className="text-gray-600 ml-2">Evet</p>
                        </div>
                        <div className="flex items-center">
                            <label className="block font-nunito font-semibold">Sigara :</label>
                            <p className="text-gray-600 ml-2">Evet</p>
                        </div>
                        <div className="flex items-center">
                            <label className="block font-nunito font-semibold">Alerji :</label>
                            <p className="text-gray-600 ml-2">Hayır</p>
                        </div>
                        <div className="flex items-center">
                            <label className="block font-nunito font-semibold">Kayıt Tarihi :</label>
                            <p className="text-gray-600 ml-2">12.12.2024</p>
                        </div>
                    </div>
                    <div>                        
                        <div className="mt-7">
                            <label className="block font-medium text-gray-700 ml-3">Yapılacak Ameliyatlar</label>
                            <textarea
                                className='bg-slate-100 mt-1 p-3 rounded-2xl drop-shadow-md w-full h-[150px] outline-none' 
                                placeholder='Yapılacak Ameliyatlar' 
                                name="info_note" id="">
                            </textarea>
                        </div>  
                        <div className="mt-7">
                            <label className="block font-medium text-gray-700 ml-3">Geçirdiği Ameliyatlar</label>
                            <textarea
                                className='bg-slate-100 mt-1 p-3 rounded-2xl drop-shadow-md w-full h-[150px] outline-none' 
                                placeholder='Geçirdiği Ameliyatlar' 
                                name="info_note" id="">
                            </textarea>
                        </div>    
                        <div className="mt-7">
                            <label className="block font-medium text-gray-700 ml-3">Doktor Notu</label>
                            <textarea
                                className='bg-slate-100 mt-1 p-3 rounded-2xl drop-shadow-md w-full h-[150px] outline-none' 
                                placeholder='Doktor Notu' 
                                name="info_note" id="">
                            </textarea>
                        </div>              
                    </div>
                </div>
                <div className="flex flex-col items-end pr-5">
                    <div className="flex items-center gap-x-4">
                        <label className="block text-sm font-medium text-nowrap text-gray-500">Taburcu Tarihi</label>
                        <input
                        type="date"
                        name="stock_ut"
                        value={values.stock_ut}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                        />
                    </div>
                    <div className="w-auto h-auto">
                        <ToothSchema />
                    </div>
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

export default ToothNotesAddModal