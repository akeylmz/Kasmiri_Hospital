import React, { useEffect, useRef, useState } from 'react'
import { UnipileClient } from "unipile-node-sdk"
import ChatRetrive from './ChatRetrive'
import { ALL_KEYS, ALL_URL } from '../../constants'

const ChatList = () => {

// SDK setup

// Inputs
const [chats1, setChats] = useState([])
const previousResponse = useRef(null)

// useEffect(() => {
 
//   const interval = setInterval(fetchData, 2000)
//   return () => clearInterval(interval)
// }, [])

const fetchData = async () => {
  try {
    const client = new UnipileClient(ALL_URL.UNIPILE_URL, ALL_KEYS.UNIPILE_API_KEY)  
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

useEffect(() => {
  fetchData();
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