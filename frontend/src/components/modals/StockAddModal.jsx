import React, { useState } from 'react';
import { destroyModal } from '../Utils/Modal';

const StockAddModal = () => {
  const [requests, setRequests] = useState([{ id: 1, productName: '', skt: '', depot: '', unit: '', quantity: 3 }]);

  const handleAddRequest = () => {
    setRequests([...requests, { id: requests.length + 1, productName: '', skt: '', depot: '', unit: '', quantity: 3 }]);
  };

  const handleChange = (id, field, value) => {
    const updatedRequests = requests.map(request =>
      request.id === id ? { ...request, [field]: value } : request
    );
    setRequests(updatedRequests);
  };

  const handleSubmit = () => {
    console.log('Talepler:', requests);
  };

  return (
    <div className="add-modal z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px]">
      <div className="bg-white rounded-lg p-6 w-full ">
        <div className="flex justify-between items-center pb-3 border-b mb-5 border-gray-200">
          <h2 className="text-lg font-semibold text-cyan-500">ÜRÜN TALEBİ OLUŞTUR</h2>
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
        {requests.map((request, index) => (
          <div key={index} className="grid grid-cols-7 gap-2 mb-4">
            <select
              className="col-span-2 border text-sm border-gray-300 bg-neutral-100 rounded-2xl outline-none px-2"
              value={request.productName}
              onChange={(e) => handleChange(request.id, 'productName', e.target.value)}
            >
              <option>Ürün Adı</option>
              {/* Diğer ürün seçenekleri buraya eklenebilir */}
            </select>
            <select
              className="border text-sm border-gray-300 bg-neutral-100 rounded-2xl outline-none px-2 py-1"
              value={request.skt}
              onChange={(e) => handleChange(request.id, 'skt', e.target.value)}
            >
              <option>SKT</option>
              {/* Diğer SKT seçenekleri buraya eklenebilir */}
            </select>
            <select
              className="col-span-2 border text-sm border-gray-300 bg-neutral-100 rounded-2xl outline-none px-2 py-1"
              value={request.depot}
              onChange={(e) => handleChange(request.id, 'depot', e.target.value)}
            >
              <option>Talep Edilecek Depo</option>
              {/* Diğer depo seçenekleri buraya eklenebilir */}
            </select>
            <select
              className="border text-sm border-gray-300 bg-neutral-100 rounded-2xl outline-none px-2 py-1"
              value={request.unit}
              onChange={(e) => handleChange(request.id, 'unit', e.target.value)}
            >
              <option>Birim</option>
              {/* Diğer birim seçenekleri buraya eklenebilir */}
            </select>
            <div className="flex items-center justify-center border px-2 py-2 border-gray-300 bg-neutral-100 rounded-2xl outline-none">
              <button
                className="border border-gray-300 rounded px-2"
                onClick={() => handleChange(request.id, 'quantity', Math.max(1, request.quantity - 1))}
              >
                -
              </button>
              <span className="text-sm px-2">{request.quantity} Adet</span>
              <button
                className="border border-gray-300 rounded px-2"
                onClick={() => handleChange(request.id, 'quantity', request.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <button
          className="text-cyan-600 w-full border rounded-2xl py-2 bg-sky-50 border-dotted border-cyan-500 hover:bg-sky-100 mb-4"
          onClick={handleAddRequest}
        >
          + DAHA ÇOK ÜRÜN TALEP ET
        </button>
        <div className='w-full flex items-center justify-center'>
            <button
            className="bg-green-500 hover:bg-green-600 w-[200px] text-white rounded px-6 py-2"
            onClick={handleSubmit}
            >
            TALEP ET
            </button>
        </div>
      </div>
    </div>
  );
};

export default StockAddModal;
