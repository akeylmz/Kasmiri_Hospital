import React, { useState } from 'react';
import { IoChevronBack } from 'react-icons/io5';
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

const HrSummaryFile = () => {
  // Accordion için her sekmenin açık mı kapalı mı olduğunu kontrol eden state'ler
  const [isGeneralOpen, setIsGeneralOpen] = useState(false);
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);
  const [isAddressOpen, setIsAddressOpen] = useState(false);

  // Toggle fonksiyonları (Sekmeleri açıp kapatmak için)
  const toggleGeneral = () => setIsGeneralOpen(!isGeneralOpen);
  const togglePersonal = () => setIsPersonalOpen(!isPersonalOpen);
  const toggleAddress = () => setIsAddressOpen(!isAddressOpen);
  

  const [isRecordOpen, setIsRecordOpen] = useState(false);
  const [isIdentityOpen, setIsIdentityOpen] = useState(false);
  const [isMilitaryOpen, setIsMilitaryOpen] = useState(false);
  const [isWorkOpen, setIsWorkOpen] = useState(false);

  // Toggle fonksiyonları (Her bölüm için)
  const toggleRecord = () => setIsRecordOpen(!isRecordOpen);
  const toggleIdentity = () => setIsIdentityOpen(!isIdentityOpen);
  const toggleMilitary = () => setIsMilitaryOpen(!isMilitaryOpen);
  const toggleWork = () => setIsWorkOpen(!isWorkOpen);

  const navigate = useNavigate();

  return (
    <div className="p-5 h-full overflow-scroll">
      <div className='w-full h-[100px] py-3 '>          
          <div className='bg-cyan-600 p-3 rounded-2xl flex items-center'>
          <button onClick={()=> navigate("/human-resources/KPI-quests")}  className='border-2 border-white rounded-full' ><TiArrowBack size={35} color='white' /></button>
            <div className='pl-4'>
              <p className='text-white ml-4 text-lg font-semibold'>MEHMET ENES DOĞAN</p>
              <p className='text-white ml-6 '>Muhasebe</p>
            </div>
          </div>
      </div>
      {/* Genel Bilgiler */}
      <div className="mb-4 border border-gray-200 drop-shadow-md rounded-2xl">
        <button 
          className={`w-full text-left bg-white text-gray-500 font-bold rounded-2xl focus:outline-none 
            ${isGeneralOpen ? 'border-b-0 rounded-b-none' : 'bg-gray-100 text-black'}`}
          onClick={toggleGeneral}
        >
          <p
            className={`bg-white inline-block p-4 text-gray-500 rounded-2xl
                ${isGeneralOpen ? '!bg-cyan-600 text-white rounded-tl-2xl border-b-0 rounded-b-none' : 'text-gray-500'}`}
          >Genel Bilgiler</p>
        </button>
        {isGeneralOpen && (
          <div className="p-4 w-full bg-white rounded-b-2xl flex gap-x-5">

            <div className='bg-white h-full w-2/4'>
                <div className='flex gap-x-7 border border-neutral-200 p-5 rounded-2xl drop-shadow-sm'>
                    <img className='rounded-full w-[150px] h-[150px]' src="/img/profile1.jpg" alt="" />
                    <div className='flex flex-col gap-y-3'>
                        <div className=' flex flex-col gap-y-1'>
                            <p className='text-sm text-gray-500 font-semibold'>#M.DGN</p>
                            <p className='text-xl font-semibold '>Mehmet Enes DOĞAN</p>
                            <p className='text-xs text-gray-500'>VKS DANIŞMALIK - NİLÜFER ŞUBESİ</p>
                            <p className='text-cyan-500 font-semibold'>RADYOLOJİ - <span className='text-gray-400'>RAPORTÖR</span></p>
                        </div>
                        <div>
                            <p className='text-gray-400 font-semibold'>PERSONEL TİPİ: <span className='text-cyan-500 ml-1'>DİĞER</span></p>
                            <p className='text-gray-400 font-semibold'>DOKTOR TİPİ: <span className='text-cyan-500 ml-1'>-</span></p>
                            <p className='text-gray-400 font-semibold'>ÜNİTE: <span className='text-cyan-500 ml-1'>-</span></p>
                            <p className='text-gray-400 font-semibold'>GÜNLÜK ÇALIŞMA: <span className='text-cyan-500 ml-1'>8 Saat</span></p>
                        </div>
                    </div>
                </div>
                <textarea className='mt-4 bg-slate-100 p-3 rounded-2xl drop-shadow-md w-full h-[150px] outline-none' placeholder='Bilgi Notu' name="" id=""></textarea>
            </div>
            <div className='bg-white h-full w-2/4 p-4'>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                    <input 
                        type="text" 
                        placeholder="Uzmanlık Dalı" 
                        className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                    />
                    </div>

                    <div>
                    <input 
                        type="text" 
                        placeholder="Uzmanlık Tarihi" 
                        className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                    />
                    </div>

                    <div>
                    <input 
                        type="text" 
                        placeholder="Uzmanlık No" 
                        className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                    />
                    </div>

                    <div>
                    <input 
                        type="text" 
                        placeholder="Diploma No" 
                        className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                    />
                    </div>

                    <div>
                    <input 
                        type="text" 
                        placeholder="Diploma Tarihi" 
                        className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                    />
                    </div>

                    <div>
                    <input 
                        type="text" 
                        placeholder="Diploma Tescil No" 
                        className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                    />
                    </div>

                    <div>
                    <input 
                        type="text" 
                        placeholder="Görevi" 
                        className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                       
                    />
                    </div>

                    <div>
                    <input 
                        type="text" 
                        placeholder="Görev Yeri" 
                        className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                        
                    />
                    </div>

                    <div>
                    <input 
                        type="text" 
                        placeholder="Sorumlu Kişi" 
                        className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                    />
                    </div>

                    <div>
                    <input 
                        type="text" 
                        placeholder="Yan Dal" 
                        className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                    />
                    </div>

                    <div>
                    <input 
                        type="text" 
                        placeholder="Doktor Tesis Kodu" 
                        className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                    />
                    </div>

                    <div>
                    <input 
                        type="text" 
                        placeholder="Ort. Hasta Bekleme Süresi (dk.)" 
                        className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                    />
                    </div>

                    <div className='col-span-3'>
                        <input 
                            type="text" 
                            placeholder="Değerlendirme Grubu" 
                            className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                    <input 
                        type="checkbox" 
                        className="h-8 w-8 text-indigo-600 border border-gray-400 rounded-xl" 
                    />
                    <span className="text-sm text-gray-700">Döf Açılabilir</span>
                    </div>

                    <div className="flex items-center space-x-2">
                    <input 
                        type="checkbox" 
                        className="h-8 w-8 text-indigo-600 border border-gray-400 rounded-xl" 
                    />
                    <span className="text-sm text-gray-700">Dış Doktor</span>
                    </div>

                    <div>
                    <input 
                        type="text" 
                        placeholder="Seri Numarası" 
                        className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                    />
                    </div>
                </div>
            </div>



           
          </div>
        )}
      </div>

      {/* Kişisel Bilgiler */}
      <div className="mb-4 border border-gray-200 drop-shadow-md rounded-2xl">
      <button 
          className={`w-full text-left bg-white text-gray-500 font-bold rounded-2xl focus:outline-none 
            ${isGeneralOpen ? 'border-b-0 rounded-b-none' : 'bg-gray-100 text-black'}`}
          onClick={togglePersonal}
        >
          <p
            className={`bg-white inline-block p-4 text-gray-500 rounded-2xl
                ${isPersonalOpen ? '!bg-cyan-600 text-white rounded-tl-2xl border-b-0 rounded-b-none' : 'text-gray-500'}`}
          >Kişisel Bilgiler</p>
        </button>
        {isPersonalOpen && (
          <div className="p-4 bg-white border-t border-gray-300">
          <div className="grid grid-cols-5 gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="36854447415" 
                className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
              />
              <span className="absolute inset-y-0 right-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
            </div>
        
            <div>
              <input 
                type="text" 
                placeholder="Doğum Tarihi" 
                className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
              />
            </div>
        
            <div>
              <input 
                type="text" 
                placeholder="Doğum Yeri" 
                className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
              />
            </div>
        
            <div>
              <input 
                type="text" 
                placeholder="Cinsiyeti" 
                className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
              />
            </div>

            <div className="row-span-2">
              <textarea
              placeholder='İmza'
                className='mt-1 block w-full h-full rounded-xl bg-slate-100 border-none outline-none p-3'
              name="" id="" />

            </div>
        
            <div>
              <select 
                className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3 text-gray-500"
              >
                <option>Medeni Hali</option>
              </select>
            </div>
        
            <div>
              <select 
                className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3 text-gray-500"
              >
                <option>Kan Grubu</option>
              </select>
            </div>
        
            <div>
              <select 
                className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3 text-gray-500"
              >
                <option>Uyruğu</option>
              </select>
            </div>
        
            <div>
              <select 
                className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3 text-gray-500"
              >
                <option>E-Fatura Hesabı</option>
              </select>
            </div>        
            
          </div>
        </div>
        
        )}
      </div>

      {/* Adres ve İletişim */}
      <div className="mb-4 border border-gray-200 drop-shadow-md rounded-2xl">
        <button 
          className={`w-full text-left bg-white text-gray-500 font-bold rounded-2xl focus:outline-none 
            ${isAddressOpen ? 'border-b-0 rounded-b-none' : 'bg-gray-100 text-black'}`}
          onClick={toggleAddress}
        >
          <p
            className={`bg-white inline-block p-4 text-gray-500 rounded-2xl
                ${isAddressOpen ? '!bg-cyan-600 text-white rounded-tl-2xl border-b-0 rounded-b-none' : 'text-gray-500'}`}
          >Adres ve İletişim</p>
        </button>
        {isAddressOpen && (
          <div className="p-4 bg-white border-t border-gray-300">
            <div className="grid grid-cols-4 gap-4">
            <div>
                <select 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3 text-gray-500"
                >
                  <option>Ülke</option>
                  <option>TÜRKİYE CUMHURİYETİ</option>
                </select>
              </div>
              
              <div>
                <input 
                  type="text" 
                  placeholder="Şehir" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
            </div>
            <div>
                <input 
                  type="text" 
                  placeholder="İlçe" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
            </div>
            <div>
                <input 
                  type="text" 
                  placeholder="Cep Telefonu-1" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
            </div>
            <div>
                <input 
                  type="text" 
                  placeholder="Sempt" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
            </div>
            <div>
                <input 
                  type="text" 
                  placeholder="Adres" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
            
            <div>
                <input 
                  type="text" 
                  placeholder="E-Mail" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
            </div>
            <div>
                <input 
                  type="text" 
                  placeholder="Cept Telefonu-2" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
            </div>
              
              {/* Diğer alanlar */}
            </div>
          </div>
        )}
      </div>

      {/* Özlük Bilgileri */}
      <div className="mb-4 border border-gray-200 drop-shadow-md rounded-2xl">
        <button 
          className={`w-full text-left bg-white text-gray-500 font-bold rounded-2xl focus:outline-none 
            ${isRecordOpen ? 'border-b-0 rounded-b-none' : 'bg-gray-100 text-black'}`}
          onClick={toggleRecord}
        >
          <p
            className={`bg-white inline-block p-4 text-gray-500 rounded-2xl
                ${isRecordOpen ? '!bg-cyan-600 text-white rounded-tl-2xl border-b-0 rounded-b-none' : 'text-gray-500'}`}
          >Özlük Bilgileri</p>
        </button>
        {isRecordOpen && (
          <div className="p-4 bg-white border-t border-gray-300">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Çalışma Tipi" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="İşe Başlangıç Tarihi" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="İşten Ayrılma Tarihi" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Geldiği Yer" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Gittiği Yer" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Çocuk Sayısı" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Eğitim Seviyesi" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Sicil No" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Emekli Sicil No" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Tasarruf Sicil No" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Vergi Dairesi" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Vergi No" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Kıdem" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Kıdem Başlangıç Tarihi" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Asalet Tarihi" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Atama Tarihi" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Yabancı Dil" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div className="flex items-center space-x-2">
                  <input 
                      type="checkbox" 
                      className="h-8 w-8 text-indigo-600 border border-gray-400 rounded-xl" 
                  />
                  <span className="text-sm text-gray-700">Yabancı Dil Yardımı</span>
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Askerlik Durumu" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Askerlik Başlangıç Tarihi" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Askerlik Bitiş Tarihi" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Tecil Bitiş Tarihi" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Sendika" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Sendika No" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div className="flex items-center space-x-2">
                  <input 
                      type="checkbox" 
                      className="h-8 w-8 text-indigo-600 border border-gray-400 rounded-xl" 
                  />
                  <span className="text-sm text-gray-700">Stajyer</span>
              </div>
              <div className="flex items-center space-x-2">
                  <input 
                      type="checkbox" 
                      className="h-8 w-8 text-indigo-600 border border-gray-400 rounded-xl" 
                  />
                  <span className="text-sm text-gray-700">Terör Mağduru</span>
              </div>
              <div className="flex items-center space-x-2">
                  <input 
                      type="checkbox" 
                      className="h-8 w-8 text-indigo-600 border border-gray-400 rounded-xl" 
                  />
                  <span className="text-sm text-gray-700">Hükümlü Personel</span>
              </div>
              <div className="flex items-center space-x-2">
                  <input 
                      type="checkbox" 
                      className="h-8 w-8 text-indigo-600 border border-gray-400 rounded-xl" 
                  />
                  <span className="text-sm text-gray-700">Geçici Personel</span>
              </div>
              <div className="flex items-center space-x-2">
                  <input 
                      type="checkbox" 
                      className="h-8 w-8 text-indigo-600 border border-gray-400 rounded-xl" 
                  />
                  <span className="text-sm text-gray-700">Firma Elemanı</span>
              </div>
              <div className="flex items-center space-x-2">
                  <input 
                      type="checkbox" 
                      className="h-8 w-8 text-indigo-600 border border-gray-400 rounded-xl" 
                  />
                  <span className="text-sm text-gray-700">Sözleşmeli Personel</span>
              </div>
              <div className="flex items-center space-x-2">
                  <input 
                      type="checkbox" 
                      className="h-8 w-8 text-indigo-600 border border-gray-400 rounded-xl" 
                  />
                  <span className="text-sm text-gray-700">Eşi Çalışıyor</span>
              </div>
              <div className="flex items-center space-x-2">
                  <input 
                      type="checkbox" 
                      className="h-8 w-8 text-indigo-600 border border-gray-400 rounded-xl" 
                  />
                  <span className="text-sm text-gray-700">Aday Memur</span>
              </div>
              <div className="flex items-center space-x-2">
                  <input 
                      type="checkbox" 
                      className="h-8 w-8 text-indigo-600 border border-gray-400 rounded-xl" 
                  />
                  <span className="text-sm text-gray-700">Özürlü Personel</span>
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Engellilik Oranı" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div className="flex items-center space-x-2">
                  <input 
                      type="checkbox" 
                      className="h-8 w-8 text-indigo-600 border border-gray-400 rounded-xl" 
                  />
                  <span className="text-sm text-gray-700">Emekli</span>
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Emeklilik Tarihi" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              {/* Diğer alanlar */}
            </div>
          </div>
        )}
      </div>

      {/* Nüfus Bilgileri */}
      <div className="mb-4 border border-gray-200 drop-shadow-md rounded-2xl">
        <button 
          className={`w-full text-left bg-white text-gray-500 font-bold rounded-2xl focus:outline-none 
            ${isIdentityOpen ? 'border-b-0 rounded-b-none' : 'bg-gray-100 text-black'}`}
          onClick={toggleIdentity}
        >
          <p
            className={`bg-white inline-block p-4 text-gray-500 rounded-2xl
                ${isIdentityOpen ? '!bg-cyan-600 text-white rounded-tl-2xl border-b-0 rounded-b-none' : 'text-gray-500'}`}
          >Nüfus Bilgileri</p>
        </button>
        {isIdentityOpen && (
          <div className="p-4 bg-white border-t border-gray-300">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Cüzdan No" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Ana Adı" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Baba Adı" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Şehir" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="İlçe" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Mahalle/Köy" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Cilt No" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Aile Sıra No" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Sıra No" 
                  className="mt-1 block w-full rounded-xl bg-slate-100 border-none outline-none p-3" 
                />
              </div>
            </div>
          </div>
        )}
      </div>

     
    </div>
  );
};

export default HrSummaryFile;
