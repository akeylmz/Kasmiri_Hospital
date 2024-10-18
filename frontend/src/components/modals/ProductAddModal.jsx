import React, { useState } from "react";
import { t } from "i18next";
import { Check } from "lucide-react";
import { destroyModal } from "../Utils/Modal";
import { useDispatch } from "react-redux";
import { addMedicine } from "../../store/medicine";

const ProductAddModal = () => {
  const dispatch = useDispatch(); 
  const [formData, setFormData] = useState({
    stock_name: "",
    stock_buyed: null,
    stock_haved: null,
    stock_ut: null,
    stock_skt: null,
    stock_wharehouse: "",
    stock_position: "",
    stock_group: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSave = async () => {
    const url = 'http://127.0.0.1:8000/api/stock/';    
    console.log('Form Data:', JSON.stringify(formData, null, 2));

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Success:', data);
        dispatch(addMedicine(data));
        destroyModal(); 
    } catch (error) {
        console.error('Error:', error);
    }
};

  return (
    <div className="add-modal z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <div className="bg-lightGray rounded-lg shadow-lg w-full max-w-4xl p-8">
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-cyan-500">Ürün Ekle</h2>
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
          <div>
            <label className="block text-sm font-medium text-gray-500">Ürün Adı</label>
            <input
              type="text"
              name="stock_name"
              value={formData.stock_name}
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500">Stok</label>
            <input
              type="number"
              name="stock_haved"
              value={formData.stock_haved || ''} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500">S.K.T</label>
            <input
              type="text"
              name="stock_skt"
              value={formData.stock_skt || ''}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500">Ürün Grubu</label>
            <input
              type="text"
              name="stock_group"
              value={formData.stock_group}
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
            />
          </div>

        </div>

        <div className="flex justify-between pt-2">
          <button
            onClick={handleSave}
            className="ml-auto bg-cyan-500 flex items-center justify-around text-white rounded-md pr-6 pl-5 py-2 shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            <Check className="mr-1" size={20} />
            {t("save")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductAddModal;
