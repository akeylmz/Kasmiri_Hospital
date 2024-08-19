import React, { useState } from "react";
import { t } from "i18next";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { useDispatch } from "react-redux";
import { destroyModal } from "../Utils/Modal";
import { addPatient } from "../../store/patient";

const PatientAddModal = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    tcKimlikNo: "",
    pasaportNo: "",
    isCitizen: true,
    country: "",
    city: "",
    address: "",
    session: "",
    deviceName: "",
    selectedDays: [],
    profession: "",
    workplace: "",
    maritalStatus: "",
    birthPlace: "",
    birthDate: "",
    referral: "",
    currentDiseases: "",
    medications: "",
    operations: "",
    allergies: "",
    complaint: "",
    age: "",
    patientCode: "",
    gender: "",
    nationality: "",
    motherName: "",
    fatherName: "",
    phone1: "",
    phone2: "",
    email: "",
    instagramName: "",
    patientType: "",
    childrenCount: "",
    smoke: "",
    medicine: "",
    consultationDate: "",
    sharingPermission: "",
    dateOfRepatriation: "",
    organisationType: "",
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
      selectedDays: prevState.selectedDays.includes(day)
        ? prevState.selectedDays.filter((d) => d !== day)
        : [...prevState.selectedDays, day],
    }));
  };

  const handleCitizenshipChange = (e) => {
    const isCitizen = e.target.value === "TC";
    setFormData({
      ...formData,
      isCitizen,
      tcKimlikNo: isCitizen ? formData.tcKimlikNo : "",
      pasaportNo: !isCitizen ? formData.pasaportNo : "",
    });
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const generatePatientCode = () => {
    const today = new Date();
    const dateStr = today.toISOString().split("T")[0];
    const recordCount = 1; // Bu, o gün yapılan kayıt sayısı olacak, bunu gerçek veriyle değiştirmelisiniz
    return `${dateStr}-${recordCount}`;
  };

  const handleSave = () => {
    // Yaş ve Hasta Kodu Hesaplamaları
    const age = calculateAge(formData.birthDate);
    const patientCode = generatePatientCode();

    // Form verilerini güncelleme
    const finalData = {
      ...formData,
      age,
      patientCode,
    };

    // Redux'a veriyi dispatch etme
    dispatch(addPatient(finalData));

    // Modal'ı kapatma
    destroyModal();
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
            <div>
              <label className="block text-sm font-medium text-gray-500">Adı</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Soyadı</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">
                {formData.isCitizen ? "TC Kimlik No" : "Pasaport No"}
              </label>
              <input
                type="text"
                name={formData.isCitizen ? "tcKimlikNo" : "pasaportNo"}
                value={formData.isCitizen ? formData.tcKimlikNo : formData.pasaportNo}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Doğum Yeri</label>
              <input
                type="text"
                name="birthPlace"
                value={formData.birthPlace}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Doğum Tarihi</label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
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
                name="motherName"
                value={formData.motherName}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Baba Adı</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Cep Telefonu 1</label>
              <input
                type="text"
                name="phone1"
                value={formData.phone1}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Cep Telefonu 2</label>
              <input
                type="text"
                name="phone2"
                value={formData.phone2}
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
                name="instagramName"
                value={formData.instagramName}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Hasta Tipi</label>
              <input
                type="text"
                name="patientType"
                value={formData.patientType}
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

            <div className="col-span-2">
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
                name="session"
                value={formData.session}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Cihaz Adı</label>
              <input
                type="text"
                name="deviceName"
                value={formData.deviceName}
                onChange={handleInputChange}
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
                    formData.selectedDays.includes(day)
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
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Meslek</label>
              <input
                type="text"
                name="profession"
                value={formData.profession}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Çalışılan Kurum</label>
              <input
                type="text"
                name="workplace"
                value={formData.workplace}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Medeni Durum</label>
              <input
                type="text"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Çocuk Sayısı</label>
              <input
                type="text"
                name="childrenCount"
                value={formData.childrenCount}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Refere Eden</label>
              <input
                type="text"
                name="referral"
                value={formData.referral}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Kurum Tipi</label>
              <input
                type="text"
                name="organisationType"
                value={formData.organisationType}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Başvurduğu Birim</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Başvurduğu İşlem</label>
              <input
                type="text"
                name="procedure"
                value={formData.procedure}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-500">Şikayetler</label>
              <input
                type="text"
                name="complaint"
                value={formData.complaint}
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
                name="currentDiseases"
                value={formData.currentDiseases}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Sigara kullanıyor musunuz?</label>
              <input
                type="text"
                name="smoke"
                value={formData.smoke}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500">Daha önce geçirdiğiniz operasyonlar</label>
              <input
                type="text"
                name="operations"
                value={formData.operations}
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
                name="dateOfRepatriation"
                value={formData.dateOfRepatriation}
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
