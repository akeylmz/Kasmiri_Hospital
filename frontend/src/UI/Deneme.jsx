import React, { useState } from 'react';
import ToothSchema from '../assets/icons/ToothSchema';

const Deneme = () => {

  return (
    <div className='w-full h-full flex items-center justify-center' >
      <form className='w-[98%] h-[97%] rounded-lg bg-white flex shadow-md p-6 '>
        <div>
          <div>              
              <p><span>İsim - Soyad : </span> Mehmet Enes Doğan</p>
              <p><span>Ülke : </span> Türkiye</p>
              <p><span>Yaşı : </span> 13</p>
              <p><span>Paylaşım İzni : </span> Evet</p>
              <p><span>Sigara : </span> Evet</p>
              <p><span>İlaç : </span> Hayır</p>
              <p><span>Alerji : </span> Hayır</p>
              <p><span>Kayıt Tarihi : </span> 12.12.2024</p>              
          </div>
          <div>
            <div className='flex flex-col'>
              <label htmlFor="">Yapılacak Ameliyatlar</label>
              <textarea className='border rounded-lg border-gray-400 w-full h-32 p-2 text-base leading-6 font-sans'></textarea>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="">Yapılacak Ameliyatlar</label>
              <textarea className='border rounded-lg border-gray-400 w-full h-32 p-2 text-base leading-6 font-sans'></textarea>
            </div>
          </div>
        </div>
      <div>
        <div>
          <label htmlFor="">Taburcu Tarihi</label>
          <input type="text" />
        </div>
        <ToothSchema />
      </div>
      </form>
    </div>
  );
};

export default Deneme;
