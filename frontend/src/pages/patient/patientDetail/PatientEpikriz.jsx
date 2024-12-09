import React, { useState } from "react";
import { t } from "i18next";
import { Check } from "lucide-react";
import { useFormik } from 'formik';
import { stockFormSchemas } from "../../../schemas/stockFormSchemas";
import FaceSchema from "../../../assets/icons/FaceSchema";
import BodySchema from "../../../assets/icons/BodySchema";
import ToothSchema from "../../../assets/icons/ToothSchema";


const PatientEpikriz = () => {
    const [anket, setAnket] = useState("dis") 
  return (
    <div  className='bg-gray-200 w-[calc(100%-15%)] h-full flex justify-evenly items-center'>
        {anket === "dis" && <TethForm setAnket={setAnket} /> }
        {anket === "body" && <BodyForm setAnket={setAnket} />}
        {anket === "head" && <HeadForm setAnket={setAnket} />}
    </div>
  )
}

export default PatientEpikriz




const TethForm = ({ setAnket }) => {

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
      })

    return(
        <form onSubmit={handleSubmit} className="bg-lightGray rounded-lg shadow-lg w-[1200px] p-8 relative">
            {/* <div className="absolute bg-white border border-cyan-600 border-r-0  rounded-l-md top-4 -left-0 transform -translate-x-full ">Diş</div> */}
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-cyan-500">Doktor Notu</h2>
                <div className="flex gap-x-4">
                    <button
                        onClick={()=> setAnket("dis")}
                        type="button" 
                        className="px-4 py-1 boorder border-gray-400 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                        Diş
                    </button>
                    <button 
                        onClick={()=> setAnket("body")}
                        type="button"
                        className="px-4 py-1 boorder border-gray-400 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                        Plastik
                    </button>
                    <button 
                        onClick={()=> setAnket("head")}
                        type="button" 
                        className="px-4 py-1 boorder border-gray-400 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                        Saç
                    </button>                    
                </div>
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

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 py-6 h-[720px] ">
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
    )    
}
const BodyForm = ({ setAnket }) => {
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
    })
    const [faceImgLoad, setFaceImgLoad] = useState(false)
    const [bodyImgLoad, setBodyImgLoad] = useState(false)
    return(
        <form onSubmit={handleSubmit} className="bg-lightGray rounded-lg shadow-lg w-[1200px] p-8">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-cyan-500">Doktor Notu</h2>
                <div className="flex gap-x-4">
                    <button
                        onClick={()=> setAnket("dis")}
                        type="button" 
                        className="px-4 py-1 boorder border-gray-400 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                        Diş
                    </button>
                    <button 
                        onClick={()=> setAnket("body")}
                        type="button"
                        className="px-4 py-1 boorder border-gray-400 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                        Plastik
                    </button>
                    <button 
                        onClick={()=> setAnket("head")}
                        type="button" 
                        className="px-4 py-1 boorder border-gray-400 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                        Saç
                    </button>                    
                </div>
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

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 py-6 h-[720px] ">
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
                    <div className="w-auto h-[650px] overflow-y-scroll mx-auto">
                        <div className="relative select-none">
                            {faceImgLoad && <div className="absolute left-0 top-0">
                                <FaceSchema />
                            </div>}
                            <img className="w-[450px]" src="/img/face.png" alt="" onLoad={() => setFaceImgLoad(true)} />
                        </div>   
                        <div className="relative select-none">
                            {bodyImgLoad && <div className="absolute left-0 top-0">
                                <BodySchema />
                            </div>}
                            <img className="w-[450px] mt-3" src="/img/anatomi.png" alt="" onLoad={() => setBodyImgLoad(true)} />
                        </div>                     
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
    )    
}
const HeadForm = ({setAnket}) => {
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
    })
    return(
        <form onSubmit={handleSubmit} className="bg-lightGray rounded-lg shadow-lg w-[1200px] p-8">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-cyan-500">Doktor Notu</h2>
                <div className="flex gap-x-4">
                    <button
                        onClick={()=> setAnket("dis")}
                        type="button" 
                        className="px-4 py-1 boorder border-gray-400 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                        Diş
                    </button>
                    <button 
                        onClick={()=> setAnket("body")}
                        type="button"
                        className="px-4 py-1 boorder border-gray-400 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                        Plastik
                    </button>
                    <button 
                        onClick={()=> setAnket("head")}
                        type="button" 
                        className="px-4 py-1 boorder border-gray-400 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                        Saç
                    </button>                    
                </div>
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

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 py-6 h-[720px] ">
                <div className="overflow-y-scroll">
                    <div className="ml-3">
                        <div className="flex items-center">
                            <label className="block font-nunito font-semibold">Hasta Adı :</label>
                            <p className="text-gray-600 ml-2">Mehmet Enes Doğan</p>
                        </div>
                        <div className="flex items-center">
                            <label className="block font-nunito font-semibold">TC/Pasaport No :</label>
                            <p className="text-gray-600 ml-2">12345678900</p>
                        </div>
                        <div className="flex items-center">
                            <label className="block font-nunito font-semibold">Ülke :</label>
                            <p className="text-gray-600 ml-2">Türkiye</p>
                        </div>
                        <div className="flex items-center">
                            <label className="block font-nunito font-semibold">Yaşı :</label>
                            <p className="text-gray-600 ml-2">23</p>
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
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4">   
                        <div className="mt-7">
                            <label className="block font-medium text-sm text-gray-700 ml-3">İlk Mürcaat Tarihi</label>
                            <input
                                type="date"
                                name=""
                                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                            />
                        </div>                      
                        <div className="mt-7">
                            <label className="block font-medium text-gray-700 text-sm ml-3">Hastanın Tanısı</label>
                            <select className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2" name="" id="">
                                <option value="">Androjenik Alopesi</option>
                                <option value="">Skatrisyel Alopesi</option>
                                <option value="">Diğer</option>
                            </select>
                        </div>  
                        <div className="mt-7">
                            <label className="block font-medium text-sm text-gray-700 ml-3">Daha Önce Saç Ekimi Yapılmış mı?</label>
                            <select className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2" name="" id="">
                                <option value="">Evet</option>
                                <option value="">Hayır</option>
                            </select>
                        </div>    
                        <div className="mt-7">
                            <label className="block font-medium text-sm text-gray-700 ml-3">Kaçıncı Seans</label>
                            <input
                                type="text"
                                name=""
                                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                            />
                        </div>    
                        <div className="mt-7">
                            <label className="block font-medium text-sm text-gray-700 ml-3">Saç Ekim İşlemi Uygulanacak Tarih</label>
                            <input
                                type="date"
                                name=""
                                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                            />
                        </div>      
                        <div className="mt-7">
                            <label className="block font-medium text-gray-700 text-sm ml-3">Saç Ekiminde Uygulacak Metod</label>
                            <input
                                type="text"
                                name=""
                                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                            />
                        </div> 
                        <div className="mt-7">
                            <label className="block font-medium text-gray-700 text-sm ml-3">Ekimi Planlanan Kök Sayısı</label>
                            <input
                                type="text"
                                name=""
                                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                            />
                        </div>  
                        <div className="mt-7">
                            <label className="block font-medium text-gray-700 text-sm ml-3">Saç Ekim Birimi Protokol No</label>
                            <input
                                type="text"
                                name=""
                                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                            />
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
                    <div className="w-auto mt-5 h-[650px] overflow-y-scroll mx-auto flex flex-wrap">
                        {Array.from({ length: 14 }).map((_, index) => (
                            <label
                            key={index}
                            htmlFor={`hair-${index + 1}`}
                            className={`flex flex-col items-center gap-y-2 ${index + 1 == 8 ? "w-[calc(43.33%-10px)]" :"w-[calc(33.33%-10px)]"}`}
                            >
                            <img className="w-14" src={`/img/hair/${index + 1}.png`} alt="" />
                            <input id={`hair-${index + 1}`} name="hair" type="radio" />
                            </label>
                        ))}
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
    )  
}