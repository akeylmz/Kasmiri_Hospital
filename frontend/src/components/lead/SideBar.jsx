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
             Instagram
          </option>
          <option value="whatsapp" className="flex items-center">
             WhatsApp
          </option>
          <option value="messenger" className="flex items-center">
             Messenger
          </option>
          <option value="telegram" className="flex items-center">
             Telegram
          </option>
          <option value="twitter" className="flex items-center">
             Twitter
          </option>
        </select>
        <input type="search" placeholder='Ara...' className='w-full h-2/4 outline-none px-4 border border-gray-200 ' />
      </header>
      <ChatList />
    </aside>
  )
}

export default SideBar