import React, { useState } from "react";
import { t } from "i18next";
import { Check } from "lucide-react";
import { destroyModal } from "../Utils/Modal";
import { useDispatch } from "react-redux";
import { useFormik } from 'formik';
import { addMedicine } from "../../store/medicine";
import { stockFormSchemas } from "../../schemas/stockFormSchemas";
import { useCreateSocialMutation } from "../../store/patient2";

const SocialAddModal = () => {
  const dispatch = useDispatch(); 
   const [ createSocial ] = useCreateSocialMutation()

  const submit = async (values, actions) => {
    try {
      const formData = new FormData();
      formData.append("UserName", values.UserName + "@" + values.social_type)
      formData.append("Password", values.Password)
     
    
      console.log("Form verileri gönderiliyor:", JSON.stringify(values, null, 2))
      await createSocial(formData).unwrap()
      actions.resetForm()
    } catch (error) {
      console.log(error)      
    }     
    destroyModal()
  }
  const { values, errors, handleChange, handleSubmit} = useFormik({
    initialValues: {
      social_type: "",
      UserName: "",
      Password: "",
    },
    onSubmit: submit
  });



  return (
    <div className="add-modal z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <form onSubmit={handleSubmit} className="bg-lightGray rounded-lg shadow-lg w-[300px] p-8">
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-cyan-500">Sosyal Medya Ekle</h2>
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

        <div className="grid grid-cols-1 gap-x-6 gap-y-4 py-6">
          <div>
          <label className="block text-sm font-medium text-gray-500">Sosyal Medya</label>
            <select
              name="social_type"
              value={values.social_type}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
            >
              <option value="">Seçiniz</option>
              <option value="facebook">Whatsapp</option>
              <option value="instagram">Instagram</option>
              <option value="telegram">Telegram</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="mail">Mail</option>
              <option value="kep">KEP</option>
              <option value="linkedin">LinkedIn</option>
              <option value="youtube">YouTube</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500">Kullanıcı Adı</label>
            <input
              type="text"
              name="UserName"
              value={values.UserName} 
              onChange={handleChange} 
              className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500">Parola</label>
            <input
              type="password"
              name="Password"
              value={values.Password}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-200 rounded-md shadow-sm focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm px-3 py-2"
            />
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
    </div>
  );
};

export default SocialAddModal;
