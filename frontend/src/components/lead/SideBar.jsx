import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames';
import ChatList from './ChatList';
import { FaInstagram, FaWhatsapp, FaFacebookMessenger, FaTelegramPlane, FaTwitter } from 'react-icons/fa';


const SideBar = () => {  
  return (
    <aside className='h-[calc(100%-32px)] ml-4 w-[20%] rounded-xl border-r my-4 border-gray-300 bg-white'>
      <header className='h-[100px] border-b boder-gray-300 flex flex-col items-center justify-center'>
        <select className='border w-full h-2/4   py-2 px-4 bg-white text-gray-600 focus:outline-none '>
          <option value="instagram" className="flex items-center">
            <FaInstagram className="inline-block mr-2 text-pink-600" /> Instagram
          </option>
          <option value="whatsapp" className="flex items-center">
            <FaWhatsapp className="inline-block mr-2 text-green-500" /> WhatsApp
          </option>
          <option value="messenger" className="flex items-center">
            <FaFacebookMessenger className="inline-block mr-2 text-blue-600" /> Messenger
          </option>
          <option value="telegram" className="flex items-center">
            <FaTelegramPlane className="inline-block mr-2 text-blue-500" /> Telegram
          </option>
          <option value="twitter" className="flex items-center">
            <FaTwitter className="inline-block mr-2 text-blue-400" /> Twitter
          </option>
        </select>
        <input type="search" placeholder='Ara...' className='w-full h-2/4 outline-none px-4 border border-gray-200 ' />
      </header>
      <ChatList />
    </aside>
  )
}

export default SideBar