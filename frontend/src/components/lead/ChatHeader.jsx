import React, { useEffect } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom'

const ChatHeader = ({user }) => {

  const { chatId } = useParams();
  useEffect(() => {
    // console.log('Username:', chatId);
  }, [chatId]);


  return (
    <header className='h-[60px] border-b boder-gray-300 flex items-center px-6'>
        <span className='flex items-center gap-x-4'>
            {/* <img src={user.avatar} className='w-12 h-12 rounded-full object-cover' /> */}
            <IoLogoWhatsapp size={35} color='blue' />
            <p className='text-base font-semibold'>{user.name}</p >
        </span>
    </header>
  )
}

export default ChatHeader