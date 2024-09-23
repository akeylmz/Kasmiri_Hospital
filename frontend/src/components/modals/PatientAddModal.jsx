import React, { useState } from "react";
import { t } from "i18next";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { destroyModal } from "../Utils/Modal";
import { addPatient } from "../../store/patient";
import { mutate } from "swr";

const PatientAddModal = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    patient_number: "",
    national_id: "",
    first_name: "",
    last_name: "",
    patient_image: null,
    place_of_birth: "",
    date_of_birth: null,
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
    seans_number: null,
    device_name: "",
    seans_days: "",
    education_status: "",
    occupation: "",
    current_employer: "",
    marital_status: "",
    children_count: null,
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

  const dispatch = useDispatch();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleDaySelection = (day) => {
    setFormData((prevState) => ({
      ...prevState,
      seans_days: prevState.seans_days.includes(day)
        ? prevState.seans_days.filter((d) => d !== day)
        : [...prevState.seans_days, day],
    }));
  };

  const handleSave = async () => {
    const url = 'http://127.0.0.1:8000/api/patientcard/';

    // Tarih formatını düzelt
    const formattedDateOfBirth = new Date(formData.date_of_birth).toISOString().split('T')[0]; // YYYY-MM-DD formatında

    // `seans_number` ve `children_count` alanlarını tamsayıya dönüştürün
    const seansNumber = parseInt(formData.seans_number, 10);
    const childrenCount = parseInt(formData.children_count, 10);

    // Tamsayı olup olmadığını kontrol edin ve geçerli değilse 0 olarak ayarlayın
    const validSeansNumber = isNaN(seansNumber) ? 0 : seansNumber;
    const validChildrenCount = isNaN(childrenCount) ? 0 : childrenCount;

    // FormData oluşturuyoruz
    const formDataObj = new FormData();
    formDataObj.append('first_name', formData.first_name);
    formDataObj.append('last_name', formData.last_name);
    formDataObj.append('national_id', formData.national_id);
    formDataObj.append('patient_image', formData.patient_image);
    formDataObj.append('place_of_birth', formData.place_of_birth);
    formDataObj.append('date_of_birth', formattedDateOfBirth); // Doğum tarihini düzenliyoruz
    formDataObj.append('gender', formData.gender);
    formDataObj.append('nationality', formData.nationality);
    formDataObj.append('mother_name', formData.mother_name);
    formDataObj.append('father_name', formData.father_name);
    formDataObj.append('patient_type', formData.patient_type);
    formDataObj.append('insurance_info', formData.insurance_info);
    formDataObj.append('instagram_username', formData.instagram_username);
    formDataObj.append('mobile_phone1', formData.mobile_phone1);
    formDataObj.append('mobile_phone2', formData.mobile_phone2);
    formDataObj.append('email', formData.email);
    formDataObj.append('country', formData.country);
    formDataObj.append('city', formData.city);
    formDataObj.append('address', formData.address);
    formDataObj.append('seans_number', validSeansNumber); // Geçerli tamsayı olarak gönderiyoruz
    formDataObj.append('device_name', formData.device_name);
    formDataObj.append('seans_days', formData.seans_days);
    formDataObj.append('education_status', formData.education_status);
    formDataObj.append('occupation', formData.occupation);
    formDataObj.append('current_employer', formData.current_employer);
    formDataObj.append('marital_status', formData.marital_status);
    formDataObj.append('children_count', validChildrenCount); // Geçerli tamsayı olarak gönderiyoruz
    formDataObj.append('referee', formData.referee);
    formDataObj.append('institution_type', formData.institution_type);
    formDataObj.append('applied_department', formData.applied_department);
    formDataObj.append('applied_operation', formData.applied_operation);
    formDataObj.append('complaints', formData.complaints);
    formDataObj.append('medications', formData.medications);
    formDataObj.append('existing_conditions', formData.existing_conditions);
    formDataObj.append('smoker', formData.smoker);
    formDataObj.append('past_surgeries', formData.past_surgeries);
    formDataObj.append('allergies', formData.allergies);
    formDataObj.append('post_surgery_address', formData.post_surgery_address);

    try {
        // // FormData ile POST isteği gönder
        // const response = await fetch(url, {
        //     method: 'POST',
        //     body: formDataObj,
        // });

        // if (!response.ok) {
        //     const errorData = await response.json();
        //     console.error('API Hatası:', errorData);
        //     throw new Error('API isteği başarısız oldu');
        // }

        // const newPatient = await response.json();

        // // SWR cache'ini güncelle
        // mutate(url, (currentPatients) => {
        //     return [newPatient, ...currentPatients];
        // }, false);

        // // Redux store'a yeni hastayı ekle
        // dispatch(addPatient(newPatient));

        // Modal'ı kapat
        destroyModal();
    } catch (error) {
        console.error('Hasta kaydedilirken hata oluştu:', error);
    }
};





  return (
    <div className="add-modal z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <div className="bg-lightGray rounded-lg shadow-lg w-full max-w-4xl p-8">
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-cyan-500">{t("patientAdd")}</h2>
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

        <div className="grid grid-cols-3 gap-x-6 gap-y-4 py-6">
          {step === 1 && (
            <>
              <div className="row-span-3">
                <label className="block text-sm font-medium text-gray-500">Fotoğraf</label>
                <div className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2">
                  <div className="relative w-32 h-32 bg-gray-100 border border-gray-200 rounded-md overflow-hidden">
                    {formData.patient_image && (
                      <img
                        src={URL.createObjectURL(formData.patient_image)}
                        alt="Preview"
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <input
                    type="file"
                    name="patient_image"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      setFormData({
                        ...formData,
                        patient_image: file,
                      });
                    }}
                    className="mt-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-cyan-700 hover:file:bg-cyan-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Adı</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Soyadı</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">TC Kimlik No</label>
                <input
                  type="text"
                  name="national_id"
                  value={formData.national_id}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Doğum Yeri</label>
                <input
                  type="text"
                  name="place_of_birth"
                  value={formData.place_of_birth}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Doğum Tarihi</label>
                <input
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Cinsiyet</label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Uyruk</label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Ana Adı</label>
                <input
                  type="text"
                  name="mother_name"
                  value={formData.mother_name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Baba Adı</label>
                <input
                  type="text"
                  name="father_name"
                  value={formData.father_name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Cep Telefonu 1</label>
                <input
                  type="text"
                  name="mobile_phone1"
                  value={formData.mobile_phone1}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Cep Telefonu 2</label>
                <input
                  type="text"
                  name="mobile_phone2"
                  value={formData.mobile_phone2}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">İnstagram Adı</label>
                <input
                  type="text"
                  name="instagram_username"
                  value={formData.instagram_username}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Hasta Tipi</label>
                <input
                  type="text"
                  name="patient_type"
                  value={formData.patient_type}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Ülke</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Şehir</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Hastanın Bölümü</label>
                <input
                  type="text"
                  name="city"
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Doktor Adı</label>
                <input
                  type="text"
                  name="city"
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-500">İkametgah Adresi</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-500">Seans</label>
                <input
                  type="text"
                  name="seans_number"
                  value={formData.seans_number}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Cihaz Adı</label>
                <input
                  type="text"
                  name="device_name"
                  value={formData.device_name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Seans Tarihi</label>
                <input
                  type="date"
                  name="device_name"
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Seans Saati</label>
                <input
                  type="time"
                  name="device_name"
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div className="col-span-3 flex flex-wrap gap-2">
                {["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"].map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => toggleDaySelection(day)}
                    className={`px-4 py-2 rounded-md shadow-sm border ${
                      formData.seans_days.includes(day)
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
                  value={formData.education_status}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Meslek</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Çalışılan Kurum</label>
                <input
                  type="text"
                  name="current_employer"
                  value={formData.current_employer}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Medeni Durum</label>
                <input
                  type="text"
                  name="marital_status"
                  value={formData.marital_status}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Çocuk Sayısı</label>
                <input
                  type="text"
                  name="children_count"
                  value={formData.children_count}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Refere Eden</label>
                <input
                  type="text"
                  name="referee"
                  value={formData.referee}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Kurum Tipi</label>
                <input
                  type="text"
                  name="institution_type"
                  value={formData.institution_type}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Başvurduğu Birim</label>
                <input
                  type="text"
                  name="applied_department"
                  value={formData.applied_department}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Başvurduğu İşlem</label>
                <input
                  type="text"
                  name="applied_operation"
                  value={formData.applied_operation}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div className="col-span-3">
                <label className="block text-sm font-medium text-gray-500">Şikayetler</label>
                <input
                  type="text"
                  name="complaints"
                  value={formData.complaints}
                  onChange={handleInputChange}
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
                  value={formData.medications}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Mevcut bir hastalığınız var mı?</label>
                <input
                  type="text"
                  name="existing_conditions"
                  value={formData.existing_conditions}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Sigara kullanıyor musunuz?</label>
                <input
                  type="text"
                  name="smoker"
                  value={formData.smoker}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Daha önce geçirdiğiniz operasyonlar</label>
                <input
                  type="text"
                  name="past_surgeries"
                  value={formData.past_surgeries}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Alerjiniz var mı?</label>
                <input
                  type="text"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Ameliyat sonrası kalacağınız adres</label>
                <input
                  type="text"
                  name="post_surgery_address"
                  value={formData.post_surgery_address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
                />
              </div>
            </>
          )}
        </div>

        <div className="flex justify-between pt-2">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="bg-gray-300 flex items-center justify-around text-black rounded-md pr-6 pl-5 py-2 shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <ArrowLeft className="mr-1" size={20} />
              {t("back")}
            </button>
          )}
          {step < 4 && (
            <button
              onClick={nextStep}
              className="ml-auto bg-cyan-500 flex items-center justify-around text-white rounded-md pr-6 pl-5 py-2 shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              {t("next")}
              <ArrowRight className="ml-1" size={20} />
            </button>
          )}
          {step === 4 && (
            <button
              onClick={handleSave}
              className="ml-auto bg-cyan-500 flex items-center justify-around text-white rounded-md pr-6 pl-5 py-2 shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              <Check className="mr-1" size={20} />
              {t("save")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientAddModal;
