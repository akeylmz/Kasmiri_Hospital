import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { MdOutlinePhotoCamera } from "react-icons/md";

import { UnipileClient } from "unipile-node-sdk"

const ChatRetrive = (chat) => {


  


    chat = chat.chat
    //console.log(chat);
    
    const chat_id = chat.id
    
    const BASE_URL = `https://api9.unipile.com:13920`
    const ACCESS_TOKEN = "4KfpVYrT.GaXc9QHSbaeYeyMN0fe9IWpe88eGWOt8DMPkUwDtgbI="

    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(true);
    const previousResponse = useRef(null);

    useEffect(() => {
      const fetchData = async () => {    
        try {
          const client = new UnipileClient(BASE_URL, ACCESS_TOKEN)  
          const newResponse = await client.messaging.getChat(chat_id);

          if (JSON.stringify(newResponse) !== JSON.stringify(previousResponse.current)) {
            setResponse(newResponse);            
            previousResponse.current = newResponse; // Yeni veriyi sakla
          }
          
          setLoading(false)
        } catch (error) {
          setLoading(false)
        }  
        
        
      };
      fetchData();
      const interval = setInterval(fetchData, 2000);
      return () => clearInterval(interval)
      
    }, [])


    const renderMessage = (message) => {
        if (message?.text) {          
          return message.text.slice(0, 15) + (message.text.length > 15 ? "..." : "");
        } else if (message?.attachments[0].type === "img") {         
          return <span className='flex items-center gap-x-1 '><MdOutlinePhotoCamera />Media</span>;
        } else if (message?.attachments[0].type === "video") {
          return <video src=""></video>;
        } else if (message?.type === "audio" || message?.type === "video") {
          return <span>{message?.type.charAt(0).toUpperCase() + message?.type.slice(1)} message</span>;
        }
        return <span>Media message</span>;
      };
    

  return (
    <NavLink 
        className={classNames({
          "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5" : true,
          "font-semibold" : chat.unread_count !== 0,
        //   "!bg-[#885151]" : +chatId === chat.id
        })}
        key={chat.id} 
        to={`/lead/${chat.id}`}
    >
        <IoLogoWhatsapp size={35} color='blue' />
        <div>
          <h6 className='text-sm'>
            { 
                (chat.name || chat.attendee_provider_id.replace("@s.whatsapp.net", "")).slice(0, 16) + 
                ((chat.name || chat.attendee_provider_id.replace("@s.whatsapp.net", "")).length > 16 ? "..." : "")
            }
          </h6>
          <p className={`text-sm ${chat.unread_count === 0 && "text-[#8e8e8e]"}`}>
          {loading ? "Loading..." : renderMessage(response?.lastMessage)}
          </p>
        </div>
        {chat.unread_count > 0 && <div className='ml-auto px-3 py-1 bg-blue-500 rounded-full'>
          <p className='text-white'>{chat.unread_count}</p>
        </div>}
    </NavLink>
  )
}

export default ChatRetrive