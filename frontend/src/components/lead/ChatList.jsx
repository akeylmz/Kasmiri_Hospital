import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import classNames from 'classnames';
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from 'react-icons/io';

const ChatList = () => {
    const {chatId} = useParams()
    console.log(chatId);
    const chats = [
        {
          id: 1,
          user: {
            avatar:  <div
            style={{
              background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
              borderRadius: '50%',
              padding: '5px',
              display: 'inline-block',
            }}
          >
            <FaInstagram size={25} color="white" />
          </div>,
            name: "Ahmet Yusuf Kuru"
          },
          unread: true,
          lastMessage: "a.yusuf.kuru",
          social: '/img/insta.png',
          count: 5
        },
        {
          id: 2,
          user: {
            avatar: <IoLogoWhatsapp size={35} color='blue' />,
            name: "Mehmet Enes"
          },
          unread: true,
          lastMessage: "0546 125 44 33",
          social: '/img/face.png',
          count: 2
        },
        {
          id: 3,
          user: {
            avatar: <IoLogoWhatsapp size={35} color='blue' />,
            name: "0567 534 64 23"
          },
          lastMessage: "0567 534 64 23",
           social: '/img/insta.png',
           count: 0
        }
      ]
  return (
    <section className='h-[calc(100%-60px)] overflow-auto py-3'>
          <header className='flex items-center justify-between px-5 mb-1'>
            <h6 className='text-base font-semibold'>Messages</h6>
            <button className='text-blue-600 text-sm font-semibold'>7 request</button>
          </header>
          {chats.map(chat => (
            <NavLink 
              className={classNames({
                "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5" : true,
                "font-semibold" : chat?.unread,
                "!bg-[#efefef]" : +chatId === chat.id
              })}
              key={chat.id} 
              to={`/lead/${chat.id}`}
            >
              {/* <img src={chat.user.avatar} className='w-14 h-14 rounded-full object-cover' /> */}
              {chat.user.avatar}
              <div>
                <h6 className='text-sm'>{chat.user.name}</h6>
                <p className={`text-sm ${!chat?.unread && "text-[#8e8e8e]"}`}>
                  {chat.lastMessage}
                </p>
              </div>
              {chat.count > 0 && <div className='ml-auto px-3 py-1 bg-blue-500 rounded-full'>
                <p className='text-white'>{chat.count}</p>
              </div>}
              {/* <img src={chat.user.social} className='w-14 h-14 rounded-full object-cover' /> */}
            </NavLink>
          ))}
      </section>
  )
}

export default ChatList