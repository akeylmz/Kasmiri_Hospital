import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import Reply from './Reply'
import Messages from './Messages'
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from 'react-icons/io';
import { IoLocationSharp } from 'react-icons/io5';
import { BsStripe } from "react-icons/bs";
import { SiTeamviewer } from "react-icons/si";
import { Outlet } from 'react-router-dom';
import ChatUserDetail from './ChatUserDetail';

const Chat = (  ) => {
  const user = {
    name: 'Ahmet Yusuf',
    avatar: '/img/profile1.jpg',
  }
  const [messages, setMessages] = useState([
    {
      fromMe: false,
      name: "Enes",
      userName: "Mehmet",
      avatar: '/img/profile2.jpg',
      message: "test"
    },
    {
      fromMe: true,
      name: "ahmet",
      userName: "yusuf",
      avatar: '/img/profile2.jpg',
      message: "deneme"
    },
    {
      fromMe: false,
      name: "Enes",
      userName: "Mehmet",
      avatar: '/img/profile2.jpg',
      message: "test"
    },
    {
      fromMe: true,
      name: "ahmet",
      userName: "yusuf",
      avatar: '/img/profile2.jpg',
      message: "Use these Tailwind CSS input group components to create things like search bars with buttons, credit card forms, and other form inputs with combined"
    },
  ])

  const [detailIsShow, setDetailIsShow] = useState(false)

  console.log(detailIsShow);

 
  return (
    <div className='flex w-[70%] h-[calc(100%-32px)] my-4 ml-4 bg-white rounded-xl border border-gray-300'>
        <div className='h-full w-full'>
          <ChatHeader user={user} setDetailIsShow={setDetailIsShow} detailIsShow={detailIsShow} />
          <Messages messages={messages} />      
          <Reply setMessages={setMessages}/>
          { detailIsShow && <ChatUserDetail setDetailIsShow={setDetailIsShow} detailIsShow={detailIsShow} />}
        </div>
        
    </div>
  )
}

export default Chat