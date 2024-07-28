import React, { useReducer } from 'react'
import ReactDOM from "react-dom"
import { useDispatch } from 'react-redux'
import classNames from 'classnames'
import { addPatient } from '../stores/patient'


const reducer= ( state, action) =>{
    switch(action.type){
        case 'SET_NAME':
            return {
                ...state,
                name: action.value
            }
        case 'SET_SURNAME':
            return {
                ...state,
                surname: action.value
            }
        case 'SET_ID':
            return {
                ...state,
                id: action.value
            }
        case 'SET_PASAPORT':
            return {
               ...state,
               pasaportNo: action.value
            }
        case 'SET_DGMYR':
            return {
                ...state,
                dogumYeri: action.value
            }
        
        case 'SET_DGMTRH':
            return {
                ...state,
                dogumTarihi: action.value
            }
        case 'SET_CINSIYET':
            return {
                ...state,
                cinsiyet: action.value
            }
        case 'SET_UYRUK':
            return {
                ...state,
                uyruk: action.value
            }
        case 'SET_ANAADI':
            return {
                ...state,
                anaAdi: action.value
            }
        case 'SET_BABAADI':
            return {
                ...state,
                babaAdi: action.value
            }
        case 'SET_CEP1':
            return {
                ...state,
                cep1: action.value
            }
        case 'SET_REFEREEDEN':
            return {
                ...state,
                refereEden: action.value
            }
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.value
            }
        case 'SET_INSTA':
            return {
                ...state,
                instagram: action.value
            }

        case 'SET_HASTATIPI':
            return {
                ...state,
                hastaTipi: action.value
            }

        case 'SET_ADRES':
            return {
                ...state,
                adres: action.value
            }
        case 'SET_MESLEGI':
            return {
                ...state,
                meslegi: action.value
            }


        case 'SET_KURUM':
            return {
                ...state,
                calistigiKurum: action.value
            }
        case 'SET_MEDENIHAL':
            return {
                ...state,
                medeniHal: action.value
            }
        case 'SET_DOGUM':
            return {
                ...state,
                dogumYaptimi: action.value
            }
        case 'SET_ISLEM':
            return {
                ...state,
                islem: action.value
            }
        case 'SET_HASTALIK':
            return {
                ...state,
                hastalik: action.value
            }
        case 'SET_ILAC':
            return {
                ...state,
                ilaç: action.value
            }
        case 'SET_SIGARA':
            return {
                ...state,
                sigara: action.value
            }
        case 'SET_OPERASYON':
            return {
                ...state,
                gecmisOperasyonlar: action.value
            }
        case 'SET_OPERASYONTARİH':
            return {
                ...state,
                gecmisOperasyonTarihleri: action.value
            }
        case 'SET_ALERJI':
            return {
                ...state,
                sikayet: action.value
            }
        case 'SET_SIKAYET':
            return {
                ...state,
                sikayet: action.value
            }











        case 'SET_YKNLKTP':
            return {
                ...state,
                yakinlikTipi: action.value
            }
        
        case 'SET_SIGORTALIBLG':
            return {
                ...state,
                sigortaliBilgileri: action.value
            }
        case 'SET_TMMSGRT':
            return {
                ...state,
                tamamlayiciSigorta: action.value
            }

            //ADRES
        case 'SET_ADRESTIPI':
            return {
                ...state,
                adresTipi: action.value
            }
      
        case 'SET_DISKAPINO':
            return {
                ...state,
                disKapiNo: action.value
            }
        case 'SET_ICKAPINO':
            return {
               ...state,
               icKapiNo: action.value
            }
        case 'SET_ULKE':
            return {
                ...state,
                ulke: action.value
            }
        
        case 'SET_SEHIR':
            return {
                ...state,
                sehir: action.value
            }
        case 'SET_ILCE':
            return {
                ...state,
                ilce: action.value
            }
        case 'SET_BUCAK':
            return {
                ...state,
                bucak: action.value
            }
        case 'SET_KOY':
            return {
                ...state,
                koy: action.value
            }
        case 'SET_MAHALLE':
            return {
                ...state,
                mahalle: action.value
            }
        case 'SET_EVTLF':
            return {
                ...state,
                evTelefonu: action.value
            }
        case 'SET_ISTLF':
            return {
                ...state,
                isTelefonu: action.value
            }
        
        case 'SET_CEP2':
            return {
                ...state,
                cep2: action.value
            }
        
        case 'SET_FAX':
            return {
                ...state,
                fax: action.value
            }

        // KİMLİK
        case 'SET_CUZDANNO':
            return {
                ...state,
                cuzdanNo: action.value
            }
        case 'SET_MEDENIHAL':
            return {
               ...state,
               medeniHali: action.value
            }
        case 'SET_KIMLIKTURU':
            return {
                ...state,
                kimlikTuru: action.value
            }
        
        case 'SET_PASAPORT2':
            return {
                ...state,
                pasaportNo2: action.value
            }
        case 'SET_ANNETC':
            return {
                ...state,
                anneTc: action.value
            }
        case 'SET_BABATC':
            return {
                ...state,
                babaTc: action.value
            }
        case 'SET_KANGRUBU':
            return {
                ...state,
                beyanKanGrubu: action.value
            }
        case 'SET_NUFUSKAYITTURU':
            return {
                ...state,
                nufusKayitTuru: action.value
            }
        case 'SET_SEHIR':
            return {
                ...state,
                sehir: action.value
            }
        case 'SET_ILCE':
            return {
                ...state,
                ilce: action.value
            }
        case 'SET_MAHALLE':
            return {
                ...state,
                mahalle: action.value
            }
        case 'SET_CILTNO':
            return {
                ...state,
                ciltNo: action.value
            }
        case 'SET_AILESIRANO':
            return {
                ...state,
                aileSiraNo: action.value
            }
        case 'SET_SIRANO':
            return {
                ...state,
                siraNo: action.value
            }

        //SEANS
        case 'SET_SEANS':
            return {
                ...state,
                seans: action.value
            }
        case 'SET_CIHAZADI':
            return {
                ...state,
                cihazAdi: action.value
            }
        case 'SET_SEANSGUNU':
            return {
                ...state,
                seansGunu: action.value
            }

        //EHLİYET
        case 'SET_SINIFI':
            return {
                ...state,
                sinifi: action.value
            }
        case 'SET_VERILDIGIYER':
            return {
                ...state,
                verildigiYer: action.value
            }
        case 'SET_BELGENO':
            return {
                ...state,
                belgeNo: action.value
            }
        case 'SET_VERILDIGITRH':
            return {
                ...state,
                verildigiTarih: action.value
            }
        case 'SET_BELGETARIHI':
            return {
                ...state,
                belgeTarihi: action.value
            }
        case 'SET_CIHAZPROTEZ':
            return {
                ...state,
                cihazProtez: action.value
            }

        //DIGER
        case 'SET_VERGIDAIRESI':
            return {
                ...state,
                vergiDairesi: action.value
            }
        case 'SET_ARSIVNO':
            return {
                ...state,
                arsivNo: action.value
            }
        
        case 'SET_ODANO':
            return {
                ...state,
                odaNo: action.value
            }
        case 'SET_RESMIMESLEK':
            return {
                ...state,
                resmiMeslek: action.value
            }
        case 'SET_BOLUMNO':
            return {
                ...state,
                bolumNo: action.value
            }
        case 'SET_EGITIMDURUMU':
            return {
                ...state,
                egitimDurumu: action.value
            }
        case 'SET_KISIMNO':
            return {
                ...state,
                kisimNo: action.value
            }
        case 'SET_ENTEGRASYON':
            return {
                ...state,
                entegrasyonKodu: action.value
            }
        case 'SET_RAFNO':
            return {
                ...state,
                rafNo: action.value
            }
        case 'SET_EFATURATURU':
            return {
                ...state,
                efaturaTuru: action.value
            }
    }

}

const modalReducer = (state, action) => {
    switch(action.type) {
      case 'GENEL':
        return {
          genel: true,
          adres: false,
          iletisim: false,
          nufus: false,
          mesaj: false,
          seans: false,
          dosya: false,
          diger: false,
          registration: false,
        };
      case 'ADRES':
        return {
          genel: false,
          adres: true,
          iletisim: false,
          nufus: false,
          mesaj: false,
          seans: false,
          dosya: false,
          diger: false,
          registration: false,
        };
      case 'ILETISIM':
        return {
          genel: false,
          adres: false,
          iletisim: true,
          nufus: false,
          mesaj: false,
          seans: false,
          dosya: false,
          diger: false,
          registration: false,
        };
      case 'NUFUS':
        return {
          genel: false,
          adres: false,
          iletisim: false,
          nufus: true,
          mesaj: false,
          seans: false,
          dosya: false,
          diger: false,
          registration: false,
        };
      case 'MESAJ':
        return {
          genel: false,
          adres: false,
          iletisim: false,
          nufus: false,
          mesaj: true,
          seans: false,
          dosya: false,
          diger: false,
          registration: false,
        };
      case 'SEANS':
        return {
          genel: false,
          adres: false,
          iletisim: false,
          nufus: false,
          mesaj: false,
          seans: true,
          dosya: false,
          diger: false,
          registration: false,
        };
      case 'DOSYA':
        return {
          genel: false,
          adres: false,
          iletisim: false,
          nufus: false,
          mesaj: false,
          seans: false,
          dosya: true,
          diger: false,
          registration: false,
        };
      case 'DIGER':
        return {
          genel: false,
          adres: false,
          iletisim: false,
          nufus: false,
          mesaj: false,
          seans: false,
          dosya: false,
          diger: true,
          registration: false,
        };
      case 'REGİST':
            return {
              genel: false,
              adres: false,
              iletisim: false,
              nufus: false,
              mesaj: false,
              seans: false,
              dosya: false,
              diger: false,
              registration: true,
            };
      default:
        return state;
    }
  };



const Backdrop = ({ setModalOpen }) => {
    return(
        <div onClick={()=> setModalOpen((prevstate) => !prevstate)} className='w-full h-full absolute top-0 left-0 bg-[#0000004b] flex justify-center items-center backdrop-blur-sm z-40'> 
        </div>
    )        
}
const ModalOverlay = ({ setModalOpen, submitHandler, dispatch, state, modalSection, modalDispatch }) => {
    return(
        <div className='w-[38%] h-full bg-white border z-50 absolute top-0 right-0'>

            <div className=' absolute -left-[170px] top-[100px] modal-section'>
                <ul>
                    <li 
                        className={classNames('bg-slate-200 border-black  shadow-right-thin',
                                        {"bg-white border-none !shadow-none" : modalSection.genel})}
                        onClick={()=>modalDispatch({type:'GENEL'})}>
                        <span>Genel</span>
                    </li>
                    <li 
                        className={classNames('bg-slate-200 border-black  shadow-right-thin ',
                                    {"bg-white border-none !shadow-none" : modalSection.adres})}
                        onClick={() => modalDispatch({ type: 'ADRES' })}>
                        <span>Adres</span>
                    </li>                    
                    <li 
                        className={classNames('bg-slate-200 border-black  shadow-right-thin ',
                                    {"bg-white border-none !shadow-none" : modalSection.nufus})}
                        onClick={() => modalDispatch({ type: 'NUFUS' })}>
                        <span>Nüfus Bilgileri</span>
                    </li>
                    <li 
                        className={classNames('bg-slate-200 border-black  shadow-right-thin ',
                                    {"bg-white border-none !shadow-none" : modalSection.mesaj})}
                        onClick={() => modalDispatch({ type: 'MESAJ' })}>
                        <span>Hasta Mesajı</span>
                    </li>
                    <li 
                        className={classNames('bg-slate-200 border-black  shadow-right-thin ',
                                    {"bg-white border-none !shadow-none" : modalSection.seans})}
                        onClick={() => modalDispatch({ type: 'SEANS' })}>
                        <span>Seans Bilgileri</span>
                    </li>
                    <li 
                        className={classNames('bg-slate-200 border-black  shadow-right-thin ',
                                    {"bg-white border-none !shadow-none" : modalSection.dosya})}
                        onClick={() => modalDispatch({ type: 'DOSYA' })}>
                        <span>Dosyalar</span>
                    </li>
                    <li 
                        className={classNames('bg-slate-200 border-black  shadow-right-thin ',
                                    {"bg-white border-none !shadow-none" : modalSection.iletisim})}
                        onClick={() => modalDispatch({ type: 'ILETISIM' })}>
                        <span>Ehliyet</span>
                    </li>
                    <li 
                        className={classNames('bg-slate-200 border-black  shadow-right-thin ',
                                    {"bg-white border-none !shadow-none" : modalSection.diger})}
                        onClick={() => modalDispatch({ type: 'DIGER' })}>
                        <span>Diğer</span>
                    </li>
                    <li 
                        className={classNames('bg-slate-200 border-black  shadow-right-thin ',
                                    {"bg-white border-none !shadow-none" : modalSection.registration})}
                        onClick={() => modalDispatch({ type: 'REGİST' })}>
                        <span>Registration</span>
                    </li>
                </ul>
            </div>
           
            <p onClick={()=> setModalOpen((prevstate) => !prevstate)} className='text-lg text-white font-bold absolute right-6 top-6 cursor-pointer'>X</p>
            <div className='w-full h-[80px] rounded-b-lg bg-green-500 flex items-center'>
                <h3 className='p-3 text-[26px] ml-10 text-white'>Hasta Ekle</h3>
            </div>
            {modalSection.genel && <form onSubmit={submitHandler} className='w-full h-[100%-80px] flex flex-col gap-3 p-5 pb-0 patient-modal-form'>   
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Adı</label>
                        <input value={state.name} onChange={(e)=>dispatch({type:'SET_NAME',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Soyadı</label>
                        <input value={state.surname} onChange={(e)=>dispatch({type:'SET_SURNAME',value:e.target.value})} type="text" />
                    </div>
                </div>                

                <div className='input-group'>
                    <div>
                        <label htmlFor="">TC Kimlik No</label>
                        <input value={state.id} onChange={(e)=>dispatch({type:'SET_ID',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Pasaport No</label>
                        <input value={state.pasaportNo} onChange={(e)=>dispatch({type:'SET_PASAPORT',value:e.target.value})} type="text" />
                    </div>
                </div>

                <div className='input-group'>
                    <div>
                        <label htmlFor="">Doğum Yeri</label>
                        <input value={state.dogumYeri} onChange={(e)=>dispatch({type:'SET_DGMYR',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Doğum Tarihi</label>
                        <input value={state.dogumTarihi} onChange={(e)=>dispatch({type:'SET_DGMTRH',value:e.target.value})} type="text" />
                    </div>
                </div>
               
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Cinsiyet</label>
                        <input value={state.cinsiyet} onChange={(e)=>dispatch({type:'SET_CINSIYET',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Uyruk</label>
                        <input value={state.uyruk} onChange={(e)=>dispatch({type:'SET_UYRUK',value:e.target.value})} type="text" />
                    </div>
                </div>

                <div className='input-group'>
                    <div>
                        <label htmlFor="">Ana Adı</label>
                        <input value={state.anaAdi} onChange={(e)=>dispatch({type:'SET_ANAADI',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Baba Adı</label>
                        <input value={state.babaAdi} onChange={(e)=>dispatch({type:'SET_BABAADI',value:e.target.value})} type="text" />
                    </div>
                </div>

                <div className='input-group'>
                    <div>
                        <label htmlFor="">Cep Telefonu</label>
                        <input value={state.cep1} onChange={(e)=>dispatch({type:'SET_CEP1',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Refere Eden</label>
                        <input value={state.refereEden} onChange={(e)=>dispatch({type:'SET_REFEREEDEN',value:e.target.value})} type="text" />
                    </div>
                </div>

                <div className='input-group'>
                    <div>
                        <label htmlFor="">E-Mail</label>
                        <input value={state.email} onChange={(e)=>dispatch({type:'SET_EMAIL',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">İnstagram Adı</label>
                        <input value={state.instagram} onChange={(e)=>dispatch({type:'SET_INSTA',value:e.target.value})} type="text" />
                    </div>
                </div>

                <div className='input-group'>
                    <div>
                        <label htmlFor="">Hasta Tipi</label>
                        <input value={state.hastaTipi} onChange={(e)=>dispatch({type:'SET_HASTATIPI',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">İkametgah Adresi</label>
                        <input value={state.adres} onChange={(e)=>dispatch({type:'SET_ADRES',value:e.target.value})} type="text" />
                    </div>
                </div>
                    
                {/* <div className='flex justify-evenly'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center w-full justify-between spancheckbox'>
                            <label className='cursor-pointer'>
                                <input className="hidden" type="checkbox" />
                                <span className='inline-block relative border-2 py-1 px-6 border-gray-400 select-none rounded-xl transition-all'>Gurbetçi Hasta</span>
                            </label>     
                        </div>
                        <div className='flex items-center w-full justify-between spancheckbox'>
                            <label className='cursor-pointer'>
                                <input className="hidden" type="checkbox" />
                                <span className='inline-block relative border-2 py-1 px-6 border-gray-400 select-none rounded-xl transition-all'>Kimliksiz Hasta</span>
                            </label>     
                        </div>                                                                
                    </div>    
                    <div className='flex flex-col gap-3'>                        
                        <div className='flex w-full spancheckbox spancheckbox pl-6 '>
                            <label className='cursor-pointer'>
                                <input className="hidden" type="checkbox" />
                                <span className='inline-block relative border-2 py-1 px-6 border-gray-400 select-none rounded-xl transition-all'>Turizm Hastası</span>
                            </label>     
                        </div>
                        <div className='flex w-full spancheckbox pl-6'>
                            <label className='cursor-pointer'>
                                <input className="hidden" type="       " />
                                <span className='inline-block relative border-2 py-1 px-6 border-gray-400 select-none rounded-xl transition-all'>Vatansız Hasta</span>
                            </label>     
                        </div>                                          
                    </div>                
                </div> */}
               <button className='py-3 mt-[40px] bg-blue-600 hover:bg-blue-500 rounded-2xl text-lg font-semibold text-white'>HASTAYI EKLE</button>
            </form>}
            {modalSection.adres && <form onSubmit={submitHandler} className='w-full h-[100%-80px] flex flex-col gap-3 p-5 pb-0 patient-modal-form'>   
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Adres Tipi</label>
                        <input value={state.adresTipi} onChange={(e)=>dispatch({type:'SET_ADRESTIPI',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Adres</label>
                        <input value={state.adres} onChange={(e)=>dispatch({type:'SET_ADRES',value:e.target.value})} type="text" />
                    </div>
                </div>                

                <div className='input-group'>
                    <div>
                        <label htmlFor="">Dış Kapı No</label>
                        <input value={state.disKapiNo} onChange={(e)=>dispatch({type:'SET_DISKAPINO',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">İç Kapı No</label>
                        <input value={state.icKapiNo} onChange={(e)=>dispatch({type:'SET_ICKAPINO',value:e.target.value})} type="text" />
                    </div>
                </div>

                <div className='input-group'>
                    <div>
                        <label htmlFor="">Ülke</label>
                        <input value={state.ulke} onChange={(e)=>dispatch({type:'SET_ULKE',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Şehir</label>
                        <input value={state.sehir} onChange={(e)=>dispatch({type:'SET_SEHIR',value:e.target.value})} type="text" />
                    </div>
                </div>
               
                <div className='input-group'>
                    <div>
                        <label htmlFor="">İlçe</label>
                        <input value={state.ilce} onChange={(e)=>dispatch({type:'SET_ILCE',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Bucak</label>
                        <input value={state.bucak} onChange={(e)=>dispatch({type:'SET_BUCAK',value:e.target.value})} type="text" />
                    </div>
                </div>

                <div className='input-group'>
                    <div>
                        <label htmlFor="">Köy</label>
                        <input value={state.koy} onChange={(e)=>dispatch({type:'SET_KOY',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Mahalle</label>
                        <input value={state.mahalle} onChange={(e)=>dispatch({type:'SET_MAHALLE',value:e.target.value})} type="text" />
                    </div>
                </div>
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Ev Telefonu</label>
                        <input value={state.evTelefonu} onChange={(e)=>dispatch({type:'SET_EVTLF',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">İş Telefonu</label>
                        <input value={state.isTelefonu} onChange={(e)=>dispatch({type:'SET_ISTLF',value:e.target.value})} type="text" />
                    </div>
                </div>

                <div className='input-group'>
                    <div>
                        <label htmlFor="">Cep Telefonu-1</label>
                        <input value={state.cep1} onChange={(e)=>dispatch({type:'SET_CEP1',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Cep Telefonu-2</label>
                        <input value={state.cep2} onChange={(e)=>dispatch({type:'SET_CEP2',value:e.target.value})} type="text" />
                    </div>
                </div>

                <div className='input-group'>
                    <div>
                        <label htmlFor="">E-Mail</label>
                        <input value={state.email} onChange={(e)=>dispatch({type:'SET_EMAIL',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Fax</label>
                        <input value={state.fax} onChange={(e)=>dispatch({type:'SET_FAX',value:e.target.value})} type="text" />
                    </div>
                </div>

               <button className='py-3 mt-[40px] bg-blue-600 hover:bg-blue-500 rounded-2xl text-lg font-semibold text-white'>HASTAYI EKLE</button>
            </form>}
            {modalSection.nufus && <form onSubmit={submitHandler} className='w-full h-[100%-80px] flex flex-col gap-3 p-5 pb-0 patient-modal-form'>   
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Cüzdan No</label>
                        <input value={state.cuzdanNo} onChange={(e)=>dispatch({type:'SET_CUZDANNO',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Medeni Hali</label>
                        <input value={state.medeniHali} onChange={(e)=>dispatch({type:'SET_MEDENIHAL',value:e.target.value})} type="text" />
                    </div>
                </div>                

                <div className='input-group'>
                    <div>
                        <label htmlFor="">Kimlik Türü</label>
                        <input value={state.kimlikTuru} onChange={(e)=>dispatch({type:'SET_KIMLIKTURU',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Pasaport No</label>
                        <input value={state.pasaportNo2} onChange={(e)=>dispatch({type:'SET_PASAPORT2',value:e.target.value})} type="text" />
                    </div>
                </div>

                <div className='input-group'>
                    <div>
                        <label htmlFor="">Anne TC Kimlik No</label>
                        <input value={state.anneTc} onChange={(e)=>dispatch({type:'SET_ANNETC',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Baba TC Kimlik No</label>
                        <input value={state.babaTc} onChange={(e)=>dispatch({type:'SET_BABATC',value:e.target.value})} type="text" />
                    </div>
                </div>
               
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Beyan Kan Grubu</label>
                        <input value={state.beyanKanGrubu} onChange={(e)=>dispatch({type:'SET_KANGRUBU',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Nüfus Kayıt Türü</label>
                        <input value={state.nufusKayitTuru} onChange={(e)=>dispatch({type:'SET_NUFUSKAYITTURU',value:e.target.value})} type="text" />
                    </div>
                </div>

                <div className='input-group'>
                    <div>
                        <label htmlFor="">Şehir</label>
                        <input value={state.sehir} onChange={(e)=>dispatch({type:'SET_SEHIR',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">İlçe</label>
                        <input value={state.ilce} onChange={(e)=>dispatch({type:'SET_ILCE',value:e.target.value})} type="text" />
                    </div>
                </div>

                <div className='input-group'>
                    <div>
                        <label htmlFor="">Mahalle / Köy</label>
                        <input value={state.mahalle} onChange={(e)=>dispatch({type:'SET_MAHALLE',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Cilt No</label>
                        <input value={state.ciltNo} onChange={(e)=>dispatch({type:'SET_CILTNO',value:e.target.value})} type="text" />
                    </div>
                </div>

                <div className='input-group'>
                    <div>
                        <label htmlFor="">Aile Sıra No</label>
                        <input value={state.aileSiraNo} onChange={(e)=>dispatch({type:'SET_AILESIRANO',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Sıra No</label>
                        <input value={state.siraNo} onChange={(e)=>dispatch({type:'SET_SIRANO',value:e.target.value})} type="text" />
                    </div>
                </div>

               <button className='py-3 mt-[40px] bg-blue-600 hover:bg-blue-500 rounded-2xl text-lg font-semibold text-white'>HASTAYI EKLE</button>
            </form>}
            {modalSection.seans && <form onSubmit={submitHandler} className='w-full h-[100%-80px] flex flex-col gap-3 p-5 pb-0 patient-modal-form'>   
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Seans</label>
                        <input value={state.seans} onChange={(e)=>dispatch({type:'SET_SEANS',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Cihaz Adı</label>
                        <input value={state.cihazAdi} onChange={(e)=>dispatch({type:'SET_CIHAZADI',value:e.target.value})} type="text" />
                    </div>
                </div>                
                <div className='flex justify-evenly'>
                    <div className='flex flex-wrap gap-3 justify-center items-center'>
                        <div className='flex items-center justify-between spancheckbox'>
                            <label className='cursor-pointer flex items-center justify-center'>
                                <input className="hidden" type="checkbox" />
                                <span className='inline-block relative border-2 py-1 px-6 border-gray-400 select-none rounded-xl transition-all'>Pazartesi</span>
                            </label>     
                        </div>
                        <div className='flex items-center justify-between spancheckbox'>
                            <label className='cursor-pointer flex items-center justify-center'>
                                <input className="hidden" type="checkbox" />
                                <span className='inline-block relative border-2 py-1 px-6 border-gray-400 select-none rounded-xl transition-all'>Salı</span>
                            </label>     
                        </div>    
                        <div className='flex spancheckbox'>
                            <label className='cursor-pointer flex items-center justify-center'>
                                <input className="hidden" type="checkbox" />
                                <span className='inline-block relative border-2 py-1 px-6 border-gray-400 select-none rounded-xl transition-all'>Çarşamba</span>
                            </label>     
                        </div>
                        <div className='flex spancheckbox'>
                            <label className='cursor-pointer flex items-center justify-center'>
                                <input className="hidden" type="checkbox" />
                                <span className='inline-block relative border-2 py-1 px-6 border-gray-400 select-none rounded-xl transition-all'>Perşembe</span>
                            </label>     
                        </div> 
                        <div className='flex spancheckbox '>
                            <label className='cursor-pointer flex items-center justify-center'>
                                <input className="hidden" type="checkbox" />
                                <span className='inline-block relative border-2 py-1 px-6 border-gray-400 select-none rounded-xl transition-all'>Cuma</span>
                            </label>     
                        </div>
                        <div className='flex spancheckbox'>
                            <label className='cursor-pointer flex items-center justify-center'>
                                <input className="hidden" type="checkbox" />
                                <span className='inline-block relative border-2 py-1 px-6 border-gray-400 select-none rounded-xl transition-all'>Cumartesi</span>
                            </label>     
                        </div>
                        <div className='flex spancheckbox '>
                            <label className='cursor-pointer flex items-center justify-center'>
                                <input className="hidden" type="checkbox" />
                                <span className='inline-block relative border-2 py-1 px-6 border-gray-400 select-none rounded-xl transition-all'>Pazar</span>
                            </label>     
                        </div>   
                                                                      
                    </div>    
                                   
                </div>                
                

               <button className='py-3 mt-[40px] bg-blue-600 hover:bg-blue-500 rounded-2xl text-lg font-semibold text-white'>HASTAYI EKLE</button>
            </form>}
            {modalSection.diger && <form onSubmit={submitHandler} className='w-full h-[100%-80px] flex flex-col gap-3 p-5 pb-0 patient-modal-form'>   
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Mesleğiniz?</label>
                        <input value={state.meslegi} onChange={(e)=>dispatch({type:'SET_MESLEGI',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Hangi Kurumda Çalışıyosunuz?</label>
                        <input value={state.calistigiKurum} onChange={(e)=>dispatch({type:'SET_KURUM',value:e.target.value})} type="text" />
                    </div>
                </div> 
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Medeni Durumunuz?</label>
                        <input value={state.medeniHal} onChange={(e)=>dispatch({type:'SET_MEDENIHAL',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Doğum Yaptınız mı? <span className='text-sm'>(Bayan)</span></label>
                        <input value={state.dogumYaptimi} onChange={(e)=>dispatch({type:'SET_DOGUM',value:e.target.value})} type="text" />
                    </div>
                </div>    
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Hagi İşlem İçin Gelmiştiniz?</label>
                        <input value={state.islem} onChange={(e)=>dispatch({type:'SET_ISLEM',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Mevcut Hastalığınız Var mı?</label>
                        <input value={state.hastalik} onChange={(e)=>dispatch({type:'SET_HASTALIK',value:e.target.value})} type="text" />
                    </div>
                </div>  
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Sürekli Kullandığınız İlaç Var mı?</label>
                        <input value={state.ilaç} onChange={(e)=>dispatch({type:'SET_ILAC',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Sigara Kullanıyor musunuz?</label>
                        <input value={state.sigara} onChange={(e)=>dispatch({type:'SET_SIGARA',value:e.target.value})} type="text" />
                    </div>
                </div> 
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Daha Önce Ameliyat Oldunuz mu?</label>
                        <input value={state.gecmisOperasyonlar} onChange={(e)=>dispatch({type:'SET_OPERASYON',value:e.target.value})} type="text" />
                    </div>                    
                    <div>
                        <label htmlFor="">Operasyon Tarihi</label>
                        <input value={state.gecmisOperasyonTarihleri} onChange={(e)=>dispatch({type:'SET_OPERASYONTARİH',value:e.target.value})} type="text" disabled/>
                    </div>
                </div>   
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Alerjiniz Var mı?</label>
                        <input value={state.sikayet} onChange={(e)=>dispatch({type:'SET_ALERJI',value:e.target.value})} type="text" />
                    </div>
                    
                    <div>
                        <label htmlFor="">Başvuru Şikayetleriniz?</label>
                        <input value={state.sikayet} onChange={(e)=>dispatch({type:'SET_SIKAYET',value:e.target.value})} type="text" />
                    </div>                   
                </div>     
                               
                

               <button className='py-3 mt-[40px] bg-blue-600 hover:bg-blue-500 rounded-2xl text-lg font-semibold text-white'>HASTAYI EKLE</button>
            </form>}
            {modalSection.iletisim && <form onSubmit={submitHandler} className='w-full h-[100%-80px] flex flex-col gap-3 p-5 pb-0 patient-modal-form'>   
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Sınıfı</label>
                        <input value={state.sinifi} onChange={(e)=>dispatch({type:'SET_SINIFI',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Verildiği Yer</label>
                        <input value={state.verildigiYer} onChange={(e)=>dispatch({type:'SET_VERILDIGIYER',value:e.target.value})} type="text" />
                    </div>
                </div> 
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Belge No</label>
                        <input value={state.belgeNo} onChange={(e)=>dispatch({type:'SET_BELGENO',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Verildiği Tarih</label>
                        <input value={state.verildigiTarih} onChange={(e)=>dispatch({type:'SET_VERILDIGITRH',value:e.target.value})} type="text" />
                    </div>
                </div>    
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Belge Tarihi</label>
                        <input value={state.belgeTarihi} onChange={(e)=>dispatch({type:'SET_BELGETARIHI',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Cihaz - Protez</label>
                        <input value={state.cihazProtez} onChange={(e)=>dispatch({type:'SET_CIHAZPROTEZ',value:e.target.value})} type="text" />
                    </div>
                </div>  
                     
               <button className='py-3 mt-[40px] bg-blue-600 hover:bg-blue-500 rounded-2xl text-lg font-semibold text-white'>HASTAYI EKLE</button>
            </form>}
            {modalSection.registration && <form onSubmit={submitHandler} className='w-full h-[100%-80px] flex flex-col gap-3 p-5 pb-0 patient-modal-form'>   
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Name</label>
                        <input value={state.sinifi} onChange={(e)=>dispatch({type:'SET_SINIFI',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Surname</label>
                        <input value={state.verildigiYer} onChange={(e)=>dispatch({type:'SET_VERILDIGIYER',value:e.target.value})} type="text" />
                    </div>
                </div> 
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Age</label>
                        <input value={state.belgeNo} onChange={(e)=>dispatch({type:'SET_BELGENO',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Consultation Date</label>
                        <input value={state.verildigiTarih} onChange={(e)=>dispatch({type:'SET_VERILDIGITRH',value:e.target.value})} type="text" />
                    </div>
                </div>    
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Sharing Permission</label>
                        <input value={state.belgeTarihi} onChange={(e)=>dispatch({type:'SET_BELGETARIHI',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Smoke</label>
                        <input value={state.cihazProtez} onChange={(e)=>dispatch({type:'SET_CIHAZPROTEZ',value:e.target.value})} type="text" />
                    </div>
                </div>  
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Medicine</label>
                        <input value={state.belgeTarihi} onChange={(e)=>dispatch({type:'SET_BELGETARIHI',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Allergy</label>
                        <input value={state.cihazProtez} onChange={(e)=>dispatch({type:'SET_CIHAZPROTEZ',value:e.target.value})} type="text" />
                    </div>
                </div> 
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Date of Repatriation</label>
                        <input value={state.belgeTarihi} onChange={(e)=>dispatch({type:'SET_BELGETARIHI',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Surgery Day</label>
                        <input value={state.cihazProtez} onChange={(e)=>dispatch({type:'SET_CIHAZPROTEZ',value:e.target.value})} type="text" />
                    </div>
                </div> 
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Discharge Day</label>
                        <input value={state.belgeTarihi} onChange={(e)=>dispatch({type:'SET_BELGETARIHI',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Control</label>
                        <input value={state.cihazProtez} onChange={(e)=>dispatch({type:'SET_CIHAZPROTEZ',value:e.target.value})} type="text" />
                    </div>
                </div> 
                <div className='input-group'>
                    <div>
                        <label htmlFor="">Control</label>
                        <input value={state.belgeTarihi} onChange={(e)=>dispatch({type:'SET_BELGETARIHI',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Surgeries to be Performed</label>
                        <input value={state.cihazProtez} onChange={(e)=>dispatch({type:'SET_CIHAZPROTEZ',value:e.target.value})} type="text" />
                    </div>
                </div>
                <div className='input-group'>
                    <div>
                        <label className='!text-sm' htmlFor="">Past Surgeries  Performed by the Patient</label>
                        <input value={state.belgeTarihi} onChange={(e)=>dispatch({type:'SET_BELGETARIHI',value:e.target.value})} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Doctor Notes</label>
                        <input value={state.cihazProtez} onChange={(e)=>dispatch({type:'SET_CIHAZPROTEZ',value:e.target.value})} type="text" />
                    </div>
                </div>
                     
               <button className='py-3 mt-[20px] bg-blue-600 hover:bg-blue-500 rounded-2xl text-lg font-semibold text-white'>HASTAYI EKLE</button>
            </form>}
        </div>
    )
}

const AddModal = ( {setModalOpen }) => {

    const dispatchPatient = useDispatch()

    const [state, dispatch] = useReducer(reducer,{
        name: '',
        surname: '',
        id: '',
        pasaportNo: '',
        dogumYeri: '',
        dogumTarihi: '',
        cinsiyet: '',
        uyruk: '',
        anaAdi: '',
        babaAdi: '',
        cep1: '',
        refereEden: '',
        email: '',
        instagram: '',
        hastaTipi: '',
        adres: '',
        meslegi: '',

        calistigiKurum: '',
        medeniHal: '',
        dogumYaptimi: '',
        islem: '',
        hastalik: '',
        ilaç: '',
        sigara: '',
        gecmisOperasyonlar: '',
        gecmisOperasyonTarihleri: '',
        alerjiler: '',
        sikayet: '',






        yakinlikTipi: '',        
        sigortaliBilgileri: '',
        tamamlayiciSigorta: '',
        adresTipi: '',        
        disKapiNo: '',
        icKapiNo: '',
        ulke: '',
        sehir: '',
        ilce: '',
        bucak: '',
        koy: '',
        mahalle: '',
        evTelefonu: '',
        isTelefonu: '',        
        cep2: '',        
        fax: '',
        cuzdanNo: '',
        medeniHali: '',
        kimlikTuru: '',
        pasaportNo2: '',
        anneTc: '',
        babaTc: '',
        beyanKanGrubu: '',
        nufusKayitTuru: '',
        sehir: '',
        ilce: '',
        mahalle: '',
        ciltNo: '',
        aileSiraNo: '',
        siraNo: '',
        seans: '',
        cihazAdi: '',
        seansGunu: '',
        sinifi: '',
        verildigiYer: '',
        belgeNo: '',
        verildigiTarih: '',
        belgeTarihi: '',
        cihazProtez: '',
        vergiDairesi: '',
        arsivNo: '',
        
        odaNo: '',
        resmiMeslek: '',
        bolumNo: '',
        egitimDurumu: '',
        kisimNo: '',
        entegrasyonKodu: '',
        rafNo: '',
        efaturaTuru: '',
    })
    const [modalSection, modalDispatch] = useReducer(modalReducer, {
        genel: true,
        adres: false,
        iletisim: false,
        nufus: false,
        mesaj: false,
        seans: false,
        dosya: false,
        diger: false,
      });

    const submitHandler = e =>{
        e.preventDefault()
        dispatchPatient(addPatient({ ...state }))
        setModalOpen(false);
    }


  return (
    <React.Fragment>
    {ReactDOM.createPortal(<Backdrop setModalOpen={setModalOpen} />, document.getElementById("backdrop-root"))}
    {ReactDOM.createPortal(<ModalOverlay setModalOpen={setModalOpen} modalDispatch={modalDispatch} dispatch={dispatch} submitHandler={submitHandler} state={state} modalSection={modalSection} />, document.getElementById("modaloverlay-root"))}
  </React.Fragment>
  )
}

export default AddModal