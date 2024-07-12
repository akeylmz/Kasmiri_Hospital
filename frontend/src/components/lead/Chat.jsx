import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import Reply from './Reply'
import Messages from './Messages'

const Chat = () => {
  const user = {
    name: 'Ahmet Yusuf',
    avatar: '/images/profile1.jpg',
  }
  const [messages, setMessages] = useState([
    {
      fromMe: false,
      name: "Enes",
      userName: "Mehmet",
      avatar: '/images/profile2.jpg',
      message: "test"
    },
    {
      fromMe: true,
      name: "ahmet",
      userName: "yusuf",
      avatar: '/images/profile2.jpg',
      message: "deneme"
    },
    {
      fromMe: false,
      name: "Enes",
      userName: "Mehmet",
      avatar: '/images/profile2.jpg',
      message: "test"
    },
    {
      fromMe: true,
      name: "ahmet",
      userName: "yusuf",
      avatar: '/images/profile2.jpg',
      message: "Use these Tailwind CSS input group components to create things like search bars with buttons, credit card forms, and other form inputs with combined"
    },
  ])
  return (
    <div className='flex-1'>
      <ChatHeader user={user} />
      <Messages messages={messages} />      
      <Reply setMessages={setMessages}/>
    </div>
  )
}

export default Chat