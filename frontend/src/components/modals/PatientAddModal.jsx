import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { createModal, destroyModal } from "../Utils/Modal";
import { useFormik } from 'formik';
import { useCreatePatientMutation, useGetPatientsQuery, useUpdatePatientMutation } from "../../store/patient2";
import fetchImageAsFile from "../Utils/fetchImageAsFile.js"

const PatientAddModal = ({ data: selectedPatient, isEdit, patientID }) => {
  const { t } = useTranslation()
  // console.log("data:", data);
  const formDataToJson = (formData) => {
    const jsonObject = {};
    formData.forEach((value, key) => {
        jsonObject[key] = value;
    });
    return jsonObject;
};
  
  console.log(isEdit);
  
  const [createPatient, { isLoading, isError, error}] = useCreatePatientMutation()
  const [updatePatient, {}] = useUpdatePatientMutation()
  const { refetch } = useGetPatientsQuery();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const [isCitizen, setIsCitizen] = useState(true); 

  const handleCheckboxChange = () => {
    setIsCitizen(!isCitizen);
    if(isCitizen){
      createModal("yabancı-modal")
    }
  };
 const [step, setStep] = useState(1)
console.log(patientID);

 const submit = async (values, actions) => {
  try {
    
    console.log("Form verileri gönderiliyor:", JSON.stringify(values, null, 2))
    const formData = new FormData()
    console.log(selectedPatient.patient_image)
    console.log(values.patient_image)
    console.log(selectedPatient.patient_image === values.patient_image)
    
    
    if(selectedPatient.patient_image === values.patient_image){
      fetchImageAsFile(selectedPatient.patient_image).then(file => {
        if (file) {
          formData.append("patient_image", file)   
          console.log(formData.get("patient_image"))
        }
      })             
    }else{
      formData.append("patient_image", values.patient_image)
    }
    
    Object.keys(values).forEach((key) => {
      if (key !== "patient_image") { 
        formData.append(key, values[key]);
      }
    });
    if(isEdit){   
      console.log(JSON.stringify(formDataToJson(formData), null, 2))
      console.log(formData.get("patient_image"));
      
      await updatePatient({ newPatient: formData, patientID }).unwrap()
      refetch() 
    }else{
      await createPatient(formData).unwrap()
      refetch() 
    }    
    actions.resetForm()
    destroyModal()

  } catch (error) {
    console.error('Form gönderilirken hata oluştu:', error)
  }
}



 const {values, errors, handleChange, handleSubmit, setFieldValue, setValues } = useFormik({
  initialValues: {
    patient_number: "",
    national_id: "",
    first_name: "",
    last_name: "",
    patient_image: null,
    place_of_birth: "",
    date_of_birth: "",
    gender: "",
    nationality: "",
    mother_name: "",
    father_name: "",
    patient_type: "",
    insurance_info: "",
    instagram_username: "",
    mobile_phone1: "",
    mobile_phone2: "",
    email: "",
    country: "",
    city: "",
    address: "",
    seans_number: "",
    device_name: "",
    seans_days: "",
    education_status: "",
    occupation: "",
    current_employer: "",
    marital_status: "",
    children_count: "",
    referee: "",
    institution_type: "",
    applied_department: "",
    applied_operation: "",
    complaints: "",
    medications: "",
    existing_conditions: "",
    smoker: false,
    past_surgeries: "",
    allergies: "",
    post_surgery_address: "",
  }, 
 
  onSubmit: submit,
});
useEffect(() => {
  if (selectedPatient) {    
    setValues({
      patient_number: selectedPatient.patient_number || "",
      national_id: selectedPatient.national_id || "",
      first_name: selectedPatient.first_name || "",
      last_name: selectedPatient.last_name || "",
      patient_image: selectedPatient.patient_image || null,
      place_of_birth: selectedPatient.place_of_birth || "",
      date_of_birth: selectedPatient.date_of_birth || "",
      gender: selectedPatient.gender || "",
      nationality: selectedPatient.nationality || "",
      mother_name: selectedPatient.mother_name || "",
      father_name: selectedPatient.father_name || "",
      patient_type: selectedPatient.patient_type || "",
      insurance_info: selectedPatient.insurance_info || "",
      instagram_username: selectedPatient.instagram_username || "",
      mobile_phone1: selectedPatient.mobile_phone1 || "",
      mobile_phone2: selectedPatient.mobile_phone2 || "",
      email: selectedPatient.email || "",
      country: selectedPatient.country || "",
      city: selectedPatient.city || "",
      address: selectedPatient.address || "",
      seans_number: selectedPatient.seans_number || "",
      device_name: selectedPatient.device_name || "",
      seans_days: selectedPatient.seans_days || "",
      education_status: selectedPatient.education_status || "",
      occupation: selectedPatient.occupation || "",
      current_employer: selectedPatient.current_employer || "",
      marital_status: selectedPatient.marital_status || "",
      children_count: selectedPatient.children_count || "",
      referee: selectedPatient.referee || "",
      institution_type: selectedPatient.institution_type || "",
      applied_department: selectedPatient.applied_department || "",
      applied_operation: selectedPatient.applied_operation || "",
      complaints: selectedPatient.complaints || "",
      medications: selectedPatient.medications || "",
      existing_conditions: selectedPatient.existing_conditions || "",
      smoker: selectedPatient.smoker ?? false,
      past_surgeries: selectedPatient.past_surgeries || "",
      allergies: selectedPatient.allergies || "",
      post_surgery_address: selectedPatient.post_surgery_address || "",
    });
  } else {
    setValues({
      patient_number: "",
      national_id: "",
      first_name: "",
      last_name: "",
      patient_image: null,
      place_of_birth: "",
      date_of_birth: "",
      gender: "",
      nationality: "",
      mother_name: "",
      father_name: "",
      patient_type: "",
      insurance_info: "",
      instagram_username: "",
      mobile_phone1: "",
      mobile_phone2: "",
      email: "",
      country: "",
      city: "",
      address: "",
      seans_number: "",
      device_name: "",
      seans_days: "",
      education_status: "",
      occupation: "",
      current_employer: "",
      marital_status: "",
      children_count: "",
      referee: "",
      institution_type: "",
      applied_department: "",
      applied_operation: "",
      complaints: "",
      medications: "",
      existing_conditions: "",
      smoker: false,
      past_surgeries: "",
      allergies: "",
      post_surgery_address: "",
    });
  }
}, [selectedPatient, setValues]);


  return (
    <div className="add-modal z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="bg-lightGray rounded-lg shadow-lg  w-[1000px] p-8">
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-cyan-500">{t("patientAdd")}</h2>
          <button
          type="button"
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
          {step === 1 && (
            <>
              <div className="row-span-3">
                <label className="block text-sm font-medium text-gray-500">{t("Image")}</label>
                <div className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2">
                  <div className="relative w-32 h-32 bg-gray-100 border border-gray-200 rounded-md overflow-hidden">
                    {values.patient_image && (
                      <img
                        src={
                          values.patient_image instanceof File
                            ? URL.createObjectURL(values.patient_image) 
                            : values.patient_image
                        }
                        alt="Preview"
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <input
                    type="file"
                    name="patient_image"
                    accept="image/*"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];                      
                      setFieldValue("patient_image", file);
                    }}
                    className="mt-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("name")}</label>
                <input
                  type="text"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("surname")}</label>
                <input
                  type="text"
                  name="last_name"
                  value={values.last_name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                  <label className="flex items-center text-sm font-medium text-gray-500">
                    {t("tcPassport")} 
                    <input 
                      className="ml-8 mr-2" 
                      type="checkbox" 
                      checked={!isCitizen}
                      onChange={handleCheckboxChange} 
                    /> 
                    <span className="text-xs">{t("I am not a Turkish citizen")}</span>
                  </label>
                  
                  <input
                    type="text"
                    name="national_id"
                    value={values.national_id}
                    onChange={handleChange}
                    disabled={!isCitizen} // Vatandaşı değilse input devre dışı kalır
                    className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                  />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("birth_place")}</label>
                <input
                  type="text"
                  name="place_of_birth"
                  value={values.place_of_birth}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("birth_date")}</label>
                <input
                  type="date"
                  name="date_of_birth"
                  value={values.date_of_birth}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("Gender")}</label>
                <input
                  type="text"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("Nationality")}</label>
                <input
                  type="text"
                  name="nationality"
                  value={values.nationality}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("Mother's Name")}</label>
                <input
                  type="text"
                  name="mother_name"
                  value={values.mother_name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("Father's Name")}</label>
                <input
                  type="text"
                  name="father_name"
                  value={values.father_name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("Mobile Phone")} 1</label>
                <input
                  type="text"
                  name="mobile_phone1"
                  value={values.mobile_phone1}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("Mobile Phone")} 2</label>
                <input
                  type="text"
                  name="mobile_phone2"
                  value={values.mobile_phone2}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("Instagram Username")}</label>
                <input
                  type="text"
                  name="instagram_username"
                  value={values.instagram_username}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("patient_type")}</label>
                <input
                  type="text"
                  name="patient_type"
                  value={values.patient_type}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("country")}</label>
                <input
                  type="text"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("city")}</label>
                <input
                  type="text"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">{t("Patient's Department")}</label>
                <input
                  type="text"
                  name="city"
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">{t("Doctor's Name")}</label>
                <input
                  type="text"
                  name="city"
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-500">{t("address")}</label>
                <input
                  type="text"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-500">{t("Session")}</label>
                <input
                  type="text"
                  name="seans_number"
                  value={values.seans_number}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("Device Name")}</label>
                <input
                  type="text"
                  name="device_name"
                  value={values.device_name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">{t("Session Date")}</label>
                <input
                  type="date"
                  name="device_name"
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">{t("Session Time")}</label>
                <input
                  type="time"
                  name="device_name"
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div className="col-span-3 flex flex-wrap gap-2">
                {[t("Monday"), t("Tuesday"), t("Wednesday"), t("Thursday"), t("Friday"), t("Saturday"), t("Sunday")].map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => toggleDaySelection(day)}
                    className={`px-4 py-2 rounded-md shadow-sm border ${
                      values.seans_days.includes(day)
                        ? "bg-cyan-500 text-white"
                        : "bg-white text-gray-700"
                    } focus:outline-none focus:ring-2 focus:ring-cyan-500`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-500">Öğrenim Durumu</label>
                <input
                  type="text"
                  name="education_status"
                  value={values.education_status}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Meslek</label>
                <input
                  type="text"
                  name="occupation"
                  value={values.occupation}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Çalışılan Kurum</label>
                <input
                  type="text"
                  name="current_employer"
                  value={values.current_employer}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Medeni Durum</label>
                <input
                  type="text"
                  name="marital_status"
                  value={values.marital_status}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Çocuk Sayısı</label>
                <input
                  type="text"
                  name="children_count"
                  value={values.children_count}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Refere Eden</label>
                <input
                  type="text"
                  name="referee"
                  value={values.referee}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Kurum Tipi</label>
                <input
                  type="text"
                  name="institution_type"
                  value={values.institution_type}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Başvurduğu Birim</label>
                <input
                  type="text"
                  name="applied_department"
                  value={values.applied_department}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Başvurduğu İşlem</label>
                <input
                  type="text"
                  name="applied_operation"
                  value={values.applied_operation}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-500">Şikayetler</label>
                <input
                  type="text"
                  name="complaints"
                  value={values.complaints}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-500">Sürekli kullandığınız ilaç var mı?</label>
                <input
                  type="text"
                  name="medications"
                  value={values.medications}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Mevcut bir hastalığınız var mı?</label>
                <input
                  type="text"
                  name="existing_conditions"
                  value={values.existing_conditions}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Sigara kullanıyor musunuz?</label>
                <select
                  type="text"
                  name="smoker"
                  value={values.smoker}
                  onChange={(e) => handleChange({
                    target: {
                      name: 'smoker',
                      value: e.target.value === "true" ? true : false,
                    }
                  })}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                >
                   <option value="">Seçiniz</option>
                   <option value="true">Evet</option>
                   <option value="false">Hayır</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Daha önce geçirdiğiniz operasyonlar</label>
                <input
                  type="text"
                  name="past_surgeries"
                  value={values.past_surgeries}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Alerjiniz var mı?</label>
                <input
                  type="text"
                  name="allergies"
                  value={values.allergies}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Ameliyat sonrası kalacağınız adres</label>
                <input
                  type="text"
                  name="post_surgery_address"
                  value={values.post_surgery_address}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>
            </>
          )}
        </div>

        <div className="flex justify-between pt-2">
          {step > 1 && (
            <button
            type="button"
              onClick={prevStep}
              className="bg-gray-300 flex items-center justify-around text-black rounded-md pr-6 pl-5 py-2 shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <ArrowLeft className="mr-1" size={20} />
              {t("back")}
            </button>
          )}
          {step < 4 && (
            <button
            type="button"
              onClick={nextStep}
              className="ml-auto bg-cyan-500 flex items-center justify-around text-white rounded-md pr-6 pl-5 py-2 shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              {t("next")}
              <ArrowRight className="ml-1" size={20} />
            </button>
          )}
          {step === 4 && (
            <button
              type="submit"
              className="ml-auto bg-cyan-500 flex items-center justify-around text-white rounded-md pr-6 pl-5 py-2 shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              <Check className="mr-1" size={20} />
              {t("save")}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PatientAddModal;
