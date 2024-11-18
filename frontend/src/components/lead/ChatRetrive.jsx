import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { MdOutlinePhotoCamera } from "react-icons/md";
import  { ALL_URL, ALL_KEYS} from "../../constants"
import { UnipileClient } from "unipile-node-sdk"
import { parseMessage } from './parseMessage';

const ChatRetrive = (chat) => {

    chat = chat.chat
    //console.log(chat);
    
    const chat_id = chat.id
    

    const [response, setResponse] = useState([])
    const [loading, setLoading] = useState(true)
    const previousResponse = useRef(null)    
    
    const fetchData = async () => {    
      try {
        const client = new UnipileClient(ALL_URL.UNIPILE_URL, ALL_KEYS.UNIPILE_API_KEY)  
        const newResponse = await client.messaging.getChat(chat_id);

        if (JSON.stringify(newResponse) !== JSON.stringify(previousResponse.current)) {
         setResponse(newResponse);    
        //  console.log(newResponse);         
          previousResponse.current = newResponse;
        }        
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }  
    }
    useEffect(() => {
      fetchData();
    },[])
    
const x = parseMessage(response?.lastMessage, false)
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
        <IoLogoWhatsapp size={35} color='#25d366' />
        <div>
          <h6 className='text-sm'>
            { 
                (chat.name || chat.attendee_provider_id.replace("@s.whatsapp.net", "")).slice(0, 16) + 
                ((chat.name || chat.attendee_provider_id.replace("@s.whatsapp.net", "")).length > 16 ? "..." : "")
            }
          </h6>
          <p className={`text-sm ${chat.unread_count === 0 && "text-[#8e8e8e]"}`}>
            {loading ? (
              <span className="loading-placeholder"></span>
            ) : (
              x
            )}
          </p>
        </div>
        {chat.unread_count > 0 && <div className='ml-auto px-3 py-1 bg-blue-500 rounded-full'>
          <p className='text-white'>{chat.unread_count}</p>
        </div>}
    </NavLink>
  )
}

export default ChatRetrive