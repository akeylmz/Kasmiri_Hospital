import React from 'react'
import { t } from "i18next";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { destroyModal } from "../Utils/Modal";

const WorkerCheck = () => {
  return (
    <div className="add-modal z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
    <div className="bg-lightGray rounded-lg shadow-lg w-full max-w-5xl p-8">
      <div className="flex justify-between items-center pb-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-cyan-500">GÖREV KONTROL</h2>
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

      <div className="grid grid-cols-4 gap-x-6 gap-y-4 py-6">
        <div className='flex flex-col '>
            <label className="block text-sm font-medium text-gray-500">Görev Yeri</label>
            <span className='mt-2 text-lg font-semibold text-gray-600'>Hasta Karşılama</span>
        </div>

        <div>
        <div className='flex flex-col '>
          <label className="block text-sm font-medium text-gray-500">Saati</label>
          <span className='mt-2 text-lg font-semibold text-gray-600'>08:00 - 10:30</span>
        </div>
        </div>

        <div>            
            <div className="flex items-center h-full mt-2">
                <label className="inline-flex items-center mr-4">
                <input
                    type="radio"
                    name="approval"
                    className="form-radio h-6 w-6 text-green-500 border-gray-300 rounded focus:ring-cyan-500 focus:border-cyan-500"
                />
                <span className="ml-2 text-lg text-gray-700">✔ </span>
                </label>
                <label className="inline-flex items-center">
                <input
                    type="radio"
                    name="approval"
                    className="form-radio h-6 w-6 text-red-500 border-gray-300 rounded focus:ring-cyan-500 focus:border-cyan-500"
                />
                <span className="ml-2 text-lg text-gray-700">✘ </span>
                </label>
            </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500">Yorum</label>
          <input
            type="text"
            name="place_of_birth"
            className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
          />
        </div>


      </div>
      
      <div className="grid grid-cols-4 gap-x-6 gap-y-4 py-6">
        <div className='flex flex-col '>
            <span className='mt-2 text-lg font-semibold text-gray-600'>Hasta Bakımı</span>
        </div>

        <div>
        <div className='flex flex-col '>
          <span className='mt-2 text-lg font-semibold text-gray-600'>10:30 - 12:00</span>
        </div>
        </div>

        <div>            
            <div className="flex items-center h-full mt-2">
                <label className="inline-flex items-center mr-4">
                <input
                    type="radio"
                    name="approval2"
                    className="form-radio h-6 w-6 text-green-500 border-gray-300 rounded focus:ring-cyan-500 focus:border-cyan-500"
                />
                <span className="ml-2 text-lg text-gray-700">✔ </span>
                </label>
                <label className="inline-flex items-center">
                <input
                    type="radio"
                    name="approval2"
                    className="form-radio h-6 w-6 text-red-500 border-gray-300 rounded focus:ring-cyan-500 focus:border-cyan-500"
                />
                <span className="ml-2 text-lg text-gray-700">✘ </span>
                </label>
            </div>
        </div>

        <div>
          <input
            type="text"
            name="place_of_birth"
            className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
          />
        </div>


      </div>
      <div className="grid grid-cols-4 gap-x-6 gap-y-4 py-6">
        <div className='flex flex-col '>
            <span className='mt-2 text-lg font-semibold text-gray-600'>Güzellik Birimi</span>
        </div>

        <div>
        <div className='flex flex-col '>
          <span className='mt-2 text-lg font-semibold text-gray-600'>13:00 - 15:00</span>
        </div>
        </div>

        <div>            
            <div className="flex items-center h-full mt-2">
                <label className="inline-flex items-center mr-4">
                <input
                    type="radio"
                    name="approval3"
                    className="form-radio h-6 w-6 text-green-500 border-gray-300 rounded focus:ring-cyan-500 focus:border-cyan-500"
                />
                <span className="ml-2 text-lg text-gray-700">✔ </span>
                </label>
                <label className="inline-flex items-center">
                <input
                    type="radio"
                    name="approval3"
                    className="form-radio h-6 w-6 text-red-500 border-gray-300 rounded focus:ring-cyan-500 focus:border-cyan-500"
                />
                <span className="ml-2 text-lg text-gray-700">✘ </span>
                </label>
            </div>
        </div>

        <div>
          <input
            type="text"
            name="place_of_birth"
            className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
          />
        </div>


      </div>
      <div className="grid grid-cols-4 gap-x-6 gap-y-4 py-6">
        <div className='flex flex-col '>
            <span className='mt-2 text-lg font-semibold text-gray-600'>Laborant</span>
        </div>

        <div>
        <div className='flex flex-col '>
          <span className='mt-2 text-lg font-semibold text-gray-600'>15:00 - 17:00</span>
        </div>
        </div>

        <div>            
            <div className="flex items-center h-full mt-2">
                <label className="inline-flex items-center mr-4">
                <input
                    type="radio"
                    name="approval4"
                    className="form-radio h-6 w-6 text-green-500 border-gray-300 rounded focus:ring-cyan-500 focus:border-cyan-500"
                />
                <span className="ml-2 text-lg text-gray-700">✔ </span>
                </label>
                <label className="inline-flex items-center">
                <input
                    type="radio"
                    name="approval4"
                    className="form-radio h-6 w-6 text-red-500 border-gray-300 rounded focus:ring-cyan-500 focus:border-cyan-500"
                />
                <span className="ml-2 text-lg text-gray-700">✘ </span>
                </label>
            </div>
        </div>

        <div>
          <input
            type="text"
            name="place_of_birth"
            className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
          />
        </div>


      </div>

      <div className="flex justify-between pt-2">
        <button
        onClick={destroyModal}
          className="ml-auto bg-cyan-500 flex items-center justify-around text-white rounded-md pr-6 pl-5 py-2 shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        >
          <Check className="mr-1" size={20} />
          {t("save")}
        </button>
      </div>
    </div>
  </div>
  )
}

export default WorkerCheck