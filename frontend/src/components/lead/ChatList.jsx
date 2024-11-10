import React, { useEffect, useRef, useState } from 'react'
import { UnipileClient } from "unipile-node-sdk"
import ChatRetrive from './ChatRetrive'

const ChatList = () => {

// SDK setup
const chat_id = "zZEl51soV4OqmEEJcBoAHw"
const BASE_URL = `https://api9.unipile.com:13920`
const ACCESS_TOKEN = "4KfpVYrT.GaXc9QHSbaeYeyMN0fe9IWpe88eGWOt8DMPkUwDtgbI="
// Inputs
const [chats1, setChats] = useState([])
const previousResponse = useRef(null)

useEffect(() => {
  const fetchData = async () => {
    try {
      const client = new UnipileClient(BASE_URL, ACCESS_TOKEN)  
      const allChats = await client.messaging.getAllChats()

      if (JSON.stringify(allChats) !== JSON.stringify(previousResponse.current)) {
        setChats(allChats);            
        previousResponse.current = allChats
      }
      setChats(allChats.items)
    } catch (error) {
      console.log(error)
    }
  };

  fetchData();
  const interval = setInterval(fetchData, 2000)
  return () => clearInterval(interval)
}, [])


    
  return (
    <section className='h-[calc(100%-100px)] overflow-auto py-3'>
          <header className='flex items-center justify-between px-5 mb-1'>
            <h6 className='text-base font-semibold'>Messages</h6>
            <button className='text-blue-600 text-sm font-semibold'>7 request</button>
          </header>
          
         {chats1
         .filter(chat => chat.provider_id !== "status@broadcast")
         .map((chat)=>(
            <ChatRetrive key={chat.id} chat={chat} />
         ))}
      </section>
  )
}

export default ChatList