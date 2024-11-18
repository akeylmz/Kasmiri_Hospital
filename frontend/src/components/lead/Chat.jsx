import React, { useEffect, useRef, useState } from 'react'
import ChatHeader from './ChatHeader'
import Reply from './Reply'
import Messages from './Messages'
import ChatUserDetail from './ChatUserDetail';
import { UnipileClient } from "unipile-node-sdk"
import { ALL_KEYS, ALL_URL } from '../../constants';
import { NavLink, useParams } from 'react-router-dom'

const Chat = (  ) => {

  const {chatId} = useParams()
//console.log(chatId);

const chat_id = chatId


const [chats, setChats] = useState([])
const previousChats = useRef([])

useEffect(() => {
  const fetchData = async () => {
    try {
      const client = new UnipileClient(ALL_URL.UNIPILE_URL, ALL_KEYS.UNIPILE_API_KEY)  
      const response = await client.messaging.getAllMessagesFromChat({
        chat_id,
      })
      const newChats = response.items.reverse();
      if (JSON.stringify(newChats) !== JSON.stringify(previousChats.current)) {
        setChats(newChats);
        previousChats.current = newChats; 
      }
    } catch (error) {
      //console.log(error)
    }
  };
  fetchData();
  const interval = setInterval(fetchData, 200000);
  return () => clearInterval(interval);
}, [chatId])

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

  // console.log(detailIsShow);

 
  return (
    <div className='flex w-[76%] h-[calc(100%-32px)] my-4 ml-4 bg-white rounded-xl border border-gray-300'>
        <div className='h-full w-full'>
          <ChatHeader user={user} setDetailIsShow={setDetailIsShow} detailIsShow={detailIsShow} />
          <Messages messages={chats} />      
          <Reply setMessages={setMessages}/>
          { detailIsShow && <ChatUserDetail setDetailIsShow={setDetailIsShow} detailIsShow={detailIsShow} />}
        </div>
        
    </div>
  )
}

export default Chat